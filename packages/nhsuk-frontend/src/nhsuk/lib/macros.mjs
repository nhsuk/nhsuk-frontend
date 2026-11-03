import * as names from './names.mjs'
import * as nunjucks from './nunjucks/index.mjs'

/**
 * Render macro HTML
 *
 * @param {string} macro - Macro file name without extension
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
export function render(macro, options) {
  const macroName = names.macroName(macro, options?.prefix)
  const macroPath = `macros/${macro}.njk`

  return nunjucks.renderMacro(macroName, macroPath, options)
}

/**
 * @import { MacroRenderOptions } from '#lib'
 */
