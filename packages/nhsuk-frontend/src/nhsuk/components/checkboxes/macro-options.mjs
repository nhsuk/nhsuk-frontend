import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Checkboxes'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the checkboxes component.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users.'
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'Can be used to add a fieldset to the checkboxes component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the checkboxes component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
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
      },
      beforeInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add before all checkbox items within the checkboxes component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add after all checkbox items within the checkboxes component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for all checkbox items.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The checkbox items within the checkboxes component.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific ID attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'Specific name for the checkbox item. If omitted, then component global `name` string will be applied.'
      },
      value: {
        type: 'string',
        required: true,
        description: 'Value for the checkbox input.'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'Subset of options for the label used by each checkbox item within the checkboxes component.',
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
          'Can be used to add a hint to each checkbox item within the checkboxes component.',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description:
          'Divider text to separate checkbox items, for example the text `"or"`.'
      },
      checked: {
        type: 'boolean',
        required: false,
        description:
          'Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option.'
      },
      conditional: {
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the checkbox is checked.',
        params: {
          html: {
            type: 'string',
            required: true,
            description: 'The HTML to reveal when the checkbox is checked.'
          }
        }
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If `true`, checkbox will be disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the checkbox input tag.'
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
      }
    }
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
      'HTML attributes (for example data attributes) to add to the checkboxes container.'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
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
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'If you have dual nationality, select all options that are relevant to you'
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
          text: 'Citizen of another country'
        }
      ]
    }
  },
  'with pre-checked values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'Citizen of another country'
        }
      ]
    }
  },
  'with hints on items': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'If you have dual nationality, select all options that are relevant to you'
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'british',
          text: 'British',
          hint: {
            text: 'including English, Scottish, Welsh and Northern Irish'
          }
        },
        {
          value: 'irish',
          text: 'Irish'
        },
        {
          value: 'other',
          text: 'Citizen of another country'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      errorMessage: {
        text: 'Select how you want to be contacted'
      },
      idPrefix: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      errorMessage: {
        text: 'Select how you want to be contacted'
      },
      idPrefix: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
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
  'with legend size S': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--s',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'with legend size M': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'with legend size L': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'with legend size XL': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--xl',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'without-heading',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
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
        text: 'Select all options that are relevant to you'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
    options: {
      hidden: true
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with "none of the above" option (named group, unique)': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
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
    },
    options: {
      hidden: true
    }
  },
  'small': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'small with hint': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'If you have dual nationality, select all options that are relevant to you'
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
          text: 'Citizen of another country'
        }
      ]
    }
  },
  'small with pre-checked values': {
    context: {
      fieldset: {
        classes: 'nhsuk-checkboxes--small',
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
          text: 'Citizen of another country'
        }
      ]
    }
  },
  'small with hints on items': {
    context: {
      fieldset: {
        classes: 'nhsuk-checkboxes--small',
        legend: {
          text: 'What is your nationality?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'If you have dual nationality, select all options that are relevant to you'
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'british',
          text: 'British',
          hint: {
            text: 'including English, Scottish, Welsh and Northern Irish'
          }
        },
        {
          value: 'irish',
          text: 'Irish'
        },
        {
          value: 'other',
          text: 'Citizen of another country'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'small with disabled item': {
    context: {
      classes: 'nhsuk-checkboxes--small',
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
  'small with error message': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      errorMessage: {
        text: 'Select how you want to be contacted'
      },
      idPrefix: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-error-message',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'small with hint and error': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      errorMessage: {
        text: 'Select how you want to be contacted'
      },
      idPrefix: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'small with long text': {
    context: {
      classes: 'nhsuk-checkboxes--small',
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
  'small without page heading': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'without-heading',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text message',
          text: 'Text message'
        }
      ]
    }
  },
  'small with conditional content': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
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
  'small with conditional content, error message': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
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
  'small with conditional content, error message (nested)': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
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
  'small with "none of the above" option': {
    context: {
      classes: 'nhsuk-checkboxes--small',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
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
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
