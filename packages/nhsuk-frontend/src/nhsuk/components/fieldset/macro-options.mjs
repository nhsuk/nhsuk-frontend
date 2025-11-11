import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Fieldset'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the fieldset.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  legend: {
    type: 'object',
    required: false,
    description: 'The legend for the fieldset component.',
    isComponent: true
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.'
  },
  role: {
    type: 'string',
    required: false,
    description: 'Optional ARIA role attribute.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the fieldset container.'
  },
  html: {
    type: 'string',
    required: false,
    description: 'HTML to use/render within the fieldset element.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.'
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
        text: 'What is your address?',
        size: 'l',
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
            text: 'Address line 2 (optional)'
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
  },
  'with legend heading level 1': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        headingLevel: 1
      }
    }
  },
  'with legend heading level 2': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'm',
        headingLevel: 2
      }
    }
  },
  'with legend size XL': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'xl',
        isPageHeading: true
      }
    }
  },
  'with legend size L': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    }
  },
  'with legend size M': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'm',
        isPageHeading: true
      }
    }
  },
  'with legend size S': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 's',
        isPageHeading: true
      }
    }
  },
  'with legend size class': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  'with legend size class overriding size param': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        size: 's',
        isPageHeading: true
      }
    }
  },
  'without page heading': {
    context: {
      legend: {
        text: 'What is your address?'
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
