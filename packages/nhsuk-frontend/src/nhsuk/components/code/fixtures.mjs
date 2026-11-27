import { outdent } from "outdent"

import { components, nunjucks } from "#lib"
import * as filters from "#lib/nunjucks/filters/index.mjs"

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
  },
  {
    description: "without border",
    context: {
      border: false
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "with body background",
    context: {
      background: "body"
    }
  },
  {
    description: "with template background",
    context: {
      background: "template"
    },
    options: {
      layout: "background-grey"
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
      html: highlight(
        outdent`
          MacBook-Pro:~ florence$ git --version
          zsh: git: command not found
          MacBook-Pro:~ florence$ █
        `,
        "sh"
      )
    },
    variants
  },
  "button": {
    context: {
      html: highlight(
        outdent`
          import { initAll } from 'nhsuk-frontend'

          initAll({
            button: {
              preventDoubleClick: true
            }
          })
        `,
        "mjs"
      ),
      button: true
    },
    variants: [
      {
        description: "with primary",
        context: {
          copyButtonClassList: ["nhsuk-button--small"]
        }
      },
      {
        description: "with secondary"
      },
      {
        description: "with secondary, solid background",
        context: {
          background: "body",
          copyButtonClassList: [
            "nhsuk-button--secondary-solid",
            "nhsuk-button--small"
          ]
        }
      }
    ]
  },
  "with button double click prevented": {
    context: {
      html: highlight(
        outdent`
          import { initAll } from 'nhsuk-frontend'

          initAll({
            button: {
              preventDoubleClick: true
            }
          })
        `,
        "mjs"
      ),
      button: {
        preventDoubleClick: true
      }
    }
  },
  "with button double click not prevented": {
    context: {
      html: highlight(
        outdent`
          import { initAll } from 'nhsuk-frontend'

          initAll({
            button: {
              preventDoubleClick: true
            }
          })
        `,
        "mjs"
      ),
      button: {
        preventDoubleClick: false
      }
    }
  },
  "with HTML": {
    context: {
      html: highlight(
        outdent`
          import { initAll } from 'nhsuk-frontend'

          initAll({
            button: {
              preventDoubleClick: true
            }
          })
        `,
        "mjs"
      )
    },
    screenshot: true
  },
  "with HTML via call block": {
    callBlock: highlight(
      outdent`
        import { initAll } from 'nhsuk-frontend'

        initAll({
          button: {
            preventDoubleClick: true
          }
        })
      `,
      "mjs"
    )
  },
  "with HTML via call block and button": {
    context: {
      button: true
    },
    callBlock: highlight(
      outdent`
        import { initAll } from 'nhsuk-frontend'

        initAll({
          button: {
            preventDoubleClick: true
          }
        })
      `,
      "mjs"
    )
  },
  "with plain text": {
    context: {
      text: "# Configure NHS.UK frontend"
    }
  },
  "with scroll overflow": {
    context: {
      html: highlight(
        components.render("file-upload", {
          context: {
            label: {
              heading: "Upload your photo"
            },
            id: "file-upload",
            name: "photo"
          }
        }),
        "html"
      )
    }
  },
  "with scroll overflow and button": {
    context: {
      html: highlight(
        components.render("file-upload", {
          context: {
            label: {
              heading: "Upload your photo"
            },
            id: "file-upload",
            name: "photo"
          }
        }),
        "html"
      ),
      button: true
    },
    screenshot: {
      states: ["focus"],
      selector: "code"
    }
  },
  "with translations": {
    context: {
      html: highlight(
        components.macro("file-upload", {
          context: {
            label: {
              heading: "Upload your photo"
            },
            id: "file-upload",
            name: "photo"
          }
        }),
        "njk"
      ),
      button: true,
      copyButtonText: "Copïo cod",
      copiedButtonText: "Cod wedi'i gopïo",
      copiedAnnouncementText: "Cod wedi'i gopïo i'r clipfwrdd"
    }
  }
}

/**
 * Highlight example content
 *
 * @param {string} code - Code in plain text
 * @param {string | string[]} [language] - Code programming language(s)
 */
function highlight(code, language) {
  return filters.highlight.call(nunjucks, code, language).toString()
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
