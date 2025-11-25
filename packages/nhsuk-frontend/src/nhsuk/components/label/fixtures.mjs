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
  'size XL': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--xl',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size L': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size M': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--m',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size S': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--s',
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
