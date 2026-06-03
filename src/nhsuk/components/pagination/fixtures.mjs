/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      previous: {
        labelText: 'Treatments',
        href: '#/section/treatments'
      },
      next: {
        labelText: 'Symptoms',
        href: '#/section/symptoms'
      }
    },
    options: {
      width: 'full'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-pagination-item--previous a',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with only previous': {
    context: {
      previous: {
        labelText: 'Treatments',
        href: '#/section/treatments'
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
        href: '#/section/symptoms'
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
        href: '#/section/driniaethau'
      },
      next: {
        text: 'Nesaf',
        labelText: 'Symptomau',
        href: '#/section/symptomau'
      }
    },
    options: {
      width: 'full'
    }
  },
  'numbered': {
    context: {
      previous: {
        href: '#/section/1'
      },
      next: {
        href: '#/section/3'
      },
      items: [
        {
          number: 1,
          href: '#/section/1'
        },
        {
          number: 2,
          href: '#/section/2',
          current: true
        },
        {
          number: 3,
          href: '#/section/3'
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
        href: '#/section/9'
      },
      next: {
        href: '#/section/11'
      },
      items: [
        {
          number: 1,
          href: '#/section/1'
        },
        {
          ellipsis: true
        },
        {
          number: 8,
          href: '#/section/8'
        },
        {
          number: 9,
          href: '#/section/9'
        },
        {
          number: 10,
          href: '#/section/10',
          current: true
        },
        {
          number: 11,
          href: '#/section/11'
        },
        {
          number: 12,
          href: '#/section/12'
        },
        {
          ellipsis: true
        },
        {
          number: 40,
          href: '#/section/40'
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
        href: '#/section/9'
      },
      next: {
        href: '#/section/11'
      },
      items: [
        {
          number: 1,
          href: '#/section/1'
        },
        {
          ellipsis: true
        },
        false,
        {
          number: 9,
          href: '#/section/9'
        },
        {
          number: 10,
          href: '#/section/10',
          current: true
        },
        {
          number: 11,
          href: '#/section/11'
        },
        false,
        {
          ellipsis: true
        },
        {
          number: 40,
          href: '#/section/40'
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
        href: '#/section/2'
      },
      items: [
        {
          number: 1,
          href: '#/section/1',
          current: true
        },
        {
          number: 2,
          href: '#/section/2'
        },
        {
          number: 3,
          href: '#/section/3'
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
        href: '#/section/2'
      },
      items: [
        {
          number: 1,
          href: '#/section/1'
        },
        {
          number: 2,
          href: '#/section/2'
        },
        {
          number: 3,
          href: '#/section/3',
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
        href: '#/section/1'
      },
      next: {
        text: 'Nesaf',
        href: '#/section/3'
      },
      items: [
        {
          number: 1,
          href: '#/section/1'
        },
        {
          number: 2,
          href: '#/section/2',
          current: true
        },
        {
          number: 3,
          href: '#/section/3'
        }
      ]
    },
    options: {
      width: 'full'
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
