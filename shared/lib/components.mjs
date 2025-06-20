import { basename, join } from 'path'

import { paths } from '@nhsuk/frontend-config'
import camelCase from 'lodash/camelCase.js'

import { files, nunjucks } from './index.mjs'

/**
 * Load single component data (from source)
 *
 * @param {string} component - Component directory name
 * @returns {Promise<ComponentData>} Component data
 */
export async function load(component) {
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
export async function loadAll() {
  const components = await getNames()

  // Load component data per directory
  return Promise.all(components.map(load))
}

/**
 * Get component names
 */
export async function getNames() {
  const listing = await files.getDirectories('nhsuk/components', {
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

  return nunjucks.renderMacro(macroName, macroPath, options)
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
 * @property {string} [layout] - Nunjucks layout for component (optional)
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
 * @import { MacroRenderOptions } from './nunjucks/index.mjs'
 */
