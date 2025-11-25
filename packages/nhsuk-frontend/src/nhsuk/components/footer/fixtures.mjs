import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      meta: {
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          {
            href: '#',
            text: 'Contact us'
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with copyright text only': {
    context: {},
    options: {
      width: false
    }
  },
  'with custom copyright text': {
    context: {
      copyright: {
        text: '© East London NHS Foundation Trust'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta (links only)': {
    context: {
      meta: {
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          {
            href: '#',
            text: 'Contact us'
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta (links and text)': {
    context: {
      copyright: {
        text: '© Crown copyright'
      },
      meta: {
        text: 'All content is available under the Open Government Licence v3.0, except where otherwise stated.',
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          {
            href: '#',
            text: 'Contact us'
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta (links and HTML)': {
    context: {
      copyright: {
        text: ''
      },
      meta: {
        html: outdent`
          <p class="nhsuk-body-s">All content is available under the Open Government Licence v3.0, except where otherwise stated.</p>
          <p class="nhsuk-body-s">© Custom copyright</p>
        `,
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          {
            href: '#',
            text: 'Contact us'
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
    options: {
      width: false
    }
  },
  'with single navigation group': {
    context: {
      navigation: {
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          {
            href: '#',
            text: 'Contact us'
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with single navigation group (empty items)': {
    context: {
      navigation: {
        items: [
          {
            href: '#',
            text: 'Accessibility statement'
          },
          false,
          false,
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
    options: {
      width: false
    }
  },
  'with multiple navigation groups': {
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
              text: 'NHS services'
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
              text: 'COVID-19'
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
              text: 'View your GP health records'
            },
            {
              href: '#',
              text: 'View your test results'
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with multiple navigation groups and custom HTML': {
    context: {
      copyright: {
        text: '© 2025 – Manchester University NHS Foundation Trust'
      },
      columns: 3,
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
        },
        {
          width: 'full',
          html: outdent`
            <p class="nhsuk-body-s">Cobbett House, Manchester University NHS
            Foundation Trust, Oxford Road, Manchester, M13 9WL</p>
          `
        }
      ]
    },
    options: {
      width: false
    }
  },
  'with multiple titled navigation groups': {
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with meta and navigation': {
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
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
