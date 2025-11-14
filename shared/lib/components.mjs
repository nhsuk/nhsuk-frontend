import { readFileSync } from 'node:fs'
import { basename, join } from 'node:path'

import { paths } from '@nhsuk/frontend-config'

import * as files from './files.mjs'
import * as names from './names.mjs'
import * as nunjucks from './nunjucks/index.mjs'

/**
 * Load single component data (from source)
 *
 * @param {string} component - Component directory name
 * @returns {Promise<ComponentData>} Component data
 */
export async function load(component) {
  const componentPath = join(paths.pkg, `src/nhsuk/components/${component}`)
  const fixturesPath = join(componentPath, 'fixtures.mjs')
  const optionsPath = join(componentPath, 'macro-options.mjs')

  const collator = new Intl.Collator('en', {
    ignorePunctuation: true,
    numeric: true,
    sensitivity: 'base'
  })

  const { name, params } = await import(optionsPath)

  // Import examples (optional) with fallback
  const fixtures = await import(fixturesPath).catch(() => {
    return { examples: {} }
  })

  // Sort examples by name, default at top
  const examples = Object.fromEntries(
    Object.entries(fixtures.examples).sort(([nameA], [nameB]) => {
      for (const [find, replace] of /** @type {const} */ ([
        // Sort default to top
        ['default', '!!!'],

        // Sort do before don't
        ['(do)', '1 do-dont'],
        ["(don't)", '2 do-dont'],

        // Sort urgent with non-urgent
        ['non-', ''],

        // Sort 'as a' variations to end
        [/^as a/, 'ZZZ']
      ])) {
        nameA = nameA.replace(find, replace)
        nameB = nameB.replace(find, replace)
      }

      return collator.compare(nameA, nameB)
    })
  )

  return {
    name,
    component,
    params,
    examples
  }
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
  return JSON.parse(
    readFileSync(
      join(paths.pkg, 'dist/nhsuk/components', component, 'fixtures.json'),
      'utf8'
    )
  )
}

/**
 * Get all component fixtures (from dist)
 */
export function getAllFixtures() {
  const components = getNames()

  // Load component fixtures per directory
  return components.map(getFixtures).filter((data) => data.fixtures.length)
}

/**
 * Render component HTML
 *
 * @param {string} component - Component directory name
 * @param {MacroRenderOptions | MacroExample} [options] - Nunjucks macro render options
 * @returns HTML rendered by the component
 */
export function render(component, options) {
  const renamed = new Map([
    ['do-dont-list', 'list'],
    ['images', 'image'],
    ['tables', 'table']
  ])

  // Replace plural directory name with singular macro name
  const macroName = names.kebabCaseToCamelCase(
    renamed.get(component) ?? component
  )

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
 * @property {{ [example: string]: MacroExample }} examples - Nunjucks macro option examples
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
 * @property {('watch' | 'mobile' | 'tablet' | 'desktop' | 'large-desktop' | 'xlarge-desktop')[]} [viewports] - Screenshot viewports (optional)
 */

/**
 * Nunjucks macro example
 *
 * @typedef {object} MacroExample
 * @property {string | undefined} [description] - Example description (optional)
 * @property {{ [param: string]: unknown }} [context] - Nunjucks context object (optional)
 * @property {string | undefined} [callBlock] - Nunjucks macro `caller()` content (optional)
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
 * @typedef {Omit<Required<MacroExample>, 'variants'> & {
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
 * @import { MacroRenderOptions } from './nunjucks/index.mjs'
 */
