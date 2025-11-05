import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    callBlock: outdent`
      ${components.render('input', {
        context: {
          label: {
            text: 'Address line 1'
          },
          name: 'address-line1',
          autocomplete: 'address-line1'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Address line 2 (optional)'
          },
          name: 'address-line2',
          autocomplete: 'address-line2'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Town or city'
          },
          name: 'address-town',
          autocomplete: 'address-level2',
          classes: 'nhsuk-u-width-two-thirds'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Postcode'
          },
          name: 'address-postcode',
          autocomplete: 'postal-code',
          classes: 'nhsuk-input--width-10'
        }
      })}
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'legend': {
    context: {
      legend: {
        text: 'What is your address?',
        isPageHeading: true
      }
    },
    variants: [
      {
        description: 'with size S',
        context: {
          legend: {
            size: 's'
          }
        }
      },
      {
        description: 'with size M',
        context: {
          legend: {
            size: 'm'
          }
        }
      },
      {
        description: 'with size L',
        context: {
          legend: {
            size: 'l'
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          legend: {
            size: 'xl'
          }
        }
      }
    ]
  },
  'without page heading': {
    context: {
      legend: {
        text: 'What is your address?'
      }
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
