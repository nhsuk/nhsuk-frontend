const { join, relative } = require('path')
const { cwd } = require('process')
const { Transform } = require('stream')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const terser = require('gulp-terser')
const PluginError = require('plugin-error')
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
    .src(['packages/nhsuk.scss'], {
      sourcemaps: true
    })
    .pipe(
      sass({
        sourceMap: true,
        sourceMapIncludeSources: true
      }).on('error', (error) => {
        done(
          new PluginError('compileCSS', error.messageFormatted, {
            showProperties: false
          })
        )
      })
    )
    .pipe(
      new Transform({
        objectMode: true,

        // Make source file:// paths relative
        transform(file, enc, cb) {
          if (file.sourceMap?.sources) {
            file.sourceMap.sources = file.sourceMap.sources.map((path) =>
              relative(join(cwd(), 'dist'), join(file.base, path))
            )
          }

          cb(null, file)
        }
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(
      gulp.dest('dist/', {
        sourcemaps: '.'
      })
    )
}

/* Minify CSS and add a min.css suffix */
function minifyCSS() {
  return gulp
    .src(
      [
        'dist/*.css',
        '!dist/*.min.css' // don't re-minify minified css
      ],
      { sourcemaps: true }
    )
    .pipe(postcss([cssnano()]))
    .pipe(
      rename({
        suffix: `-${version}.min`
      })
    )
    .pipe(
      gulp.dest('dist/', {
        sourcemaps: '.'
      })
    )
}

/**
 * JavaScript tasks
 */

/* Use Webpack to build and minify the NHS.UK components JS. */
function webpackJS(done) {
  return gulp
    .src('./packages/nhsuk.js', {
      sourcemaps: true
    })
    .pipe(
      webpack({
        devtool: 'source-map',
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
          filename: 'nhsuk.js',

          // Make source webpack:// paths relative
          devtoolModuleFilenameTemplate(info) {
            return relative(join(cwd(), 'dist'), info.absoluteResourcePath)
          }
        },
        stats: {
          colors: true,
          errors: false
        },
        target: 'browserslist'
      }).on('error', (error) => {
        done(
          new PluginError('webpackJS', error, {
            showProperties: false
          })
        )
      })
    )
    .pipe(
      gulp.dest('./dist', {
        sourcemaps: '.'
      })
    )
}

/* Minify the JS file for release */
function minifyJS() {
  return gulp
    .src(
      [
        'dist/*.js',
        '!dist/*.min.js' // don't re-minify minified javascript
      ],
      { sourcemaps: true }
    )
    .pipe(
      terser({
        format: { comments: false },
        sourceMap: {
          includeSources: true
        },

        // Compatibility workarounds
        ecma: 5,
        safari10: true
      })
    )
    .pipe(
      rename({
        suffix: `-${version}.min`
      })
    )
    .pipe(
      gulp.dest('dist/', {
        sourcemaps: '.'
      })
    )
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
  return gulp.src('dist/*.min.{js,js.map}').pipe(gulp.dest('dist/js/'))
}

/* Copy CSS files into their relevant folders */

function cssFolder() {
  return gulp.src('dist/*.min.{css,css.map}').pipe(gulp.dest('dist/css/'))
}

async function createZip() {
  const { default: zip } = await import('gulp-zip')

  return gulp
    .src(
      [
        'dist/css/*.min.{css,css.map}',
        'dist/js/*.min.{js,js.map}',
        'dist/assets/**'
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

gulp.task('clean', async () => {
  return clean(['dist/**/*'])
})

gulp.task('clean:zip', async () => {
  return clean(['dist/{assets,css,js}', 'dist/*.zip'])
})

gulp.task('style', gulp.series([compileCSS, minifyCSS]))
gulp.task('script', gulp.series([webpackJS, minifyJS]))

gulp.task('build', gulp.series(['clean', gulp.parallel(['style', 'script'])]))

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
    gulp.watch(['packages/**/*.scss'], gulp.series(['style'])),
    gulp.watch(['packages/**/*.js'], gulp.series(['script']))
  ])
)

/**
 * The default task is to serve the docs and watch for changes
 */
gulp.task('default', gulp.parallel(['docs:serve', 'docs:watch', 'watch']))
