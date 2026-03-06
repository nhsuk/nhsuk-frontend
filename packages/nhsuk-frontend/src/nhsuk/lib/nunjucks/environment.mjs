import { join } from 'node:path'

import nunjucks from 'nunjucks'

import * as config from '../config.mjs'

import * as filters from './filters/index.mjs'
import * as globals from './globals/index.mjs'

const { NODE_ENV } = process.env

// Nunjucks default environment
export const env = configure()

/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
export function configure(viewsPath = [], options = {}) {
  const basePath =
    NODE_ENV === 'test'
      ? join(config.nhsukFrontendPath, 'src') // Use source files for tests
      : join(config.nhsukFrontendPath, 'dist') // Use build output for review

  // Append default search paths
  const searchPaths = [viewsPath]
    .flat()
    .concat([
      join(basePath, 'nhsuk/components'),
      join(basePath, 'nhsuk/macros'),
      join(basePath, 'nhsuk'),
      basePath
    ])

  // Nunjucks environment
  const env = nunjucks.configure(searchPaths, {
    lstripBlocks: true, // Remove leading spaces from a block/tag
    trimBlocks: true, // Remove trailing newlines from a block/tag
    ...options
  })

  // Add Nunjucks filters
  for (const [key, filter] of Object.entries(filters)) {
    env.addFilter(key, filter)
  }

  // Add Nunjucks globals
  for (const [key, global] of Object.entries(globals)) {
    env.addGlobal(key, global)
  }

  return env
}

export * as filters from './filters/index.mjs'
export * as globals from './globals/index.mjs'

/**
 * @import { ConfigureOptions } from 'nunjucks'
 */
