'use strict';

const name = 'Images';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the image.',
    released: '10.0.0'
  },
  src: {
    type: 'string',
    required: true,
    description: 'The source location of the image.',
    released: '1.0.0'
  },
  alt: {
    type: 'string',
    required: true,
    description: 'The alt text of the image.',
    released: '1.0.0'
  },
  caption: {
    type: 'object',
    required: false,
    description: 'Optional caption for the image.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'Text to add within the caption. If `html` is provided, the `text` option will be ignored.',
        released: '10.3.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'HTML to add within the caption. If `html` is provided, the `text` option will be ignored.',
        released: '10.3.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the figcaption element.',
        released: '10.3.0'
      }
    }
  },
  sizes: {
    type: 'string',
    required: false,
    description: 'A list of screen sizes for the browser to load the correct image from the srcset images.',
    released: '3.0.0'
  },
  srcset: {
    type: 'string',
    required: false,
    description: 'A list of image source URLs and their respective sizes. Separate each image with a comma.',
    released: '3.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the image container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the image container.',
    released: '1.0.0'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
