import gulp from 'gulp'
import zip from 'gulp-zip'

import pkg from '../../package.json' with { type: 'json' }

/**
 * Assets tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
export function assets() {
  return gulp
    .src('packages/assets/**', { encoding: false })
    .pipe(gulp.dest('dist/assets/'))
}

/**
 * Release tasks
 */

/* Copy JS files into their relevant folders */
export function jsFolder() {
  return gulp.src('dist/*.min.{js,js.map}').pipe(gulp.dest('dist/js/'))
}

/* Copy CSS files into their relevant folders */
export function cssFolder() {
  return gulp.src('dist/*.min.{css,css.map}').pipe(gulp.dest('dist/css/'))
}

export function createZip() {
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
    .pipe(zip(`nhsuk-frontend-${pkg.version}.zip`))
    .pipe(gulp.dest('dist'))
}
