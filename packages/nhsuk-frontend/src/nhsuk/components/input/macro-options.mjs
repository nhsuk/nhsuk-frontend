import { components } from '@nhsuk/frontend-lib'

export const name = 'Input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the input. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The name of the input, which is submitted with the form data.'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of input control to render. Defaults to `"text"`.'
  },
  inputmode: {
    type: 'string',
    required: false,
    description: 'Optional value for inputmode.'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the input.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  label: {
    type: 'object',
    required: true,
    description: 'Options for the label component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Options for the hint component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  prefix: {
    type: 'object',
    required: false,
    description: 'Can be used to add a prefix to the text input component.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored.'
      }
    }
  },
  suffix: {
    type: 'object',
    required: false,
    description: 'Can be used to add a suffix to the text input component.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored.'
      }
    }
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the input component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the input used by the text input component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the input. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the input. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the input used by the date input component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the input. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the input. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the input.'
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      'autocomplete attribute to identify input purpose, for instance `"postal-code"` or `"username"`.'
  },
  pattern: {
    type: 'string',
    required: false,
    description:
      'pattern attribute to provide a regular expression pattern, used to match allowed character combinations for the input value.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the spellcheck attribute on the input.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.'
  }
}

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
        text: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you, for example, 485 777 3456'
      },
      id: 'with-hint',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: true
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
      classes: 'nhsuk-input--width-10',
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
        text: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you, for example, 485 777 3456'
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-hint-error',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error'
    }
  },
  'with 2 character width': {
    context: {
      label: {
        text: '2 character width'
      },
      id: 'input-width-2',
      name: 'example',
      classes: 'nhsuk-input--width-2'
    }
  },
  'with 3 character width': {
    context: {
      label: {
        text: '3 character width'
      },
      id: 'input-width-3',
      name: 'example',
      classes: 'nhsuk-input--width-3'
    }
  },
  'with 4 character width': {
    context: {
      label: {
        text: '4 character width'
      },
      id: 'input-width-4',
      name: 'example',
      classes: 'nhsuk-input--width-4'
    }
  },
  'with 5 character width': {
    context: {
      label: {
        text: '5 character width'
      },
      id: 'input-width-5',
      name: 'example',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with 10 character width': {
    context: {
      label: {
        text: '10 character width'
      },
      id: 'input-width-10',
      name: 'example',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with 20 character width': {
    context: {
      label: {
        text: '20 character width'
      },
      id: 'input-width-20',
      name: 'example',
      classes: 'nhsuk-input--width-20'
    }
  },
  'with 30 character width': {
    context: {
      label: {
        text: '30 character width'
      },
      id: 'input-width-30',
      name: 'example',
      classes: 'nhsuk-input--width-30'
    }
  },
  'with label size S': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--s',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with label size M': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--m',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with label size L': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'with label size XL': {
    context: {
      label: {
        text: 'What is your NHS number?',
        classes: 'nhsuk-label--xl',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'What is your NHS number?'
      },
      id: 'without-heading',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric',
      spellcheck: false
    }
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
  'with prefix string': {
    context: {
      label: {
        text: 'Cost in pounds',
        isPageHeading: true
      },
      id: 'with-prefix',
      name: 'example',
      prefix: '£'
    },
    options: {
      hidden: true
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
  'with suffix string': {
    context: {
      label: {
        text: 'Weight in kilograms',
        isPageHeading: true
      },
      id: 'with-suffix',
      name: 'example',
      suffix: 'kg',
      classes: 'nhsuk-input--width-5'
    },
    options: {
      hidden: true
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

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
