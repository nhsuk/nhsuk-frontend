import { readFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'

import { paths } from '@nhsuk/frontend-config'

import * as files from './files.mjs'

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
  const listing = files.getListing('nhsuk/components/*/template.njk', {
    cwd: join(paths.pkg, 'src')
  })

  // Use directory names only
  return listing.map((directoryPath) => basename(dirname(directoryPath))).sort()
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
 * Component data
 *
 * @typedef {object} ComponentData
 * @property {string} name - Component friendly name
 * @property {string} component - Component directory name
 * @property {{ [param: string]: MacroParam }} params - Nunjucks macro option params
 * @property {{ [example: string]: MacroExample }} examples - Nunjucks macro option examples
 */

/**
 * @import { MacroExample, MacroExampleFixtures, MacroOption, MacroParam } from 'nhsuk-frontend/lib'
 */
