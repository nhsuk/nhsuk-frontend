import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { styles, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

export const compile = gulp.series(
  /**
   * Compile review app styles bundle
   */
  task.name(
    'styles:compile',
    styles.compile('stylesheets/application.scss', {
      srcPath: join(config.paths.app, 'src'),
      destPath: join(config.paths.app, 'dist'),
      output: { file: 'stylesheets/application.min.css' }
    })
  ),

  /**
   * Compile NHS.UK frontend styles into review app
   * (apply PostCSS transforms, e.g. 'companion' pseudo-classes)
   */
  task.name(
    "styles:compile 'nhsuk-frontend'",
    styles.compile('nhsuk/index.scss', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.app, 'dist'),
      output: { file: 'stylesheets/nhsuk-frontend.min.css' }
    })
  ),

  /**
   * Compile NHS.UK frontend styles (with dynamic type) into review app
   * (apply PostCSS transforms, e.g. 'companion' pseudo-classes)
   */
  task.name(
    "styles:compile 'nhsuk-frontend/dynamic-type'",
    styles.compile('nhsuk/nhsuk-dynamic-type.scss', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.app, 'dist'),
      output: { file: 'stylesheets/nhsuk-frontend-dynamic-type.min.css' }
    })
  )
)
