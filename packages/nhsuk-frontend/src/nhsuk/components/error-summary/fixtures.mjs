/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      titleText: 'There is a problem',
      descriptionText: 'Describe the errors and how to correct them',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-day'
        }
      ]
    },
    screenshot: true
  },
  'with multiple errors': {
    context: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Enter your first name',
          href: '#example-first-name'
        },
        {
          text: 'Enter your last name',
          href: '#example-last-name'
        }
      ]
    }
  },
  'with multiple errors (empty items)': {
    context: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Enter your first name',
          href: '#example-first-name'
        },
        false
      ]
    }
  },
  'without description': {
    context: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-day'
        }
      ]
    }
  },
  'without error list': {
    context: {
      titleText: 'There is a problem',
      descriptionText: 'Describe the errors and how to correct them'
    }
  },
  'auto-focus disabled': {
    context: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-day'
        }
      ],
      disableAutoFocus: true
    },
    options: {
      hidden: true
    }
  },
  'auto-focus explicitly enabled': {
    context: {
      titleText: 'There is a problem',
      errorList: [
        {
          text: 'Date of birth must be in the past',
          href: '#example-day'
        }
      ],
      disableAutoFocus: false
    },
    options: {
      hidden: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
