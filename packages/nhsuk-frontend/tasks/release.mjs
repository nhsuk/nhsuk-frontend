import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'
import gulpZip from 'gulp-zip'

export const copy = gulp.parallel(
  /**
   * Copy GitHub release logos, icons and other assets
   */
  task.name('copy:assets', () =>
    files.copy('nhsuk/assets/**', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist/assets')
    })
  ),

  /**
   * Copy and version GitHub release scripts
   */
  task.name("copy:scripts 'versioned'", () =>
    files.copy('nhsuk/nhsuk-frontend.min.js', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist'),
      output: { file: `nhsuk-frontend-${config.version}.min.js` }
    })
  ),

  /**
   * Copy and version GitHub release styles
   */
  task.name("copy:styles 'versioned'", () =>
    files.copy('nhsuk/nhsuk-frontend.min.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist'),
      output: { file: `nhsuk-frontend-${config.version}.min.css` }
    })
  )
)

export const zip = gulp.series(
  /**
   * Create GitHub release zip file
   */
  task.name('zip', () =>
    gulp
      .src(
        [
          join(config.paths.root, 'dist/*.min.{css,css.map}'),
          join(config.paths.root, 'dist/*.min.{js,js.map}'),
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
