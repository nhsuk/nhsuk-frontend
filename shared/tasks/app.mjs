import { mkdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'

import browserSync from 'browser-sync'
import { glob } from 'glob'
import gulp from 'gulp'
import { HtmlValidate, formatterFactory } from 'html-validate'
import nunjucks from 'nunjucks'
import PluginError from 'plugin-error'

import validatorConfig from '../../.htmlvalidate.js'
import * as config from '../config/index.mjs'

const { PORT = '3000' } = process.env

/**
 * Compile Nunjucks into HTML
 */
export async function buildHTML() {
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
      version: config.version
    })

    const destPath = join(config.paths.app, `dist/${dir}`)
    const filePath = join(destPath, `${name}.html`)

    // Write to disk
    await mkdir(destPath, { recursive: true })
    await writeFile(filePath, html)
  }
}

/**
 * Validate Nunjucks HTML output
 */
export async function validateHTML() {
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
}

/**
 * Copy CSS from dist into the documentation directory
 */
export async function copyCSS() {
  await mkdir('dist/app/stylesheets', {
    recursive: true
  })

  return gulp
    .src(join(config.paths.root, 'dist/*.min.{css,css.map}'))
    .pipe(gulp.dest(join(config.paths.app, 'dist/stylesheets')))
    .pipe(browserSync.stream())
}

/**
 * Copy JS from dist into the documentation directory
 */
export async function copyJS() {
  await mkdir('dist/app/javascripts', {
    recursive: true
  })

  return gulp
    .src(join(config.paths.root, 'dist/*.min.{js,js.map}'))
    .pipe(gulp.dest(join(config.paths.app, 'dist/javascripts')))
    .pipe(browserSync.stream())
}

/**
 * Copy logos, icons and other binary assets
 */
export async function copyBinaryAssets() {
  await mkdir('dist/app/assets', {
    recursive: true
  })

  return gulp
    .src(join(config.paths.pkg, 'src/assets/**'), { encoding: false })
    .pipe(gulp.dest(join(config.paths.app, 'dist/assets')))
    .pipe(browserSync.stream())
}

/**
 * Serve the static docs directory over localhost
 *
 * @param {TaskCallback} done
 */
export function serve(done) {
  browserSync(
    {
      ghostMode: false,
      host: '0.0.0.0',

      // Redirect to start path
      middleware: [
        {
          route: '/',
          handle(req, res) {
            res.writeHead(302, { location: '/nhsuk-frontend/' })
            res.end()
          }
        }
      ],

      online: false,
      open: false,
      notify: false,
      port: Number(PORT),

      // Development server
      server: {
        baseDir: join(config.paths.app, 'dist'),
        directory: true
      },

      // Match local paths to deployed preview
      // https://nhsuk.github.io/nhsuk-frontend
      serveStatic: [
        {
          route: '/nhsuk-frontend',
          dir: join(config.paths.app, 'dist')
        }
      ],

      // Show start path in console
      startPath: '/nhsuk-frontend/'
    },
    done
  )
}

/**
 * @import { Result } from 'html-validate'
 * @import { TaskCallback } from 'undertaker'
 */
