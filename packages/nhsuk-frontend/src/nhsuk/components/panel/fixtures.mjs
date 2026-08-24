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
        text: "Booking complete"
      },
      text: "We have sent you a confirmation email"
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with heading as string": {
    context: {
      heading: "Booking complete",
      text: "We have sent you a confirmation email"
    }
  },
  "with HTML": {
    context: {
      heading: {
        text: "Booking complete"
      },
      html: "We have sent you a confirmation email"
    }
  },
  "with HTML via call block": {
    context: {
      heading: {
        text: "Booking complete"
      }
    },
    callBlock: "We have sent you a confirmation email"
  },
  "interruption": {
    context: {
      heading: {
        text: "Jodie Brown had a COVID-19 vaccine less than 3 months ago",
        size: "l"
      },
      variant: "interruption",
      html: outdent`
        <p>They had a COVID-19 vaccine on 25 September 2025.</p>
        <p>For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.</p>
        <div class="nhsuk-button-group">
          ${components.render("button", {
            context: {
              text: "Continue anyway",
              variant: "reverse",
              href: "#"
            }
          })}
          <a href="#">Cancel</a>
        </div>
      `
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "interruption for confirmation to cancel": {
    context: {
      heading: {
        text: "Confirm you want to cancel your hospital appointment",
        size: "l"
      },
      variant: "interruption",
      html: outdent`
        <p>You will be able to reschedule your appointment for another time, but this may delay your treatment.</p>
        <p>Cancelling your appointment cannot be undone.</p>
        <div class="nhsuk-button-group">
          ${components.render("button", {
            context: {
              text: "Cancel appointment",
              variant: "reverse",
              href: "#"
            }
          })}
          <a href="#">Change my weight</a>
        </div>
      `
    }
  },
  "interruption for confirmation to continue": {
    context: {
      heading: {
        text: "Is your weight correct?",
        size: "l"
      },
      variant: "interruption",
      html: outdent`
        <p>You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.</p>
        <div class="nhsuk-button-group">
          ${components.render("button", {
            context: {
              text: "Yes, this is correct",
              variant: "reverse",
              href: "#"
            }
          })}
          <a href="#">Change my weight</a>
        </div>
      `
    }
  },
  "heading": {
    context: {
      heading: {
        text: "Booking complete",
        size: "l"
      },
      text: "We have sent you a confirmation email"
    },
    variants: [
      {
        description: "with size M",
        context: {
          heading: {
            size: "m"
          }
        }
      },
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
      },
      {
        description: "with id attribute on",
        context: {
          heading: {
            id: "custom-id"
          }
        },
        options: {
          hidden: true
        }
      }
    ]
  },
  "with heading classes": {
    context: {
      heading: {
        text: "Booking complete",
        classes: "nhsuk-panel__heading--l"
      },
      text: "We have sent you a confirmation email"
    }
  },
  "with heading level 1": {
    context: {
      heading: {
        text: "Booking complete",
        level: 1
      },
      text: "We have sent you a confirmation email"
    }
  },
  "with heading level 2": {
    context: {
      heading: {
        text: "Booking complete",
        level: 2
      },
      text: "We have sent you a confirmation email"
    }
  },
  "with heading level 3": {
    context: {
      heading: {
        text: "Booking complete",
        level: 3
      },
      text: "We have sent you a confirmation email"
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
