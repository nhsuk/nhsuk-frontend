import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import {
  buildHTML,
  validateHTML,
  copyCSS,
  copyJS,
  copyBinaryAssets,
  serve
} from '@nhsuk/frontend-tasks/app.mjs'
import {
  assets,
  cssFolder,
  jsFolder,
  createZip
} from '@nhsuk/frontend-tasks/release.mjs'
import { webpackJS, minifyJS } from '@nhsuk/frontend-tasks/scripts.mjs'
import { compileCSS, minifyCSS } from '@nhsuk/frontend-tasks/styles.mjs'
import browserSync from 'browser-sync'
import { deleteAsync } from 'del'
import gulp from 'gulp'

/**
 * Development tasks
 */

gulp.task('clean', () => {
  return deleteAsync([join(config.paths.root, 'dist/**/*')])
})

gulp.task('clean:zip', () => {
  return deleteAsync([
    join(config.paths.root, 'dist/{assets,css,js}'),
    join(config.paths.root, 'dist/*.zip')
  ])
})

gulp.task('style', gulp.series([compileCSS, minifyCSS]))
gulp.task('script', gulp.series([webpackJS, minifyJS]))

gulp.task('build', gulp.series(['clean', gulp.parallel(['style', 'script'])]))

gulp.task(
  'zip',
  gulp.series([
    'clean:zip',
    gulp.parallel([assets, jsFolder, cssFolder]),
    createZip
  ])
)

gulp.task('watch', () =>
  Promise.all([
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.scss')],
      gulp.series(['style'])
    ),
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.mjs')],
      gulp.series(['script'])
    )
  ])
)

/**
 * Docs tasks
 */

gulp.task(
  'docs:build',
  gulp.series([copyCSS, copyJS, copyBinaryAssets, buildHTML, validateHTML])
)

gulp.task('docs:watch', () =>
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

gulp.task('docs:serve', gulp.series([serve]))

/**
 * The default task is to serve the docs and watch for changes
 */
gulp.task('default', gulp.parallel(['docs:serve', 'docs:watch', 'watch']))
