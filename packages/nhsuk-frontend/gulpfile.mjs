import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import gulp from 'gulp'

import { assets, fixtures, release, scripts, styles } from './tasks/index.mjs'

/**
 * Utility tasks
 */
gulp.task('assets', assets.copy)
gulp.task('fixtures', fixtures.compile)
gulp.task('scripts', scripts.compile)
gulp.task('styles', styles.compile)

/**
 * NHS.UK frontend build
 */
gulp.task(
  'build',
  gulp.parallel(
    gulp.series('styles', 'scripts', 'assets'),
    gulp.series('fixtures')
  )
)

/**
 * GitHub release distribution
 */
gulp.task('release', gulp.series(release.copy, release.zip))

/**
 * Development tasks
 */
gulp.task('watch', () =>
  Promise.all([
    /**
     * Watch and compile component fixtures and macro options
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/macro-options.mjs')],
      gulp.series('fixtures')
    ),

    /**
     * Watch and compile styles
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.scss')],
      gulp.series('styles')
    ),

    /**
     * Watch and compile scripts
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.mjs')],
      { ignored: ['**/macro-options.mjs'] },
      gulp.series('scripts')
    )
  ])
)
