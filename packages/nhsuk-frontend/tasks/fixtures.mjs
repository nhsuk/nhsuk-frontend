import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { components, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

/**
 * Component fixtures and macro options
 */
export const compile = gulp.series(
  /**
   * Generate NHS.UK frontend macro-options.json
   */
  task.name('compile:macro-options', () =>
    components.generateMacroOptions({
      destPath: join(config.paths.pkg, 'dist/nhsuk/components')
    })
  )
)
