const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const terser = require('gulp-terser')
const dartSass = require('sass-embedded')
const webpack = require('webpack-stream')

const { version } = require('./package.json')

/**
 * Import gulp tasks used for creating
 * our website pages.
 */
require('./tasks/docs')

/**
 * Remove all compiled files
 * @param {string[]} pattern - glob patterns or paths to clean
 * @param {string[]} [ignore] - glob patterns or paths to ignore
 */
async function clean(pattern, ignore) {
  const { deleteAsync } = await import('del')
  await deleteAsync(pattern, { ignore })
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
    .src('dist/*.min.js', { ignore: 'dist/nhsuk.min.js' })
    .pipe(gulp.dest('dist/js/'))
}

/* Copy CSS files into their relevant folders */

function cssFolder() {
  return gulp.src('dist/*.min.css').pipe(gulp.dest('dist/css/'))
}

async function createZip() {
  const { default: zip } = await import('gulp-zip')

  return gulp
    .src(['dist/css/*.min.css', 'dist/js/*.min.js', 'dist/assets/**'], {
      base: 'dist',
      encoding: false
    })
    .pipe(zip(`nhsuk-frontend-${version}.zip`))
    .pipe(gulp.dest('dist'))
}

/**
 * Development tasks
 */

gulp.task('clean', async () => {
  return clean(['dist/**/*'])
})

gulp.task('clean:zip', async () => {
  return clean(['dist/{assets,css,js}', 'dist/*.zip'])
})

gulp.task('style', compileCSS)

gulp.task(
  'build',
  gulp.series(['clean', gulp.parallel([compileCSS, webpackJS])])
)

gulp.task(
  'bundle',
  gulp.series(['build', gulp.parallel([minifyCSS, minifyJS]), versionJS])
)

gulp.task(
  'zip',
  gulp.series([
    'clean:zip',
    gulp.parallel([assets, jsFolder, cssFolder]),
    createZip
  ])
)

gulp.task('watch', () =>
  Promise.all([
    gulp.watch(['packages/**/*.scss'], compileCSS),
    gulp.watch(['packages/**/*.js'], webpackJS)
  ])
)

/**
 * The default task is to serve the docs and watch for changes
 */
gulp.task('default', gulp.parallel(['docs:serve', 'docs:watch', 'watch']))
