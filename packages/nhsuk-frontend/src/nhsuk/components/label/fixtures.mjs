/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      text: 'What is your full name?',
      size: 'l',
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
          size: 's'
        }
      },
      {
        description: 'with size M',
        context: {
          size: 'm'
        }
      },
      {
        description: 'with size L',
        context: {
          size: 'l'
        }
      },
      {
        description: 'with size XL',
        context: {
          size: 'xl'
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
