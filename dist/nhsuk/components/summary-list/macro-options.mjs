const name = 'Summary list';

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
    description: 'If set to `false`, remove separating border from the last row.',
    released: '10.4.0'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'The rows within the summary list component.',
    released: '2.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the row `div`.',
        released: '9.0.0'
      },
      border: {
        type: 'boolean',
        required: false,
        description: 'If set to `false`, remove separating border from the row.',
        released: '10.4.0'
      },
      key: {
        type: 'object',
        required: true,
        description: 'The reference content (key) for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the key wrapper.',
            released: '2.0.0'
          }
        }
      },
      value: {
        type: 'object',
        required: true,
        description: 'The value for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored.',
            released: '2.0.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the value wrapper.',
            released: '2.0.0'
          }
        }
      },
      actions: {
        type: 'object',
        required: false,
        description: 'The action link content for each row item in the summary list component.',
        released: '2.0.0',
        params: {
          items: {
            type: 'array',
            required: false,
            description: 'The action link items within the row item of the summary list component.',
            released: '2.0.0',
            params: {
              href: {
                type: 'string',
                required: true,
                description: "The value of the link's `href` attribute for an action item.",
                released: '2.0.0'
              },
              text: {
                type: 'string',
                required: true,
                description: 'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.',
                released: '2.0.0'
              },
              html: {
                type: 'string',
                required: true,
                description: 'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.',
                released: '2.0.0'
              },
              visuallyHiddenText: {
                type: 'string',
                required: false,
                description: 'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.',
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
                description: 'HTML attributes (for example data attributes) to add to the action item.',
                released: '10.2.0'
              }
            }
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the actions wrapper.',
            released: '10.2.0'
          }
        }
      }
    }
  },
  card: {
    type: 'object',
    required: false,
    description: 'Can be used to wrap a card around the summary list component. If any of these options are present, a card will wrap around the summary list.',
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
    description: 'HTML attributes (for example data attributes) to add to the container.',
    released: '2.0.0'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

export { name, params };
//# sourceMappingURL=macro-options.mjs.map
