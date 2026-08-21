export const name = 'Summary list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the summary list.',
    released: '10.0.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove separating borders from all rows.',
    released: '10.4.0'
  },
  lastRowBorder: {
    type: 'boolean',
    required: false,
    description:
      'If set to `false`, remove separating border from the last row.',
    released: '10.4.0'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'The rows within the summary list component.',
    released: '2.0.0',
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the row.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the row.',
        released: '9.0.0'
      },
      attributes: {
        type: 'string',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the row.',
        released: '10.6.0'
      },
      border: {
        type: 'boolean',
        required: false,
        description:
          'If set to `false`, remove separating border from the row.',
        released: '10.4.0'
      },
      key: {
        type: 'object',
        required: true,
        description:
          'The reference content (key) for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          id: {
            type: 'string',
            required: false,
            description: 'The ID of the key item.',
            released: '10.6.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          width: {
            type: 'string',
            required: false,
            description:
              'Specify the key wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`.',
            released: '10.6.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the key wrapper.',
            released: '2.0.0'
          },
          attributes: {
            type: 'string',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the key wrapper.',
            released: '10.6.0'
          }
        }
      },
      value: {
        type: 'object',
        required: true,
        description:
          'The value for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          id: {
            type: 'string',
            required: false,
            description: 'The ID of the value item.',
            released: '10.6.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          width: {
            type: 'string',
            required: false,
            description:
              'Specify the value wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`.',
            released: '10.6.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the value wrapper.',
            released: '2.0.0'
          },
          attributes: {
            type: 'string',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the value wrapper.',
            released: '10.6.0'
          }
        }
      },
      actions: {
        type: 'object',
        required: false,
        description:
          'The action link content for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          items: {
            type: 'array',
            required: false,
            description:
              'The action link items within the row item of the summary list component.',
            released: '2.0.0',
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
                released: '2.0.0'
              },
              html: {
                type: 'string',
                required: true,
                description:
                  'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.',
                released: '2.0.0'
              },
              visuallyHiddenText: {
                type: 'string',
                required: false,
                description:
                  'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.',
                released: '2.0.0'
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
                released: '2.0.0'
              },
              classes: {
                type: 'string',
                required: false,
                description: 'Classes to add to the action item.',
                released: '10.2.0'
              },
              attributes: {
                type: 'object',
                required: false,
                description:
                  'HTML attributes (for example data attributes) to add to the action item.',
                released: '10.2.0'
              }
            }
          },
          width: {
            type: 'string',
            required: false,
            description:
              'Specify the actions wrapper width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`.',
            released: '10.6.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the actions wrapper.',
            released: '10.2.0'
          },
          attributes: {
            type: 'string',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the actions wrapper.',
            released: '10.6.0'
          }
        }
      }
    }
  },
  html: {
    type: 'string',
    required: false,
    description: 'HTML to use within the summary list.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire summary list component in a `call` block.',
    released: '10.6.0'
  },
  card: {
    type: 'object',
    required: false,
    description:
      'Can be used to wrap a card around the summary list component. If any of these options are present, a card will wrap around the summary list.',
    released: '10.3.0',
    isComponent: true
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.',
    released: '2.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the container.',
    released: '2.0.0'
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
