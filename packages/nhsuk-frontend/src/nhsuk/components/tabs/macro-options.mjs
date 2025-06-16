import { components } from '@nhsuk/frontend-lib'

export const name = 'Tabs'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description:
      'This is used for the main component and to compose id attribute for each item.'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'String to prefix id for each tab item if no id is specified on each item.'
  },
  title: {
    type: 'string',
    required: false,
    description: 'Title for the tabs table of contents.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of tab items.',
    params: {
      id: {
        type: 'string',
        required: true,
        description:
          'Specific id attribute for the tab item. If omitted, then idPrefix string is required instead.'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The text label of a tab item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the tab.'
      },
      panel: {
        type: 'object',
        required: true,
        description: 'Content for the panel',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Specific id attribute for the tab item. If omitted, then idPrefix string is required instead.'
          },
          html: {
            type: 'string',
            required: true,
            description: 'The title of the panel.'
          },
          attributes: {
            type: 'object',
            required: false,
            description: 'The body of the panel.'
          }
        }
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
