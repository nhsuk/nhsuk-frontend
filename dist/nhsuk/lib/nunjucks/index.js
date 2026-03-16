'use strict';

var prettier = require('@prettier/sync');
var outdent = require('outdent');
var environment = require('./environment.js');
var index = require('./filters/index.js');
var index$1 = require('./globals/index.js');

/**
 * Render macro HTML
 *
 * @param {string} macroName - The name of the macro
 * @param {string} macroPath - The path to the file containing the macro
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
function renderMacro(macroName, macroPath, options) {
  return renderString(macro(macroName, macroPath, options), {
    env: options?.env
  })
}

/**
 * Return macro
 *
 * @param {string} macroName - The name of the macro
 * @param {string} macroPath - The path to the file containing the macro
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns Nunjucks code to render the macro
 */
function macro(macroName, macroPath, options) {
  let macroString = `{% from "${macroPath}" import ${macroName} -%}\n\n`;
  let macroCall = `${macroName}()`;

  // Format Nunjucks options without quoted keys
  if (options?.context && Object.keys(options.context).length) {
    const paramsFormatted = JSON.stringify(options.context, undefined, 2);

    macroCall = prettier
      .format(`${macroName}(${paramsFormatted})`, {
        parser: 'espree',
        semi: false,
        singleQuote: false,
        trailingComma: 'none'
      })
      .trim();
  }

  // If we're nesting child components or text, pass the children to the macro
  // using the 'caller' Nunjucks feature
  macroString += options?.callBlock
    ? `{% call ${macroCall} -%}\n\n${options.callBlock.trim()}\n\n{%- endcall %}`
    : `{{ ${macroCall} }}`;

  return macroString
}

/**
 * Render template HTML
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns HTML rendered by the template
 */
function renderTemplate(templatePath, options) {
  return renderString(template(templatePath, options), options)
}

/**
 * Return template
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns Nunjucks code to render the template
 */
function template(templatePath, options) {
  let viewString = `{% extends "${templatePath}" %}`;

  if (options?.blocks) {
    for (const [name, content] of Object.entries(options.blocks)) {
      viewString += outdent.outdent`
        {% block ${name} %}
        ${content}
        {% endblock %}
      `;
    }
  }

  return viewString
}

/**
 * Render string
 *
 * @param {string} string - Nunjucks string to render
 * @param {TemplateRenderOptions} [options] - Nunjucks render options
 * @returns HTML rendered from the Nunjucks string
 */
function renderString(string, options) {
  const nunjucksEnv = options?.env ?? environment.env;
  return nunjucksEnv.renderString(string, options?.context ?? {})
}

/**
 * Nunjucks macro render options
 *
 * @typedef {object} MacroRenderOptions
 * @property {string | { [param: string]: unknown }} [context] - Nunjucks mixed context (optional)
 * @property {string} [callBlock] - Nunjucks macro `caller()` content (optional)
 * @property {string} [prefix] - Component name prefix (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * Nunjucks template render options
 *
 * @typedef {object} TemplateRenderOptions
 * @property {{ [param: string]: unknown }} [context] - Nunjucks context object (optional)
 * @property {{ [block: string]: string }} [blocks] - Nunjucks blocks content in template (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * @import { Environment } from 'nunjucks'
 */

exports.configure = environment.configure;
exports.env = environment.env;
exports.filters = index;
exports.globals = index$1;
exports.macro = macro;
exports.renderMacro = renderMacro;
exports.renderString = renderString;
exports.renderTemplate = renderTemplate;
exports.template = template;
//# sourceMappingURL=index.js.map
