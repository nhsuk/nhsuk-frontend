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
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the first column.'
      },
      label: {
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
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the second column.'
      },
      label: {
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
      url: {
        type: 'string',
        required: false,
        description:
          'Href attribute for a footer link item in the third column.'
      },
      label: {
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
      url: {
        type: 'string',
        required: false,
        description: 'Href attribute for a key policy footer link item.'
      },
      label: {
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
    context: {
      links: [
        {
          url: '#',
          label: 'Accessibility statement'
        },
        {
          url: '#',
          label: 'Give us feedback'
        },
        {
          url: '#',
          label: 'Cookies'
        },
        {
          url: '#',
          label: 'Privacy policy'
        },
        {
          url: '#',
          label: 'Terms and conditions'
        }
      ]
    }
  },
  'columns': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: '© Crown copyright',
      links: [
        {
          url: '#',
          label: 'Home'
        },
        {
          url: '#',
          label: 'Health A to Z'
        },
        {
          url: '#',
          label: 'Live Well'
        },
        {
          url: '#',
          label: 'Mental health'
        },
        {
          url: '#',
          label: 'Care and support'
        },
        {
          url: '#',
          label: 'Accessibility statement'
        },
        {
          url: '#',
          label: 'Pregnancy'
        },
        {
          url: '#',
          label: 'NHS services'
        },
        {
          url: '#',
          label: 'Coronavirus (COVID-19)'
        }
      ],
      linksColumn2: [
        {
          url: '#',
          label: 'NHS App'
        },
        {
          url: '#',
          label: 'Find my NHS number'
        },
        {
          url: '#',
          label: 'Your health records'
        },
        {
          url: '#',
          label: 'About the NHS'
        },
        {
          url: '#',
          label: 'Healthcare abroad'
        }
      ],
      linksColumn3: [
        {
          url: '#',
          label: 'Other NHS websites'
        },
        {
          url: '#',
          label: 'Profile editor login'
        }
      ],
      metaLinks: [
        {
          url: '#',
          label: 'About us'
        },
        {
          url: '#',
          label: 'Give us feedback'
        },
        {
          url: '#',
          label: 'Accessibility statement'
        },
        {
          url: '#',
          label: 'Our policies'
        },
        {
          url: '#',
          label: 'Cookies'
        }
      ]
    }
  },
  'with custom copyright statement': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: '© East London NHS Foundation Trust',
      links: [
        {
          url: '#',
          label: 'Accessibility statement'
        },
        {
          url: '#',
          label: 'Give us feedback'
        },
        {
          url: '#',
          label: 'Cookies'
        },
        {
          url: '#',
          label: 'Privacy policy'
        },
        {
          url: '#',
          label: 'Terms and conditions'
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
