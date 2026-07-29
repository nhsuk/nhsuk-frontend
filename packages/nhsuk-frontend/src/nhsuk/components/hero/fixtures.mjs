import { outdent } from "outdent"

import { components } from "#lib"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      heading: {
        text: "We're here for you"
      },
      text: "Helping you take control of your health and wellbeing.",
      border: false
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop", "large-desktop"]
    }
  },
  "heading": {
    context: {
      heading: {
        text: "We're here for you"
      },
      text: "Helping you take control of your health and wellbeing.",
      border: false
    },
    options: {
      width: false
    },
    variants: [
      {
        description: "with size L",
        context: {
          heading: {
            size: "l"
          }
        }
      },
      {
        description: "with size XL",
        context: {
          heading: {
            size: "xl"
          }
        }
      }
    ]
  },
  "with heading and caption": {
    context: {
      heading: {
        text: "Prototyping",
        caption: "Setup"
      }
    },
    options: {
      width: false
    }
  },
  "with heading only": {
    context: {
      heading: {
        text: "Prototyping"
      }
    },
    options: {
      width: false
    }
  },
  "with image": {
    context: {
      image: {
        src: "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop", "large-desktop"]
    }
  },
  "with image, content": {
    context: {
      heading: {
        text: "We're here for you"
      },
      text: "Helping you take control of your health and wellbeing.",
      image: {
        src: "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop", "large-desktop"]
    }
  },
  "with content columns": {
    context: {
      content: [
        {
          heading: {
            text: "This is a header for the product or service",
            size: "l"
          },
          html: outdent`
            <p class="nhsuk-body-l">This is some more content which explains the product or service.</p>
            ${components.render("button", {
              context: {
                text: "Sign up",
                variant: "reverse",
                href: "#"
              }
            })}
          `
        },
        {
          html: outdent`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400" focusable="false" role="img" aria-label="Example image">
              <title>Example image</title>
              <rect width="600" height="400" fill="LightGray"/>
            </svg>
          `
        }
      ],
      border: false
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
