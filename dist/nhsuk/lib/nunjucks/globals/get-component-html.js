'use strict';

var components = require('../../components.js');

/**
 * Component HTML code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} HTML rendered by the component
 */
function getComponentHTML(component, options = {}) {
  return components.render(component, {
    env: this.env,
    ...options
  });
}

/**
 * @import { MacroRenderOptions } from '#lib'
 * @import { Environment } from 'nunjucks'
 */

exports.getComponentHTML = getComponentHTML;
//# sourceMappingURL=get-component-html.js.map
