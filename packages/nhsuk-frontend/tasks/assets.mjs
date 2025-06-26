import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend logos, icons and other assets
 */
export const copy = task.name('assets:copy', () =>
  files.copy('nhsuk/assets/**', {
    srcPath: join(config.paths.pkg, 'src'),
    destPath: join(config.paths.pkg, 'dist/nhsuk/assets')
  })
)
