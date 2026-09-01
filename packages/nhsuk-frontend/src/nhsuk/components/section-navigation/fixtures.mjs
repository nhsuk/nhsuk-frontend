import { components } from "#lib"

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
          text: "All clinics"
        },
        {
          href: "#",
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with ARIA label": {
    context: {
      ariaLabel: "Items in this section",
      items: [
        {
          href: "#",
          text: "Summary",
          current: true
        },
        {
          href: "#",
          text: "History"
        },
        {
          href: "#",
          text: "Documents"
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with badge": {
    context: {
      items: [
        {
          href: "#",
          text: "All",
          badge: {
            text: "12",
            visuallyHiddenText: "Count"
          }
        },
        {
          href: "#",
          text: "Today",
          badge: {
            text: "3",
            visuallyHiddenText: "Count"
          },
          current: true
        },
        {
          href: "#",
          text: "Upcoming",
          badge: {
            text: "New"
          }
        },
        {
          href: "#",
          text: "Completed",
          badge: {
            text: "0",
            visuallyHiddenText: "Count"
          }
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: true
  },
  "with html": {
    context: {
      items: [
        {
          href: "#",
          html: "Overview"
        },
        {
          href: "#",
          html: `Vaccinations${components.render("tag", {
            context: {
              text: "New",
              visuallyHiddenText: ", ",
              colour: "green"
            }
          })}`,
          current: true
        },
        {
          href: "#",
          html: "Consent"
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "reverse": {
    context: {
      classes: "nhsuk-section-navigation--reverse",
      items: [
        {
          href: "#",
          text: "All clinics"
        },
        {
          href: "#",
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      layout: "background-blue",
      width: "full"
    },
    screenshot: true
  },
  "reverse with badge": {
    context: {
      classes: "nhsuk-section-navigation--reverse",
      items: [
        {
          href: "#",
          text: "All",
          badge: {
            text: "12",
            visuallyHiddenText: "Count"
          }
        },
        {
          href: "#",
          text: "Today",
          badge: {
            text: "3",
            visuallyHiddenText: "Count"
          },
          current: true
        },
        {
          href: "#",
          text: "Upcoming",
          badge: {
            text: "9",
            visuallyHiddenText: "Count"
          }
        },
        {
          href: "#",
          text: "Completed",
          badge: {
            text: "0",
            visuallyHiddenText: "Count"
          }
        }
      ]
    },
    options: {
      layout: "background-blue",
      width: "full"
    },
    screenshot: true
  },
  "vertical": {
    context: {
      vertical: true,
      items: [
        {
          href: "#",
          text: "All clinics"
        },
        {
          href: "#",
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: true
  },
  "with unlinked current item": {
    context: {
      items: [
        {
          href: "#",
          text: "All clinics"
        },
        {
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "small": {
    context: {
      small: true,
      items: [
        {
          href: "#",
          text: "All clinics"
        },
        {
          href: "#",
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: true
  },
  "small vertical": {
    context: {
      small: true,
      vertical: true,
      items: [
        {
          href: "#",
          text: "All clinics"
        },
        {
          href: "#",
          text: "Today",
          current: true
        },
        {
          href: "#",
          text: "Upcoming"
        },
        {
          href: "#",
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: true
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
