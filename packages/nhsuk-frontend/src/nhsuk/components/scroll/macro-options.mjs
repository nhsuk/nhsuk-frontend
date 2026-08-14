export const name = 'Scroll'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the scrolling content. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the scrolling content. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` to add to the scroll component.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire scroll component in a `call` block.',
    released: '10.6.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of scroll. You can use only `"reverse"` or empty values with this option.',
    released: '10.6.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the scroll component.',
    released: '10.6.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the scroll component.',
    released: '10.6.0'
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
