import { mkdir, writeFile } from 'fs/promises'
import { dirname, join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { components, nunjucks } from '@nhsuk/frontend-lib'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { task } from '@nhsuk/frontend-tasks'
import { HtmlValidate, formatterFactory } from 'html-validate'
import PluginError from 'plugin-error'

import validatorConfig from '../.htmlvalidate.js'

const { HEROKU_BRANCH = 'main' } = process.env

// Configure HTML validator
const validator = new HtmlValidate(validatorConfig)
const formatter = formatterFactory('codeframe')

/**
 * Render review app Nunjucks into HTML
 */
export const compile = task.name('html:render', async () => {
  const paths = await getListing('**/*.njk', {
    cwd: join(config.paths.app, 'src')
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
    version: config.version
  }

  // Components and examples
  const list = await components.getDataList()

  env.addGlobal('components', list)

  // Render component examples
  for (const data of list) {
    const { name, component, examples } = data

    for (const example of examples) {
      const title = `${name} ${example.name}`
      const layout = example.layout ?? 'layouts/example.njk'

      const html = nunjucks.renderTemplate(layout, {
        blocks: {
          example: components.render(component, {
            context: example.options,
            callBlock: example.callBlock
          })
        },
        context: { ...context, title },
        env
      })

      const { slugify } = nunjucks.filters

      const filePath = join(
        config.paths.app,
        `dist/components/${component}`,
        example.name !== 'default'
          ? `${slugify(example.name)}.html`
          : `index.html`
      )

      // Write example to disk
      await mkdir(dirname(filePath), { recursive: true })
      await writeFile(filePath, html)
    }
  }

  // Render pages on disk
  for (const path of paths) {
    const html = nunjucks.renderTemplate(path, { context, env })

    const filePath = join(
      config.paths.app,
      `dist/${path.replace('.njk', '.html')}`
    )

    // Write page to disk
    await mkdir(dirname(filePath), { recursive: true })
    await writeFile(filePath, html)
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
