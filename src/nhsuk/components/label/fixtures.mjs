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
  'size class': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      isPageHeading: true
    }
  },
  'size class overriding size param': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      size: 's',
      isPageHeading: true
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
