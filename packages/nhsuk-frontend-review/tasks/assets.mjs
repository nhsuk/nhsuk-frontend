import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend logos, icons and other assets into review app
 */
export const copy = task.name('assets:copy', async () => {
  /**
   * Copy NHS.UK frontend assets
   */
  await files.copy('nhsuk/assets/**', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/assets')
  })

  /**
   * Copy review app assets
   */
  await files.copy('assets/**', {
    srcPath: join(config.paths.app, 'src'),
    destPath: join(config.paths.app, 'dist/assets')
  })
})
