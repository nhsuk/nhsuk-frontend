import { components } from '@nhsuk/frontend-lib'

export const name = 'Radios'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
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
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the radios component.',
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
      'String to prefix id for each radio item if no id is specified on each item. If `idPrefix` is not passed, fallback to using the name attribute instead.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for each radio item.'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of radio items objects.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` argument will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific id attribute for the radio item. If omitted, then `idPrefix` string will be applied.'
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
        description: 'Value for the radio input.'
      },
      hint: {
        type: 'object',
        required: false,
        description: 'Provide hint to each radio item.',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description:
          "Divider text to separate radio items, for example the text `'or'`."
      },
      checked: {
        type: 'boolean',
        required: false,
        description: 'If true, radio will be checked.'
      },
      conditional: {
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the radio is checked.',
        params: {
          html: {
            type: 'string',
            description: 'The HTML to reveal when the radio is checked.',
            required: true
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the radio container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the radio input tag.'
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
          text: 'Have you changed your name?'
        }
      },
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
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
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      idPrefix: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  'inline': {
    context: {
      classes: 'nhsuk-radios--inline',
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      idPrefix: 'inline',
      name: 'example',
      value: 'no',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with legend as page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      idPrefix: 'page-heading',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  'with divider': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to sign in?',
          classes: 'nhsuk-fieldset__legend--l',
          pageHeading: 'true'
        }
      },
      idPrefix: 'with-divider',
      name: 'example',
      items: [
        {
          value: 'government-gateway',
          text: 'Use Government Gateway'
        },
        {
          value: 'nhsuk-login',
          text: 'Use NHS.UK login'
        },
        {
          divider: 'or'
        },
        {
          value: 'create-account',
          text: 'Create an account'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
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
          value: 'gateway',
          text: 'Sign in with Government Gateway',
          hint: {
            text: "You'll have a user ID if you've registered for self assessment or filed a tax return online before"
          }
        },
        {
          value: 'verify',
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
  'without fieldset': {
    context: {
      id: 'without-fieldset',
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
          text: 'Blue'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with disabled item': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      idPrefix: 'with-disabled-item',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          disabled: true
        },
        {
          value: 'no',
          text: 'No',
          disabled: true
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      errorMessage: {
        text: 'Select yes if you have changed your name'
      },
      idPrefix: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  'with hint and error': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      errorMessage: {
        text: 'Select yes if you have changed your name'
      },
      idPrefix: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error',
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
      hint: {
        text: 'Select 1 option'
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
      hint: {
        text: 'Select 1 option'
      },
      errorMessage: {
        text: 'Select how you prefer to be contacted'
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
      hint: {
        text: 'Select 1 option'
      },
      idPrefix: 'conditional',
      name: 'example',
      value: 'phone',
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
  'with nested conditional radios': {
    context: {
      fieldset: {
        legend: {
          text: 'How would you prefer to be contacted?'
        }
      },
      hint: {
        text: 'Select 1 option'
      },
      idPrefix: 'conditional-nested',
      name: 'example-outer',
      items: [
        {
          value: 'no-conditional',
          text: 'No conditional'
        },
        {
          value: 'nested',
          text: 'Nested conditional',
          conditional: {
            html: components.render('radios', {
              context: {
                fieldset: {
                  legend: {
                    text: 'How would you prefer to be contacted?'
                  }
                },
                hint: {
                  text: 'Select 1 option'
                },
                name: 'example-inner',
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
            })
          }
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
