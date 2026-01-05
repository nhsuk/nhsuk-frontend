import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { assets, scripts, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

// Prefer release version if available
const { NODE_ENV, NPM_PACKAGE_VERSION = config.version } = process.env

/**
 * Rollup build cache
 *
 * @type {RollupCache}
 */
const cache = {
  modules: []
}

export const compile = gulp.series(
  task.name('scripts:transform', async () => {
    const modulePaths = getListing(
      [
        'nhsuk/components/*/fixtures.mjs',
        'nhsuk/components/*/macro-options.mjs',
        'nhsuk/lib/index.mjs',
        'nhsuk/index.mjs'
      ],
      { cwd: join(config.paths.pkg, 'src') }
    )

    /**
     * Transform NHS.UK frontend modules into:
     *
     * - ECMAScript (ES) modules for Node.js or bundler `import`
     *   (External dependencies resolved via `node_modules`)
     */
    await scripts.compile(modulePaths, {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),

      // Customise input
      input: {
        cache,
        external: ['#lib', 'nunjucks', 'outdent'],
        treeshake: false
      },

      // Customise output
      output: {
        entryFileNames: '[name].mjs',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    })()

    /**
     * Transform NHS.UK frontend modules into:
     *
     * - CommonJS (CJS) modules for Node.js or bundler `require()`
     *   (External dependencies resolved via `node_modules`)
     */
    await scripts.compile(modulePaths, {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),

      // Customise input
      input: {
        cache,
        treeshake: false
      },

      // Customise output
      output: {
        entryFileNames: '[name].js',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    })()
  }),

  /**
   * Compile NHS.UK frontend scripts bundle
   */
  task.name(
    'scripts:compile',
    scripts.compile('nhsuk/index.mjs', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),

      // Customise input
      input: {
        cache
      },

      // Customise output
      output: {
        file: 'nhsuk/nhsuk-frontend.js',
        format: 'esm'
      }
    })
  ),

  /**
   * Minify NHS.UK frontend scripts bundle
   */
  task.name(
    "scripts:compile 'minified'",
    scripts.compile('nhsuk/index.mjs', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),

      // Customise input
      input: {
        cache
      },

      // Customise output
      output: {
        compact: NODE_ENV === 'production',
        file: 'nhsuk/nhsuk-frontend.min.js',
        format: 'esm'
      }
    })
  )
)

/**
 * Copy and version NHS.UK frontend scripts bundle
 */
export const version = task.name("scripts:version 'minified'", () =>
  assets.copy('nhsuk-frontend.min.js', {
    srcPath: join(config.paths.pkg, 'dist/nhsuk'),
    destPath: join(config.paths.pkg, 'dist/nhsuk'),
    output: { file: `nhsuk-frontend-${NPM_PACKAGE_VERSION}.min.js` }
  })
)

/**
 * @import { RollupCache } from 'rollup'
 */
