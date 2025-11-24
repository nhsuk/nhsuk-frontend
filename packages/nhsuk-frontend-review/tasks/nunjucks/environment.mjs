import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { nunjucks } from '@nhsuk/frontend-lib'

import { filters, globals } from './index.mjs'

// Review app Nunjucks default environment
export const env = nunjucks.configure([join(config.paths.app, 'src')])

// Add Nunjucks filters
for (const [key, filter] of Object.entries(filters)) {
  env.addFilter(key, filter)
}

// Add Nunjucks globals
for (const [key, global] of Object.entries(globals)) {
  env.addGlobal(key, global)
}
