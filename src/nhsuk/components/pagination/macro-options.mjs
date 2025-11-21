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
  items: {
    type: 'array',
    required: false,
    description: 'The items within the pagination component.',
    params: {
      number: {
        type: 'string',
        required: false,
        description:
          'The pagination item text – usually a page number.  Required unless the item is an ellipsis.'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1".'
      },
      href: {
        type: 'string',
        required: false,
        description: "The link's URL. Required unless the item is an ellipsis."
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
          'Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    }
  },
  previous: {
    type: 'object',
    required: false,
    description: 'A link to the previous page, if there is a previous page.',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.'
      },
      href: {
        type: 'string',
        required: true,
        description: "The previous page's URL."
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    }
  },
  next: {
    type: 'object',
    required: false,
    description: 'A link to the next page, if there is a next page.',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.'
      },
      href: {
        type: 'string',
        required: true,
        description: "The next page's URL."
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    }
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description:
      'The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes you want to add to the pagination `nav` parent.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent.'
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
      previous: {
        labelText: 'Treatments',
        href: '/section/treatments'
      },
      next: {
        labelText: 'Symptoms',
        href: '/section/symptoms'
      }
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with deprecated parameters': {
    context: {
      previousUrl: '/section/treatments',
      previousPage: 'Treatments',
      nextUrl: '/section/symptoms',
      nextPage: 'Symptoms'
    },
    options: {
      width: 'full'
    }
  },
  'with only previous': {
    context: {
      previous: {
        labelText: 'Treatments',
        href: '/section/treatments'
      }
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with only next': {
    context: {
      next: {
        labelText: 'Symptoms',
        href: '/section/symptoms'
      }
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with translations': {
    context: {
      previous: {
        text: 'Blaenorol',
        labelText: 'Driniaethau',
        href: '/section/driniaethau'
      },
      next: {
        text: 'Nesaf',
        labelText: 'Symptomau',
        href: '/section/symptomau'
      }
    },
    options: {
      width: 'full'
    }
  },
  'numbered': {
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
  'numbered with many pages (empty items)': {
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
        false,
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
        false,
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
    }
  },
  'numbered first page': {
    context: {
      next: {
        href: '#'
      },
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
      previous: {
        href: '#'
      },
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
  },
  'numbered with translations': {
    context: {
      previous: {
        text: 'Blaenorol',
        href: '#'
      },
      next: {
        text: 'Nesaf',
        href: '#'
      },
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
    }
  }
}

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
