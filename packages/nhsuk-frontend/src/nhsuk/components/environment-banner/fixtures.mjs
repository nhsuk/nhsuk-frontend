/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    options: {
      width: false
    },
    variants: [
      {
        // Regular variant
        context: {
          tag: "Default"
        }
      },
      {
        description: "white",
        context: {
          tag: "Development",
          colour: "white"
        }
      },
      {
        description: "grey",
        context: {
          tag: "Prototype",
          colour: "grey"
        }
      },
      {
        description: "green",
        context: {
          tag: "Staging",
          colour: "green"
        }
      },
      {
        description: "aqua green",
        context: {
          tag: "Sandbox",
          colour: "aqua-green"
        }
      },
      {
        description: "blue",
        context: {
          tag: "Production",
          colour: "blue"
        }
      },
      {
        description: "purple",
        context: {
          tag: "Review",
          colour: "purple"
        }
      },
      {
        description: "pink",
        context: {
          tag: "Demo",
          colour: "pink"
        }
      },
      {
        description: "red",
        context: {
          tag: "Test",
          colour: "red"
        }
      },
      {
        description: "orange",
        context: {
          tag: "QA",
          name: "QA",
          colour: "orange"
        }
      },
      {
        description: "yellow",
        context: {
          tag: "Preview",
          colour: "yellow"
        }
      }
    ]
  },
  "with HTML": {
    context: {
      tag: {
        text: "Custom",
        colour: "red"
      },
      html: 'This is a %{name} environment for <a class="nhsuk-link nhsuk-link--reverse" href="https://github.com/nhsuk/nhsuk-frontend/pulls">pull request #1234</a>'
    },
    options: {
      width: false
    }
  },
  "with HTML via call block": {
    context: {
      tag: {
        text: "Custom",
        colour: "red"
      }
    },
    callBlock:
      'This is a %{name} environment for <a class="nhsuk-link nhsuk-link--reverse" href="https://github.com/nhsuk/nhsuk-frontend/pulls">pull request #1234</a>',
    options: {
      width: false
    }
  },
  "without tag": {
    context: {
      tag: false
    },
    options: {
      width: false
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
