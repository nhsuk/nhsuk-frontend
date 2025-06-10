import { join, relative } from 'path'
import { Transform } from 'stream'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import PluginError from 'plugin-error'
import * as dartSass from 'sass-embedded'

const sass = gulpSass(dartSass)

/**
 * Compile Sass task
 */
export const compile = task.name('styles:compile', (done) =>
  gulp
    .src(join(config.paths.pkg, 'src/nhsuk/nhsuk.scss'), {
      sourcemaps: true
    })

    // Compile styles
    .pipe(
      sass({
        fatalDeprecations: [
          'color-functions',
          'global-builtin',
          'import',
          'mixed-decls'
        ],
        sourceMap: true,
        sourceMapIncludeSources: true
      }).on('error', (error) => {
        done(
          new PluginError('styles:compile', error.messageFormatted, {
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
              relative(join(config.paths.root, 'dist'), join(file.base, path))
            )
          }

          cb(null, file)
        }
      })
    )

    // Transform and minify styles
    .pipe(
      postcss([
        autoprefixer({
          env: 'stylesheets'
        }),
        cssnano({
          env: 'stylesheets'
        })
      ])
    )

    // Write to dist
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
