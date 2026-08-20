/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [
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
      heading: "What is your address?",
      size: "l"
    },
    screenshot: true
  },
  "text": {
    context: {
      heading: "What is your address?",
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
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "size class": {
    context: {
      heading: "What is your address?",
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  "size class overriding size option": {
    context: {
      heading: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      size: "s"
    }
  },
  "with HTML": {
    context: {
      html: "What is your address?",
      heading: true,
      size: "l"
    }
  },
  "with HTML via call block": {
    context: {
      heading: true,
      size: "l"
    },
    callBlock: "What is your address?"
  },
  "with heading level 1": {
    context: {
      heading: "What is your address?",
      headingLevel: 1,
      size: "l"
    }
  },
  "with heading level 2": {
    context: {
      heading: "What is your address?",
      headingLevel: 2,
      size: "m"
    }
  },
  "with heading options": {
    context: {
      text: "What is your address?",
      heading: {
        level: 3,
        size: "s"
      }
    }
  },
  "with heading overriding heading level": {
    context: {
      text: "What is your address?",
      heading: false,
      headingLevel: 2
    }
  },
  "without heading": {
    context: {
      text: "What is your address?"
    }
  },
  "with deprecated page heading": {
    context: {
      text: "What is your address?",
      size: "m",
      isPageHeading: true
    }
  },
  "with deprecated page heading overriding heading": {
    context: {
      heading: "What is your address?",
      headingLevel: 2,
      isPageHeading: false
    }
  },
  "with deprecated page heading overriding heading options": {
    context: {
      text: "What is your address?",
      heading: {
        level: 3,
        size: "s"
      },
      isPageHeading: false
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
