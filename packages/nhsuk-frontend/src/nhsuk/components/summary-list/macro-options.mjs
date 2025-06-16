import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Summary list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  rows: {
    type: 'array',
    required: true,
    description: 'Array of row item objects.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the row `div`.'
      },
      'key.text': {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the each key. If `html` is provided, the `text` argument will be ignored.'
      },
      'key.html': {
        type: 'string',
        required: true
      },
      'key.classes': {
        type: 'string',
        required: false,
        description: 'Classes to add to the key wrapper.'
      },
      'value.text': {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the each value. If `html` is provided, the `text` argument will be ignored.'
      },
      'value.html': {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the each value. If `html` is provided, the `text` argument will be ignored.'
      },
      'value.classes': {
        type: 'string',
        required: false,
        description: 'Classes to add to the value wrapper.'
      },
      'actions.classes': {
        type: 'string',
        required: false,
        description: 'Classes to add to the actions wrapper.'
      },
      'actions.items': {
        type: 'array',
        required: false,
        description: 'Array of action item objects.',
        params: {
          href: {
            type: 'string',
            required: true,
            description:
              'The value of the link href attribute for an action item.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within the each action item. If `html` is provided, the `text` argument will be ignored.'
          },
          visuallyHiddenText: {
            type: 'string',
            required: false,
            description:
              'Actions rely on context from the surrounding content so may require additional accessible text, text supplied to this option is appended to the end, use `html` for more complicated scenarios.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the summary list container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the summary list container.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
