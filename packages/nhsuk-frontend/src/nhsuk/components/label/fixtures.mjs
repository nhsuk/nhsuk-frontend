/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'text': {
    context: {
      text: 'What is your full name?',
      isPageHeading: true
    },
    variants: [
      {
        description: 'with size S',
        context: {
          classes: 'nhsuk-label--s'
        }
      },
      {
        description: 'with size M',
        context: {
          classes: 'nhsuk-label--m'
        }
      },
      {
        description: 'with size L',
        context: {
          classes: 'nhsuk-label--l'
        }
      },
      {
        description: 'with size XL',
        context: {
          classes: 'nhsuk-label--xl'
        }
      }
    ],
    screenshot: {
      viewports: ['tablet']
    }
  },
  'without page heading': {
    context: {
      text: 'What is your full name?'
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
