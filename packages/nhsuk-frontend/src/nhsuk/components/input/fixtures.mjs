import { components } from '@nhsuk/frontend-lib'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      label: {
        text: 'What is your full name?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      name: 'example'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: 'with-hint',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: true
  },
  'with button': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'with-button',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false,
      formGroup: {
        afterInput: {
          html: components.render('button', {
            context: {
              text: 'Search',
              classes: 'nhsuk-button--secondary nhsuk-button--small'
            }
          })
        }
      }
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with button and error message': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-button-error-message',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false,
      formGroup: {
        afterInput: {
          html: components.render('button', {
            context: {
              text: 'Search',
              classes: 'nhsuk-button--secondary nhsuk-button--small'
            }
          })
        }
      }
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-error-message',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-hint-error',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error'
    }
  },
  'width': {
    context: {
      name: 'example',
      id: 'input-width'
    },
    variants: [
      {
        description: 'with 2 character',
        context: {
          label: {
            text: '2 character width'
          },
          classes: 'nhsuk-input--width-2'
        }
      },
      {
        description: 'with 3 character',
        context: {
          label: {
            text: '3 character width'
          },
          classes: 'nhsuk-input--width-3'
        }
      },
      {
        description: 'with 4 character',
        context: {
          label: {
            text: '4 character width'
          },
          classes: 'nhsuk-input--width-4'
        }
      },
      {
        description: 'with 5 character',
        context: {
          label: {
            text: '5 character width'
          },
          classes: 'nhsuk-input--width-5'
        }
      },
      {
        description: 'with 10 character',
        context: {
          label: {
            text: '10 character width'
          },
          classes: 'nhsuk-input--width-10'
        }
      },
      {
        description: 'with 20 character',
        context: {
          label: {
            text: '20 character width'
          },
          classes: 'nhsuk-input--width-20'
        }
      },
      {
        description: 'with 30 character',
        context: {
          label: {
            text: '30 character width'
          },
          classes: 'nhsuk-input--width-30'
        }
      }
    ]
  },
  'label': {
    context: {
      label: {
        text: 'What is your NHS number?',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    },
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
  },
  'without page heading': {
    context: {
      label: {
        text: 'What is your NHS number?'
      },
      id: 'without-heading',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with code input styling': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: 'with-code-input-styling',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      value: '999 123 4567',
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: true
  },
  'with prefix': {
    context: {
      label: {
        text: 'Cost in pounds',
        isPageHeading: true
      },
      id: 'with-prefix',
      name: 'example',
      prefix: {
        text: '£'
      },
      classes: 'nhsuk-input--width-5'
    },
    screenshot: true
  },
  'with prefix HTML': {
    context: {
      label: {
        text: 'Cost in pounds',
        isPageHeading: true
      },
      id: 'with-prefix',
      name: 'example',
      prefix: {
        html: '<span>£</span>'
      },
      classes: 'nhsuk-input--width-5'
    }
  },
  'with deprecated prefix string parameter': {
    context: {
      label: {
        text: 'Cost in pounds',
        isPageHeading: true
      },
      id: 'with-prefix',
      name: 'example',
      prefix: '£',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with suffix': {
    context: {
      label: {
        text: 'Weight in kilograms',
        isPageHeading: true
      },
      id: 'with-suffix',
      name: 'example',
      suffix: {
        text: 'kg'
      },
      classes: 'nhsuk-input--width-5'
    },
    screenshot: true
  },
  'with suffix HTML': {
    context: {
      label: {
        text: 'Weight in kilograms',
        isPageHeading: true
      },
      id: 'with-suffix',
      name: 'example',
      suffix: {
        html: '<span>kg</span>'
      },
      classes: 'nhsuk-input--width-5'
    }
  },
  'with deprecated suffix string parameter': {
    context: {
      label: {
        text: 'Weight in kilograms',
        isPageHeading: true
      },
      id: 'with-suffix',
      name: 'example',
      suffix: 'kg',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with prefix and suffix': {
    context: {
      label: {
        text: 'Cost per item, in pounds',
        isPageHeading: true
      },
      id: 'with-prefix-suffix',
      name: 'example',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per item'
      },
      classes: 'nhsuk-input--width-5'
    },
    screenshot: true
  },
  'with prefix and suffix and error': {
    context: {
      label: {
        text: 'Cost per item, in pounds',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter a cost per item, in pounds'
      },
      id: 'with-prefix-suffix',
      name: 'example',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per item'
      },
      classes: 'nhsuk-input--width-5'
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-prefix-suffix'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Enter a full postcode in England',
        isPageHeading: true
      },
      hint: {
        text: 'For example, LS1 1AB'
      },
      id: 'with-autocomplete-attribute',
      name: 'example',
      autocomplete: 'postal-code'
    },
    screenshot: true
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
