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
      text: "What is your address?",
      size: "l",
      isPageHeading: true
    },
    screenshot: true
  },
  "text": {
    context: {
      text: "What is your address?",
      size: "l",
      isPageHeading: true
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
      text: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  "size class overriding size param": {
    context: {
      text: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      size: "s",
      isPageHeading: true
    }
  },
  "with HTML": {
    context: {
      text: "What is your address?",
      size: "l",
      isPageHeading: true
    }
  },
  "with HTML via call block": {
    context: {
      size: "l",
      isPageHeading: true
    },
    callBlock: "What is your address?"
  },
  "with heading level 1": {
    context: {
      text: "What is your address?",
      size: "l",
      headingLevel: 1
    }
  },
  "with heading level 2": {
    context: {
      text: "What is your address?",
      size: "m",
      headingLevel: 2
    }
  },
  "without page heading": {
    context: {
      text: "What is your address?"
    }
  },
  "without page heading overriding heading level": {
    context: {
      text: "What is your address?",
      isPageHeading: false,
      headingLevel: 2
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
