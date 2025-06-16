import { mkdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'

import * as config from '@nhsuk/frontend-config'
import { nunjucksEnv, renderTemplate } from '@nhsuk/frontend-lib/components.mjs'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { files, task } from '@nhsuk/frontend-tasks'
import browserSync from 'browser-sync'
import { HtmlValidate, formatterFactory } from 'html-validate'
import PluginError from 'plugin-error'

import validatorConfig from '../.htmlvalidate.js'
import browserSyncConfig from '../browsersync.config.js'

const { HEROKU_BRANCH = 'main' } = process.env

/**
 * Compile review app Nunjucks into HTML
 */
export const html = task.name('app:html', async () => {
  const paths = await getListing('**/*.njk', {
    cwd: join(config.paths.app, 'src')
  })

  // Configure Nunjucks
  const env = nunjucksEnv([
    join(config.paths.app, 'src'),
    join(config.paths.app, 'src/_templates'),
    join(config.paths.pkg, 'src')
  ])

  for (const path of paths) {
    const { name, dir } = parse(path)

    const html = renderTemplate(path, {
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
export const validate = task.name('app:validate', async () => {
  const paths = await getListing('dist/**/*.html', {
    cwd: config.paths.app
  })

  // Configure validator
  const validator = new HtmlValidate(validatorConfig)
  const validatorErrors = /** @type {Result[]} */ ([])

  // HTML validation
  for (const path of paths) {
    const report = await validator.validateFile(path)
    if (!report.valid) validatorErrors.push(...report.results)
  }

  // Throw on HTML validation errors
  if (validatorErrors.length) {
    const formatter = formatterFactory('codeframe')
    throw new PluginError('validateHTML', formatter(validatorErrors))
  }
})

/**
 * Copy NHS.UK frontend styles into review app
 */
export const styles = task.name('app:styles', () =>
  files.copy('nhsuk/nhsuk-frontend.min.css', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/stylesheets')
  })
)

/**
 * Copy NHS.UK frontend scripts into review app
 */
export const scripts = task.name('app:scripts', () =>
  files.copy('nhsuk/nhsuk-frontend.min.js', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/javascripts')
  })
)

/**
 * Copy NHS.UK frontend logos, icons and other assets into review app
 */
export const assets = task.name('app:assets', async () => {
  /**
   * Copy NHS.UK frontend assets
   */
  await files.copy('nhsuk/assets/**', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/assets')
  })

  /**
   * Copy review app assets
   */
  await files.copy('assets/**', {
    srcPath: join(config.paths.app, 'src'),
    destPath: join(config.paths.app, 'dist/assets')
  })
})

/**
 * Serve review app directory over localhost
 */
export const serve = task.name('app:serve', (done) => {
  browserSync(browserSyncConfig, done)
})

/**
 * @import { Result } from 'html-validate'
 */
