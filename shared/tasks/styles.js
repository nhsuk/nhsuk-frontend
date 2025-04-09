const { join, relative } = require('path')
const { cwd } = require('process')
const { Transform } = require('stream')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const PluginError = require('plugin-error')
const dartSass = require('sass-embedded')

const { version } = require('../../package.json')

const sass = gulpSass(dartSass)

/**
 * Compile Sass task
 */
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

/**
 * Minify CSS task
 */
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

module.exports = {
  compileCSS,
  minifyCSS
}
