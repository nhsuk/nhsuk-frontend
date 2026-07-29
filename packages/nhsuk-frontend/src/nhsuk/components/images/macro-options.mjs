export const name = 'Images'

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
    description:
      'The source location of the image. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored.',
    released: '1.0.0'
  },
  srcset: {
    type: 'string',
    required: false,
    description:
      'A list of image source URLs and their respective sizes. Separate each image with a comma.',
    released: '3.0.0'
  },
  sizes: {
    type: 'string',
    required: false,
    description:
      'A list of screen sizes for the browser to load the correct image from the srcset images.',
    released: '3.0.0'
  },
  alt: {
    type: 'string',
    required: false,
    description:
      'The alt text of the image. Defaults to `""`. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `src` is set, this is not required. HTML to use within the image component. If `html` is provided, the `src`, `srcset`, `sizes` and `alt` options will be ignored.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire image component in a `call` block.',
    released: '10.6.0'
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
        description:
          'Text to add within the caption. If `html` is provided, the `text` option will be ignored.',
        released: '10.3.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'HTML to add within the caption. If `html` is provided, the `text` option will be ignored.',
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
  background: {
    type: 'string',
    required: false,
    description:
      'Background colour for the image component – `"card"` or `false`. Defaults to `"card"`. To remove the background colour, set `background` to `false`.',
    released: '10.6.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description:
      'If set to `false`, removes the border-bottom from the image component.',
    released: '10.6.0'
  },
  width: {
    type: 'string',
    required: false,
    description:
      'Width of the image component. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"two-thirds"`.',
    released: '10.6.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the image component.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the image component.',
    released: '1.0.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
