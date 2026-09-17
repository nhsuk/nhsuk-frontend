import { outdent } from "outdent"

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
      text: "Find your nearest A&E",
      href: "#/find"
    },
    variants,
    screenshot: {
      states: ["focus", "hover", "active"],
      selector: ".nhsuk-action-link"
    }
  },
  "as a button": {
    context: {
      text: "Find your nearest A&E",
      type: "submit"
    },
    variants,
    screenshot: {
      states: ["focus", "hover", "active"],
      selector: ".nhsuk-action-link"
    }
  },
  "slot": {
    context: {
      text: "Find your nearest A&E",
      href: "#/find"
    },
    variants: [
      {
        description: 'with "before"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            }
          }
        }
      },
      {
        description: 'with "before" and "start"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            },
            start: {
              html: "<samp>Start–</samp>"
            }
          }
        }
      },
      {
        description: 'with "before", "start", "end" and "after"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            },
            start: {
              html: "<samp>Start–</samp>"
            },
            end: {
              html: "<samp>–End</samp>"
            },
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      },
      {
        description: 'with "start"',
        context: {
          slots: {
            start: {
              html: "<samp>Start–</samp>"
            }
          }
        }
      },
      {
        description: 'with "end"',
        context: {
          slots: {
            end: {
              html: "<samp>–End</samp>"
            }
          }
        }
      },
      {
        description: 'with "end" and "after"',
        context: {
          slots: {
            end: {
              html: "<samp>–End</samp>"
            },
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      },
      {
        description: 'with "after"',
        context: {
          slots: {
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      }
    ]
  },
  "with HTML": {
    context: {
      html: outdent`
        Start session<br>
        <span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
      `,
      href: "#/start"
    },
    variants
  },
  "with HTML via call block": {
    context: {
      href: "#/start"
    },
    callBlock: outdent`
      Start session<br>
      <span class="nhsuk-u-secondary-text-colour nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
    `
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
