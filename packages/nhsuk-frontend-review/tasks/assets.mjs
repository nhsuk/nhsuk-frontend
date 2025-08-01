import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

/**
 * Copy NHS.UK frontend images, icons and other assets into review app
 */
export const copy = gulp.parallel(
  /**
   * Copy NHS.UK frontend assets
   */
  task.name("assets:copy 'pkg'", () =>
    files.copy('nhsuk/assets/**', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.app, 'dist/assets')
    })
  ),

  /**
   * Copy review app assets
   */
  task.name("assets:copy 'app'", () =>
    files.copy('assets/**', {
      srcPath: join(config.paths.app, 'src'),
      destPath: join(config.paths.app, 'dist/assets')
    })
  )
)
