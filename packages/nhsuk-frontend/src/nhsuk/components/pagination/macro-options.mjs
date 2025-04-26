import { components } from '@nhsuk/frontend-lib'

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

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      previous: {
        href: '/section/treatments',
        labelText: 'Treatments'
      },
      next: {
        href: '/section/symptoms',
        labelText: 'Symptoms'
      }
    }
  },
  numbered: {
    context: {
      previous: {
        href: '#'
      },
      next: {
        href: '#'
      },
      items: [
        {
          number: 1,
          href: '#'
        },
        {
          ellipsis: true
        },
        {
          number: 6,
          href: '#'
        },
        {
          number: 7,
          href: '#',
          current: true
        },
        {
          number: 8,
          href: '#'
        },
        {
          ellipsis: true
        },
        {
          number: 10,
          href: '#'
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
