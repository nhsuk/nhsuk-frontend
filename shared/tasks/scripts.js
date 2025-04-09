const { join, relative } = require('path')
const { cwd } = require('process')

const gulp = require('gulp')
const rename = require('gulp-rename')
const terser = require('gulp-terser')
const PluginError = require('plugin-error')
const webpack = require('webpack-stream')

const { version } = require('../../package.json')

/**
 * Compile JavaScript task
 */
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

/**
 * Minify JavaScript task
 */
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

module.exports = {
  webpackJS,
  minifyJS
}
