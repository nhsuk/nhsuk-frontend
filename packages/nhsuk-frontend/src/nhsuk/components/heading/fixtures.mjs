/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    description: "with size S",
    context: {
      size: "s"
    }
  },
  {
    description: "with size M",
    context: {
      size: "m"
    }
  },
  {
    description: "with size L",
    context: {
      size: "l"
    }
  },
  {
    description: "with size XL",
    context: {
      size: "xl"
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "What is your full name?",
      size: "l"
    },
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "text": {
    context: {
      text: "What is your full name?",
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "text and caption": {
    context: {
      text: "What is your home address?",
      caption: "About you",
      size: "l"
    },
    variants
  },
  'text and caption "before"': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "before"
      },
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  'text and caption "before" as a heading': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "before",
        element: "h2"
      },
      size: "l"
    }
  },
  'text and caption "after"': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "after"
      },
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  'text and caption "after" as a paragraph': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "after",
        element: "p"
      },
      size: "l"
    }
  },
  'text and caption "start"': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "start"
      },
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  'text and caption "end"': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "end"
      },
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "size class": {
    context: {
      text: "What is your full name?",
      classes: "nhsuk-heading-l"
    }
  },
  "size class overriding size option": {
    context: {
      text: "What is your full name?",
      classes: "nhsuk-heading-l",
      size: "s"
    }
  },
  "with link": {
    context: {
      text: "Skin colour changes",
      href: "#/result/1",
      size: "l"
    }
  },
  "with link and caption": {
    context: {
      text: "Skin colour changes",
      caption: "A to Z of NHS health writing",
      href: "#/result/1",
      size: "l"
    }
  },
  "with HTML": {
    context: {
      html: "What to expect at A&amp;E",
      size: "l"
    }
  },
  "with HTML and caption": {
    context: {
      html: "What to expect at A&amp;E",
      caption: "Urgent and emergency care services",
      size: "l"
    }
  },
  "with HTML via call block": {
    context: {
      size: "l"
    },
    callBlock: "What to expect at A&amp;E"
  },
  "with HTML via call block and caption": {
    context: {
      caption: "Urgent and emergency care services",
      size: "l"
    },
    callBlock: "What to expect at A&amp;E"
  },
  "with visually hidden text": {
    context: {
      text: "Home address",
      visuallyHiddenText: "(Karen Francis)",
      size: "l"
    }
  },
  "with visually hidden text and caption": {
    context: {
      text: "Home address",
      visuallyHiddenText: "(Karen Francis)",
      caption: "About you",
      size: "l"
    }
  },
  "with visually hidden options": {
    context: {
      text: "Home address",
      visuallyHidden: {
        text: "Important:",
        placement: "start"
      },
      size: "l"
    }
  },
  "with custom class and size": {
    context: {
      text: "What is your full name?",
      className: "app-heading",
      size: "s"
    }
  },
  "with custom class and size as modifier": {
    context: {
      text: "What is your full name?",
      className: "app-heading",
      classPrefix: "app-heading--",
      size: "s"
    }
  },
  "without class": {
    context: {
      text: "What is your full name?",
      className: false
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
