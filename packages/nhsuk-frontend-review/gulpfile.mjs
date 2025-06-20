import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import gulp from 'gulp'

import { app } from './tasks/index.mjs'

/**
 * Utility tasks
 */
gulp.task('assets', app.assets)
gulp.task('html', app.html)
gulp.task('serve', app.serve)
gulp.task('scripts', app.scripts)
gulp.task('styles', app.styles)
gulp.task('validate', app.validate)

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
        join(config.paths.pkg, 'src/nhsuk/**/*.njk')
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
