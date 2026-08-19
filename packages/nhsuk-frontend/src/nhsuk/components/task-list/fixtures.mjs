/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      idPrefix: "your-health",
      items: [
        {
          heading: {
            text: "Exercise"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          heading: {
            text: "Personal health"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          heading: {
            text: "Family health history"
          },
          hint: {
            text: "Details of your parents, brothers and sisters"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          heading: {
            text: "Smoking history"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          heading: {
            text: "Blood test"
          },
          status: {
            text: "Cannot start yet",
            classes: "nhsuk-task-list__status--cannot-start-yet"
          }
        }
      ]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with deprecated titles": {
    context: {
      idPrefix: "your-health",
      items: [
        {
          title: {
            text: "Exercise"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          title: {
            text: "Personal health"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          title: {
            text: "Family health history"
          },
          hint: {
            text: "Details of your parents, brothers and sisters"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          title: {
            text: "Smoking history"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          title: {
            text: "Blood test"
          },
          status: {
            text: "Cannot start yet",
            classes: "nhsuk-task-list__status--cannot-start-yet"
          }
        }
      ]
    }
  },
  "with headings as strings": {
    context: {
      idPrefix: "your-health",
      items: [
        {
          heading: "Exercise",
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          heading: "Personal health",
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          heading: "Family health history",
          hint: {
            text: "Details of your parents, brothers and sisters"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          heading: "Smoking history",
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        },
        {
          heading: "Blood test",
          status: {
            text: "Cannot start yet",
            classes: "nhsuk-task-list__status--cannot-start-yet"
          }
        }
      ]
    }
  },
  "with empty items": {
    context: {
      idPrefix: "your-health",
      items: [
        {
          heading: {
            text: "Exercise"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        {
          heading: {
            text: "Personal health"
          },
          href: "#",
          status: {
            text: "Completed",
            classes: "nhsuk-task-list__status--completed"
          }
        },
        false,
        false,
        {
          heading: {
            text: "Blood test"
          },
          href: "#",
          status: {
            tag: {
              text: "Incomplete",
              colour: "blue"
            }
          }
        }
      ]
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
