export const name = 'Summary list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the summary list.'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'The rows within the summary list component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the row `div`.'
      },
      key: {
        type: 'object',
        required: true,
        description:
          'The reference content (key) for each row item in the summary list component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the key wrapper.'
          }
        }
      },
      value: {
        type: 'object',
        required: true,
        description:
          'The value for each row item in the summary list component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the value wrapper.'
          }
        }
      },
      actions: {
        type: 'object',
        required: false,
        description:
          'The action link content for each row item in the summary list component.',
        params: {
          items: {
            type: 'array',
            required: false,
            description:
              'The action link items within the row item of the summary list component.',
            params: {
              href: {
                type: 'string',
                required: true,
                description:
                  "The value of the link's `href` attribute for an action item."
              },
              text: {
                type: 'string',
                required: true,
                description:
                  'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.'
              },
              html: {
                type: 'string',
                required: true,
                description:
                  'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.'
              },
              visuallyHiddenText: {
                type: 'string',
                required: false,
                description:
                  'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.'
              },
              classes: {
                type: 'string',
                required: false,
                description: 'Classes to add to the action item.'
              },
              attributes: {
                type: 'object',
                required: false,
                description:
                  'HTML attributes (for example data attributes) to add to the action item.'
              }
            }
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the actions wrapper.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the container.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
