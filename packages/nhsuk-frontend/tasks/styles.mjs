import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { assets, styles, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

// Prefer release version if available
const { NPM_PACKAGE_VERSION = config.version } = process.env

export const compile = gulp.series(
  /**
   * Transform NHS.UK frontend styles
   */
  task.name('styles:transform', async () => {
    const modulePaths = getListing('nhsuk/**/*.scss', {
      cwd: join(config.paths.pkg, 'src')
    })

    // Apply PostCSS transforms (e.g. vendor prefixes)
    for (const modulePath of modulePaths) {
      await styles.compile(modulePath, {
        srcPath: join(config.paths.pkg, 'src'),
        destPath: join(config.paths.pkg, 'dist'),
        output: { file: modulePath }
      })()
    }
  }),

  /**
   * Compile NHS.UK frontend styles bundle
   */
  task.name(
    'styles:compile',
    styles.compile('nhsuk/nhsuk.scss', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),
      output: { file: 'nhsuk/nhsuk-frontend.css' }
    })
  ),

  /**
   * Compile NHS.UK frontend styles bundle
   * (with dynamic type support)
   */
  task.name(
    "styles:compile 'dynamic type'",
    styles.compile('nhsuk/nhsuk-dynamic-type.scss', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),
      output: { file: 'nhsuk/nhsuk-frontend-dynamic-type.css' }
    })
  ),

  /**
   * Minify NHS.UK frontend styles bundle
   */
  task.name(
    "styles:compile 'minified'",
    styles.compile('nhsuk/nhsuk-frontend.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.pkg, 'dist'),
      output: { file: 'nhsuk/nhsuk-frontend.min.css' }
    })
  ),

  /**
   * Minify NHS.UK frontend styles bundle
   * (with dynamic type support)
   */
  task.name(
    "styles:compile 'minified, dynamic type'",
    styles.compile('nhsuk/nhsuk-frontend-dynamic-type.css', {
      srcPath: join(config.paths.pkg, 'dist'),
      destPath: join(config.paths.pkg, 'dist'),
      output: { file: 'nhsuk/nhsuk-frontend-dynamic-type.min.css' }
    })
  )
)

export const version = gulp.parallel(
  /**
   * Copy and version NHS.UK frontend styles bundle
   */
  task.name("styles:version 'minified'", () =>
    assets.copy('nhsuk-frontend.min.css', {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.pkg, 'dist/nhsuk'),
      output: { file: `nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.css` }
    })
  ),

  /**
   * Copy and version NHS.UK frontend styles bundle
   * (with dynamic type support)
   */
  task.name("styles:version 'minified, dynamic type'", () =>
    assets.copy('nhsuk-frontend-dynamic-type.min.css', {
      srcPath: join(config.paths.pkg, 'dist/nhsuk'),
      destPath: join(config.paths.pkg, 'dist/nhsuk'),
      output: {
        file: `nhsuk-frontend-dynamic-type-${NPM_PACKAGE_VERSION}.min.css`
      }
    })
  )
)
