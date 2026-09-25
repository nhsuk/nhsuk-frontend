/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      items: [
        {
          href: "#",
          text: "What is AMD?",
          current: true
        },
        {
          href: "#",
          text: "Symptoms"
        },
        {
          href: "#",
          text: "Getting diagnosed"
        },
        {
          href: "#",
          text: "Treatments"
        },
        {
          href: "#",
          text: "Living with AMD"
        }
      ]
    },
    screenshot: true
  },
  "with empty items": {
    context: {
      items: [
        {
          href: "#",
          text: "What is AMD?",
          current: true
        },
        {
          href: "#",
          text: "Symptoms"
        },
        false,
        {
          href: "#",
          text: "Treatments"
        },
        false
      ]
    }
  },
  "with nested lists": {
    context: {
      items: [
        {
          href: "#",
          text: "Chapter 1"
        },
        {
          href: "#",
          text: "Chapter 2",
          items: [
            {
              href: "#",
              text: "Section 2.1"
            },
            {
              href: "#",
              text: "Section 2.2"
            }
          ]
        },
        {
          href: "#",
          text: "Chapter 3"
        }
      ]
    },
    screenshot: true
  },
  "with visually hidden text": {
    context: {
      visuallyHiddenText: "Table of contents",
      items: [
        {
          href: "#",
          text: "What is AMD?",
          current: true
        },
        {
          href: "#",
          text: "Symptoms"
        },
        {
          href: "#",
          text: "Getting diagnosed"
        },
        {
          href: "#",
          text: "Treatments"
        },
        {
          href: "#",
          text: "Living with AMD"
        }
      ]
    }
  },
  "with content slots": {
    context: {
      items: [
        {
          href: "#",
          text: "What is AMD?",
          current: true
        },
        {
          href: "#",
          text: "Symptoms"
        },
        {
          href: "#",
          text: "Getting diagnosed"
        },
        {
          href: "#",
          text: "Treatments"
        },
        {
          href: "#",
          text: "Living with AMD"
        }
      ],
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
  "with content slots in items": {
    context: {
      items: [
        {
          href: "#",
          text: "What is AMD?",
          current: true,
          slots: {
            start: {
              html: '<samp class="app-annotate app-annotate--start">Start</samp>'
            },
            end: {
              html: '<samp class="app-annotate app-annotate--end">End</samp>'
            }
          }
        },
        {
          href: "#",
          text: "Symptoms"
        },
        {
          href: "#",
          text: "Getting diagnosed"
        },
        {
          href: "#",
          text: "Treatments"
        },
        {
          href: "#",
          text: "Living with AMD",
          slots: {
            start: {
              html: '<samp class="app-annotate app-annotate--start">Start</samp>'
            },
            end: {
              html: '<samp class="app-annotate app-annotate--end">End</samp>'
            }
          }
        }
      ]
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
