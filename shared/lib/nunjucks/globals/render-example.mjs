import { components } from '@nhsuk/frontend-lib'
import filters from 'nunjucks/src/filters.js'

/**
 * Render Nunjucks component with unique attributes
 *
 * @param {string} component - Component directory name
 * @param {MacroExample} example - Nunjucks macro example
 */
export function renderExample(component, example) {
  return filters.safe(components.render(component, example))
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
