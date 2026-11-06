/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: "reverse",
    context: {
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
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
      text: "Enter your full name"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "with text escaping": {
    context: {
      text: "Postcode must not include & and <"
    }
  },
  "with HTML": {
    context: {
      html: "Postcode must not include &amp; and &lt;"
    }
  },
  "with HTML via call block": {
    callBlock: "Postcode must not include &amp; and &lt;"
  },
  "with translations": {
    context: {
      text: "Rhowch eich enw llawn",
      visuallyHiddenText: "Gwall"
    }
  },
  "without visually hidden text": {
    context: {
      text: "There is an error on line 42",
      visuallyHiddenText: ""
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
