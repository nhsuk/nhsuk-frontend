import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { npm } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

import {
  assets,
  fixtures,
  release,
  scripts,
  styles,
  templates
} from './tasks/index.mjs'

/**
 * Utility tasks
 */
gulp.task('assets', assets.copy)
gulp.task('fixtures', fixtures.compile)
gulp.task('scripts', scripts.compile)
gulp.task('styles', styles.compile)
gulp.task('templates', templates.copy)

/**
 * NHS.UK frontend build
 */
gulp.task(
  'build',
  gulp.parallel(
    gulp.series('styles', 'scripts', 'assets'),
    gulp.series('templates', 'fixtures')
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
     * Watch and copy template files and READMEs, then
     * compile component fixtures and macro options
     */
    gulp.watch(
      [
        join(config.paths.pkg, 'src/nhsuk/**/*.{md,njk}'),
        join(config.paths.pkg, 'src/nhsuk/**/macro-options.mjs')
      ],
      gulp.series('templates', npm.script('fixtures'))
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
      { ignored: ['**/macro-options.mjs', '**/*.test.*'] },
      gulp.series('scripts')
    )
  ])
)
