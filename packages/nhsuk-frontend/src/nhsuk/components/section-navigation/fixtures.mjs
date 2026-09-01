import { components } from "#lib"

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
    description: "small",
    context: {
      small: true
    }
  },
  {
    description: "vertical",
    context: {
      vertical: true
    }
  },
  {
    description: "small vertical",
    context: {
      small: true,
      vertical: true
    }
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
    description: "small reverse",
    context: {
      small: true,
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "reverse vertical",
    context: {
      vertical: true,
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "small reverse vertical",
    context: {
      small: true,
      vertical: true,
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
      items: [
        {
          href: "#",
          text: "Summary"
        },
        {
          text: "Observations",
          current: true
        },
        {
          href: "#",
          text: "Medicines"
        },
        {
          href: "#",
          text: "Referrals"
        }
      ]
    },
    options: {
      width: "full"
    },
    variants,
    screenshot: true
  },
  "with ARIA label": {
    context: {
      ariaLabel: "Items in this section",
      items: [
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
      width: "full"
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Vertical variant
      variants[4], // Reverse variant
      variants[6] // Reverse vertical variant
    ],
    screenshot: true
  },
  "with badge text": {
    context: {
      items: [
        {
          href: "#",
          text: "All"
        },
        {
          text: "Today",
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
          text: "Completed"
        }
      ]
    },
    options: {
      width: "full"
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Vertical variant
      variants[4], // Reverse variant
      variants[6] // Reverse vertical variant
    ]
  },
  "with custom html": {
    context: {
      items: [
        {
          href: "#",
          html: "Overview"
        },
        {
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
    },
    variants: [
      variants[0], // Regular variant
      variants[2] // Vertical variant
    ]
  },
  "with active item": {
    context: {
      items: [
        {
          href: "#",
          text: "Summary"
        },
        {
          href: "#",
          text: "Observations",
          active: true
        },
        {
          href: "#",
          text: "Medicines"
        },
        {
          href: "#",
          text: "Referrals"
        }
      ]
    },
    options: {
      width: "full"
    },
    variants
  },
  "with current item": {
    context: {
      items: [
        {
          href: "#",
          text: "Summary"
        },
        {
          text: "Observations",
          current: true
        },
        {
          href: "#",
          text: "Medicines"
        },
        {
          href: "#",
          text: "Referrals"
        }
      ]
    },
    options: {
      width: "full"
    },
    variants
  },
  "with current (linked) item": {
    context: {
      items: [
        {
          href: "#",
          text: "Summary"
        },
        {
          href: "#",
          text: "Observations",
          current: true
        },
        {
          href: "#",
          text: "Medicines"
        },
        {
          href: "#",
          text: "Referrals"
        }
      ]
    },
    options: {
      width: "full"
    },
    variants,
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
