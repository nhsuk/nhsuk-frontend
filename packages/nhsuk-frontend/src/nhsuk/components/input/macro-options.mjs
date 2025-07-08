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
      id: 'input-example',
      name: 'test-name'
    }
  },
  'with hint text': {
    context: {
      label: {
        text: 'NHS number',
        classes: 'nhsuk-label--l'
      },
      hint: {
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      },
      id: 'input-with-hint-text',
      name: 'test-name-2',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'NHS number',
        classes: 'nhsuk-label--l'
      },
      hint: {
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      },
      id: 'input-with-error-message',
      name: 'test-name-3',
      classes: 'nhsuk-input--width-10',
      errorMessage: {
        text: 'Error message goes here'
      }
    }
  },
  'with width modifier': {
    context: {
      label: {
        text: 'NHS number',
        classes: 'nhsuk-label--l'
      },
      hint: {
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      },
      id: 'input-width-10',
      name: 'test-width-10',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with prefix': {
    context: {
      label: {
        text: 'What is the cost in pounds?',
        classes: 'nhsuk-label--l'
      },
      id: 'input-with-prefix',
      name: 'test-name-4',
      prefix: '£',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with suffix': {
    context: {
      label: {
        text: 'What is the weight in kilograms?',
        classes: 'nhsuk-label--l'
      },
      id: 'input-with-suffix',
      name: 'test-name-5',
      suffix: 'kg',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with prefix and suffix': {
    context: {
      label: {
        text: 'What is the cost per item, in pounds?',
        classes: 'nhsuk-label--l'
      },
      id: 'input-with-prefix-and-suffix',
      name: 'test-name-6',
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
      id: 'input-with-autocomplete-attribute',
      name: 'postcode',
      autocomplete: 'postal-code',
      classes: 'nhsuk-input--width-5'
    }
  },
  'with error message, prefix and suffix': {
    context: {
      label: {
        text: 'What is the cost per item, in pounds?',
        classes: 'nhsuk-label--l'
      },
      id: 'input-with-error-message-and-prefix-and-suffix',
      name: 'test-name-7',
      prefix: '£',
      suffix: 'per item',
      classes: 'nhsuk-input--width-5',
      errorMessage: {
        text: 'Enter a cost per item, in pounds'
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
