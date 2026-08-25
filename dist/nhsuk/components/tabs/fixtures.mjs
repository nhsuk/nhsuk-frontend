import { outdent } from 'outdent';
import { components } from '#lib';
import { examples as examples$1 } from '../tables/fixtures.mjs';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      idPrefix: "example",
      items: [{
        label: "Past day",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past day)"])
        }
      }, {
        label: "Past week",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past week)"])
        }
      }, {
        label: "Past month",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past month)"])
        }
      }, {
        label: "Past year",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past year)"])
        }
      }]
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
      items: [{
        label: "Tab 1",
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
      }, {
        label: "Tab 2",
        panel: {
          html: outdent`
              <h2>Tab 2 content</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            `
        }
      }, {
        label: "Tab 3",
        panel: {
          html: outdent`
              <h2>Tab 3 content</h2>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            `
        }
      }]
    }
  },
  "with id attribute": {
    context: {
      id: "tab-id-attribute",
      items: [{
        label: "Past day",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past day)"])
        }
      }, {
        label: "Past week",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past week)"])
        }
      }, {
        label: "Past month",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past month)"])
        }
      }, {
        label: "Past year",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past year)"])
        }
      }]
    },
    options: {
      width: "full"
    }
  },
  "with id attribute on panels": {
    context: {
      items: [{
        label: "Past day",
        id: "past-day",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past day)"])
        }
      }, {
        label: "Past week",
        id: "past-week",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past week)"])
        }
      }, {
        label: "Past month",
        id: "past-month",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past month)"])
        }
      }, {
        label: "Past year",
        id: "past-year",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past year)"])
        }
      }]
    },
    options: {
      width: "full"
    }
  },
  "with visually hidden text": {
    context: {
      idPrefix: "visually-hidden",
      visuallyHiddenText: "Cases per manager",
      items: [{
        label: "Past day",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past day)"])
        }
      }, {
        label: "Past week",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past week)"])
        }
      }, {
        label: "Past month",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past month)"])
        }
      }, {
        label: "Past year",
        panel: {
          html: components.render("tables", examples$1["with numeric format (full width, past year)"])
        }
      }]
    },
    options: {
      width: "full"
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
