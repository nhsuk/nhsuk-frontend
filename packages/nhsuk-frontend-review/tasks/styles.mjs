import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend styles into review app
 */
export const copy = task.name('styles:copy', () =>
  files.copy('nhsuk/nhsuk-frontend.min.css', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/stylesheets')
  })
)
