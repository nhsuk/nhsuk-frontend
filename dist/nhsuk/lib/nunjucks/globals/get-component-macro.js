'use strict';

var _lib = require('#lib');

/**
 * Component Nunjucks macro code (formatted)
 *
 * @this {{ env: Environment }}
 * @param {string} component - Component name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns {string} Nunjucks code for the component
 */
function getComponentMacro(component, options = {}) {
  return _lib.components.macro(component, { env: this.env, ...options })
}

/**
 * @import { MacroRenderOptions } from '#lib'
 * @import { Environment } from 'nunjucks'
 */

exports.getComponentMacro = getComponentMacro;
//# sourceMappingURL=get-component-macro.js.map
