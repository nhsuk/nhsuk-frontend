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
  const paths = getListing('**/*.njk', {
    cwd: join(config.paths.app, 'src'),
    ignore: ['**/layouts/**', '**/partials/**']
  })

  // Configure Nunjucks
  const env = nunjucks.configure([
    join(config.paths.app, 'src'),
    join(config.paths.pkg, 'src')
  ])

  // Default Nunjucks context
  const context = {
    assetPath: `/nhsuk-frontend/assets`,
    baseUrl: '/nhsuk-frontend/',
    branchName: HEROKU_BRANCH,
    serviceName: 'NHS.UK frontend',
    version: config.version,
    components: await components.loadAll()
  }

  // Render components
  for (const data of context.components) {
    const { name, component, examples = {} } = data

    const componentPath = `components/${component}`

    // Render component listing
    const templateHtml = nunjucks.renderTemplate('layouts/listing.njk', {
      context: { ...context, ...data, pageName: name },
      env
    })

    // Write component listing to disk
    await files.write(join(componentPath, 'index.html'), {
      destPath,
      output: { contents: templateHtml }
    })

    // Render component examples
    for (const [exampleName, example] of Object.entries(examples)) {
      const { options } = example

      // Render component example
      const html = components.render(component, {
        ...example,
        env
      })

      // Render component example into layout
      const templateHtml = nunjucks.renderTemplate('layouts/preview.njk', {
        blocks: { example: html },
        context: { ...context, pageName: `${name}: ${exampleName}`, options },
        env
      })

      // Write component example to disk
      await files.write(
        join(componentPath, slugify(exampleName), 'index.html'),
        { destPath, output: { contents: templateHtml } }
      )
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
    const templateHtml = nunjucks.renderTemplate(path, { context, env })

    // Write page to disk
    await files.write(outputPath, {
      destPath,
      output: { contents: templateHtml }
    })
  }
})

/**
 * Validate review app HTML output
 */
export const validate = task.name('html:validate', async () => {
  const paths = getListing('dist/**/*.html', {
    cwd: config.paths.app,
    ignore: ['**/docs/sassdoc/**']
  })

  // HTML validation
  const report = await validator.validateMultipleFiles(paths)

  // Throw on HTML validation errors
  if (!report.valid) {
    throw new PluginError('validateHTML', formatter(report.results))
  }
})
