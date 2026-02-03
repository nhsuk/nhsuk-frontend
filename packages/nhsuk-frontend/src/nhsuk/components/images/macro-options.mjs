export const name = 'Images'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the image.'
  },
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
    type: 'object',
    required: false,
    description: 'Optional caption for the image.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'Text to add within the caption. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'HTML to add within the caption. If `html` is provided, the `text` option will be ignored.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the figcaption element.'
      }
    }
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

/**
 * @import { MacroParam } from '#lib'
 */
