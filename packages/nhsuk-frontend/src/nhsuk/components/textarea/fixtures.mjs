/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      name: 'example'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'with-hint',
      name: 'example'
    }
  },
  'label': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'custom-size',
      name: 'example'
    },
    options: {
      variants: [
        {
          description: 'with size S',
          context: {
            label: {
              classes: 'nhsuk-label--s'
            }
          }
        },
        {
          description: 'with size M',
          context: {
            label: {
              classes: 'nhsuk-label--m'
            }
          }
        },
        {
          description: 'with size L',
          context: {
            label: {
              classes: 'nhsuk-label--l'
            }
          }
        },
        {
          description: 'with size XL',
          context: {
            label: {
              classes: 'nhsuk-label--xl'
            }
          }
        }
      ]
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'without-heading',
      name: 'example'
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'You must provide an explanation'
      },
      id: 'with-error-message',
      name: 'example'
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-error-message'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      errorMessage: {
        text: 'You must provide an explanation'
      },
      id: 'with-hint-error',
      name: 'example'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Full address',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'with-autocomplete-attribute',
      name: 'example',
      autocomplete: 'street-address'
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
