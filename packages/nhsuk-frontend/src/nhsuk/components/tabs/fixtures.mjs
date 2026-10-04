import { outdent } from "outdent"

import { components } from "#lib"

import { examples as tableExamples } from "../tables/fixtures.mjs"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      idPrefix: "example",
      items: [
        {
          label: {
            text: "Past day"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past day)"]
            )
          }
        },
        {
          label: {
            text: "Past week"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past week)"]
            )
          }
        },
        {
          label: {
            text: "Past month"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past month)"]
            )
          }
        },
        {
          label: {
            text: "Past year"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past year)"]
            )
          }
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
  "with anchor in panel": {
    context: {
      idPrefix: "with-anchor",
      items: [
        {
          label: {
            text: "Tab 1"
          },
          panel: {
            html: outdent`
              <h2>Tab 1 content</h2>
              <p>Testing that when you <a href="#anchor">click the link</a> it moves focus.</p>
              <ul>
                <li><a href="#with-anchor-1" id="anchor">Tab panel 1</a></li>
                <li><a href="#with-anchor-2">Tab panel 2</a></li>
                <li><a href="#with-anchor-3">Tab panel 3</a></li>
              </ul>
            `
          }
        },
        {
          label: {
            text: "Tab 2"
          },
          panel: {
            html: outdent`
              <h2>Tab 2 content</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
          }
        },
        {
          label: {
            text: "Tab 3"
          },
          panel: {
            html: outdent`
              <h2>Tab 3 content</h2>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            `
          }
        }
      ]
    }
  },
  "with id attribute": {
    context: {
      id: "tab-id-attribute",
      items: [
        {
          label: {
            text: "Past day"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past day)"]
            )
          }
        },
        {
          label: {
            text: "Past week"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past week)"]
            )
          }
        },
        {
          label: {
            text: "Past month"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past month)"]
            )
          }
        },
        {
          label: {
            text: "Past year"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past year)"]
            )
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with id attribute on panels": {
    context: {
      items: [
        {
          label: {
            text: "Past day"
          },
          id: "past-day",
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past day)"]
            )
          }
        },
        {
          label: {
            text: "Past week"
          },
          id: "past-week",
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past week)"]
            )
          }
        },
        {
          label: {
            text: "Past month"
          },
          id: "past-month",
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past month)"]
            )
          }
        },
        {
          label: {
            text: "Past year"
          },
          id: "past-year",
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past year)"]
            )
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with panels as strings": {
    context: {
      idPrefix: "with-panels-strings",
      items: [
        {
          label: {
            text: "Tab 1"
          },
          panel: "Tab 1 content"
        },
        {
          label: {
            text: "Tab 2"
          },
          panel: "Tab 2 content"
        },
        {
          label: {
            text: "Tab 3"
          },
          panel: "Tab 3 content"
        }
      ]
    }
  },
  "with labels as strings": {
    context: {
      idPrefix: "with-labels-strings",
      items: [
        {
          label: "Tab 1",
          panel: {
            text: "Tab 1 content"
          }
        },
        {
          label: "Tab 2",
          panel: {
            text: "Tab 2 content"
          }
        },
        {
          label: "Tab 3",
          panel: {
            text: "Tab 3 content"
          }
        }
      ]
    }
  },
  "with label badge": {
    context: {
      idPrefix: "with-labels-objects",
      items: [
        {
          label: {
            text: "Scheduled",
            slots: {
              end: {
                html: components.render("badge", {
                  context: {
                    text: "17",
                    classes: "nhsuk-u-margin-left-2",
                    small: true
                  }
                })
              }
            }
          },
          panel: "Scheduled appointments"
        },
        {
          label: {
            text: "Completed"
          },
          panel: "Completed appointments"
        },
        {
          label: {
            text: "Cancelled"
          },
          panel: "Cancelled appointments"
        }
      ]
    }
  },
  "with visually hidden text": {
    context: {
      idPrefix: "visually-hidden",
      visuallyHiddenText: "Cases per manager",
      items: [
        {
          label: {
            text: "Past day"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past day)"]
            )
          }
        },
        {
          label: {
            text: "Past week"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past week)"]
            )
          }
        },
        {
          label: {
            text: "Past month"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past month)"]
            )
          }
        },
        {
          label: {
            text: "Past year"
          },
          panel: {
            html: components.render(
              "tables",
              tableExamples["with numeric format (full width, past year)"]
            )
          }
        }
      ]
    },
    options: {
      width: "full"
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
