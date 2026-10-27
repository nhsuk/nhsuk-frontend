'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Change",
      href: "#/change"
    }
  },
  "current": {
    context: {
      text: "Change",
      href: "#/change",
      current: true
    }
  },
  'current "page"': {
    context: {
      text: "Change",
      href: "#/change",
      current: "page"
    }
  },
  "opens in a new tab": {
    context: {
      text: "Change",
      href: "#/change",
      openInNewTab: true
    }
  },
  'opens in a new tab (with "target" attribute)': {
    context: {
      text: "Change",
      href: "#/change",
      openInNewTab: true,
      attributes: {
        target: "_blank"
      }
    }
  },
  'opens in a new tab (with "rel" attribute)': {
    context: {
      text: "Change",
      href: "#/change",
      openInNewTab: true,
      attributes: {
        rel: "noopener"
      }
    }
  },
  'opens in a new tab (with "target" and "rel" attributes)': {
    context: {
      text: "Change",
      href: "#/change",
      openInNewTab: true,
      attributes: {
        target: "_blank",
        rel: "noopener"
      }
    }
  },
  "with ARIA label": {
    context: {
      text: "Read more",
      href: "#/privacy-policy",
      ariaLabel: "Read more about our privacy policy"
    }
  },
  "with text escaping": {
    context: {
      text: "A&E waiting times",
      href: "#/waiting-times"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E waiting times",
      href: "#/waiting-times"
    }
  },
  "with HTML via call block": {
    context: {
      href: "#/waiting-times"
    },
    callBlock: "A&amp;E waiting times"
  },
  "with visually hidden array of text": {
    context: {
      text: "Change",
      href: "#/change",
      visuallyHidden: ["date of birth", "(Karen Francis)"]
    }
  },
  "with visually hidden text": {
    context: {
      text: "Change",
      href: "#/change",
      visuallyHidden: "date of birth"
    }
  },
  "with visually hidden text (alias)": {
    context: {
      text: "Change",
      href: "#/change",
      visuallyHiddenText: "date of birth"
    }
  },
  'with visually hidden text "start"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "Error:",
        placement: "start",
        slots: {
          end: " "
        }
      }
    }
  },
  'with visually hidden text "end"': {
    context: {
      text: "Enter your date of birth",
      href: "#/date-of-birth",
      visuallyHidden: {
        text: "(Karen Francis)",
        placement: "end",
        slots: {
          start: " "
        }
      }
    }
  },
  "with visually hidden text escaping": {
    context: {
      text: "Visit",
      href: "#/visit",
      visuallyHidden: {
        text: "A&E",
        slots: {
          start: " "
        }
      }
    }
  },
  "with visually hidden HTML": {
    context: {
      text: "Visit",
      href: "#/visit",
      visuallyHidden: {
        html: "A&amp;E",
        slots: {
          start: " "
        }
      }
    }
  },
  "with content slots": {
    context: {
      text: "A&E waiting times",
      href: "#/waiting-times",
      slots: {
        before: {
          html: '<samp class="app-annotate">Before</samp>'
        },
        start: {
          html: '<samp class="app-annotate app-annotate--start">Start</samp>'
        },
        end: {
          html: '<samp class="app-annotate app-annotate--end">End</samp>'
        },
        after: {
          html: '<samp class="app-annotate">After</samp>'
        }
      }
    }
  },
  "with custom class": {
    context: {
      text: "Change",
      href: "#/change",
      className: "app-link"
    }
  },
  "with reverse class": {
    context: {
      text: "Change",
      href: "#/change",
      classes: "nhsuk-link--reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "with reverse class overriding reverse variant": {
    context: {
      text: "Change",
      href: "#/change",
      classes: "nhsuk-link--reverse",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "without class": {
    context: {
      text: "Change",
      href: "#/change",
      className: false
    }
  },
  "reverse": {
    context: {
      text: "Change",
      href: "#/change",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "as a button": {
    context: {
      text: "Change",
      type: "submit"
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
