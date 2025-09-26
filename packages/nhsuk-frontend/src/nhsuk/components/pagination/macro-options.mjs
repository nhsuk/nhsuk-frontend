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
  'default': {
    context: {
      previousUrl: '/section/treatments',
      previousPage: 'Treatments',
      nextUrl: '/section/symptoms',
      nextPage: 'Symptoms'
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'previous only': {
    context: {
      previousUrl: '/section/treatments',
      previousPage: 'Treatments'
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'next only': {
    context: {
      nextUrl: '/section/treatments',
      nextPage: 'Treatments'
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'numbered': {
    context: {
      previousUrl: '#',
      nextUrl: '#',
      items: [
        {
          number: 1,
          href: '#'
        },
        {
          number: 2,
          href: '#',
          current: true
        },
        {
          number: 3,
          href: '#'
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'numbered with many pages': {
    context: {
      previousUrl: '#',
      nextUrl: '#',
      items: [
        {
          number: 1,
          href: '#'
        },
        {
          ellipsis: true
        },
        {
          number: 8,
          href: '#'
        },
        {
          number: 9,
          href: '#'
        },
        {
          number: 10,
          href: '#',
          current: true
        },
        {
          number: 11,
          href: '#'
        },
        {
          number: 12,
          href: '#'
        },
        {
          ellipsis: true
        },
        {
          number: 40,
          href: '#'
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'numbered first page': {
    context: {
      nextUrl: '#',
      items: [
        {
          number: 1,
          href: '#',
          current: true
        },
        {
          number: 2,
          href: '#'
        },
        {
          number: 3,
          href: '#'
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'numbered last page': {
    context: {
      previousUrl: '#',
      items: [
        {
          number: 1,
          href: '#'
        },
        {
          number: 2,
          href: '#'
        },
        {
          number: 3,
          href: '#',
          current: true
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
