/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      placeholder: "NHS number",
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      name: "example",
      width: 20
    }
  },
  "disabled": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      placeholder: "NHS number",
      name: "example",
      disabled: true
    },
    screenshot: true
  },
  "disabled with enabled button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      placeholder: "NHS number",
      name: "example",
      disabled: true,
      button: {
        disabled: false
      }
    }
  },
  "disabled button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      placeholder: "NHS number",
      name: "example",
      button: {
        disabled: true
      }
    }
  },
  "large": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "l"
      },
      name: "example",
      large: true,
      width: 30
    },
    screenshot: true
  },
  "large with brand button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "l"
      },
      button: {
        variant: "brand"
      },
      name: "example",
      large: true,
      width: 30
    }
  },
  "with alternative icon": {
    context: {
      label: {
        heading: "Search by postcode",
        size: "m"
      },
      button: {
        icon: "arrow-right"
      },
      name: "example",
      width: 10
    }
  },
  "with hint": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      id: "with-hint",
      name: "example",
      width: 20
    },
    screenshot: true
  },
  "with hint and value": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      name: "example",
      value: "999 123 4567",
      width: 20
    },
    screenshot: true
  },
  "with error only": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      errorMessage: true,
      name: "example",
      value: "999 123 4567",
      width: 20
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      errorMessage: {
        text: "Enter NHS number"
      },
      name: "example",
      value: "999 123 4567",
      width: 20
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      hint: "This is a 10 digit number (like 999 123 4567) that you can find on an NHS letter, prescription or in the NHS App",
      errorMessage: "Enter NHS number",
      name: "example",
      value: "999 123 4567",
      width: 20
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      errorMessage: {
        text: "Enter NHS number"
      },
      name: "example",
      value: "999 123 4567",
      width: 20
    },
    screenshot: true
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "Search by NHS number"
      },
      errorMessage: {
        text: "Enter NHS number"
      },
      name: "example",
      value: "999 123 4567",
      width: 20
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "Search by NHS number"
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      errorMessage: {
        text: "Enter NHS number"
      },
      name: "example",
      value: "999 123 4567",
      width: 20
    }
  },
  "with prefix": {
    context: {
      label: {
        heading: "Code lookup",
        size: "m"
      },
      prefix: {
        text: "SNOMED"
      },
      id: "with-prefix",
      name: "example",
      value: "160245001",
      width: 10,
      code: true,
      button: {
        icon: "arrow-right",
        variant: "brand"
      }
    }
  },
  "with prefix and error message": {
    context: {
      label: {
        heading: "Code lookup",
        size: "m"
      },
      prefix: {
        text: "SNOMED"
      },
      errorMessage: {
        text: "Enter a SNOMED code"
      },
      id: "with-prefix",
      name: "example",
      width: 10,
      code: true,
      button: {
        icon: "arrow-right",
        variant: "brand"
      }
    }
  },
  "with hidden label": {
    context: {
      label: {
        text: "Search by NHS number",
        classes: "nhsuk-u-visually-hidden"
      },
      name: "example",
      width: 20
    }
  },
  "with brand button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      button: {
        variant: "brand"
      },
      name: "example",
      width: 20
    }
  },
  "with brand button text": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      button: {
        text: "Search",
        variant: "brand"
      },
      name: "example",
      width: 20
    }
  },
  "with brand button text only": {
    context: {
      label: {
        heading: "Product order number",
        size: "m"
      },
      button: {
        icon: false,
        text: "Find",
        variant: "brand"
      },
      name: "example",
      width: 20
    }
  },
  "with secondary button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      button: {
        variant: "secondary"
      },
      name: "example",
      width: 20
    },
    screenshot: true
  },
  "with secondary button text": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      button: {
        text: "Search",
        variant: "secondary"
      },
      name: "example",
      width: 20
    }
  },
  "with secondary button text only": {
    context: {
      label: {
        heading: "Product order number",
        size: "m"
      },
      button: {
        icon: false,
        text: "Find",
        variant: "secondary"
      },
      name: "example",
      width: 20
    }
  },
  "without button": {
    context: {
      label: {
        heading: "Search by NHS number",
        size: "m"
      },
      button: false,
      name: "example",
      width: 20
    }
  },
  "without heading": {
    context: {
      label: "Search by NHS number",
      name: "example",
      width: 20
    }
  }
};

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

export { examples };
//# sourceMappingURL=fixtures.mjs.map
