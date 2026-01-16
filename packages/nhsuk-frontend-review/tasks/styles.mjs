import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { assets, styles, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

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

export const copy = gulp.series(
  /**
   * Copy NHS.UK frontend styles into review app
   * (apply PostCSS transforms, e.g. 'companion' pseudo-classes)
   */
  task.name(
    'styles:copy',
    styles.compile('nhsuk/nhsuk-frontend.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.app, 'dist'),
      output: { file: 'stylesheets/nhsuk-frontend.min.css' }
    })
  ),

  /**
   * Copy NHS.UK frontend styles into review app
   * (with dynamic type support)
   */
  task.name("styles:copy 'dynamic type'", () =>
    assets.copy('nhsuk/nhsuk-frontend-dynamic-type.min.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.app, 'dist/stylesheets')
    })
  )
)
