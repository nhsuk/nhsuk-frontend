import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { files, task } from '@nhsuk/frontend-tasks'

/**
 * Copy NHS.UK frontend scripts into review app
 */
export const copy = task.name('scripts:copy', () =>
  files.copy('nhsuk/nhsuk-frontend.min.js', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/javascripts')
  })
)
