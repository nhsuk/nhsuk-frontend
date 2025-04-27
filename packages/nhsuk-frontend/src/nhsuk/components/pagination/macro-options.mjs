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
  previous: {
    type: 'object',
    required: true,
    description: 'The value of the previous link href attribute.',
    params: {
      href: {
        type: 'string',
        required: true,
        description: 'The value of the previous link href attribute.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          "Text to use within the previous link, defaults to 'Previous page', with 'page' being visually hidden. If `html` is provided, the `text` argument will be ignored."
      },
      html: {
        type: 'string',
        required: false,
        description:
          'If `text` is set, this is not required. HTML to use within the previous link. If `html` is provided, the `text` argument will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The name of the previous page to include within the previous link text'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the previous link.'
      }
    }
  },
  next: {
    type: 'object',
    required: true,
    description: 'The value of the next link href attribute.',
    params: {
      href: {
        type: 'string',
        required: true,
        description: 'The value of the next link href attribute.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          "Text to use within the next link, defaults to 'Next page', with 'page' being visually hidden. If `html` is provided, the `text` argument will be ignored."
      },
      html: {
        type: 'string',
        required: false,
        description:
          'If `text` is set, this is not required. HTML to use within the next link. If `html` is provided, the `text` argument will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The name of the next page to include within the previous link text'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the next link.'
      }
    }
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of items within the pagination component.',
    params: {
      number: {
        type: 'string',
        required: false,
        description: 'The pagination item text – usually a page number.'
      },
      href: {
        type: 'string',
        required: false,
        description:
          'The value of the item link `href`. Required unless the item is an ellipsis.'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          "The visually hidden label for the pagination item, which will be set as an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example 'Page 1'."
      },
      current: {
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to indicate the current page the user is on.'
      },
      ellipsis: {
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to specify an ellipsis, indicated skipped pages in a numbered sequence.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the list item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) to add to the item link.'
      }
    }
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
        href: '#/section/treatments',
        text: 'Previous',
        labelText: 'Treatments'
      },
      next: {
        href: '#/section/symptoms',
        text: 'Next',
        labelText: 'Symptoms'
      }
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-pagination__prev a',
      viewports: ['mobile', 'tablet', 'desktop']
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
          href: '#/page/1'
        },
        {
          ellipsis: true
        },
        {
          number: 6,
          href: '#/page/6'
        },
        {
          number: 7,
          href: '#/page/7',
          current: true
        },
        {
          number: 8,
          href: '#/page/8'
        },
        {
          ellipsis: true
        },
        {
          number: 10,
          href: '#/page/10'
        }
      ]
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-pagination__prev a',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
