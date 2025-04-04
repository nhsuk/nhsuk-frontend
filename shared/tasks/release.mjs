import gulp from 'gulp'

import * as config from '../config/index.mjs'

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

export async function createZip() {
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
    .pipe(zip(`nhsuk-frontend-${config.version}.zip`))
    .pipe(gulp.dest('dist'))
}
