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
import types from './tsconfig.json' with { type: 'json' }

/**
 * Utility tasks
 */
gulp.task('assets', assets.copy)
gulp.task('fixtures', fixtures.compile)
gulp.task('scripts', scripts.compile)
gulp.task('styles', styles.compile)
gulp.task('templates', templates.copy)

/**
 * NHS.UK frontend type declarations
 */
gulp.task('types', npm.script('types', ['--incremental']))

/**
 * NHS.UK frontend build
 */
gulp.task(
  'build',
  gulp.series(
    npm.script('clean'),
    gulp.parallel(
      gulp.series('styles', 'scripts', 'types', 'assets'),
      gulp.series('templates', 'fixtures')
    )
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
        join(config.paths.pkg, 'src/nhsuk/**/fixtures.mjs'),
        join(config.paths.pkg, 'src/nhsuk/**/macro-options.mjs')
      ],
      gulp.series('templates', npm.script('fixtures'))
    ),

    /**
     * Watch and compile type declarations
     */
    gulp.watch(
      types.include.map((pattern) => join(config.paths.pkg, pattern)),
      { ignored: types.exclude },
      gulp.series('types')
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
      { ignored: ['**/fixtures.mjs', '**/macro-options.mjs', '**/*.test.*'] },
      gulp.series('scripts')
    )
  ])
)
