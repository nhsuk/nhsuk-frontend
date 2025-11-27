import { join } from 'node:path'

import { components, files } from '@nhsuk/frontend-lib'
import mergeWith from 'lodash/mergeWith.js'

/**
 * Component data cache
 *
 * @type {ComponentData[] | undefined}
 */
let list

/**
 * Generate fixtures.json from component data
 *
 * @param {Pick<FileOptions, 'destPath'>} options - Asset options
 */
export async function generateFixtures({ destPath }) {
  list ??= await components.loadAll()

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
 * @param {Pick<FileOptions, 'destPath'>} options - Asset options
 */
export async function generateMacroOptions({ destPath }) {
  list ??= await components.loadAll()

  // Loop component names
  const macroOptions = list.map(async (data) => {
    const { component, params } = data

    // Add macro options as JSON (formatted)
    const options = components.getMacroOptions(params)
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
  const { name, component, examples } = data

  /**
   * Loop examples and generate fixtures
   *
   * @type {MacroExampleFixture[]}
   */
  const fixtures = Object.entries(examples).flatMap(
    ([exampleName, example]) => {
      const { variants = [] } = example

      // Duplicate examples for each variant
      const examples = variants.length
        ? variants.map((variant) => mergeExample(example, variant))
        : [example]

      // Prepare example fixtures for JSON output
      return examples.map((example) => ({
        name: exampleName,
        description: example.description,
        context: example.context ?? {},
        callBlock: example.callBlock,
        screenshot: example.screenshot ?? false,
        options: example.options ?? {},
        html: components.render(component, example).trim()
      }))
    }
  )

  return {
    name,
    component,
    fixtures
  }
}

/**
 * Merge component example with variant
 *
 * @param {MacroExample} example - Review app example
 * @param {MacroExample} variant - Review app example variant
 * @returns {MacroExample} Review app example (merged)
 */
export function mergeExample(example, variant) {
  return mergeWith({}, variant, example, (target, source, key) => {
    if (
      key === 'classes' &&
      typeof target === 'string' &&
      typeof source === 'string' &&
      !target.includes(source)
    ) {
      // Join 'classes' strings without overwriting
      // e.g. `nhsuk-radios--small nhsuk-radios--inline`
      return `${target} ${source}`.trim()
    }

    // Prefer default merge behaviour
    return
  })
}

/**
 * @import { ComponentData, MacroExample, MacroExampleFixture, MacroExampleFixtures } from '@nhsuk/frontend-lib/components.mjs'
 * @import { FileOptions } from '@nhsuk/frontend-lib/files.mjs'
 */
