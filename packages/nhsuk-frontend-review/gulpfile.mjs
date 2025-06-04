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

gulp.task('styles', copyCSS)
gulp.task('scripts', copyJS)
gulp.task('assets', copyBinaryAssets)
gulp.task('html', buildHTML)
gulp.task('validate', validateHTML)

gulp.task(
  'build',
  gulp.parallel([
    'styles',
    'scripts',
    'assets',
    gulp.series(['html', 'validate'])
  ])
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
      gulp.series(['html'])
    ),

    /**
     * Watch and reload HTML pages
     */
    gulp
      .watch([join(config.paths.root, 'dist/**/*.html')])
      .on('change', browserSync.reload),

    /**
     * Watch and copy minified styles
     */
    gulp.watch(
      [join(config.paths.root, 'dist/*.min.{css,css.map}')],
      gulp.series(['styles'])
    ),

    /**
     * Watch and copy minified scripts
     */
    gulp.watch(
      [join(config.paths.root, 'dist/*.min.{js,js.map}')],
      gulp.series(['scripts'])
    ),

    /**
     * Watch and copy assets
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/assets/**/*')],
      gulp.series(['assets'])
    )
  ])
)
