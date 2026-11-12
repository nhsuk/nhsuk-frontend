import { render } from '../../components.mjs';

/**
 * Component HTML code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} HTML rendered by the component
 */
function getComponentHTML(component, options = {}) {
  return render(component, {
    env: this.env,
    ...options
  });
}

/**
 * @import { MacroRenderOptions } from '#lib'
 * @import { Environment } from 'nunjucks'
 */

export { getComponentHTML };
//# sourceMappingURL=get-component-html.mjs.map
