/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Change",
      href: "#/change"
    }
  },
  "open in a new tab": {
    context: {
      text: "Change",
      href: "#/change",
      openInNewTab: true
    }
  },
  "with text escaping": {
    context: {
      text: "A&E waiting times",
      href: "#/waiting-times"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E waiting times",
      href: "#/waiting-times"
    }
  },
  "with HTML via call block": {
    context: {
      href: "#/waiting-times"
    },
    callBlock: "A&amp;E waiting times"
  },
  "with visually hidden text": {
    context: {
      text: "Change",
      href: "#/change",
      visuallyHidden: {
        text: "date of birth",
        slots: { start: " " }
      }
    }
  },
  "with visually hidden text only": {
    context: {
      visuallyHidden: "Action",
      href: "#/action"
    }
  },
  'with visually hidden text "before"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "Error:",
        placement: "before"
      }
    }
  },
  'with visually hidden text "start"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "Error:",
        placement: "start",
        slots: { end: " " }
      }
    }
  },
  'with visually hidden text "end"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "(Karen Francis)",
        placement: "end",
        slots: { start: " " }
      }
    }
  },
  'with visually hidden text "after"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "(Karen Francis)",
        placement: "after"
      }
    }
  },
  "with visually hidden text escaping": {
    context: {
      text: "Visit",
      href: "#/visit",
      visuallyHidden: {
        text: "A&E",
        slots: { start: " " }
      }
    }
  },
  "with visually hidden HTML": {
    context: {
      text: "Visit",
      href: "#/visit",
      visuallyHidden: {
        html: "A&amp;E",
        slots: { start: " " }
      }
    }
  },
  "with custom class": {
    context: {
      text: "Change",
      href: "#/change",
      className: "app-link"
    }
  },
  "with reverse class": {
    context: {
      text: "Change",
      href: "#/change",
      classes: "nhsuk-link--reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "with reverse class overriding reverse variant": {
    context: {
      text: "Change",
      href: "#/change",
      classes: "nhsuk-link--reverse",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "without class": {
    context: {
      text: "Change",
      href: "#/change",
      className: false
    }
  },
  "reverse": {
    context: {
      text: "Change",
      href: "#/change",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "as a button": {
    context: {
      text: "Change",
      type: "submit"
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
