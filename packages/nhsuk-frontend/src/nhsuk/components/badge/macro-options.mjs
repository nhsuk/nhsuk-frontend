export const name = 'Badge'

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
      'If `html` is set, this is not required. Text to use within the badge. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the badge. If `html` is provided, the `text` argument will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire badge component in a `call` block.'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'A visually hidden prefix used before the badge content. Use this to provide context when the badge content alone may be ambiguous — for example, `"Count"` so that `12` is read as `"Count: 12"`. Badge content like `"New"` or `"Updated"` is typically self-explanatory and does not need visually hidden text.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the badge element.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the badge element.'
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
