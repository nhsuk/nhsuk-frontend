import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Fieldset'

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
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  legend: {
    type: 'object',
    required: false,
    description: 'Options for the legend',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` argument will be ignored.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the legend.'
      },
      isPageHeading: {
        type: 'boolean',
        required: false,
        description: 'Whether the legend also acts as the heading for the page.'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the fieldset container.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.'
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
      legend: {
        text: 'What is your address?'
      }
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'styled as xl text': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--xl'
      }
    }
  },
  'styled as large text': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l'
      }
    }
  },
  'styled as medium text': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--m'
      }
    }
  },
  'styled as small text': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--s'
      }
    }
  },
  'as page heading xl': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--xl',
        isPageHeading: true
      }
    }
  },
  'as page heading l': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  'as page heading m': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--m',
        isPageHeading: true
      }
    }
  },
  'as page heading s': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--s',
        isPageHeading: true
      }
    }
  },
  'as page heading without class': {
    context: {
      legend: {
        text: 'What is your address?',
        isPageHeading: true
      }
    }
  },
  'with inputs': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    },
    callBlock: outdent`
      ${components.render('input', {
        context: {
          label: {
            text: 'Address line 1'
          },
          name: 'address-line1',
          autocomplete: 'address-line1'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Address line 2'
          },
          name: 'address-line2',
          autocomplete: 'address-line2'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Town or city'
          },
          name: 'address-town',
          autocomplete: 'address-level2',
          classes: 'nhsuk-u-width-two-thirds'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'County (optional)'
          },
          name: 'address-county',
          classes: 'nhsuk-u-width-two-thirds'
        }
      })}

      ${components.render('input', {
        context: {
          label: {
            text: 'Postcode'
          },
          name: 'address-postcode',
          autocomplete: 'postal-code',
          classes: 'nhsuk-input--width-10'
        }
      })}
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
