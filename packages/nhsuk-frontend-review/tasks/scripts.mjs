import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { assets, scripts, task } from '@nhsuk/frontend-tasks'

/**
 * Rollup build cache
 *
 * @type {RollupCache}
 */
const cache = {
  modules: []
}

/**
 * Compile review app scripts bundle
 */
export const compile = task.name(
  'scripts:compile',
  scripts.compile('javascripts/application.mjs', {
    srcPath: join(config.paths.app, 'src'),
    destPath: join(config.paths.app, 'dist'),

    // Customise input
    input: {
      cache,
      external: ['nhsuk-frontend']
    },

    // Customise output
    output: {
      compact: config.environment === 'production',
      file: 'javascripts/application.min.js',
      format: 'esm',
      paths: { 'nhsuk-frontend': './nhsuk-frontend.min.js' }
    }
  })
)

/**
 * Copy NHS.UK frontend scripts into review app
 */
export const copy = task.name('scripts:copy', () =>
  assets.copy('nhsuk/nhsuk-frontend.min.js', {
    srcPath: join(config.paths.pkg, 'dist'),
    destPath: join(config.paths.app, 'dist/javascripts')
  })
)

/**
 * @import { RollupCache } from 'rollup'
 */
