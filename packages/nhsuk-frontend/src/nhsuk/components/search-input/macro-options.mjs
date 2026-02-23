export const name = 'Search input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
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
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used. Default is `"off"`.'
  },
  pattern: {
    type: 'string',
    required: false,
    description:
      'Attribute to provide a regular expression pattern, used to match allowed character combinations for the input value.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.'
  },
  button: {
    type: 'object',
    required: false,
    description: 'Optional object allowing customisation of the search button.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the search button.'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'Visually hidden text for the search button icon. Defaults to `"Search"`.'
      }
    }
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
