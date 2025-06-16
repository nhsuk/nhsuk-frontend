import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Contents list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  items: {
    type: 'array',
    required: true,
    description: 'Array of content list items objects.',
    params: {
      href: {
        type: 'string',
        required: true,
        description: 'href value to use within each content list item label.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text to use within each content list item label.'
      }
    }
  },
  current: {
    type: 'boolean',
    required: false,
    description: 'Set the current active page.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the content list container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to items in the content list.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
