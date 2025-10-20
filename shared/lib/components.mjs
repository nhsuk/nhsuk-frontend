import { createRequire } from 'node:module'
import { basename, join } from 'node:path'

import { paths } from '@nhsuk/frontend-config'
import { files, nunjucks } from '@nhsuk/frontend-lib'
import camelCase from 'lodash/camelCase.js'

// Create require for sync import
const importSync = createRequire(import.meta.url)

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
    numeric: true,
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
    Object.entries(options.examples ?? {}).sort(([nameA], [nameB]) => {
      for (const [find, replace] of /** @type {const} */ ([
        // Sort default to top
        ['default', ''],

        // Sort do before don't
        ['(do)', '1 do-dont'],
        ["(don't)", '2 do-dont'],

        // Sort urgent with non-urgent
        ['non-', ''],

        // Sort sizes numerically
        ['size S', 'size 1'],
        ['size M', 'size 2'],
        ['size L', 'size 3'],
        ['size XL', 'size 4'],

        // Sort small form controls to end
        [/^small/, 'ZZZ']
      ])) {
        nameA = nameA.replace(find, replace)
        nameB = nameB.replace(find, replace)
      }

      return collator.compare(nameA, nameB)
    })
  )

  return data
}

/**
 * Load all component data (from source)
 */
export async function loadAll() {
  const components = getNames()

  // Load component data per directory
  return Promise.all(components.map(load))
}

/**
 * Get component names
 */
export function getNames() {
  const listing = files.getDirectories('nhsuk/components', {
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
 * Get component fixtures (from dist)
 *
 * @param {string} component - Component directory name
 * @returns {MacroExampleFixtures} Nunjucks macro example fixtures
 */
export function getFixtures(component) {
  const componentPath = join(paths.pkg, `dist/nhsuk/components/${component}`)

  return /** @type {MacroExampleFixtures} */ (
    importSync(join(componentPath, 'fixtures.json'))
  )
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
  const macroName = camelCase(renamed.get(component) ?? component)
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
 * Nunjucks macro screenshot
 *
 * @typedef {object} MacroScreenshot
 * @property {MacroExampleState[]} [states] - Selector state (optional)
 * @property {string} [selector] - Selector to apply state (optional)
 * @property {string} [name] - Selector name (optional)
 * @property {('mobile' | 'tablet' | 'desktop' | 'large-desktop' | 'xlarge-desktop')[]} [viewports] - Screenshot viewports (optional)
 */

/**
 * Nunjucks macro example
 *
 * @typedef {object} MacroExample
 * @property {string | undefined} [description] - Example description (optional)
 * @property {{ [param: string]: unknown }} [context] - Nunjucks context object (optional)
 * @property {string | undefined} [callBlock] - Nunjucks macro `caller()` content (optional)
 * @property {MacroExampleOptions} [options] - Review app example options (optional)
 * @property {MacroScreenshot | MacroScreenshot[] | boolean} [screenshot] - Screenshot and include in visual regression tests
 */

/**
 * Nunjucks macro example review app options
 *
 * @typedef {object} MacroExampleOptions
 * @property {boolean} [hidden] - Hide example on component listing pages
 * @property {string} [layout] - Nunjucks layout for component preview page
 * @property {MacroExampleWidth | false} [width] - Component grid column width (or set `false` to remove width container)
 */

/**
 * Nunjucks macro example state
 *
 * @typedef {('focus' | 'hover' | 'active' | 'click')} MacroExampleState
 */

/**
 * Nunjucks macro example column width
 *
 * @typedef {('one-third' | 'two-thirds' | 'one-half' | 'full')} MacroExampleWidth
 */

/**
 * Nunjucks macro example fixture
 * (used by the Design System website)
 *
 * @typedef {Required<MacroExample> & { name: string, html: string }} MacroExampleFixture
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
 * @import { MacroRenderOptions } from './nunjucks/index.mjs'
 */
