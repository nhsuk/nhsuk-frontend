import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import browserSync from 'browser-sync'
import gulp from 'gulp'

import browserSyncConfig from './browsersync.config.js'
import { assets, html, scripts, styles } from './tasks/index.mjs'

/**
 * Utility tasks
 */
gulp.task('assets', assets.copy)
gulp.task('html', html.compile)
gulp.task('scripts', scripts.copy)
gulp.task('styles', styles.copy)
gulp.task('validate', html.validate)

/**
 * Review app build
 */
gulp.task(
  'build',
  gulp.parallel(
    gulp.series('styles', 'scripts', 'assets'),
    gulp.series('html', 'validate')
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
        join(config.paths.pkg, 'src/nhsuk/**/macro-options.mjs'),
        join(config.paths.pkg, 'dist/nhsuk/**/*.njk')
      ],
      gulp.series('html')
    ),

    /**
     * Watch and copy minified styles
     */
    gulp.watch(
      [join(config.paths.pkg, 'dist/nhsuk/*.min.{css,css.map}')],
      gulp.series('styles')
    ),

    /**
     * Watch and copy minified scripts
     */
    gulp.watch(
      [join(config.paths.pkg, 'dist/nhsuk/*.min.{js,js.map}')],
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
