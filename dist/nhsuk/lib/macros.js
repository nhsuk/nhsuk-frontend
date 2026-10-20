'use strict';

var names = require('./names.js');
var index = require('./nunjucks/index.js');

/**
 * Render macro HTML
 *
 * @param {string} macro - Macro file name without extension
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
function render(macro, options) {
  const macroName = names.macroName(macro, options?.prefix);
  const macroPath = `macros/${macro}.njk`;
  return index.renderMacro(macroName, macroPath, options);
}

/**
 * @import { MacroRenderOptions } from '#lib'
 */

exports.render = render;
//# sourceMappingURL=macros.js.map
