export const name = 'Label'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the label.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire label component in a `call` block.',
    released: '10.2.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'A visually hidden suffix added to the label.',
    released: '10.6.1'
  },
  caption: {
    type: 'object',
    required: false,
    description: 'Optional caption for the label.',
    released: '10.6.1',
    isComponent: true
  },
  for: {
    type: 'string',
    required: false,
    description:
      'The value of the `for` attribute, the ID of the input the label is associated with.',
    released: '1.0.0'
  },
  heading: {
    type: 'object',
    required: false,
    description: 'Whether the label also acts as a heading.',
    released: '10.6.1',
    isComponent: true,
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'If `html` is set, this is not required. Text to use within the label as a heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.1'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'If `text` is set, this is not required. HTML to use within the label as a heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.1'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'A visually hidden suffix added to the label as a heading.',
        released: '10.6.1'
      },
      caption: {
        type: 'object',
        required: false,
        description: 'Optional caption for the label as a heading.',
        released: '10.6.1',
        isComponent: true
      },
      size: {
        type: 'string',
        required: false,
        description:
          'Size of the label as a heading – `"s"`, `"m"`, `"l"` or `"xl"`.',
        released: '10.6.1'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional label heading level. Defaults to `1`.',
        released: '10.6.1'
      }
    }
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional alias for the label heading `level` option.',
    released: '10.6.1'
  },
  level: {
    type: 'integer',
    required: false,
    description: 'Optional label heading level. Defaults to `1`.',
    released: '10.6.1'
  },
  isPageHeading: {
    type: 'boolean',
    required: false,
    description: 'Replaced by the `heading` option.',
    released: '1.0.0',
    deprecated: '10.6.1'
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.2.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the label tag.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the label tag.',
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
