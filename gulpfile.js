const browserSync = require('browser-sync')
const gulp = require('gulp')

const {
  buildHTML,
  validateHTML,
  copyCSS,
  copyJS,
  copyBinaryAssets,
  serve
} = require('./shared/tasks/app')
const { clean } = require('./shared/tasks/clean')
const {
  assets,
  cssFolder,
  jsFolder,
  createZip
} = require('./shared/tasks/release')
const { webpackJS, minifyJS } = require('./shared/tasks/scripts')
const { compileCSS, minifyCSS } = require('./shared/tasks/styles')

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
    gulp.watch(['packages/**/*.js'], gulp.series(['script']))
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
    gulp.watch(['**/*.njk'], buildHTML),
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
