import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { assets, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend template files and READMEs
 */
export const copy = task.name('templates:copy', () =>
  assets.copy('nhsuk/**/*.{md,njk}', {
    srcPath: join(config.paths.pkg, 'src'),
    destPath: join(config.paths.pkg, 'dist/nhsuk')
  })
)
