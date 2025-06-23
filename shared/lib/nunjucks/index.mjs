import { join } from 'path'

import { paths } from '@nhsuk/frontend-config'
import nunjucks from 'nunjucks'
import { outdent } from 'outdent'

import * as filters from './filters/index.mjs'

const { NODE_ENV } = process.env

// Nunjucks default environment
export const env = configure()

/**
 * Nunjucks environment factory
 *
 * @param {string[]} [searchPaths] - Nunjucks search paths (optional)
 * @param {ConfigureOptions} [nunjucksOptions] - Nunjucks options (optional)
 */
export function configure(searchPaths = [], nunjucksOptions = {}) {
  searchPaths.push(
    NODE_ENV === 'test'
      ? join(paths.pkg, 'src') // Use source files for tests
      : join(paths.pkg, 'dist') // Use build output for review
  )

  // Nunjucks environment
  const env = nunjucks.configure(searchPaths, {
    trimBlocks: true, // automatically remove trailing newlines from a block/tag
    lstripBlocks: true, // automatically remove leading whitespace from a block/tag,
    ...nunjucksOptions
  })

  // Add Nunjucks filters
  for (const [key, filter] of Object.entries(filters)) {
    env.addFilter(key, filter)
  }

  return env
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

  return renderString(macroString, options)
}

/**
 * Render string
 *
 * @param {string} string - Nunjucks string to render
 * @param {MacroRenderOptions | TemplateRenderOptions} [options] - Nunjucks render options
 * @returns HTML rendered from the Nunjucks string
 */
export function renderString(string, options) {
  const configure = options?.env ?? env
  return configure.renderString(string, options?.context ?? {})
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

        {% block ${name} -%}
          ${content}
        {%- endblock %}`
    }
  }

  return renderString(viewString, options)
}

/**
 * Nunjucks filters
 */
export * as filters from './filters/index.mjs'

/**
 * Nunjucks macro render options
 *
 * @typedef {object} MacroRenderOptions
 * @property {{ [param: string]: unknown } | unknown} [context] - Nunjucks mixed context (optional)
 * @property {string} [callBlock] - Nunjucks macro `caller()` content (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * Nunjucks template render options
 *
 * @typedef {object} TemplateRenderOptions
 * @property {{ [param: string]: unknown } | unknown} [context] - Nunjucks context object (optional)
 * @property {{ [block: string]: string }} [blocks] - Nunjucks blocks content in template (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * @import { ConfigureOptions, Environment } from 'nunjucks'
 */
