import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, styles, task } from '@nhsuk/frontend-tasks'

/**
 * Compile review app styles bundle
 */
export const compile = task.name(
  'styles:compile',
  styles.compile('stylesheets/application.scss', {
    srcPath: join(config.paths.app, 'src'),
    destPath: join(config.paths.app, 'dist'),
    output: { file: 'stylesheets/application.min.css' }
  })
)

/**
 * Copy NHS.UK frontend styles into review app
 */
export const copy = task.name('styles:copy', () =>
  files.copy('nhsuk/nhsuk-frontend.min.css', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/stylesheets')
  })
)
