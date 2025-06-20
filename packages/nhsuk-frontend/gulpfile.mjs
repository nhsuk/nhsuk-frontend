import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import gulp from 'gulp'

import { assets, fixtures, release, scripts, styles } from './tasks/index.mjs'

gulp.task('styles', styles.compile)
gulp.task('scripts', scripts.compile)
gulp.task('fixtures', fixtures.compile)
gulp.task('assets', assets.copy)
gulp.task('build', gulp.parallel('styles', 'scripts', 'fixtures', 'assets'))
gulp.task('release', gulp.series(release.copy, release.zip))

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
