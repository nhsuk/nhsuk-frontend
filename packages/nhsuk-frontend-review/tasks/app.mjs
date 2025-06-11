import { mkdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import browserSync from 'browser-sync'
import { glob } from 'glob'
import gulp from 'gulp'
import { HtmlValidate, formatterFactory } from 'html-validate'
import nunjucks from 'nunjucks'
import PluginError from 'plugin-error'

import validatorConfig from '../.htmlvalidate.js'
import browserSyncConfig from '../browsersync.config.js'

const { HEROKU_BRANCH = 'main' } = process.env

/**
 * Compile review app Nunjucks into HTML
 */
export const html = task.name('app:html', async () => {
  const paths = await glob('**/*.njk', {
    cwd: join(config.paths.app, 'src'),
    nodir: true
  })

  // Configure Nunjucks
  const env = nunjucks.configure(
    [
      join(config.paths.app, 'src'),
      join(config.paths.app, 'src/_templates'),
      join(config.paths.pkg, 'src')
    ],
    {
      trimBlocks: true,
      lstripBlocks: true
    }
  )

  for (const path of paths) {
    const { name, dir } = parse(path)

    const html = env.render(path, {
      assetPath: `/nhsuk-frontend/assets`,
      baseUrl: '/nhsuk-frontend/',
      branchName: HEROKU_BRANCH,
      version: config.version
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
  const paths = await glob(join(config.paths.app, 'dist/**/*.html'), {
    nodir: true
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
 * Copy GitHub release styles into review app
 */
export const styles = task.name('app:styles', () => {
  return gulp
    .src(join(config.paths.root, 'dist/*.min.{css,css.map}'))
    .pipe(gulp.dest(join(config.paths.app, 'dist/stylesheets')))
    .pipe(browserSync.stream())
})

/**
 * Copy GitHub release scripts into review app
 */
export const scripts = task.name('app:scripts', () => {
  return gulp
    .src(join(config.paths.root, 'dist/*.min.{js,js.map}'))
    .pipe(gulp.dest(join(config.paths.app, 'dist/javascripts')))
    .pipe(browserSync.stream())
})

/**
 * Copy NHS.UK frontend logos, icons and other assets into review app
 */
export const assets = task.name('app:assets', () => {
  return gulp
    .src(join(config.paths.pkg, 'src/nhsuk/assets/**'), { encoding: false })
    .pipe(gulp.dest(join(config.paths.app, 'dist/assets')))
    .pipe(browserSync.stream())
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
