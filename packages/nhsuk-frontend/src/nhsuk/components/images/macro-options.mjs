import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Images'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  src: {
    type: 'string',
    required: true,
    description: 'The source location of the image.'
  },
  alt: {
    type: 'string',
    required: true,
    description: 'The alt text of the image.'
  },
  caption: {
    type: 'string',
    required: false,
    description: 'Optional caption text for the image.'
  },
  sizes: {
    type: 'string',
    required: false,
    description:
      'A list of screen sizes for the browser to load the correct image from the srcset images.'
  },
  srcset: {
    type: 'string',
    required: false,
    description:
      'A list of image source URLs and their respective sizes. Separate each image with a comma.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the image container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the image container.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
