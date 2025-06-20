import { join } from 'path'

import { components } from '@nhsuk/frontend-lib'

import { files } from './index.mjs'

/**
 * Generate macro-options.json from component data
 *
 * @param {Pick<AssetOptions, "destPath">} options - Asset options
 */
export async function generateMacroOptions({ destPath }) {
  const componentNames = await components.getNames()

  // Loop component names
  const macroOptions = componentNames.map(async (componentName) => {
    const { options } = await components.getData(componentName)

    // Add macro options as JSON (formatted)
    const contents = JSON.stringify(options, undefined, 2)

    // Write macro-options.json to destination
    await files.write('macro-options.json', {
      destPath: join(destPath, componentName),
      output: { contents }
    })
  })

  if (!macroOptions.length) {
    throw new Error('No macro options to write')
  }

  await Promise.all(macroOptions)
}

/**
 * @import { AssetOptions } from '@nhsuk/frontend-tasks/files.mjs'
 */
