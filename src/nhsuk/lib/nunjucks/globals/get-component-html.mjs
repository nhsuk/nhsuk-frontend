import { render } from '../../components.mjs'

/**
 * Component HTML code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} HTML rendered by the component
 */
export function getComponentHTML(component, options = {}) {
  return render(component, { env: this.env, ...options })
}

/**
 * @import { MacroRenderOptions } from '#lib'
 * @import { Environment } from 'nunjucks'
 */
