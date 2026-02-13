import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import nunjucks from 'nunjucks'
import { outdent } from 'outdent'

const { NODE_ENV } = process.env

export const nhsukFrontendPath = resolve(
  fileURLToPath(new URL('.', import.meta.url)),
  '../../..'
)

// Nunjucks default environment
export const env = configure()

/**
 * Nunjucks environment factory
 *
 * @param {string[]} [searchPaths] - Nunjucks search paths (optional)
 */
export function configure(searchPaths = []) {
  searchPaths.push(
    NODE_ENV === 'test'
      ? join(nhsukFrontendPath, 'src') // Use source files for tests
      : join(nhsukFrontendPath, 'dist') // Use build output for review
  )

  // Nunjucks environment
  return nunjucks.configure(searchPaths, {
    trimBlocks: true, // automatically remove trailing newlines from a block/tag
    lstripBlocks: true // automatically remove leading whitespace from a block/tag,
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
export function renderMacro(macroName, macroPath, options) {
  const paramsFormatted = JSON.stringify(options?.context ?? {}, undefined, 2)

  let macroString = `{%- from "${macroPath}" import ${macroName} -%}`

  // If we're nesting child components or text, pass the children to the macro
  // using the 'caller' Nunjucks feature
  macroString += options?.callBlock
    ? `{%- call ${macroName}(${paramsFormatted}) -%}${options.callBlock}{%- endcall -%}`
    : `{{- ${macroName}(${paramsFormatted}) -}}`

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
export function renderString(string, options) {
  const nunjucksEnv = options?.env ?? env
  return nunjucksEnv.renderString(string, options?.context ?? {})
}

/**
 * Render template HTML
 *
 * @param {string} templatePath - Nunjucks template path
 * @param {TemplateRenderOptions} [options] - Nunjucks template render options
 * @returns HTML rendered by template.njk
 */
export function renderTemplate(templatePath, options) {
  let viewString = `{% extends "${templatePath}" %}`

  if (options?.blocks) {
    for (const [name, content] of Object.entries(options.blocks)) {
      viewString += outdent`
        {% block ${name} %}
        ${content}
        {% endblock %}
      `
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
 * @import { Environment } from 'nunjucks'
 */
