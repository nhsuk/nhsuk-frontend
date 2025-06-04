import { join } from 'path'

import * as config from '@nhsuk/frontend-config'
import { webpackJS, minifyJS } from '@nhsuk/frontend-tasks/scripts.mjs'
import { compileCSS, minifyCSS } from '@nhsuk/frontend-tasks/styles.mjs'
import gulp from 'gulp'

import { assets, cssFolder, jsFolder, createZip } from './tasks/release.mjs'

gulp.task('styles', gulp.series([compileCSS, minifyCSS]))
gulp.task('scripts', gulp.series([webpackJS, minifyJS]))
gulp.task('build', gulp.parallel(['styles', 'scripts']))

gulp.task(
  'zip',
  gulp.series([gulp.parallel([assets, jsFolder, cssFolder]), createZip])
)

gulp.task('watch', () =>
  Promise.all([
    /**
     * Watch and compile styles
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.scss')],
      gulp.series(['styles'])
    ),

    /**
     * Watch and compile scripts
     */
    gulp.watch(
      [join(config.paths.pkg, 'src/nhsuk/**/*.mjs')],
      gulp.series(['scripts'])
    )
  ])
)
