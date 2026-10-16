/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Do not include personal information like your name, date of birth or NHS number"
    },
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "with HTML": {
    context: {
      html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
    }
  },
  "with HTML via call block": {
    callBlock:
      'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
  },
  "with content slots": {
    context: {
      text: "Do not include personal information like your name, date of birth or NHS number",
      slots: {
        before: {
          html: '<samp class="app-annotate">Before</samp>'
        },
        start: {
          html: '<samp class="app-annotate app-annotate--start">Start</samp>'
        },
        end: {
          html: '<samp class="app-annotate app-annotate--end">End</samp>'
        },
        after: {
          html: '<samp class="app-annotate">After</samp>'
        }
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
