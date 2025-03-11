const { mkdir, writeFile } = require('fs/promises')
const { join, parse } = require('path')

const browserSync = require('browser-sync')
const { glob } = require('glob')
const gulp = require('gulp')
const { HtmlValidate, formatterFactory } = require('html-validate')
const nunjucks = require('nunjucks')
const PluginError = require('plugin-error')

const validatorConfig = require('../.htmlvalidate')
const { version } = require('../package.json')

/**
 * Compile Nunjucks into HTML
 */
async function buildHTML() {
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
      baseUrl: '/nhsuk-frontend/',
      version
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
async function validateHTML() {
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
function copyCSS() {
  return gulp
    .src('dist/*.min.{css,css.map}')
    .pipe(gulp.dest('dist/app/stylesheets'))
    .pipe(browserSync.stream())
}

/**
 * Copy JS from dist into the documentation directory
 */
function copyJS() {
  return gulp
    .src('dist/*.min.{js,js.map}')
    .pipe(gulp.dest('dist/app/javascripts'))
    .pipe(browserSync.stream())
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp
    .src('packages/assets/**/*')
    .pipe(gulp.dest('dist/app/assets'))
    .pipe(browserSync.stream())
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  return browserSync({
    ghostMode: false,
    host: '0.0.0.0',
    online: false,
    open: false,
    notify: false,
    port: 3000,

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
  })
}

gulp.task(
  'docs:build',
  gulp.series([copyCSS, copyJS, copyBinaryAssets, buildHTML, validateHTML])
)

gulp.task('docs:watch', () =>
  Promise.all([
    gulp.watch(['**/*.njk'], buildHTML),
    gulp.watch(['dist/**/*.html']).on('change', browserSync.reload),
    gulp.watch(['dist/*.min.{css,css.map}'], copyCSS),
    gulp.watch(['dist/*.min.{js,js.map}'], copyJS),
    gulp.watch(['packages/assets/**/*'], copyBinaryAssets)
  ])
)

gulp.task('docs:serve', gulp.series([serve]))

/**
 * @import { Result } from 'html-validate'
 */
