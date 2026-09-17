/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Change"
    }
  },
  "with text escaping": {
    context: {
      text: "A&E waiting times"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E waiting times"
    }
  },
  "with HTML via call block": {
    callBlock: "A&amp;E waiting times"
  },
  "with link": {
    context: {
      href: "#/result",
      text: "Change"
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
