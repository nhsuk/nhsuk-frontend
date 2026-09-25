export const name = 'Badge'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the badge.',
    released: '10.7.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the badge. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the badge. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire badge component in a `call` block.',
    released: '10.7.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'Optional alias for the `visuallyHidden` option. Defaults to `"start"` placement when set to a string.',
    released: '10.7.0'
  },
  visuallyHidden: {
    type: 'string',
    required: false,
    description:
      'Optional visually hidden content used within the badge, for example `"Count"` when used to announce the number of items.',
    released: '10.7.0',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'Visually hidden text to use within the badge. If `html` is provided, the `text` option will be ignored.',
        released: '10.7.0'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'Visually hidden HTML to use within the badge. If `html` is provided, the `text` option will be ignored.',
        released: '10.7.0'
      },
      placement: {
        type: 'string',
        required: false,
        description:
          'Placement of the visually hidden content within the badge – `"start"` or `"end"`. Defaults to `"start"`.',
        released: '10.7.0'
      }
    }
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of badge. You can use only `"reverse"` or empty values with this option.',
    released: '10.7.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the badge.',
    released: '10.7.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the badge.',
    released: '10.7.0'
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
