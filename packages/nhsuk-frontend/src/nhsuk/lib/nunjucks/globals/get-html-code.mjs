import { components } from '#lib'

/**
 * Component HTML code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} HTML rendered by the component
 */
export function getHTMLCode(component, options = {}) {
  return components.render(component, { ...options, env: this.env })
}

/**
 * @import { MacroRenderOptions } from 'nhsuk-frontend/lib'
 * @import { Environment } from 'nunjucks'
 */
