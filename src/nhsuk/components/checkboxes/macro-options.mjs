import { components } from '@nhsuk/frontend-lib'

export const name = 'Checkboxes'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users.'
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
    description: 'Options for the hint component (for example text).',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description: 'Options for the error message component.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the checkboxes component.',
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
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'String to prefix id for each checkbox item if no id is specified on each item. If not passed, fall back to using the name option instead.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for all checkbox items.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of checkbox items objects.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific id attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'Specific name for the checkbox item. If omitted, then component global `name` string will be applied.'
      },
      label: {
        type: 'object',
        required: false,
        description: 'Options for the label component.',
        isComponent: true
      },
      value: {
        type: 'string',
        required: true,
        description: 'Value for the checkbox input.'
      },
      divider: {
        type: 'string',
        required: true,
        description:
          "Optional divider text to separate checkbox items, for example the text `'or'`."
      },
      hint: {
        type: 'object',
        required: false,
        description: 'Provide hint to each checkbox item.',
        isComponent: true
      },
      checked: {
        type: 'boolean',
        required: false,
        description: 'If true, checkbox will be checked.'
      },
      conditional: {
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the checkbox is checked.',
        params: {
          html: {
            type: 'string',
            description: 'The HTML to reveal when the checkbox is checked.',
            required: true
          }
        }
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If true, checkbox will be disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the checkbox input tag.'
      }
    }
  },
  exclusive: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked.'
  },
  exclusiveGroup: {
    type: 'string',
    required: false,
    description:
      'Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario.'
  },
  values: {
    type: 'array',
    required: false,
    description:
      'Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the checkboxes container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
}

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?'
        }
      },
      name: 'example',
      items: [
        {
          value: 'british',
          text: 'British'
        },
        {
          value: 'irish',
          text: 'Irish'
        },
        {
          value: 'other',
          text: 'citizen of another country'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with hint': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?'
        }
      },
      hint: {
        text: 'If you have more than 1 nationality, select all options that are relevant to you'
      },
      idPrefix: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'british',
          text: 'British'
        },
        {
          value: 'irish',
          text: 'Irish'
        },
        {
          value: 'other',
          text: 'citizen of another country'
        }
      ]
    }
  },
  'with pre-checked values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?'
        }
      },
      idPrefix: 'with-values',
      name: 'example',
      values: ['british'],
      items: [
        {
          value: 'british',
          text: 'British'
        },
        {
          value: 'irish',
          text: 'Irish'
        },
        {
          value: 'other',
          text: 'citizen of another country'
        }
      ]
    }
  },
  'with hints on items': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to sign in?'
        }
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'government-gateway',
          text: 'Sign in with Government Gateway',
          hint: {
            text: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before"
          }
        },
        {
          value: 'nhsuk-login',
          text: 'Sign in with NHS.UK login',
          hint: {
            text: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity"
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with disabled item': {
    context: {
      id: 'with-disabled-item',
      name: 'colours',
      items: [
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'green',
          text: 'Green'
        },
        {
          value: 'blue',
          text: 'Blue',
          disabled: true
        }
      ]
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'with error message': {
    context: {
      fieldset: {
        legend: {
          text: 'Which types of waste do you transport regularly?'
        }
      },
      errorMessage: {
        text: 'Select types of waste you transport regularly'
      },
      idPrefix: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'animal',
          text: 'Waste from animal carcasses'
        },
        {
          value: 'mines',
          text: 'Waste from mines or quarries'
        },
        {
          value: 'farm',
          text: 'Farm or agricultural waste'
        }
      ]
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-error-message',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with hint and error': {
    context: {
      fieldset: {
        legend: {
          text: 'Which types of waste do you transport regularly?'
        }
      },
      hint: {
        text: 'Select all that apply'
      },
      errorMessage: {
        text: 'Select types of waste you transport regularly'
      },
      idPrefix: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'animal',
          text: 'Waste from animal carcasses'
        },
        {
          value: 'mines',
          text: 'Waste from mines or quarries'
        },
        {
          value: 'farm',
          text: 'Farm or agricultural waste'
        }
      ]
    }
  },
  'with legend as page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'Which types of waste do you transport regularly?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all that apply'
      },
      idPrefix: 'page-heading',
      name: 'example',
      items: [
        {
          value: 'animal',
          text: 'Waste from animal carcasses'
        },
        {
          value: 'mines',
          text: 'Waste from mines or quarries'
        },
        {
          value: 'farm',
          text: 'Farm or agricultural waste'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with conditional content': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      idPrefix: 'conditional',
      name: 'contact',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    }
  },
  'with conditional content, error message': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      errorMessage: {
        text: 'Select how you like to be contacted'
      },
      idPrefix: 'conditional',
      name: 'contact',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    }
  },
  'with conditional content, error message (nested)': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      idPrefix: 'conditional',
      name: 'example',
      values: ['phone'],
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                errorMessage: {
                  text: 'Enter your phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    },
    screenshot: {
      states: ['focus'],
      selector: '#conditional-2',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with "none of the above" option': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      idPrefix: 'conditional',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          divider: 'or'
        },
        {
          value: 'none',
          text: 'None of the above',
          exclusive: true
        }
      ]
    }
  },
  'with "none of the above" option (named group)': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      idPrefix: 'conditional',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          divider: 'or'
        },
        {
          value: 'none',
          text: 'None of the above',
          exclusive: true,
          exclusiveGroup: 'communication-preferences'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with "none of the above" option (named group, unique)': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      idPrefix: 'conditional',
      items: [
        {
          name: 'preference-email',
          value: 'yes',
          text: 'Email',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          name: 'preference-phone',
          value: 'yes',
          text: 'Phone',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          name: 'preference-text',
          value: 'yes',
          text: 'Text message',
          exclusiveGroup: 'communication-preferences',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          divider: 'or'
        },
        {
          name: 'preference-none',
          value: 'yes',
          text: 'None of the above',
          exclusive: true,
          exclusiveGroup: 'communication-preferences'
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
