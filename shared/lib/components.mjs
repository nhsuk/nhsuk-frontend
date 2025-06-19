import { basename, join } from 'path'

import { paths } from '@nhsuk/frontend-config'
import { getDirectories } from '@nhsuk/frontend-lib/files.mjs'
import camelCase from 'lodash/camelCase.js'
import nunjucks from 'nunjucks'

// Nunjucks default environment
const env = nunjucksEnv()

/**
 * Nunjucks environment factory
 *
 * @param {string[]} [searchPaths] - Nunjucks search paths (optional)
 * @param {ConfigureOptions} [nunjucksOptions] - Nunjucks options (optional)
 */
export function nunjucksEnv(searchPaths = [], nunjucksOptions = {}) {
  searchPaths.push(join(paths.pkg, 'src'))

  // Nunjucks environment
  return nunjucks.configure(searchPaths, {
    trimBlocks: true, // automatically remove trailing newlines from a block/tag
    lstripBlocks: true, // automatically remove leading whitespace from a block/tag,
    ...nunjucksOptions
  })
}

/**
 * Load single component data (from source)
 *
 * @param {string} component - Component directory name
 * @returns {Promise<ComponentData>} Component data
 */
export async function getData(component) {
  const optionsPath = join(
    paths.pkg,
    `src/nhsuk/components/${component}/macro-options.mjs`
  )

  const collator = new Intl.Collator('en', {
    ignorePunctuation: true,
    sensitivity: 'base'
  })

  // Bypass import cache (e.g. Gulp watch changes)
  const options = /** @type {Omit<ComponentData, "component">} */ (
    await import(`${optionsPath}?imported=${Date.now()}`)
  )

  // Add component directory name to options
  const data = /** @type {ComponentData} */ ({
    component,
    ...options
  })

  // Sort examples by name, default at top
  data.examples = Object.fromEntries(
    Object.entries(options.examples).sort(([nameA], [nameB]) =>
      collator.compare(
        nameA.replace('default', ''),
        nameB.replace('default', '')
      )
    )
  )

  return data
}

/**
 * Load all component data (from source)
 */
export async function getDataList() {
  const listing = await getDirectories('nhsuk/components', {
    cwd: join(paths.pkg, 'src')
  })

  // Use directory names only
  const components = listing
    .map((directoryPath) => basename(directoryPath))
    .sort()

  // Load component data per directory
  return Promise.all(components.map(getData))
}

/**
 * Get component names
 */
export async function getNames() {
  const listing = await getDirectories('nhsuk/components', {
    cwd: join(paths.pkg, 'src')
  })

  // Use directory names only
  return listing.map((directoryPath) => basename(directoryPath)).sort()
}

/**
 * Convert macro option params to array of options
 *
 * @param {{ [param: string]: MacroParam }} [params] - Nunjucks macro option params
 * @returns {MacroOption[] | undefined} Nunjucks macro options
 */
export function getMacroOptions(params) {
  if (!params) {
    return
  }

  // Format nested params
  return Object.entries(params).map(([name, param]) => {
    const option = /** @type {MacroOption} */ ({
      name,
      type: param.type,
      required: param.required,
      description: param.description
    })

    // Optional component flag
    if (param.isComponent) {
      option.isComponent = true
    }

    // Optional nested params
    if (param.params) {
      option.params = getMacroOptions(param.params)
    }

    return option
  })
}

/**
 * Render component HTML
 *
 * @param {string} component - Component directory name
 * @param {MacroRenderOptions} [options] - Nunjucks macro render options
 * @returns HTML rendered by the component
 */
export function render(component, options) {
  const renamed = new Map([
    ['do-dont-list', 'list'],
    ['images', 'image'],
    ['tables', 'table']
  ])

  // Replace plural directory name with singular macro name
  const macroName = camelCase(renamed.get(component) || component)
  const macroPath = `nhsuk/components/${component}/macro.njk`

  return renderMacro(macroName, macroPath, options)
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
  return renderString(`{% extends "${templatePath}" %}`, options)
}

/**
 * Component data
 *
 * @typedef {object} ComponentData
 * @property {string} name - Component friendly name
 * @property {string} component - Component directory name
 * @property {{ [param: string]: MacroParam }} params - Nunjucks macro option params
 * @property {{ [example: string]: MacroExample }} [examples] - Nunjucks macro option examples
 * @property {MacroOption[]} options - Nunjucks macro options fixtures
 */

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
 * Nunjucks macro option example
 *
 * @typedef {object} MacroExample
 * @property {string} [description] - Example description (optional)
 * @property {{ [param: string]: unknown }} [context] - Nunjucks context object (optional)
 * @property {string} [callBlock] - Nunjucks macro `caller()` content (optional)
 */

/**
 * Nunjucks macro option
 * (used by the Design System website)
 *
 * @typedef {Omit<MacroParam, 'params'> & { name: string, params?: MacroOption[] }} MacroOption
 */

/**
 * Nunjucks macro render options
 *
 * @typedef {object} MacroRenderOptions
 * @property {{ [param: string]: unknown } | unknown} [context] - Nunjucks context object (optional)
 * @property {string} [callBlock] - Nunjucks macro `caller()` content (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * Nunjucks template render options
 *
 * @typedef {object} TemplateRenderOptions
 * @property {{ [param: string]: unknown } | unknown} [context] - Nunjucks context object (optional)
 * @property {Environment} [env] - Nunjucks environment (optional)
 */

/**
 * @import { ConfigureOptions, Environment } from 'nunjucks'
 */
