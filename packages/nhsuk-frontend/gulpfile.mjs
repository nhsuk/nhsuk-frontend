import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { scripts, styles } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

import { release } from './tasks/index.mjs'

gulp.task('styles', styles.compile)
gulp.task('scripts', scripts.compile)
gulp.task('build', gulp.parallel('styles', 'scripts'))
gulp.task('zip', release.zip)

gulp.task('watch', () =>
  Promise.all([
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
      gulp.series('scripts')
    )
  ])
)
