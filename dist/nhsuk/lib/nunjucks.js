'use strict';

var node_path = require('node:path');
var nunjucks = require('nunjucks');
var outdent = require('outdent');

const { NODE_ENV } = process.env;

const nhsukFrontendPath = node_path.resolve(__dirname, '../../..');

// Nunjucks default environment
const env = configure();

/**
 * Nunjucks environment factory
 *
 * @param {string | string[]} [viewsPath] - Additional custom views path(s) (optional)
 * @param {ConfigureOptions} [options] - Nunjucks configure options (optional)
 */
function configure(viewsPath = [], options = {}) {
  const basePath =
    NODE_ENV === 'test'
      ? node_path.join(nhsukFrontendPath, 'src') // Use source files for tests
      : node_path.join(nhsukFrontendPath, 'dist'); // Use build output for review

  // Append default search paths
  const searchPaths = [viewsPath]
    .flat()
    .concat([
      node_path.join(basePath, 'nhsuk/components'),
      node_path.join(basePath, 'nhsuk/macros'),
      node_path.join(basePath, 'nhsuk'),
      basePath
    ]);

  // Nunjucks environment
  return nunjucks.configure(searchPaths, {
    lstripBlocks: true, // Remove leading spaces from a block/tag
    trimBlocks: true, // Remove trailing newlines from a block/tag
    ...options
  })
}

/**
 * Render macro HTML
 *
 * @param {string} macroName - The name of the macro
 * @param {string} macroPath - The path to the file containing the macro
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the macro
 */
function renderMacro(macroName, macroPath, options) {
  const paramsFormatted = JSON.stringify(options?.context ?? {}, undefined, 2);

  let macroString = `{%- from "${macroPath}" import ${macroName} -%}`;

  // If we're nesting child components or text, pass the children to the macro
  // using the 'caller' Nunjucks feature
  macroString += options?.callBlock
    ? `{%- call ${macroName}(${paramsFormatted}) -%}${options.callBlock}{%- endcall -%}`
    : `{{- ${macroName}(${paramsFormatted}) -}}`;

  return renderString(macroString, {
    env: options?.env
  })
}

/**
 * Render string
 *
 * @param {string} string - Nunjucks string to render
 * @param {TemplateRenderOptions} [options] - Nunjucks render options
 * @returns HTML rendered from the Nunjucks string
 */
function renderString(string, options) {
  const nunjucksEnv = options?.env ?? env;
  return nunjucksEnv.renderString(string, options?.context ?? {})
}

/**
 * Render template HTML
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns HTML rendered by template.njk
 */
function renderTemplate(templatePath, options) {
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

  return renderString(viewString, options)
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
 * @import { ConfigureOptions, Environment } from 'nunjucks'
 */

exports.configure = configure;
exports.env = env;
exports.nhsukFrontendPath = nhsukFrontendPath;
exports.renderMacro = renderMacro;
exports.renderString = renderString;
exports.renderTemplate = renderTemplate;
//# sourceMappingURL=nunjucks.js.map
