export const name = 'Caption'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the caption.',
    released: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the caption. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the caption. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire caption component in a `call` block.',
    released: '10.6.0'
  },
  placement: {
    type: 'string',
    required: true,
    description:
      'Placement of the caption relative to the heading – `"before"`, `"after"`, `"start"` or `"end"`.',
    released: '10.6.0'
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the caption – `"m"`, `"l"` or `"xl"`.',
    released: '10.6.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the caption.',
    released: '10.6.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the caption.',
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
