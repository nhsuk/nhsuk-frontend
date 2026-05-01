import { outdent } from 'outdent'

import { components } from '#lib'

import { examples as inputExamples } from '../input/fixtures.mjs'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    callBlock: outdent`
      ${components.render('input', inputExamples['example address line 1'])}
      ${components.render('input', inputExamples['example address line 2'])}
      ${components.render('input', inputExamples['example address town or city'])}
      ${components.render('input', inputExamples['example address postcode'])}
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'legend': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
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
  'with legend size class': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  'with legend size class overriding size param': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        size: 's',
        isPageHeading: true
      }
    }
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
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
