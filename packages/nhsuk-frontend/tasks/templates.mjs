import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend template files and READMEs
 */
export const copy = task.name('templates:copy', () =>
  files.copy('nhsuk/**/*.{md,njk}', {
    srcPath: join(config.paths.pkg, 'src'),
    destPath: join(config.paths.pkg, 'dist/nhsuk')
  })
)
