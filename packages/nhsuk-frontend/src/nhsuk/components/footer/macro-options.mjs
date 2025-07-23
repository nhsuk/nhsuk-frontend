import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Footer'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  navigation: {
    type: 'object',
    required: false,
    description:
      'The navigation section of the footer before the copyright information. Alternatively supports an array of `navigation` objects.',
    params: {
      title: {
        type: 'string',
        required: false,
        description: 'Title for group of footer navigation links.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          'Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored.'
      },
      width: {
        type: 'string',
        required: false,
        description:
          'Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`.'
      },
      items: {
        type: 'array',
        required: false,
        description:
          'Contains the array of footer navigation link items for this group.',
        params: {
          href: {
            type: 'string',
            required: true,
            description: 'Footer navigation link `href` attribute.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the anchor in the footer meta section.'
          }
        }
      }
    }
  },
  meta: {
    type: 'object',
    required: false,
    description:
      'The meta section of the footer after any navigation, before the copyright information.',
    params: {
      visuallyHiddenTitle: {
        type: 'string',
        required: false,
        description:
          'Title for meta `items` links. Defaults to `"Support links"`.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          'Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored.'
      },
      items: {
        type: 'array',
        required: false,
        description: 'Contains the array of key policy footer link items.',
        params: {
          href: {
            type: 'string',
            required: true,
            description: 'Footer meta link `href` attribute.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each footer meta link. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each footer meta link. If `html` is provided, the `text` option will be ignored.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the footer meta link.'
          }
        }
      }
    }
  },
  copyright: {
    type: 'object',
    required: false,
    description:
      'The copyright information in the footer component, this defaults to `"© NHS England"`.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used.'
      }
    }
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
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire footer component in a `call` block.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the footer container.'
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
  'with custom copyright text': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: {
        text: '© East London NHS Foundation Trust'
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta (links only)': {
    layout: 'layouts/example-full-width.njk',
    context: {
      meta: {
        items: [
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
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta (links and text)': {
    layout: 'layouts/example-full-width.njk',
    context: {
      meta: {
        text: `All content is available under the Open Government Licence v3.0, except where otherwise stated.`,
        items: [
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
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with single navigation group': {
    layout: 'layouts/example-full-width.njk',
    context: {
      navigation: {
        items: [
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
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with multiple navigation groups': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: {
        text: '© Crown copyright'
      },
      navigation: [
        {
          items: [
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
          ]
        },
        {
          items: [
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
          ]
        },
        {
          items: [
            {
              href: '#',
              text: 'Other NHS websites'
            },
            {
              href: '#',
              text: 'Profile editor login'
            }
          ]
        },
        {
          items: [
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
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with multiple navigation groups and custom HTML': {
    layout: 'layouts/example-full-width.njk',
    context: {
      copyright: {
        text: '© 2025 – Manchester University NHS Foundation Trust'
      },
      navigation: [
        {
          width: 'one-quarter',
          items: [
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
            }
          ]
        },
        {
          width: 'one-quarter',
          items: [
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
        {
          width: 'one-half',
          html: outdent`
            <p class="nhsuk-body-s nhsuk-u-margin-bottom-6"><strong>Manchester
            University NHS Foundation Trust (MFT)</strong> was formed on 1st
            October 2017 following the merger of Central Manchester University
            Hospitals NHS Foundation Trust (CMFT) and University Hospital of
            South Manchester NHS Foundation Trust (UHSM).</p>
          `
        }
      ]
    }
  },
  'with multiple titled navigation groups': {
    layout: 'layouts/example-full-width.njk',
    context: {
      navigation: [
        {
          title: 'Legal',
          items: [
            {
              href: '#',
              text: 'Looking after your data'
            },
            {
              href: '#',
              text: 'Freedom of information'
            },
            {
              href: '#',
              text: 'Modern Slavery and human trafficking statement'
            }
          ]
        },
        {
          title: 'Get in touch',
          items: [
            {
              href: '#',
              text: 'Contact us'
            },
            {
              href: '#',
              text: 'Press office'
            },
            {
              href: '#',
              text: 'Tell us what you think of our website'
            },
            {
              href: '#',
              text: 'RSS feeds'
            }
          ]
        },
        {
          title: 'Follow us',
          items: [
            {
              href: '#',
              text: 'LinkedIn'
            },
            {
              href: '#',
              text: 'YouTube'
            }
          ]
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta and navigation': {
    layout: 'layouts/example-full-width.njk',
    context: {
      navigation: [
        {
          items: [
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
          ]
        },
        {
          items: [
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
          ]
        },
        {
          items: [
            {
              href: '#',
              text: 'Other NHS websites'
            },
            {
              href: '#',
              text: 'Profile editor login'
            }
          ]
        }
      ],
      meta: {
        html: outdent`
          <p class="nhsuk-body-s">
            <svg class="nhsuk-u-static-margin-right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 17" aria-hidden="true" focusable="false" height="17" width="41">
              <path fill="currentColor" d="M35.77 12.4V.02l-4.3 2.8V16.8H41v-4.4Zm-10.38-.83a3.93 3.93 0 0 1-4.29.64 4.09 4.09 0 0 1-2.35-3.71 3.97 3.97 0 0 1 7.36-2.2l3.63-2.35A8.25 8.25 0 0 0 22.75.02c-3.1 0-5.8 1.74-7.22 4.3A8.3 8.3 0 0 0 8.3.02 8.4 8.4 0 0 0 0 8.5a8.4 8.4 0 0 0 8.3 8.48c3.1 0 5.8-1.75 7.22-4.32a8.17 8.17 0 0 0 12.7 2.2l1.64 1.93h.25V9.18h-6.79Zm-17.1 1.02A4.04 4.04 0 0 1 4.3 8.5c0-2.25 1.8-4.08 4-4.08s4 1.82 4 4.08c0 2.25-1.8 4.09-4 4.09"/>
            </svg>
            All content is available under the <a class="nhsuk-footer__list-item-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated.
          </p>
        `,
        items: [
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
      }
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
