/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      placeholder: 'NHS number',
      hint: {
        text: 'This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App'
      },
      name: 'example',
      width: 20
    }
  },
  'large': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'l',
        isPageHeading: true
      },
      name: 'example',
      large: true,
      width: 30
    }
  },
  'large with brand button': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'l',
        isPageHeading: true
      },
      button: {
        variant: 'brand'
      },
      name: 'example',
      large: true,
      width: 30
    }
  },
  'with alternative icon': {
    context: {
      label: {
        text: 'Search by postcode',
        size: 'm',
        isPageHeading: true
      },
      button: {
        icon: 'arrow-right'
      },
      name: 'example',
      width: 10
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      hint: {
        text: 'This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: 'with-hint',
      name: 'example',
      width: 20
    }
  },
  'with hint and value': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      hint: {
        text: 'This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App'
      },
      name: 'example',
      value: '999 123 4567',
      width: 20
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      name: 'example',
      value: '999 123 4567',
      width: 20
    }
  },
  'with error message and hint': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      hint: {
        text: 'This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App'
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      name: 'example',
      value: '999 123 4567',
      width: 20
    }
  },
  'with hidden label': {
    context: {
      label: {
        text: 'Search by NHS number',
        classes: 'nhsuk-u-visually-hidden'
      },
      name: 'example',
      width: 20
    }
  },
  'with brand button': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        variant: 'brand'
      },
      name: 'example',
      width: 20
    }
  },
  'with brand button text': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        text: 'Search',
        variant: 'brand'
      },
      name: 'example',
      width: 20
    }
  },
  'with brand button text only': {
    context: {
      label: {
        text: 'Product order number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        icon: false,
        text: 'Find',
        variant: 'brand'
      },
      name: 'example',
      width: 20
    }
  },
  'with secondary button': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        variant: 'secondary'
      },
      name: 'example',
      width: 20
    }
  },
  'with secondary button text': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        text: 'Search',
        variant: 'secondary'
      },
      name: 'example',
      width: 20
    }
  },
  'with secondary button text only': {
    context: {
      label: {
        text: 'Product order number',
        size: 'm',
        isPageHeading: true
      },
      button: {
        icon: false,
        text: 'Find',
        variant: 'secondary'
      },
      name: 'example',
      width: 20
    }
  },
  'without button': {
    context: {
      label: {
        text: 'Search by NHS number',
        size: 'm',
        isPageHeading: true
      },
      button: false,
      name: 'example',
      width: 20
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Search by NHS number'
      },
      name: 'example',
      width: 20
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
