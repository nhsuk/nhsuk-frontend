import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { styles, task } from '@nhsuk/frontend-tasks'
import { glob } from 'glob'
import gulp from 'gulp'

export const compile = gulp.series(
  /**
   * Transform NHS.UK frontend styles
   */
  task.name('styles:transform', async () => {
    const modulePaths = await glob('nhsuk/**/*.scss', {
      cwd: join(config.paths.pkg, 'src'),
      nodir: true
    })

    // Apply PostCSS transforms (e.g. vendor prefixes)
    for (const modulePath of modulePaths) {
      await styles.compile(modulePath, {
        srcPath: join(config.paths.pkg, 'src'),
        destPath: join(config.paths.pkg, 'dist'),
        output: { file: modulePath }
      })()
    }
  }),

  /**
   * Compile NHS.UK frontend styles bundle
   */
  task.name(
    'styles:compile',
    styles.compile('nhsuk/nhsuk.scss', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),
      output: { file: 'nhsuk/nhsuk-frontend.min.css' }
    })
  )
)
