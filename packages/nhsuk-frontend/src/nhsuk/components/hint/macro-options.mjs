export const name = 'Hint text'

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
      'If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.',
    released: '1.0.0'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` attribute to add to the hint.',
    released: '1.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hint.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the hint.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of hint. You can use only `"reverse"` or empty values with this option.',
    released: '10.5.0'
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
