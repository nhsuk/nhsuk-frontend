import { mkdir, writeFile } from 'fs/promises'
import { join, parse } from 'path'

import browserSync from 'browser-sync'
import { glob } from 'glob'
import gulp from 'gulp'
import { HtmlValidate, formatterFactory } from 'html-validate'
import nunjucks from 'nunjucks'
import PluginError from 'plugin-error'

import validatorConfig from '../../.htmlvalidate.js'
import pkg from '../../package.json' with { type: 'json' }

const { PORT = '3000' } = process.env

/**
 * Compile Nunjucks into HTML
 */
export async function buildHTML() {
  const paths = await glob('**/*.njk', {
    cwd: 'app',
    nodir: true
  })

  // Configure Nunjucks
  const env = nunjucks.configure(['app', 'app/_templates', 'packages'], {
    trimBlocks: true,
    lstripBlocks: true
  })

  for (const path of paths) {
    const { name, dir } = parse(path)

    const html = env.render(path, {
      assetPath: `/nhsuk-frontend/assets`,
      baseUrl: '/nhsuk-frontend/',
      version: pkg.version
    })

    const destPath = join('dist/app', dir)
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
  const paths = await glob('dist/app/**/*.html', {
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
    .src('dist/*.min.{css,css.map}')
    .pipe(gulp.dest('dist/app/stylesheets'))
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
    .src('dist/*.min.{js,js.map}')
    .pipe(gulp.dest('dist/app/javascripts'))
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
    .src('packages/assets/**', { encoding: false })
    .pipe(gulp.dest('dist/app/assets'))
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
        baseDir: 'dist/app',
        directory: true
      },

      // Match local paths to deployed preview
      // https://nhsuk.github.io/nhsuk-frontend
      serveStatic: [
        {
          route: '/nhsuk-frontend',
          dir: 'dist/app'
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
