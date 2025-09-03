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
    type: 'string',
    required: false,
    description: 'Optional prefix text to be displayed before the input.'
  },
  suffix: {
    type: 'string',
    required: false,
    description: 'Optional suffix text to be displayed after the input.'
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
        text: 'NHS number'
      },
      name: 'example'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'NHS number'
      },
      hint: {
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      },
      id: 'with-hint',
      name: 'example'
    },
    screenshot: true
  },
  'with error message': {
    context: {
      label: {
        text: 'NHS number'
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-error-message',
      name: 'example'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'NHS number'
      },
      hint: {
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-hint-error',
      name: 'example'
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error'
    }
  },
  'with width-2 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-2',
      name: 'example',
      classes: 'nhsuk-input--width-2'
    }
  },
  'with width-3 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-3',
      name: 'example',
      classes: 'nhsuk-input--width-3'
    }
  },
  'with width-4 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-4',
      name: 'example',
      classes: 'nhsuk-input--width-4'
    }
  },
  'with width-5 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-5',
      name: 'example',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with width-10 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-10',
      name: 'example',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with width-20 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-20',
      name: 'example',
      classes: 'nhsuk-input--width-20'
    }
  },
  'with width-30 class': {
    context: {
      label: {
        text: 'NHS number'
      },
      id: 'input-width-30',
      name: 'example',
      classes: 'nhsuk-input--width-30'
    }
  },
  'with label as page heading': {
    context: {
      label: {
        text: 'NHS number',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'page-heading',
      name: 'example'
    }
  },
  'with prefix': {
    context: {
      label: {
        text: 'What is the cost in pounds?'
      },
      id: 'with-prefix',
      name: 'example',
      prefix: '£'
    },
    screenshot: true
  },
  'with suffix': {
    context: {
      label: {
        text: 'What is the weight in kilograms?'
      },
      id: 'with-suffix',
      name: 'example',
      suffix: 'kg'
    },
    screenshot: true
  },
  'with prefix and suffix': {
    context: {
      label: {
        text: 'What is the cost per item, in pounds?'
      },
      id: 'with-prefix-suffix',
      name: 'example',
      prefix: '£',
      suffix: 'per item'
    },
    screenshot: true
  },
  'with prefix and suffix and error': {
    context: {
      label: {
        text: 'What is the cost per item, in pounds?'
      },
      errorMessage: {
        text: 'Enter a cost per item, in pounds'
      },
      id: 'with-prefix-suffix',
      name: 'example',
      prefix: '£',
      suffix: 'per item'
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-prefix-suffix'
    }
  },
  'with prefix and suffix and width modifier': {
    context: {
      label: {
        text: 'What is the cost per item, in pounds?'
      },
      id: 'with-prefix-suffix',
      name: 'example',
      prefix: '£',
      suffix: 'per item',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Postcode'
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
