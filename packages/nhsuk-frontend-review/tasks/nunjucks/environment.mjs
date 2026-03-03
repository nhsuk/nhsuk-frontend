import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { nunjucks } from 'nhsuk-frontend/src/nhsuk/lib/index.mjs'

import { filters, globals } from './index.mjs'

/**
 * Review app Nunjucks environment factory
 */
export function configure() {
  const env = nunjucks.configure([
    join(config.paths.app, 'src'),
    join(config.paths.pkg, 'dist')
  ])

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

export { renderTemplate } from 'nhsuk-frontend/src/nhsuk/lib/nunjucks.mjs'
