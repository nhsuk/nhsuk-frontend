import { join } from 'node:path'

import { components } from '@nhsuk/frontend-lib'

import { files } from './index.mjs'

/**
 * Generate fixtures.json from component data
 *
 * @param {Pick<AssetOptions, "destPath">} options - Asset options
 */
export async function generateFixtures({ destPath }) {
  const list = await components.loadAll()

  // Loop component names
  const fixtures = list.map(async (data) => {
    const fixture = generateFixture(data)

    // Add fixtures as JSON (formatted)
    const contents = JSON.stringify(fixture, undefined, 2)

    // Write fixtures.json to destination
    await files.write('fixtures.json', {
      destPath: join(destPath, data.component),
      output: { contents }
    })
  })

  if (!fixtures.length) {
    throw new Error('No fixtures to write')
  }

  await Promise.all(fixtures)
}

/**
 * Generate macro-options.json from component data
 *
 * @param {Pick<AssetOptions, "destPath">} options - Asset options
 */
export async function generateMacroOptions({ destPath }) {
  const list = await components.loadAll()

  // Loop component names
  const macroOptions = list.map(async (data) => {
    const { component, options } = data

    // Add macro options as JSON (formatted)
    const contents = JSON.stringify(options, undefined, 2)

    // Write macro-options.json to destination
    await files.write('macro-options.json', {
      destPath: join(destPath, component),
      output: { contents }
    })
  })

  if (!macroOptions.length) {
    throw new Error('No macro options to write')
  }

  await Promise.all(macroOptions)
}

/**
 * Component fixtures to JSON
 *
 * @param {ComponentData} data - Component data
 * @returns {MacroExampleFixtures} Macro example fixture
 */
export function generateFixture(data) {
  const { name, component, examples = {} } = data

  /**
   * Loop examples and generate fixtures
   *
   * @type {MacroExampleFixture[]}
   */
  const fixtures = Object.entries(examples).map(([exampleName, example]) => {
    return {
      name: exampleName,
      description: example.description,
      layout: example.layout,
      context: example.context ?? {},
      callBlock: example.callBlock,
      html: components.render(component, example).trim()
    }
  })

  return {
    name,
    component,
    fixtures
  }
}

/**
 * @import { ComponentData, MacroExampleFixture, MacroExampleFixtures } from '@nhsuk/frontend-lib/components.mjs'
 * @import { AssetOptions } from '@nhsuk/frontend-tasks/files.mjs'
 */
