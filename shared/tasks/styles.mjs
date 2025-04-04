import { join, relative } from 'path'
import { Transform } from 'stream'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import PluginError from 'plugin-error'
import dartSass from 'sass-embedded'

import * as config from '../config/index.mjs'

const sass = gulpSass(dartSass)

/**
 * Compile Sass task
 */
export function compileCSS(done) {
  return gulp
    .src(join(config.paths.pkg, 'src/nhsuk/all.scss'), {
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
              relative(join(config.paths.root, 'dist'), join(file.base, path))
            )
          }

          cb(null, file)
        }
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(
      rename({
        basename: 'nhsuk'
      })
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
  return gulp
    .src(join(config.paths.root, 'dist/*.css'), {
      ignore: '*.min.css', // don't re-minify minified css
      sourcemaps: true
    })
    .pipe(postcss([cssnano()]))
    .pipe(
      rename({
        suffix: `-${config.version}.min`
      })
    )
    .pipe(
      gulp.dest(join(config.paths.root, 'dist'), {
        sourcemaps: '.'
      })
    )
}
