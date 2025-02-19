const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const clean = require('gulp-clean')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const terser = require('gulp-terser')
const zip = require('gulp-zip')
const dartSass = require('sass-embedded')
const webpack = require('webpack-stream')

const { version } = require('./package.json')

/**
 * Import gulp tasks used for creating
 * our website pages.
 */
require('./tasks/docs')

/* Remove all compiled files */
function cleanDist() {
  return gulp.src('dist', { allowEmpty: true }).pipe(clean())
}

/**
 * CSS tasks
 */

const sass = gulpSass(dartSass)

/* Build the CSS from source */
function compileCSS(done) {
  return gulp
    .src(['packages/nhsuk.scss'])
    .pipe(sass().on('error', done))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist/'))
}

/* Minify CSS and add a min.css suffix */
function minifyCSS() {
  return gulp
    .src([
      'dist/*.css',
      '!dist/*.min.css' // don't re-minify minified css
    ])
    .pipe(postcss([cssnano()]))
    .pipe(
      rename({
        suffix: `-${version}.min`
      })
    )
    .pipe(gulp.dest('dist/'))
}

/**
 * JavaScript tasks
 */

/* Use Webpack to build and minify the NHS.UK components JS. */
function webpackJS() {
  return gulp
    .src('./packages/nhsuk.js')
    .pipe(
      webpack({
        mode: 'production',
        module: {
          rules: [
            {
              use: {
                loader: 'babel-loader',
                options: {
                  rootMode: 'upward'
                }
              }
            }
          ]
        },
        optimization: {
          minimize: false // minification is handled by terser
        },
        output: {
          filename: 'nhsuk.js'
        },
        target: 'browserslist'
      })
    )
    .pipe(gulp.dest('./dist'))
}

/* Minify the JS file for release */
function minifyJS() {
  return gulp
    .src([
      'dist/*.js',
      '!dist/*.min.js' // don't re-minify minified javascript
    ])
    .pipe(
      terser({
        format: { comments: false },

        // Compatibility workarounds
        ecma: 5,
        safari10: true
      })
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('dist/'))
}

/* Version the JS file for release */
function versionJS() {
  return gulp
    .src('dist/nhsuk.min.js')
    .pipe(
      rename({
        basename: `nhsuk-${version}`,
        extname: '.min.js'
      })
    )
    .pipe(gulp.dest('dist/'))
}

/**
 * Assets tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
function assets() {
  return gulp
    .src('packages/assets/**', { encoding: false })
    .pipe(gulp.dest('dist/assets/'))
}

/**
 * Release tasks
 */

/* Copy JS files into their relevant folders */
function jsFolder() {
  return gulp
    .src('dist/*.min.js', '!dist/js/nhsuk.min.js')
    .pipe(clean())
    .pipe(gulp.dest('dist/js/'))
}

/* Copy CSS files into their relevant folders */

function cssFolder() {
  return gulp.src('dist/*.min.css').pipe(clean()).pipe(gulp.dest('dist/css/'))
}

function createZip() {
  return gulp
    .src(
      [
        'dist/css/*.min.css',
        'dist/js/*.min.js',
        'dist/assets/**',
        '!dist/js/nhsuk.min.js'
      ],
      {
        base: 'dist',
        encoding: false
      }
    )
    .pipe(zip(`nhsuk-frontend-${version}.zip`))
    .pipe(gulp.dest('dist'))
}

/**
 * Development tasks
 */

/* Recompile CSS, JS and docs when there are any changes */
function watch() {
  gulp.watch(
    ['packages/**/*', 'app/**/*'],
    gulp.series(['build', 'docs:build'])
  )
}

gulp.task('clean', cleanDist)

gulp.task('style', compileCSS)

gulp.task('build', gulp.series([compileCSS, webpackJS]))

gulp.task(
  'bundle',
  gulp.series([cleanDist, 'build', minifyCSS, minifyJS, versionJS])
)

gulp.task(
  'zip',
  gulp.series(['bundle', assets, jsFolder, cssFolder, createZip])
)

gulp.task('watch', watch)

/**
 * The default task is to build everything, serve the docs and watch for changes
 */
gulp.task(
  'default',
  gulp.series([cleanDist, 'build', gulp.parallel(['docs:serve', watch])])
)
