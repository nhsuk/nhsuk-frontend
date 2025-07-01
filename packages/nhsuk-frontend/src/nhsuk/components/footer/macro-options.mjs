import { components } from '@nhsuk/frontend-lib'

export const name = 'Footer'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  links: {
    type: 'array',
    required: false,
    description: 'Contains the array of the first column of footer link items.',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the first column.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the first column.'
      }
    }
  },
  linksColumn2: {
    type: 'array',
    required: false,
    description:
      'Contains the array of the second column of footer link items.',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the second column.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the second column.'
      }
    }
  },
  linksColumn3: {
    type: 'array',
    required: false,
    description: 'Contains the array of the third column of footer link items.',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the third column.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'The label for a footer link item in the third column.'
      }
    }
  },
  copyright: {
    type: 'string',
    required: false,
    description: 'Optional text for the copyright notice in the footer.'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the footer container, useful if you want to make the footer fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the footer container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the footer container.'
  },
  metaLinks: {
    type: 'array',
    required: false,
    description: 'Contains the array of key policy footer link items.',
    params: {
      href: {
        type: 'string',
        required: false,
        description: 'Href attribute for a key policy footer link item.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'The label for a key policy footer link item.'
      }
    }
  }
}

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    layout: 'layouts/example-full-width.njk',
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with links': {
    layout: 'layouts/example-full-width.njk',
    context: {
      links: [
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Cookies'
        },
        {
          href: '#',
          text: 'Privacy policy'
        },
        {
          href: '#',
          text: 'Terms and conditions'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with links and meta links': {
    layout: 'layouts/example-full-width.njk',
    context: {
      links: [
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Cookies'
        },
        {
          href: '#',
          text: 'Privacy policy'
        },
        {
          href: '#',
          text: 'Terms and conditions'
        }
      ],
      metaLinks: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Our policies'
        },
        {
          href: '#',
          text: 'Cookies'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with columns': {
    layout: 'layouts/example-full-width.njk',
    context: {
      links: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'Health A to Z'
        },
        {
          href: '#',
          text: 'Live Well'
        },
        {
          href: '#',
          text: 'Mental health'
        },
        {
          href: '#',
          text: 'Care and support'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Pregnancy'
        },
        {
          href: '#',
          text: 'NHS services'
        },
        {
          href: '#',
          text: 'Coronavirus (COVID-19)'
        }
      ],
      linksColumn2: [
        {
          href: '#',
          text: 'NHS App'
        },
        {
          href: '#',
          text: 'Find my NHS number'
        },
        {
          href: '#',
          text: 'Your health records'
        },
        {
          href: '#',
          text: 'About the NHS'
        },
        {
          href: '#',
          text: 'Healthcare abroad'
        }
      ],
      linksColumn3: [
        {
          href: '#',
          text: 'Other NHS websites'
        },
        {
          href: '#',
          text: 'Profile editor login'
        }
      ],
      metaLinks: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Our policies'
        },
        {
          href: '#',
          text: 'Cookies'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with custom copyright statement': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: '© East London NHS Foundation Trust',
      links: [
        {
          href: '#',
          text: 'Accessibility statement'
        },
        {
          href: '#',
          text: 'Give us feedback'
        },
        {
          href: '#',
          text: 'Cookies'
        },
        {
          href: '#',
          text: 'Privacy policy'
        },
        {
          href: '#',
          text: 'Terms and conditions'
        }
      ]
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
