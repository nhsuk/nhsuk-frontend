import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Pagination'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  previousUrl: {
    type: 'string',
    required: true,
    description: 'The value of the previous link href attribute.'
  },
  previousPage: {
    type: 'string',
    required: true,
    description: 'The text of the previous link.'
  },
  nextUrl: {
    type: 'string',
    required: true,
    description: 'The value of the next link href attribute.'
  },
  nextPage: {
    type: 'string',
    required: true,
    description: 'The text of the next link.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the pagination container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the pagination container.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
