/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      name: "example"
    },
    screenshot: true
  },
  "disabled": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      name: "example",
      disabled: true
    },
    screenshot: true
  },
  "with hint": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      id: "with-hint",
      name: "example"
    }
  },
  "label": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      id: "custom-size",
      name: "example"
    },
    variants: [{
      description: "with size S",
      context: {
        label: {
          size: "s"
        }
      }
    }, {
      description: "with size M",
      context: {
        label: {
          size: "m"
        }
      }
    }, {
      description: "with size L",
      context: {
        label: {
          size: "l"
        }
      }
    }, {
      description: "with size XL",
      context: {
        label: {
          size: "xl"
        }
      }
    }, {
      description: "with id attribute on",
      context: {
        label: {
          id: "custom-id"
        }
      },
      options: {
        hidden: true
      }
    }]
  },
  "without heading": {
    context: {
      label: "Can you provide more detail?",
      hint: "Do not include personal information like your name, date of birth or NHS number",
      id: "without-heading",
      name: "example"
    }
  },
  "with error only": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      errorMessage: true,
      id: "with-error-only",
      name: "example"
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      errorMessage: {
        text: "You must provide an explanation"
      },
      id: "with-error-message",
      name: "example"
    },
    screenshot: {
      states: ["focus"],
      selector: "#with-error-message"
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      errorMessage: {
        text: "You must provide an explanation"
      },
      id: "with-hint-error",
      name: "example"
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: "Do not include personal information like your name, date of birth or NHS number",
      errorMessage: "You must provide an explanation",
      id: "with-hint-error",
      name: "example"
    }
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "Can you provide more detail?"
      },
      errorMessage: {
        text: "You must provide an explanation"
      },
      id: "with-error-message",
      name: "example"
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "Can you provide more detail?"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      errorMessage: {
        text: "You must provide an explanation"
      },
      id: "with-hint-error",
      name: "example"
    }
  },
  "with autocomplete attribute": {
    context: {
      label: {
        heading: "Full address",
        size: "l"
      },
      id: "with-autocomplete-attribute",
      name: "example",
      autocomplete: "street-address"
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
