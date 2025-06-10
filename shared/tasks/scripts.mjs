import { join, relative } from 'path'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'
import PluginError from 'plugin-error'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack-stream'

/**
 * Compile JavaScript task
 */
export const compile = task.name('scripts:compile', (done) =>
  gulp
    .src(join(config.paths.pkg, 'src/nhsuk/nhsuk.mjs'), {
      sourcemaps: true
    })

    // Compile scripts
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
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                format: { comments: false },
                sourceMap: {
                  includeSources: true
                },

                // Compatibility workarounds
                ecma: 5,
                safari10: true
              }
            })
          ]
        },
        output: {
          filename: `nhsuk-${config.version}.min.js`,

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

    // Write to dist
    .pipe(
      gulp.dest(join(config.paths.root, 'dist'), {
        sourcemaps: '.'
      })
    )
)
