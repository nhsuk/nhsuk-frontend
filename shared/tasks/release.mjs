import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import gulp from 'gulp'
import zip from 'gulp-zip'

/**
 * Assets tasks
 */

/**
 * Copy assets such as icons and images into the distribution
 */
export function assets() {
  return gulp
    .src(join(config.paths.pkg, 'src/nhsuk/assets/**'), { encoding: false })
    .pipe(gulp.dest(join(config.paths.root, 'dist/assets')))
}

/**
 * Release tasks
 */

/* Copy JS files into their relevant folders */
export function jsFolder() {
  return gulp
    .src(join(config.paths.root, 'dist/*.min.{js,js.map}'))
    .pipe(gulp.dest(join(config.paths.root, 'dist/js')))
}

/* Copy CSS files into their relevant folders */
export function cssFolder() {
  return gulp
    .src(join(config.paths.root, 'dist/*.min.{css,css.map}'))
    .pipe(gulp.dest(join(config.paths.root, 'dist/css')))
}

export function createZip() {
  return gulp
    .src(
      [
        join(config.paths.root, 'dist/css/*.min.{css,css.map}'),
        join(config.paths.root, 'dist/js/*.min.{js,js.map}'),
        join(config.paths.root, 'dist/assets/**')
      ],
      {
        base: join(config.paths.root, 'dist'),
        encoding: false
      }
    )
    .pipe(zip(`nhsuk-frontend-${config.version}.zip`))
    .pipe(gulp.dest(join(config.paths.root, 'dist')))
}
