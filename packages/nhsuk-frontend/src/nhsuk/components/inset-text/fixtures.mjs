/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "You can report any suspected side effect using the Yellow Card safety scheme"
    },
    screenshot: true
  },
  "with HTML": {
    context: {
      html: '<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>'
    },
    screenshot: true
  },
  "with HTML via call block": {
    callBlock:
      '<p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>'
  },
  "with content slots": {
    context: {
      text: "You can report any suspected side effect using the Yellow Card safety scheme",
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
