import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { assets, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend images, icons and other assets
 */
export const copy = task.name('assets:copy', () =>
  assets.copy('nhsuk/assets/**', {
    srcPath: join(config.paths.pkg, 'src'),
    destPath: join(config.paths.pkg, 'dist/nhsuk/assets')
  })
)
