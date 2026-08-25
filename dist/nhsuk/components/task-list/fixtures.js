'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      idPrefix: "your-health",
      items: [{
        heading: {
          text: "Exercise"
        },
        href: "#/task/exercise",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        heading: {
          text: "Personal health"
        },
        href: "#/task/personal-health",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        heading: {
          text: "Family health history"
        },
        hint: {
          text: "Details of your parents, brothers and sisters"
        },
        href: "#/task/family-health-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        heading: {
          text: "Smoking history"
        },
        href: "#/task/smoking-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        heading: {
          text: "Blood test"
        },
        status: {
          tag: {
            text: "Cannot start yet",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
          }
        }
      }]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with deprecated titles": {
    context: {
      idPrefix: "your-health",
      items: [{
        title: {
          text: "Exercise"
        },
        href: "#/task/exercise",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        title: {
          text: "Personal health"
        },
        href: "#/task/personal-health",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        title: {
          text: "Family health history"
        },
        hint: {
          text: "Details of your parents, brothers and sisters"
        },
        href: "#/task/family-health-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        title: {
          text: "Smoking history"
        },
        href: "#/task/smoking-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        title: {
          text: "Blood test"
        },
        status: {
          tag: {
            text: "Cannot start yet",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
          }
        }
      }]
    }
  },
  "with deprecated status classes": {
    context: {
      idPrefix: "your-health",
      items: [{
        title: {
          text: "Exercise"
        },
        href: "#/task/exercise",
        status: {
          text: "Completed",
          classes: "nhsuk-task-list__status--completed"
        }
      }, {
        title: {
          text: "Personal health"
        },
        href: "#/task/personal-health",
        status: {
          text: "Completed",
          classes: "nhsuk-task-list__status--completed"
        }
      }, {
        title: {
          text: "Family health history"
        },
        hint: {
          text: "Details of your parents, brothers and sisters"
        },
        href: "#/task/family-health-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        title: {
          text: "Smoking history"
        },
        href: "#/task/smoking-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        title: {
          text: "Blood test"
        },
        status: {
          text: "Cannot start yet",
          classes: "nhsuk-task-list__status--cannot-start-yet"
        }
      }]
    }
  },
  "with headings and hints as strings": {
    context: {
      idPrefix: "your-health",
      items: [{
        heading: "Exercise",
        href: "#/task/exercise",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        heading: "Personal health",
        href: "#/task/personal-health",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        heading: "Family health history",
        hint: "Details of your parents, brothers and sisters",
        href: "#/task/family-health-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        heading: "Smoking history",
        href: "#/task/smoking-history",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }, {
        heading: "Blood test",
        status: {
          tag: {
            text: "Cannot start yet",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal nhsuk-u-secondary-text-colour"
          }
        }
      }]
    }
  },
  "with headings and status text as strings": {
    context: {
      idPrefix: "your-health",
      items: [{
        heading: "Exercise",
        href: "#/task/exercise",
        status: "Not applicable"
      }, {
        heading: "Personal health",
        href: "#/task/personal-health",
        status: "Not applicable"
      }, {
        heading: "Blood test",
        href: "#/task/blood-test",
        status: "Not applicable"
      }]
    }
  },
  "with empty items": {
    context: {
      idPrefix: "your-health",
      items: [{
        heading: {
          text: "Exercise"
        },
        href: "#/task/exercise",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, {
        heading: {
          text: "Personal health"
        },
        href: "#/task/personal-health",
        status: {
          tag: {
            text: "Completed",
            border: false,
            colour: false,
            classes: "nhsuk-u-font-weight-normal"
          }
        }
      }, false, false, {
        heading: {
          text: "Blood test"
        },
        href: "#/task/blood-test",
        status: {
          tag: {
            text: "Incomplete",
            colour: "blue"
          }
        }
      }]
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

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
