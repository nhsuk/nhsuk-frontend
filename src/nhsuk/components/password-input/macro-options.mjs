export const name = 'Password input'

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
    released: '10.2.0'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the input, which is submitted with the form data.',
    released: '10.2.0'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the input.',
    released: '10.2.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, input will be disabled.',
    released: '10.2.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.',
    released: '10.2.0'
  },
  label: {
    type: 'object',
    required: true,
    description: 'Options for the label component.',
    released: '10.2.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Options for the hint component.',
    released: '10.2.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '10.2.0',
    isComponent: true
  },
  width: {
    type: 'integer',
    required: false,
    description:
      'Optional fixed width for the text input component – `2`, `3`, `4`, `5`, `10`, `20` or `30`.',
    released: '10.2.0'
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
    released: '10.2.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.2.0'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the input used by the text input component.',
        released: '10.2.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.2.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.2.0'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the input used by the text input component.',
        released: '10.2.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.2.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.2.0'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the input.',
    released: '10.2.0'
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`.',
    released: '10.2.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.',
    released: '10.2.0'
  },
  showPasswordText: {
    type: 'string',
    required: false,
    description:
      'Button text when the password is hidden. Defaults to `"Show"`.',
    released: '10.2.0'
  },
  hidePasswordText: {
    type: 'string',
    required: false,
    description:
      'Button text when the password is visible. Defaults to `"Hide"`.',
    released: '10.2.0'
  },
  showPasswordAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`.',
    released: '10.2.0'
  },
  hidePasswordAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`.',
    released: '10.2.0'
  },
  passwordShownAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`.',
    released: '10.2.0'
  },
  passwordHiddenAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`.',
    released: '10.2.0'
  },
  button: {
    type: 'object',
    required: false,
    description: 'Optional object allowing customisation of the toggle button.',
    released: '10.2.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the button.',
        released: '10.2.0'
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
