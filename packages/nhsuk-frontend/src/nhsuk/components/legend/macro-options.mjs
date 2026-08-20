export const name = 'Legend'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the legend.',
    released: '10.6.1'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored.',
    released: '10.2.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored.',
    released: '10.2.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire legend component in a `call` block.',
    released: '10.2.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'A visually hidden suffix added to the legend.',
    released: '10.6.1'
  },
  caption: {
    type: 'object',
    required: false,
    description: 'Optional caption for the legend.',
    released: '10.6.1',
    isComponent: true
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.2.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional legend heading level. Defaults to `1`.',
    released: '10.6.1'
  },
  isPageHeading: {
    type: 'boolean',
    required: false,
    description: 'Whether the legend also acts as a page heading.',
    released: '10.2.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the legend.',
    released: '10.2.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the legend.',
    released: '10.6.1'
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
