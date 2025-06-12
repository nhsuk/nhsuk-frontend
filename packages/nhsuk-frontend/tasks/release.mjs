import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'
import gulpZip from 'gulp-zip'

export const zip = gulp.series(
  gulp.parallel(
    /**
     * Copy GitHub release logos, icons and other assets
     */
    task.name('zip:assets', () =>
      gulp
        .src(join(config.paths.pkg, 'src/nhsuk/assets/**'), { encoding: false })
        .pipe(gulp.dest(join(config.paths.root, 'dist/assets')))
    ),

    /**
     * Copy GitHub release scripts
     */
    task.name('zip:scripts', () =>
      gulp
        .src(
          [
            join(config.paths.root, 'dist/nhsuk.min.js'),
            join(config.paths.root, `dist/nhsuk-${config.version}.min.js`)
          ],
          {
            sourcemaps: true
          }
        )
        .pipe(
          gulp.dest(join(config.paths.root, 'dist/js'), {
            sourcemaps: '.'
          })
        )
    ),

    /**
     * Copy GitHub release styles
     */
    task.name('zip:styles', () =>
      gulp
        .src(
          [
            join(config.paths.root, 'dist/nhsuk.min.css'),
            join(config.paths.root, `dist/nhsuk-${config.version}.min.css`)
          ],
          {
            sourcemaps: true
          }
        )
        .pipe(
          gulp.dest(join(config.paths.root, 'dist/css'), {
            sourcemaps: '.'
          })
        )
    )
  ),

  /**
   * Create GitHub release zip file
   */
  task.name('zip:archive', () =>
    gulp
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
      .pipe(gulpZip(`nhsuk-frontend-${config.version}.zip`))
      .pipe(gulp.dest(join(config.paths.root, 'dist')))
  )
)
