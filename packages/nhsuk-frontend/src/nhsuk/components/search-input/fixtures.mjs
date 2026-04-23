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
      inputmode: 'numeric',
      width: 10
    }
  },
  'large': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 20,
      large: true,
      inputmode: 'numeric'
    }
  },
  'large with search button': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        variant: 'search'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 20,
      large: true,
      inputmode: 'numeric'
    }
  },
  'reverse': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      placeholder: 'NHS number',
      name: 'example',
      variant: 'reverse',
      width: 10,
      inputmode: 'numeric'
    },
    options: {
      layout: 'background-blue'
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
      width: 10,
      inputmode: 'numeric'
    }
  },
  'with search button': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        variant: 'search'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
    }
  },
  'with secondary button': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        variant: 'secondary'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
    }
  },
  'with secondary button, solid background': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        variant: 'secondary-solid'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
    },
    options: {
      layout: 'background-grey'
    }
  },
  'without button': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: false,
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
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
        variant: 'secondary'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
    }
  },
  'with button text and no icon': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        icon: false,
        text: 'Search',
        variant: 'secondary'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
    }
  },
  'with alternative icon': {
    context: {
      label: {
        text: 'Search patients by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      button: {
        icon: 'plus',
        variant: 'secondary'
      },
      placeholder: 'NHS number',
      name: 'example',
      width: 10,
      inputmode: 'numeric'
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
