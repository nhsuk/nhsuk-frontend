/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      placeholder: 'NHS number',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric'
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      hint: {
        text: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you, for example, 485 777 3456'
      },
      placeholder: 'NHS number',
      id: 'with-hint',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric'
    }
  },
  'with button text': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        text: 'Search',
        visuallyHiddenText: ''
      },
      placeholder: 'NHS number',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric'
    }
  },
  'with button secondary': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        classes: 'nhsuk-button--secondary'
      },
      placeholder: 'NHS number',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric'
    }
  },
  'with button secondary, solid background': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        classes: 'nhsuk-button--secondary-solid'
      },
      placeholder: 'NHS number',
      name: 'example',
      classes: 'nhsuk-input--width-10',
      inputmode: 'numeric'
    },
    options: {
      layout: 'background-grey'
    }
  }
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
