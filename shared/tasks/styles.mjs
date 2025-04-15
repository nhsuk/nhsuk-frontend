import { join, relative } from 'path'
import { cwd } from 'process'
import { Transform } from 'stream'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import PluginError from 'plugin-error'
import dartSass from 'sass-embedded'

import pkg from '../../package.json' with { type: 'json' }

const sass = gulpSass(dartSass)

/**
 * Compile Sass task
 */
export function compileCSS(done) {
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

/**
 * Minify CSS task
 */
export function minifyCSS() {
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
        suffix: `-${pkg.version}.min`
      })
    )
    .pipe(
      gulp.dest('dist/', {
        sourcemaps: '.'
      })
    )
}
