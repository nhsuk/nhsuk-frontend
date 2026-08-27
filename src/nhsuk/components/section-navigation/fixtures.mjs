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
  "with badge": {
    context: {
      items: [
        {
          href: "#",
          text: "All",
          badge: { text: "12", visuallyHiddenText: "Count:" }
        },
        {
          href: "#",
          text: "Today",
          badge: { text: "3", visuallyHiddenText: "Count:" },
          current: true
        },
        {
          href: "#",
          text: "Upcoming",
          badge: { text: "New" }
        },
        {
          href: "#",
          text: "Completed",
          badge: { text: "0", visuallyHiddenText: "Count:" }
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
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
          html: 'Vaccinations<span class="nhsuk-section-navigation__suffix"><strong class="nhsuk-tag nhsuk-tag--green">New</strong></span>',
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
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "reverse with badge": {
    context: {
      classes: "nhsuk-section-navigation--reverse",
      items: [
        {
          href: "#",
          text: "All",
          badge: { text: "12", visuallyHiddenText: "Count:" }
        },
        {
          href: "#",
          text: "Today",
          badge: { text: "3", visuallyHiddenText: "Count:" },
          current: true
        },
        {
          href: "#",
          text: "Upcoming",
          badge: { text: "9", visuallyHiddenText: "Count:" }
        },
        {
          href: "#",
          text: "Completed",
          badge: { text: "0", visuallyHiddenText: "Count:" }
        }
      ]
    },
    options: {
      layout: "background-blue",
      width: "full"
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with custom label": {
    context: {
      label: "Section navigation",
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
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
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
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
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
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
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
