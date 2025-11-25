import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { npm } from '@nhsuk/frontend-tasks'
import browserSync from 'browser-sync'
import gulp from 'gulp'

import browserSyncConfig from './browsersync.config.js'
import { assets, html, scripts, styles } from './tasks/index.mjs'

/**
 * Utility tasks
 */
gulp.task('assets', assets.copy)
gulp.task('html', html.compile)
gulp.task('scripts', gulp.series(scripts.copy, scripts.compile))
gulp.task('styles', gulp.series(styles.copy, styles.compile))
gulp.task('validate', html.validate)

/**
 * Review app build
 */
gulp.task(
  'build',
  gulp.series(
    npm.script('clean'),
    gulp.parallel(
      gulp.series('styles', 'scripts', 'assets'),
      gulp.series('html', 'validate'),
      npm.script('sassdoc')
    )
  )
)

/**
 * Development tasks
 */
gulp.task('watch', () =>
  Promise.all([
    /**
     * Watch and render Nunjucks
     */
    gulp.watch(
      [
        join(config.paths.app, 'src/**/*.njk'),
        join(config.paths.pkg, 'dist/nhsuk/**/fixtures.json')
      ],
      gulp.series('html')
    ),

    /**
     * Watch and copy styles
     */
    gulp.watch(
      [
        join(config.paths.pkg, 'dist/nhsuk/*.{css,css.map}'),
        join(config.paths.app, 'src/stylesheets/**/*.scss')
      ],
      gulp.series('styles')
    ),

    /**
     * Watch and copy scripts
     */
    gulp.watch(
      [
        join(config.paths.pkg, 'dist/nhsuk/*.{js,js.map}'),
        join(config.paths.app, 'src/javascripts/**/*.mjs')
      ],
      { ignored: ['**/fixtures.mjs', '**/macro-options.mjs', '**/*.test.*'] },
      gulp.series('scripts')
    ),

    /**
     * Watch and copy assets
     */
    gulp.watch(
      [join(config.paths.pkg, 'dist/nhsuk/assets/**')],
      gulp.series('assets')
    )
  ])
)

gulp.task('serve', (done) => {
  browserSync(browserSyncConfig, done)
})
