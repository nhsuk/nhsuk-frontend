import { components } from '#lib'

/**
 * Component Nunjucks macro code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} Nunjucks code for the component
 */
export function getComponentMacro(component, options = {}) {
  return components.macro(component, { env: this.env, ...options })
}

/**
 * @import { MacroRenderOptions } from '#lib'
 * @import { Environment } from 'nunjucks'
 */
