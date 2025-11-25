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
    description:
      'Type of input control to render, for example, an email input control. Defaults to `"text"`.'
  },
  inputmode: {
    type: 'string',
    required: false,
    description:
      'Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the input.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, input will be disabled.'
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
    description: 'The label used by the text input component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to a text input component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
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
          'Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the prefix.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the prefix element.'
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
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the suffix element.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the suffix element.'
      }
    }
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the text input component.',
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
          'Content to add after the input used by the text input component.',
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
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used.'
  },
  pattern: {
    type: 'string',
    required: false,
    description:
      'Attribute to provide a regular expression pattern, used to match allowed character combinations for the input value.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the input.'
  },
  autocapitalize: {
    type: 'string',
    required: false,
    description:
      'Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used.'
  },
  inputWrapper: {
    type: 'object',
    required: false,
    description:
      'If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the wrapping element.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the wrapping element.'
      }
    }
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
