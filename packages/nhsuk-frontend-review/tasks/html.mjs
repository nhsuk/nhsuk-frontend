import { join, parse } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { components, nunjucks } from '@nhsuk/frontend-lib'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { files, task } from '@nhsuk/frontend-tasks'
import { HtmlValidate, formatterFactory } from 'html-validate'
import PluginError from 'plugin-error'

import validatorConfig from '../.htmlvalidate.js'

const { HEROKU_BRANCH = 'main' } = process.env
const { slugify } = nunjucks.filters

// Configure HTML validator
const validator = new HtmlValidate(validatorConfig)
const formatter = formatterFactory('codeframe')

/**
 * Render review app Nunjucks into HTML
 */
export const compile = task.name('html:render', async () => {
  const destPath = join(config.paths.app, 'dist')

  // Find all Nunjucks views (excluding layouts)
  const paths = await getListing('**/*.njk', {
    cwd: join(config.paths.app, 'src'),
    ignore: ['**/layouts/**']
  })

  // Components and examples
  const list = await components.loadAll()

  // Configure Nunjucks
  const env = nunjucks.configure([
    join(config.paths.app, 'src'),
    join(config.paths.pkg, 'src')
  ])

  env.addGlobal('components', list)

  // Default Nunjucks context
  const context = {
    assetPath: `/nhsuk-frontend/assets`,
    baseUrl: '/nhsuk-frontend/',
    branchName: HEROKU_BRANCH,
    version: config.version
  }

  // Render component examples
  for (const data of list) {
    const { name, component, examples = {} } = data

    for (const [exampleName, example] of Object.entries(examples)) {
      const outputPath = join(
        `components/${component}/${slugify(exampleName)}`,
        'index.html'
      )

      // Render example
      const html = nunjucks.renderTemplate(
        example.layout ?? 'layouts/example.njk',
        {
          blocks: { example: components.render(component, example) },
          context: { ...context, title: `${name} ${exampleName}` },
          env
        }
      )

      // Write example to disk
      await files.write(outputPath, {
        destPath,
        output: { contents: html }
      })
    }
  }

  // Render pages on disk
  for (const path of paths) {
    const { name, dir } = parse(path)

    const outputPath = join(
      name === 'index' ? dir : `${dir}/${name}`,
      'index.html'
    )

    // Render page
    const html = nunjucks.renderTemplate(path, { context, env })

    // Write page to disk
    await files.write(outputPath, {
      destPath,
      output: { contents: html }
    })
  }
})

/**
 * Validate review app HTML output
 */
export const validate = task.name('html:validate', async () => {
  const paths = await getListing('dist/**/*.html', {
    cwd: config.paths.app
  })

  // HTML validation
  const report = await validator.validateMultipleFiles(paths)

  // Throw on HTML validation errors
  if (!report.valid) {
    throw new PluginError('validateHTML', formatter(report.results))
  }
})
