import { outdent } from 'outdent'

import { components } from '#lib'

import { examples as inputExamples } from '../input/fixtures.mjs'

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: 'small',
    context: {
      small: true,
      fieldset: {
        legend: {
          size: 'm'
        }
      }
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
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
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'disabled': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      name: 'example',
      disabled: true,
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
    variants,
    screenshot: true
  },
  'with hint': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          size: 'l',
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
    },
    variants
  },
  'with pre-checked values': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'conditional',
      name: 'contact',
      values: ['email', 'text'],
      items: getItems()
    },
    variants
  },
  'with hints on items': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your nationality?',
          size: 'l',
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
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without fieldset': {
    context: {
      fieldset: null,
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
          text: 'Blue'
        }
      ]
    },
    variants
  },
  'with disabled item': {
    context: {
      fieldset: null,
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
    variants,
    screenshot: {
      viewports: ['mobile']
    }
  },
  'with error message': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
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
    variants,
    screenshot: {
      states: ['focus'],
      selector: '#with-error-message',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with error message and hint': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
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
    },
    variants
  },
  'with long text': {
    context: {
      fieldset: {
        legend: {
          text: 'Venenatis Condimentum',
          size: 'l',
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
    },
    variants
  },
  'legend': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l'
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
    },
    variants: [
      {
        description: 'with size S',
        context: {
          fieldset: {
            legend: {
              size: 's'
            }
          }
        }
      },
      {
        description: 'with size M',
        context: {
          fieldset: {
            legend: {
              size: 'm'
            }
          }
        }
      },
      {
        description: 'with size L',
        context: {
          fieldset: {
            legend: {
              size: 'l'
            }
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          fieldset: {
            legend: {
              size: 'xl'
            }
          }
        }
      }
    ]
  },
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          isPageHeading: false
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
    },
    variants
  },
  'with conditional content': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'conditional',
      name: 'contact',
      items: getItems()
    },
    variants
  },
  'with conditional content, special characters': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'user.profile[contact-prefs]',
      name: 'contact',
      items: getItems()
    },
    options: {
      hidden: true
    },
    variants
  },
  'with conditional content, error message': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
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
      items: getItems({ invalid: true })
    },
    variants
  },
  'with conditional content, error message (nested)': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select all options that are relevant to you'
      },
      idPrefix: 'conditional',
      name: 'example',
      values: ['phone'],
      items: getItems({ invalid: true })
    },
    variants,
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
          size: 'l',
          isPageHeading: true
        }
      },
      idPrefix: 'conditional',
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
    },
    variants
  },
  'with "none of the above" option, conditional content': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      idPrefix: 'conditional',
      name: 'example',
      items: getItems().concat([
        {
          divider: 'or'
        },
        {
          value: 'none',
          text: 'None of the above',
          exclusive: true
        }
      ])
    },
    variants
  },
  'with "none of the above" option (named group)': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?',
          size: 'l',
          isPageHeading: true
        }
      },
      idPrefix: 'conditional',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email',
          exclusiveGroup: 'communication-preferences'
        },
        {
          value: 'phone',
          text: 'Phone',
          exclusiveGroup: 'communication-preferences'
        },
        {
          value: 'text',
          text: 'Text message',
          exclusiveGroup: 'communication-preferences'
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
          size: 'l',
          isPageHeading: true
        }
      },
      idPrefix: 'conditional',
      items: [
        {
          name: 'preference-email',
          value: 'yes',
          text: 'Email',
          exclusiveGroup: 'communication-preferences'
        },
        {
          name: 'preference-phone',
          value: 'yes',
          text: 'Phone',
          exclusiveGroup: 'communication-preferences'
        },
        {
          name: 'preference-text',
          value: 'yes',
          text: 'Text message',
          exclusiveGroup: 'communication-preferences'
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
  }
}

/**
 * Get example items by variant
 *
 * @param {{ invalid?: boolean }} [options]
 * @returns {object[]}
 */
function getItems(options = {}) {
  let input1 = inputExamples['example email address']
  let input2 = inputExamples['example phone number']
  let input3 = inputExamples['example mobile phone number']

  // Include error message example (optional)
  if (options.invalid) {
    input2 = inputExamples['example phone number with error message']
  }

  return [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: components.render('input', input1)
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: components.render('input', input2)
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: components.render('input', input3)
      }
    }
  ]
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
