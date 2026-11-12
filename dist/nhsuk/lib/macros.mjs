import { macroName } from './names.mjs';
import { renderMacro } from './nunjucks/index.mjs';

/**
 * Render macro HTML
 *
 * @param {string} macro - Macro file name without extension
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
function render(macro, options) {
  const macroName$1 = macroName(macro, options?.prefix);
  const macroPath = `macros/${macro}.njk`;
  return renderMacro(macroName$1, macroPath, options);
}

/**
 * @import { MacroRenderOptions } from '#lib'
 */

export { render };
//# sourceMappingURL=macros.mjs.map
