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
  "with content slots": {
    context: {
      text: "Enter your full name",
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
