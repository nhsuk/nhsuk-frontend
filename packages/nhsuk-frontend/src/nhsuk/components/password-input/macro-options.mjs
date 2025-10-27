import { components } from '@nhsuk/frontend-lib'

export const name = 'Password input'

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
      'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.'
  },
  showPasswordText: {
    type: 'string',
    required: false,
    description:
      'Button text when the password is hidden. Defaults to `"Show"`.'
  },
  hidePasswordText: {
    type: 'string',
    required: false,
    description:
      'Button text when the password is visible. Defaults to `"Hide"`.'
  },
  showPasswordAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`.'
  },
  hidePasswordAriaLabelText: {
    type: 'string',
    required: false,
    description:
      'Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`.'
  },
  passwordShownAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`.'
  },
  passwordHiddenAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`.'
  },
  button: {
    type: 'object',
    required: false,
    description: 'Optional object allowing customisation of the toggle button.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the button.'
      }
    }
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
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      name: 'example'
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'It probably has some letters, numbers and maybe even some symbols in it'
      },
      id: 'with-hint-text',
      name: 'example'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter a password'
      },
      id: 'with-error-message',
      name: 'example'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'It probably has some letters, numbers and maybe even some symbols in it'
      },
      errorMessage: {
        text: 'Enter a password'
      },
      id: 'with-error-message',
      name: 'example'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Password'
      },
      id: 'without-heading',
      name: 'example'
    }
  },
  'with width class': {
    context: {
      label: {
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'width-class',
      name: 'example',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Password',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'new-password',
      name: 'example',
      autocomplete: 'new-password'
    }
  },
  'with translations': {
    context: {
      label: {
        text: 'Cyfrinair',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'password-translated',
      name: 'example',
      showPasswordText: 'Datguddia',
      hidePasswordText: 'Cuddio',
      showPasswordAriaLabelText: 'Datgelu cyfrinair',
      hidePasswordAriaLabelText: 'Cuddio cyfrinair',
      passwordShownAnnouncementText: 'Mae eich cyfrinair yn weladwy.',
      passwordHiddenAnnouncementText: "Mae eich cyfrinair wedi'i guddio."
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
