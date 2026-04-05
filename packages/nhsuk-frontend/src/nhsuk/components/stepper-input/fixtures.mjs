/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      name: 'example',
      min: 0
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        text: 'Include additional and repeat images'
      },
      id: 'with-hint-text',
      name: 'example',
      min: 0
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter how many images were taken'
      },
      id: 'with-error-message',
      name: 'example',
      min: 0
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        text: 'Include additional and repeat images'
      },
      errorMessage: {
        text: 'Enter how many images were taken'
      },
      id: 'with-error-message',
      name: 'example'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with button text': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      stepDownButton: {
        text: 'Decrease'
      },
      stepUpButton: {
        text: 'Increase'
      },
      id: 'with-button-text',
      name: 'example',
      min: 0,
      value: 2
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'How many images were taken?'
      },
      id: 'without-heading',
      name: 'example',
      min: 0
    }
  },
  'min': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      id: 'width-class',
      name: 'example'
    },
    variants: [
      {
        description: 'with 5',
        context: {
          min: 5
        }
      },
      {
        description: 'with 10',
        context: {
          min: 10
        }
      }
    ]
  },
  'max': {
    context: {
      label: {
        text: 'How many images were taken?',
        size: 'l',
        isPageHeading: true
      },
      id: 'width-class',
      name: 'example',
      min: 0
    },
    variants: [
      {
        description: 'with 5',
        context: {
          max: 5
        }
      },
      {
        description: 'with 10',
        context: {
          max: 10
        }
      }
    ]
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
