import { components } from '#lib'

/**
 * Component Nunjucks code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} Nunjucks code for the component
 */
export function getNunjucksCode(component, options = {}) {
  return components.macro(component, { ...options, env: this.env })
}

/**
 * @import { MacroRenderOptions } from 'nhsuk-frontend/lib'
 * @import { Environment } from 'nunjucks'
 */
