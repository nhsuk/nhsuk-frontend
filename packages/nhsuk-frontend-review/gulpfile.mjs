import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import browserSync from 'browser-sync'
import gulp from 'gulp'

import {
  buildHTML,
  validateHTML,
  copyCSS,
  copyJS,
  copyBinaryAssets,
  serve
} from './tasks/app.mjs'

gulp.task(
  'build',
  gulp.series([copyCSS, copyJS, copyBinaryAssets, buildHTML, validateHTML])
)

gulp.task('serve', serve)

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
      buildHTML
    ),

    /**
     * Watch and reload HTML pages
     */
    gulp
      .watch([join(config.paths.root, 'dist/**/*.html')])
      .on('change', browserSync.reload),

    /**
     * Watch and copy minified CSS and JS
     */
    gulp.watch([join(config.paths.root, 'dist/*.min.{css,css.map}')], copyCSS),
    gulp.watch([join(config.paths.root, 'dist/*.min.{js,js.map}')], copyJS),

    /**
     * Watch and copy assets
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/assets/**/*')],
      copyBinaryAssets
    )
  ])
)
