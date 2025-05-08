import browserSync from 'browser-sync'
import gulp from 'gulp'

import {
  buildHTML,
  validateHTML,
  copyCSS,
  copyJS,
  copyBinaryAssets,
  serve
} from './shared/tasks/app.mjs'
import { clean } from './shared/tasks/clean.mjs'
import {
  assets,
  cssFolder,
  jsFolder,
  createZip
} from './shared/tasks/release.mjs'
import { webpackJS, minifyJS } from './shared/tasks/scripts.mjs'
import { compileCSS, minifyCSS } from './shared/tasks/styles.mjs'

/**
 * Development tasks
 */

gulp.task('clean', async () => {
  return clean(['dist/**/*'])
})

gulp.task('clean:zip', async () => {
  return clean(['dist/{assets,css,js}', 'dist/*.zip'])
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
    gulp.watch(['packages/**/*.scss'], gulp.series(['style'])),
    gulp.watch(['packages/**/*.mjs'], gulp.series(['script']))
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
    gulp.watch(['app/**/*.njk', 'packages/**/*.njk'], buildHTML),
    gulp.watch(['dist/**/*.html']).on('change', browserSync.reload),
    gulp.watch(['dist/*.min.{css,css.map}'], copyCSS),
    gulp.watch(['dist/*.min.{js,js.map}'], copyJS),
    gulp.watch(['packages/assets/**/*'], copyBinaryAssets)
  ])
)

gulp.task('docs:serve', gulp.series([serve]))

/**
 * The default task is to serve the docs and watch for changes
 */
gulp.task('default', gulp.parallel(['docs:serve', 'docs:watch', 'watch']))
