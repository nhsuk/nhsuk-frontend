import { join, relative } from 'path'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'
import filter from 'gulp-filter'
import rename from 'gulp-rename'
import terser from 'gulp-terser'
import PluginError from 'plugin-error'
import webpack from 'webpack-stream'

/**
 * Compile JavaScript task
 */
export const compile = task.name('scripts:compile', (done) => {
  return gulp
    .src(join(config.paths.pkg, 'src/nhsuk/nhsuk.mjs'), {
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
            return relative(
              join(config.paths.root, 'dist'),
              info.absoluteResourcePath
            )
          }
        },
        stats: {
          colors: true,
          errors: false
        },
        target: 'browserslist:javascripts'
      }).on('error', (error) => {
        done(
          new PluginError('scripts:compile', error, {
            showProperties: false
          })
        )
      })
    )
    .pipe(
      gulp.dest(join(config.paths.root, 'dist'), {
        sourcemaps: '.'
      })
    )
})

/**
 * Minify JavaScript task
 */
export const minify = task.name('scripts:minify', () => {
  return (
    gulp
      .src(join(config.paths.root, 'dist/nhsuk.js'), {
        sourcemaps: true
      })
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

      // Output minified
      .pipe(
        rename({
          suffix: '.min'
        })
      )
      .pipe(
        gulp.dest(join(config.paths.root, 'dist'), {
          sourcemaps: '.'
        })
      )

      // Exclude output source map
      .pipe(filter(['**', `!${join(config.paths.root, 'dist/*.map')}`]))

      // Output minified + versioned
      .pipe(
        rename({
          basename: `nhsuk-${config.version}`,
          suffix: '.min'
        })
      )
      .pipe(
        gulp.dest(join(config.paths.root, 'dist'), {
          sourcemaps: '.'
        })
      )
  )
})
