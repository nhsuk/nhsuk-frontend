export const name = 'Warning callout'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the warning callout.',
    released: '10.0.0'
  },
  heading: {
    type: 'object',
    required: true,
    description: 'Heading to be used on the warning callout.',
    released: '10.6.0',
    isComponent: true,
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the heading.',
        released: '10.6.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the heading.',
        released: '10.6.0'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level for the heading. Defaults to `3`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the heading.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the heading.',
        released: '10.6.0'
      }
    }
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Replaced by the `heading.level` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.classes` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text content to be used within the warning callout.',
    released: '9.5.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'HTML content to be used within the warning callout.',
    released: '9.5.0'
  },
  actions: {
    type: 'object',
    required: false,
    description: 'Can be used to add actions to the warning callout.',
    released: '10.3.0',
    params: {
      items: {
        type: 'array',
        required: false,
        description:
          'Array of actions as links for use in the warning callout.',
        released: '10.3.0',
        params: {
          id: {
            type: 'string',
            required: false,
            description: 'The ID of the action item.',
            released: '10.6.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          visuallyHiddenText: {
            type: 'string',
            required: false,
            description:
              'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.',
            released: '10.3.0'
          },
          name: {
            type: 'string',
            required: false,
            description:
              'Name for the `button`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          type: {
            type: 'string',
            required: false,
            description:
              'Type of `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          value: {
            type: 'string',
            required: false,
            description:
              'The `value` attribute for the `button`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          href: {
            type: 'string',
            required: true,
            description:
              'The URL that the action item should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined.',
            released: '10.3.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the action item.',
            released: '10.3.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the action item.',
            released: '10.3.0'
          }
        }
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the actions wrapper.',
        released: '10.3.0'
      }
    }
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire warning callout component in a `call` block.',
    released: '9.5.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the warning callout.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the warning callout.',
    released: '1.0.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'A visually hidden prefix used before the heading. Defaults to `"Important"`.',
    released: '10.1.0'
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
