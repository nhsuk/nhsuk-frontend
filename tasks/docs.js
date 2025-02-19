const { mkdir, writeFile } = require('fs/promises')
const { join, parse } = require('path')

const { glob } = require('glob')
const gulp = require('gulp')
const connect = require('gulp-connect')
const { HtmlValidate, formatterFactory } = require('html-validate')
const nunjucks = require('nunjucks')
const PluginError = require('plugin-error')

const validatorConfig = require('../.htmlvalidate')

// Base URL is overridden for `npm run build-gh-pages`
const { BASE_URL = '/' } = process.env

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
      baseUrl: BASE_URL
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
  return gulp.src('dist/*.css').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Copy JS from dist into the documentation directory
 */
function copyJS() {
  return gulp.src('dist/*.js').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp.src('packages/assets/**/*').pipe(gulp.dest('dist/app/assets'))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: 'dist/app'
  })
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src('dist/app').pipe(connect.reload())
}

gulp.task(
  'docs:build',
  gulp.series([
    copyCSS,
    copyJS,
    copyBinaryAssets,
    buildHTML,
    validateHTML,
    reload
  ])
)

gulp.task('docs:watch', () =>
  Promise.all([
    gulp.watch(['app/**/*.njk'], buildHTML),
    gulp.watch(['dist/*.css'], copyCSS),
    gulp.watch(['dist/*.js'], copyJS),
    gulp.watch(['packages/assets/**/*'], copyBinaryAssets)
  ])
)

gulp.task('docs:serve', gulp.series([serve]))

/**
 * @import { Result } from 'html-validate'
 */
