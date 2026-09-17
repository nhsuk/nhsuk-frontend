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
  },
  "with link and visually hidden text": {
    context: {
      href: "#/change",
      text: "Change",
      visuallyHidden: {
        text: "date of birth"
      }
    }
  },
  "with visually hidden text": {
    context: {
      text: "Change",
      visuallyHidden: {
        text: "date of birth"
      }
    }
  },
  "with visually hidden text only": {
    context: {
      visuallyHidden: "Action"
    }
  },
  'with visually hidden text "start"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Error",
        suffix: ":",
        placement: "start"
      }
    }
  },
  'with visually hidden text "end"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Karen Francis",
        prefix: "(",
        suffix: ")",
        placement: "end"
      }
    }
  },
  "with visually hidden text escaping": {
    context: {
      text: "Visit",
      visuallyHidden: {
        text: "A&E"
      }
    }
  },
  "with visually hidden HTML": {
    context: {
      text: "Visit",
      visuallyHidden: {
        html: "A&amp;E"
      }
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
