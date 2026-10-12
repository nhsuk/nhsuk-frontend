'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      name: "example"
    }
  },
  "disabled": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      name: "example",
      disabled: true
    },
    screenshot: true
  },
  "disabled with enabled button": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
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
        heading: "Password",
        size: "l"
      },
      name: "example",
      button: {
        disabled: true
      }
    }
  },
  "with button double click prevented": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      name: "example",
      button: {
        preventDoubleClick: true
      }
    }
  },
  "with button double click not prevented": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      name: "example",
      button: {
        preventDoubleClick: false
      }
    }
  },
  "with hint": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      hint: {
        text: "It probably has some letters, numbers and maybe even some symbols in it"
      },
      id: "with-hint-text",
      name: "example"
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "with error only": {
    context: {
      label: {
        heading: "Password",
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
        heading: "Password",
        size: "l"
      },
      errorMessage: {
        text: "Enter a password"
      },
      id: "with-error-message",
      name: "example"
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      hint: {
        text: "It probably has some letters, numbers and maybe even some symbols in it"
      },
      errorMessage: {
        text: "Enter a password"
      },
      id: "with-error-message",
      name: "example"
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      hint: "It probably has some letters, numbers and maybe even some symbols in it",
      errorMessage: "Enter a password",
      id: "with-error-message",
      name: "example"
    }
  },
  "with error message, without heading": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      errorMessage: {
        text: "Enter a password"
      },
      id: "with-error-message",
      name: "example"
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      hint: {
        text: "It probably has some letters, numbers and maybe even some symbols in it"
      },
      errorMessage: {
        text: "Enter a password"
      },
      id: "with-error-message",
      name: "example"
    }
  },
  "with prefix": {
    context: {
      label: {
        heading: "Secret code",
        size: "m"
      },
      prefix: {
        text: "PIN"
      },
      id: "with-prefix",
      name: "example",
      value: "3.14159",
      width: 5,
      code: true,
      button: {
        variant: "brand"
      }
    }
  },
  "with prefix and error message": {
    context: {
      label: {
        heading: "Secret code",
        size: "m"
      },
      prefix: {
        text: "PIN"
      },
      errorMessage: {
        text: "Enter secret code"
      },
      id: "with-prefix",
      name: "example",
      width: 5,
      code: true,
      button: {
        variant: "brand"
      }
    }
  },
  "without heading": {
    context: {
      label: "Password",
      id: "without-heading",
      name: "example"
    }
  },
  "with width": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      id: "width-class",
      name: "example",
      width: 10
    }
  },
  "with autocomplete attribute": {
    context: {
      label: {
        heading: "Password",
        size: "l"
      },
      id: "new-password",
      name: "example",
      autocomplete: "new-password"
    }
  },
  "with translations": {
    context: {
      label: {
        heading: "Cyfrinair",
        size: "l"
      },
      id: "password-translated",
      name: "example",
      showPasswordText: "Datguddia",
      hidePasswordText: "Cuddio",
      showPasswordAriaLabel: "Datgelu cyfrinair",
      hidePasswordAriaLabel: "Cuddio cyfrinair",
      passwordShownAnnouncementText: "Mae eich cyfrinair yn weladwy.",
      passwordHiddenAnnouncementText: "Mae eich cyfrinair wedi'i guddio."
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

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
