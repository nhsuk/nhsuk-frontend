import { components } from '@nhsuk/frontend-lib'

export const name = 'Pagination'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the pagination container.'
  },
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

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      previousUrl: '#/section/treatments',
      previousPage: 'Treatments',
      nextUrl: '#/section/symptoms',
      nextPage: 'Symptoms'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-pagination-item--previous a',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
