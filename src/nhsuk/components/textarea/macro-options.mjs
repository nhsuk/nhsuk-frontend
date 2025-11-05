import { components } from '@nhsuk/frontend-lib'

export const name = 'Textarea'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the textarea. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the textarea, which is submitted with the form data.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the textarea.'
  },
  rows: {
    type: 'string',
    required: false,
    description: 'Optional number of textarea rows (default is 5 rows).'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the textarea.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, textarea will be disabled.'
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
    description: 'The label used by the textarea component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the textarea component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the textarea component.',
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
          'Content to add before the textarea used by the textarea component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the textarea. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the textarea. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the textarea used by the textarea component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the textarea. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the textarea. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the textarea.'
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.'
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
  'with label size S': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--s',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'custom-size',
      name: 'example'
    }
  },
  'with label size M': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--m',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'custom-size',
      name: 'example'
    }
  },
  'with label size L': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'custom-size',
      name: 'example'
    }
  },
  'with label size XL': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--xl',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'custom-size',
      name: 'example'
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

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
