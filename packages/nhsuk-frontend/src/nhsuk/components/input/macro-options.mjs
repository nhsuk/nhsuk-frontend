export const name = 'Input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the input. Defaults to the value of `name`.',
    released: '1.0.0'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the input, which is submitted with the form data.',
    released: '1.0.0'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Type of input control, for example, an email input control. Defaults to `"text"`.',
    released: '1.0.0'
  },
  inputmode: {
    type: 'string',
    required: false,
    description:
      'Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).',
    released: '4.1.0'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the input.',
    released: '1.0.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, input will be disabled.',
    released: '10.1.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.',
    released: '10.0.0'
  },
  label: {
    type: 'object',
    required: true,
    description: 'The label used by the text input component.',
    released: '1.0.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to a text input component.',
    released: '1.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '1.0.0',
    isComponent: true
  },
  prefix: {
    type: 'object',
    required: false,
    description: 'Can be used to add a prefix to the text input component.',
    released: '8.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the prefix.',
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the prefix element.',
        released: '10.1.0'
      }
    }
  },
  suffix: {
    type: 'object',
    required: false,
    description: 'Can be used to add a suffix to the text input component.',
    released: '8.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the suffix element.',
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the suffix element.',
        released: '10.1.0'
      }
    }
  },
  code: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, use a monospace font for codes or sequences.',
    released: '10.4.0'
  },
  width: {
    type: 'integer',
    required: false,
    description:
      'Optional fixed width for the text input component – `2`, `3`, `4`, `5`, `10`, `20` or `30`.',
    released: '10.4.0'
  },
  large: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, larger input size will be used.',
    released: '10.5.0'
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the text input component.',
    released: '1.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.0.0'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the input used by the text input component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the input used by the text input component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the input.',
    released: '1.0.0'
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used.',
    released: '2.1.0'
  },
  pattern: {
    type: 'string',
    required: false,
    description:
      'Attribute to provide a regular expression pattern, used to match allowed character combinations for the input value.',
    released: '2.1.0'
  },
  placeholder: {
    type: 'string',
    required: false,
    description: 'Attribute to provide placeholder text for the input.',
    released: '10.3.0'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the input.',
    released: '4.1.0'
  },
  autocapitalize: {
    type: 'string',
    required: false,
    description:
      'Optional field to enable or disable autocapitalisation of user input. See the [Autocapitalization section in the HTML standard](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used.',
    released: '10.1.0'
  },
  inputWrapper: {
    type: 'object',
    required: false,
    description:
      'If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element.',
    released: '10.1.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the wrapping element.',
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the wrapping element.',
        released: '10.1.0'
      }
    }
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.',
    released: '1.0.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
