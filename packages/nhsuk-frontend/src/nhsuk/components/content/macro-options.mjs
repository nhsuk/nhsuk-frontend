export const name = 'Content'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the HTML element.',
    released: '10.7.0'
  },
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
  name: {
    type: 'string',
    required: false,
    description:
      'Name for the HTML element as a button. If `href` is provided, this has no effect.',
    released: '10.7.0'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'HTML element as a button `value` attribute. If `href` is provided, this has no effect.',
    released: '10.7.0'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of HTML element as a button – `"button"` or `"submit"`.',
    released: '10.7.0'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The HTML element `href` attribute. If set, the content will use an `<a>` tag automatically unless `type` is provided.',
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
          'Placement of the visually hidden content – `"before"`, `"after"`, `"start"` or `"end"`.',
        released: '10.7.0'
      },
      element: {
        type: 'string',
        required: false,
        description:
          'HTML element for the visually hidden content – for example, `"span"`, `"p"`, `"h2"` or `"h3"`. Defaults to `"span"`.',
        released: '10.7.0'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the HTML element. If `type`, `href` or `element` are not not provided, this has no effect.',
    released: '10.7.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the HTML element. If `type`, `href` or `element` are not not provided, this has no effect.',
    released: '10.7.0'
  },
  element: {
    type: 'string',
    required: false,
    description:
      'Optional HTML element to wrap around the content – for example, `"span"`.',
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
