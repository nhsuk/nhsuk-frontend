import { join, relative } from 'path'
import { Transform } from 'stream'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import filter from 'gulp-filter'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import * as config from 'nhsuk-frontend-config'
import PluginError from 'plugin-error'
import * as dartSass from 'sass-embedded'

const sass = gulpSass(dartSass)

/**
 * Compile Sass task
 */
export function compileCSS(done) {
  return gulp
    .src(join(config.paths.pkg, 'src/nhsuk.scss'), {
      sourcemaps: true
    })
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
              relative(join(config.paths.root, 'dist'), join(file.base, path))
            )
          }

          cb(null, file)
        }
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          env: 'stylesheets'
        })
      ])
    )
    .pipe(
      gulp.dest(join(config.paths.root, 'dist'), {
        sourcemaps: '.'
      })
    )
}

/**
 * Minify CSS task
 */
export function minifyCSS() {
  return (
    gulp
      .src(join(config.paths.root, 'dist/nhsuk.css'), {
        sourcemaps: true
      })
      .pipe(
        postcss([
          cssnano({
            env: 'stylesheets'
          })
        ])
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
      .pipe(filter(['**', '!dist/*.map']))

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
}
