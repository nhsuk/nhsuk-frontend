import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { getListing } from '@nhsuk/frontend-lib/files.mjs'
import { scripts, task } from '@nhsuk/frontend-tasks'
import gulp from 'gulp'

export const compile = gulp.series(
  /**
   * Transform NHS.UK frontend scripts
   */
  task.name('scripts:transform', async () => {
    const modulePaths = await getListing('nhsuk/components/**/*.mjs', {
      cwd: join(config.paths.pkg, 'src'),
      ignore: ['**/macro-options.mjs', '**/*.test.{cjs,js,mjs}']
    })

    // Create Rollup bundle(s)
    for (const modulePath of [
      ...modulePaths,

      // Build entry scripts last to restore modules
      // removed from components due to tree-shaking
      'nhsuk/common.mjs',
      'nhsuk/index.mjs',
      'nhsuk/nhsuk.mjs'
    ]) {
      await Promise.all([
        /**
         * Rollup output for each module:
         *
         * - ECMAScript (ES) modules for Node.js or bundler `import`
         *   (External dependencies resolved via `node_modules`)
         */
        scripts.compile(modulePath, {
          srcPath: join(config.paths.pkg, 'src'),
          destPath: join(config.paths.pkg, 'dist'),

          // Customise output
          output: {
            entryFileNames: '[name].mjs',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src'
          }
        })(),

        /**
         * Rollup output for each module:
         *
         * - CommonJS (CJS) modules for Node.js or bundler `import`
         *   (External dependencies resolved via `node_modules`)
         */
        scripts.compile(modulePath, {
          srcPath: join(config.paths.pkg, 'src'),
          destPath: join(config.paths.pkg, 'dist'),

          // Customise output
          output: {
            entryFileNames: '[name].js',
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: 'src'
          }
        })()
      ])
    }
  }),

  /**
   * Compile NHS.UK frontend scripts bundle
   */
  task.name(
    'scripts:compile',
    scripts.compile('nhsuk/index.mjs', {
      srcPath: join(config.paths.pkg, 'src'),
      destPath: join(config.paths.pkg, 'dist'),

      // Customise output
      output: {
        compact: true,
        file: 'nhsuk/nhsuk-frontend.min.js',
        format: 'esm'
      }
    })
  )
)
