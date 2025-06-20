import { mkdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'

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
    cwd: join(config.paths.app, 'src'),
    ignore: ['**/layouts/**']
  })

  // Configure Nunjucks
  const env = nunjucks.configure([
    join(config.paths.app, 'src'),
    join(config.paths.pkg, 'src')
  ])

  for (const path of paths) {
    const { name, dir } = parse(path)

    const html = nunjucks.renderTemplate(path, {
      context: {
        assetPath: `/nhsuk-frontend/assets`,
        baseUrl: '/nhsuk-frontend/',
        branchName: HEROKU_BRANCH,
        version: config.version
      },
      env
    })

    const destPath = join(config.paths.app, `dist/${dir}`)
    const filePath = join(destPath, `${name}.html`)

    // Write to disk
    await mkdir(destPath, { recursive: true })
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
