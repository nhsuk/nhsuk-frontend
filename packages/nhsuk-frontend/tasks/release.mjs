import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { assets, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'
import gulpZip from 'gulp-zip'

// Prefer release version if available
const { NPM_PACKAGE_VERSION = config.version } = process.env

export const copy = gulp.parallel(
  /**
   * Copy GitHub release images, icons and other assets
   */
  task.name('copy:assets', () =>
    assets.copy('nhsuk/assets/**', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist/assets')
    })
  ),

  /**
   * Copy and version GitHub release scripts
   */
  task.name("copy:scripts 'versioned'", () =>
    assets.copy('nhsuk/nhsuk-frontend.min.js', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist'),
      output: { file: `nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.js` }
    })
  ),

  /**
   * Copy and version GitHub release styles
   */
  task.name("copy:styles 'versioned'", () =>
    assets.copy('nhsuk/nhsuk-frontend.min.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist'),
      output: { file: `nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.css` }
    })
  ),

  /**
   * Copy and version GitHub release styles (dynamic type)
   */
  task.name("copy:styles 'versioned, dynamic type'", () =>
    assets.copy('nhsuk/nhsuk-frontend-dynamic-type.min.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.root, 'dist'),
      output: {
        file: `nhsuk-frontend-dynamic-type-${NPM_PACKAGE_VERSION}.min.css`
      }
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
      .pipe(gulpZip(`nhsuk-frontend-${NPM_PACKAGE_VERSION}.zip`))
      .pipe(gulp.dest(join(config.paths.root, 'dist')))
  )
)
