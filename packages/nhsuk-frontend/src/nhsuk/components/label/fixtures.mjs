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
      text: "What is your full name?",
      size: "l",
      isPageHeading: true
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "text": {
    context: {
      text: "What is your full name?",
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
      text: "What is your full name?",
      caption: "About you",
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  'text and caption "before" as a paragraph': {
    context: {
      text: "What is your full name?",
      caption: {
        text: "About you",
        placement: "before",
        element: "p"
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
      text: "What is your full name?",
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
      text: "What is your full name?",
      classes: "nhsuk-label--l",
      isPageHeading: true
    }
  },
  "size class overriding size param": {
    context: {
      text: "What is your full name?",
      classes: "nhsuk-label--l",
      size: "s",
      isPageHeading: true
    }
  },
  "with HTML": {
    context: {
      html: "What is your full name?",
      size: "l",
      isPageHeading: true
    }
  },
  "with HTML via call block": {
    context: {
      size: "l",
      isPageHeading: true
    },
    callBlock: "What is your full name?"
  },
  "without page heading": {
    context: {
      text: "What is your full name?"
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
