import { components } from '#lib';

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  // Regular variant
}, {
  description: "small",
  context: {
    small: true
  }
}, {
  description: "reverse",
  context: {
    variant: "reverse"
  },
  options: {
    layout: "background-blue"
  }
}, {
  description: "small reverse",
  context: {
    small: true,
    variant: "reverse"
  },
  options: {
    layout: "background-blue"
  }
}];

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      items: [{
        href: "#",
        text: "Summary"
      }, {
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants,
    screenshot: true
  },
  "horizontal": {
    context: {
      direction: "horizontal",
      items: [{
        href: "#",
        text: "Summary"
      }, {
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants
  },
  "horizontal with badge": {
    context: {
      direction: "horizontal",
      items: [{
        href: "#",
        text: "All",
        badge: {
          text: "12",
          visuallyHiddenText: "Count"
        }
      }, {
        text: "Today",
        badge: {
          text: "3",
          visuallyHiddenText: "Count"
        },
        current: true
      }, {
        href: "#",
        text: "Upcoming",
        badge: {
          text: "9",
          visuallyHiddenText: "Count"
        }
      }, {
        href: "#",
        text: "Completed",
        badge: {
          text: "0",
          visuallyHiddenText: "Count"
        }
      }]
    },
    options: {
      width: "full"
    },
    variants,
    screenshot: true
  },
  "vertical": {
    context: {
      direction: "vertical",
      items: [{
        href: "#",
        text: "Summary"
      }, {
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Allergies"
      }, {
        href: "#",
        text: "Vaccinations"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants
  },
  "vertical with badge": {
    context: {
      direction: "vertical",
      items: [{
        href: "#",
        text: "Summary"
      }, {
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Allergies"
      }, {
        href: "#",
        text: "Vaccinations"
      }, {
        href: "#",
        text: "Referrals",
        badge: {
          text: "New"
        }
      }]
    },
    options: {
      width: "full"
    },
    variants
  },
  "with ARIA label": {
    context: {
      ariaLabel: "Items in this section",
      items: [{
        text: "Today",
        current: true
      }, {
        href: "#",
        text: "Upcoming"
      }, {
        href: "#",
        text: "Completed"
      }]
    },
    options: {
      width: "full"
    }
  },
  "with custom html": {
    context: {
      items: [{
        href: "#",
        html: "Overview"
      }, {
        html: `Vaccinations${components.render("tag", {
          context: {
            text: "New",
            visuallyHiddenText: ", ",
            colour: "green"
          }
        })}`,
        current: true
      }, {
        href: "#",
        html: "Consent"
      }]
    },
    options: {
      width: "full"
    },
    variants: [{
      description: "horizontal",
      context: {
        direction: "horizontal"
      }
    }, {
      description: "vertical",
      context: {
        direction: "vertical"
      }
    }]
  },
  "with active item": {
    context: {
      items: [{
        href: "#",
        text: "Summary"
      }, {
        href: "#",
        text: "Observations",
        active: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants
  },
  "with current item": {
    context: {
      items: [{
        href: "#",
        text: "Summary"
      }, {
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants
  },
  "with current (linked) item": {
    context: {
      items: [{
        href: "#",
        text: "Summary"
      }, {
        href: "#",
        text: "Observations",
        current: true
      }, {
        href: "#",
        text: "Medicines"
      }, {
        href: "#",
        text: "Referrals"
      }]
    },
    options: {
      width: "full"
    },
    variants,
    screenshot: true
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

export { examples, variants };
//# sourceMappingURL=fixtures.mjs.map
