import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Radios'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the radios component.'
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'The fieldset used by the radios component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the radios component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
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
      },
      beforeInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add before all radio items within the radios component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before all radio items. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before all radio items. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add after all radio items within the radios component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after all radio items. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after all radio items. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for the radio items.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The radio items within the radios component.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific ID attribute for the radio item. If omitted, then `idPrefix` string will be applied.'
      },
      value: {
        type: 'string',
        required: true,
        description: 'Value for the radio input.'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'Subset of options for the label used by each radio item within the radios component.',
        isComponent: true,
        params: {
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the label tag.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the label tag.'
          }
        }
      },
      hint: {
        type: 'object',
        required: false,
        description:
          'Can be used to add a hint to each radio item within the radios component.',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description:
          'Divider text to separate radio items, for example the text `"or"`.'
      },
      checked: {
        type: 'boolean',
        required: false,
        description:
          'Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option.'
      },
      conditional: {
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the radio is checked.',
        params: {
          html: {
            type: 'string',
            required: true,
            description: 'The HTML to reveal when the radio is checked.'
          }
        }
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If `true`, radio will be disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the radio input tag.'
      }
    }
  },
  value: {
    type: 'string',
    required: false,
    description:
      'The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
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
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'Do you know your NHS number?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'This is a 10 digit number, like 485 777 3456, that you can find on an NHS letter, prescription or in the NHS App'
      },
      idPrefix: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes, I know my NHS number'
        },
        {
          value: 'no',
          text: 'No, I do not know my NHS number'
        },
        {
          value: 'not sure',
          text: "I'm not sure"
        }
      ]
    }
  },
  'inline': {
    context: {
      classes: 'nhsuk-radios--inline',
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
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
  'with legend size S': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--s',
          isPageHeading: true
        }
      },
      idPrefix: 'custom-size',
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
  'with legend size M': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      idPrefix: 'custom-size',
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
  'with legend size L': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      idPrefix: 'custom-size',
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
  'with legend size XL': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--xl',
          isPageHeading: true
        }
      },
      idPrefix: 'custom-size',
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
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?'
        }
      },
      idPrefix: 'without-heading',
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
          isPageHeading: true
        }
      },
      idPrefix: 'with-divider',
      name: 'example',
      items: [
        {
          value: 'nhsuk-login',
          text: 'Use NHS login'
        },
        {
          value: 'government-verify',
          text: 'Use GOV.UK Verify'
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
          text: 'Do you have a mobile phone with signal?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'mobile',
          text: 'Yes, I have a mobile phone with signal',
          hint: {
            text: 'We will text you a 6 digit security code'
          }
        },
        {
          value: 'landline',
          text: 'No, I want to use my landline',
          hint: {
            text: 'We will call you to give you a 6 digit security code'
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
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
  'with long text': {
    context: {
      fieldset: {
        legend: {
          text: 'Venenatis Condimentum',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      idPrefix: 'with-long-text',
      name: 'example',
      items: [
        {
          value: 'nullam',
          text: outdent`
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
            at eget metus.
          `
        },
        {
          value: 'aenean',
          text: outdent`
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Cras mattis consectetur purus sit amet
            fermentum.
          `
        },
        {
          value: 'fusce',
          text: outdent`
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Etiam porta sem malesuada magna
            mollis euismod. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. Sed posuere consectetur est at lobortis.
          `
        }
      ]
    }
  },
  'with conditional content': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
                    text: 'How do you want to be contacted about this?',
                    classes: 'nhsuk-fieldset__legend--s'
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
  },
  'small': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with hint': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Do you know your NHS number?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'This is a 10 digit number, like 485 777 3456, that you can find on an NHS letter, prescription or in the NHS App'
      },
      idPrefix: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes, I know my NHS number'
        },
        {
          value: 'no',
          text: 'No, I do not know my NHS number'
        },
        {
          value: 'not sure',
          text: "I'm not sure"
        }
      ]
    }
  },
  'small inline': {
    context: {
      classes: 'nhsuk-radios--small nhsuk-radios--inline',
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          classes: 'nhsuk-fieldset__legend--s',
          isPageHeading: true
        }
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
  'small without page heading': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Are you 18 or over?'
        }
      },
      idPrefix: 'without-heading',
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
  'small with divider': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'How do you want to sign in?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      idPrefix: 'with-divider',
      name: 'example',
      items: [
        {
          value: 'nhsuk-login',
          text: 'Use NHS login'
        },
        {
          value: 'government-verify',
          text: 'Use GOV.UK Verify'
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
  'small with hints on items': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Do you have a mobile phone with signal?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'mobile',
          text: 'Yes, I have a mobile phone with signal',
          hint: {
            text: 'We will text you a 6 digit security code'
          }
        },
        {
          value: 'landline',
          text: 'No, I want to use my landline',
          hint: {
            text: 'We will call you to give you a 6 digit security code'
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'small without fieldset': {
    context: {
      classes: 'nhsuk-radios--small',
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
  'small with disabled item': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with error message': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with hint and error': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with long text': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'Venenatis Condimentum',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      idPrefix: 'with-long-text',
      name: 'example',
      items: [
        {
          value: 'nullam',
          text: outdent`
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
            at eget metus.
          `
        },
        {
          value: 'aenean',
          text: outdent`
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Cras mattis consectetur purus sit amet
            fermentum.
          `
        },
        {
          value: 'fusce',
          text: outdent`
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Etiam porta sem malesuada magna
            mollis euismod. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. Sed posuere consectetur est at lobortis.
          `
        }
      ]
    }
  },
  'small with conditional content': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with conditional content, error message': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with conditional content, error message (nested)': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  'small with nested conditional radios': {
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
                    text: 'How do you want to be contacted about this?',
                    classes: 'nhsuk-fieldset__legend--s'
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
