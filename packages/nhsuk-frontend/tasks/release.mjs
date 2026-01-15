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
    assets.copy('assets/**', {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.root, 'dist/assets')
    })
  ),

  /**
   * Copy versioned GitHub release scripts
   */
  task.name("copy:scripts 'versioned'", () =>
    assets.copy(`nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.js`, {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.root, 'dist')
    })
  ),

  /**
   * Copy versioned GitHub release styles
   */
  task.name("copy:styles 'versioned'", () =>
    assets.copy(`nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.css`, {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.root, 'dist')
    })
  ),

  /**
   * Copy versioned GitHub release styles (dynamic type)
   */
  task.name("copy:styles 'versioned, dynamic type'", () =>
    assets.copy(`nhsuk-frontend-dynamic-type-${NPM_PACKAGE_VERSION}.min.css`, {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.root, 'dist')
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
