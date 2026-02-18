'use strict';

var names = require('./names.js');
var nunjucks = require('./nunjucks.js');

/**
 * Render component HTML
 *
 * @param {string} component - Component directory name
 * @param {MacroRenderOptions | MacroExample} [options] - Nunjucks macro render options
 * @returns HTML rendered by the component
 */
function render(component, options) {
  const macroName = names.componentNameToMacroName(component, options?.prefix);
  const macroPath = `${component}/macro.njk`;

  return nunjucks.renderMacro(macroName, macroPath, options)
}

/**
 * Nunjucks macro option config
 *
 * @typedef {object} MacroParam
 * @property {'array' | 'boolean' | 'integer' | 'nunjucks-block' | 'object' | 'string'} type - Option type
 * @property {boolean} required - Option required
 * @property {string} description - Option description
 * @property {true} [isComponent] - Option is another component
 * @property {{ [param: string]: MacroParam }} [params] - Nunjucks macro option params
 */

/**
 * Nunjucks macro screenshot
 *
 * @typedef {object} MacroScreenshot
 * @property {MacroExampleState[]} [states] - Selector state (optional)
 * @property {string} [selector] - Selector to apply state (optional)
 * @property {string} [name] - Selector name (optional)
 * @property {('watch' | 'mobile' | 'tablet' | 'desktop' | 'large-desktop' | 'xlarge-desktop')[]} [viewports] - Screenshot viewports (optional)
 */

/**
 * Nunjucks macro example
 *
 * @typedef {object} MacroExample
 * @property {string | undefined} [description] - Example description (optional)
 * @property {{ [param: string]: unknown }} [context] - Nunjucks context object (optional)
 * @property {string | undefined} [callBlock] - Nunjucks macro `caller()` content (optional)
 * @property {never} [prefix] - Component name prefix (not available in Nunjucks macro examples)
 * @property {MacroExampleOptions} [options] - Review app example options (optional)
 * @property {MacroExample[]} [variants] - Review app example variants (optional)
 * @property {MacroScreenshot | MacroScreenshot[] | boolean} [screenshot] - Screenshot and include in visual regression tests
 */

/**
 * Nunjucks macro example review app options
 *
 * @typedef {object} MacroExampleOptions
 * @property {boolean} [hidden] - Hide example on component listing pages
 * @property {string} [layout] - Nunjucks layout for component preview page
 * @property {MacroExampleWidth | MacroExampleWidth[] | false} [width] - Component grid column width (or set `false` to remove width container)
 * @property {boolean} [throwOnError] - Whether to throw on error (optional)
 */

/**
 * Nunjucks macro example state
 *
 * @typedef {('focus' | 'hover' | 'active' | 'click')} MacroExampleState
 */

/**
 * Nunjucks macro example column width
 *
 * @typedef {(
 *   'one-quarter' |
 *   'one-quarter-from-mobile' |
 *   'one-quarter-from-desktop' |
 *   'one-third' |
 *   'one-third-from-mobile' |
 *   'one-third-from-desktop' |
 *   'one-half' |
 *   'one-half-from-mobile' |
 *   'one-half-from-desktop' |
 *   'two-thirds' |
 *   'two-thirds-from-mobile' |
 *   'two-thirds-from-desktop' |
 *   'three-quarters' |
 *   'three-quarters-from-mobile' |
 *   'three-quarters-from-desktop' |
 *   'full' |
 *   'full-from-mobile' |
 *   'full-from-desktop'
 * )} MacroExampleWidth
 */

/**
 * Nunjucks macro example fixture
 * (used by the Design System website)
 *
 * @typedef {Omit<Required<MacroExample>, 'prefix' | 'variants'> & {
 *   name: string,
 *   html: string
 * }} MacroExampleFixture
 */

/**
 * Nunjucks macro example fixtures
 * (used by the Design System website)
 *
 * @typedef {object} MacroExampleFixtures
 * @property {string} name - Component friendly name
 * @property {string} component - Component directory name
 * @property {MacroExampleFixture[]} fixtures - Nunjucks macro example fixtures
 */

/**
 * Nunjucks macro option
 * (used by the Design System website)
 *
 * @typedef {Omit<MacroParam, 'params'> & { name: string, params?: MacroOption[] }} MacroOption
 */

/**
 * @import { MacroRenderOptions } from './nunjucks.mjs'
 */

exports.render = render;
//# sourceMappingURL=components.js.map
