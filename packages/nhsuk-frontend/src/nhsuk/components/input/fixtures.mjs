import { components } from '#lib'

import { examples as buttonExamples } from '../button/fixtures.mjs'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      label: {
        text: 'What is your full name?',
        size: 'l',
        isPageHeading: true
      },
      name: 'example'
    },
    screenshot: true
  },
  'disabled': {
    context: {
      label: {
        text: 'What is your full name?',
        size: 'l',
        isPageHeading: true
      },
      name: 'example',
      disabled: true
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: 'with-hint',
      name: 'example',
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: true
  },
  'with button': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      id: 'with-button',
      name: 'example',
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false,
      formGroup: {
        afterInput: {
          html: components.render(
            'button',
            buttonExamples['example secondary search button, small']
          )
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
        size: 'l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-button-error-message',
      name: 'example',
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false,
      formGroup: {
        afterInput: {
          html: components.render(
            'button',
            buttonExamples['example secondary search button, small']
          )
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
        size: 'l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-error-message',
      name: 'example',
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with error message and hint': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
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
      width: 10,
      code: true,
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
          width: 2
        }
      },
      {
        description: 'with 3 character',
        context: {
          label: {
            text: '3 character width'
          },
          width: 3
        }
      },
      {
        description: 'with 4 character',
        context: {
          label: {
            text: '4 character width'
          },
          width: 4
        }
      },
      {
        description: 'with 5 character',
        context: {
          label: {
            text: '5 character width'
          },
          width: 5
        }
      },
      {
        description: 'with 10 character',
        context: {
          label: {
            text: '10 character width'
          },
          width: 10
        }
      },
      {
        description: 'with 20 character',
        context: {
          label: {
            text: '20 character width'
          },
          width: 20
        }
      },
      {
        description: 'with 30 character',
        context: {
          label: {
            text: '30 character width'
          },
          width: 30
        }
      }
    ]
  },
  'width class': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      id: 'input-width',
      name: 'example',
      classes: 'nhsuk-input--width-10'
    }
  },
  'width class overriding width param': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      id: 'input-width',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      width: 30
    }
  },
  'label': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false
    },
    variants: [
      {
        description: 'with size S',
        context: {
          label: {
            size: 's'
          }
        }
      },
      {
        description: 'with size M',
        context: {
          label: {
            size: 'm'
          }
        }
      },
      {
        description: 'with size L',
        context: {
          label: {
            size: 'l'
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          label: {
            size: 'xl'
          }
        }
      },
      {
        description: 'with id attribute on',
        context: {
          label: {
            id: 'custom-id'
          }
        },
        options: {
          hidden: true
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
      width: 10,
      code: true,
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with code input styling': {
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: 'with-code-input-styling',
      name: 'example',
      width: 10,
      code: true,
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
      width: 5
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
      width: 5
    }
  },
  'with prefix deprecated option': {
    context: {
      label: {
        text: 'Cost in pounds',
        isPageHeading: true
      },
      id: 'with-prefix',
      name: 'example',
      prefix: '£',
      width: 5
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
      width: 5
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
      width: 5
    }
  },
  'with suffix deprecated option': {
    context: {
      label: {
        text: 'Weight in kilograms',
        isPageHeading: true
      },
      id: 'with-suffix',
      name: 'example',
      suffix: 'kg',
      width: 5
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
      width: 5
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
      width: 5
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
  },
  'example email address': {
    context: {
      label: {
        text: 'Email address'
      },
      name: 'contact-by-email',
      classes: 'nhsuk-u-width-two-thirds',
      spellcheck: false
    },
    options: {
      hidden: true
    }
  },
  'example phone number': {
    context: {
      label: {
        text: 'Phone number'
      },
      type: 'tel',
      name: 'contact-by-phone',
      classes: 'nhsuk-u-width-two-thirds'
    },
    options: {
      hidden: true
    }
  },
  'example phone number with error message': {
    context: {
      label: {
        text: 'Phone number'
      },
      errorMessage: {
        text: 'Enter your phone number'
      },
      type: 'tel',
      name: 'contact-by-phone',
      classes: 'nhsuk-u-width-two-thirds'
    },
    options: {
      hidden: true
    }
  },
  'example mobile phone number': {
    context: {
      label: {
        text: 'Mobile phone number'
      },
      type: 'tel',
      name: 'contact-by-text',
      classes: 'nhsuk-u-width-two-thirds'
    },
    options: {
      hidden: true
    }
  },
  'example address line 1': {
    context: {
      label: {
        text: 'Address'
      },
      name: 'address-line1',
      autocomplete: 'address-line1'
    },
    options: {
      hidden: true
    }
  },
  'example address line 2': {
    context: {
      label: {
        text: 'Address line 2 (optional)'
      },
      name: 'address-line2',
      autocomplete: 'address-line2'
    },
    options: {
      hidden: true
    }
  },
  'example address town or city': {
    context: {
      label: {
        text: 'Town or city'
      },
      name: 'address-town',
      autocomplete: 'address-level2',
      classes: 'nhsuk-u-width-two-thirds'
    },
    options: {
      hidden: true
    }
  },
  'example address postcode': {
    context: {
      label: {
        text: 'Postcode'
      },
      name: 'address-postcode',
      autocomplete: 'postal-code',
      width: 10
    },
    options: {
      hidden: true
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
