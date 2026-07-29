import { outdent } from 'outdent';
import { components } from '#lib';

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
    variants: [{
      description: "with size L",
      context: {
        heading: {
          size: "l"
        }
      }
    }, {
      description: "with size XL",
      context: {
        heading: {
          size: "xl"
        }
      }
    }]
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
        src: "/nhsuk-frontend/assets/example-hero-background.jpg"
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
        src: "/nhsuk-frontend/assets/example-hero-background.jpg"
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
      content: [{
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
      }, {
        image: {
          src: "/nhsuk-frontend/assets/example-hero-image.svg",
          background: false,
          border: false
        }
      }],
      border: false
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop", "large-desktop"]
    }
  }
};

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

export { examples };
//# sourceMappingURL=fixtures.mjs.map
