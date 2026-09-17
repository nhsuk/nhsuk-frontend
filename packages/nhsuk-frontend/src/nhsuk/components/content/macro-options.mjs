export const name = 'Content'

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
      'If `html` is set, this is not required. Text to use within the content. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the content. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire content component in a `call` block.',
    released: '10.7.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The HTML element `href` attribute.',
    released: '10.7.0'
  },
  visuallyHidden: {
    type: 'object',
    required: true,
    description: 'Optional visually hidden content.',
    released: '10.7.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the visually hidden content.',
        released: '10.7.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the visually hidden content.',
        released: '10.7.0'
      },
      placement: {
        type: 'string',
        required: true,
        description:
          'Placement of the visually hidden content – `"start"` or `"end"`.',
        released: '10.7.0'
      }
    }
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
