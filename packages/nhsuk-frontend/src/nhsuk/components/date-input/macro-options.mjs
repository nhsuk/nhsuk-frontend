import { components } from '@nhsuk/frontend-lib'

export const name = 'Date input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description:
      'This is used for the main component and to compose id attribute for each item.'
  },
  namePrefix: {
    type: 'string',
    required: false,
    description:
      "Optional prefix. This is used to prefix each `item.name` using `'-'`."
  },
  items: {
    type: 'array',
    required: false,
    description: 'An array of input objects with name, value and classes.',
    params: {
      id: {
        type: 'string',
        required: false,
        description:
          'Item-specific id. If provided, it will be used instead of the generated id.'
      },
      name: {
        type: 'string',
        required: true,
        description: 'Item-specific name attribute.'
      },
      label: {
        type: 'string',
        required: false,
        description:
          'Item-specific label text. If provided, this will be used instead of `name` for item label text.'
      },
      inputmode: {
        type: 'string',
        required: false,
        description:
          "Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `'numeric'`."
      },
      value: {
        type: 'string',
        required: false,
        description: 'Optional initial value of the input.'
      },
      autocomplete: {
        type: 'string',
        required: false,
        description:
          "Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance `'postal-code'` or `'username'`. See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used."
      },
      pattern: {
        type: 'string',
        required: false,
        description:
          'Attribute to [provide a regular expression pattern](https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the date input item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the date input item.'
      }
    }
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'Options for the fieldset component (for example legend).',
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
      'Additional options for the form group containing the date input component.',
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
      beforeInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add before the inputs used by the date input component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the inputs. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the inputs. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add after the inputs used by the date input component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the inputs. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the inputs. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  values: {
    type: 'object',
    required: false,
    description:
      'An optional object use to specify value attributes for the date parts without setting items.',
    params: {
      day: {
        type: 'string',
        required: false,
        description: 'Value attribute for the day input.'
      },
      month: {
        type: 'string',
        required: false,
        description: 'Value attribute for the month input.'
      },
      year: {
        type: 'string',
        required: false,
        description: 'Value attribute for the year input.'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the date-input container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the date-input container.'
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
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example'
    },
    screenshot: true
  },
  'with values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      values: {
        day: '5',
        month: '8',
        year: '2024'
      }
    }
  },
  'day and month': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your birthday?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 5 12'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        }
      ]
    }
  },
  'month and year': {
    context: {
      fieldset: {
        legend: {
          text: 'When did you start your job?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      id: 'example',
      items: [
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'month and year with values': {
    context: {
      fieldset: {
        legend: {
          text: 'When did you start your job?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      id: 'example',
      values: {
        month: '8',
        year: '2024'
      },
      items: [
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'with legend size S': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--s',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'custom-size'
    }
  },
  'with legend size M': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'custom-size'
    }
  },
  'with legend size L': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'custom-size'
    }
  },
  'with legend size XL': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--xl',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'custom-size'
    }
  },
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example'
    }
  },
  'with autocomplete values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-day'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-month'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4',
          autocomplete: 'bday-year'
        }
      ]
    }
  },
  'with custom name prefix': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      namePrefix: 'example'
    }
  },
  'with errors only': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      errorMessage: {
        text: 'Enter your date of birth'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    }
  },
  'with errors and hint': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Enter your date of birth'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    },
    screenshot: true
  },
  'with error on day input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a day'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          value: '3',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          value: '1980',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'with error on month input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a month'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          value: '31'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4',
          value: '1980'
        }
      ]
    }
  },
  'with error on year input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a year'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          value: '31'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2',
          value: '3'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
