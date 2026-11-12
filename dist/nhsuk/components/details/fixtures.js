'use strict';

var outdent = require('outdent');
var _lib = require('#lib');
var fixtures$1 = require('../tables/fixtures.js');

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you."
    }
  },
  "open": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: true
    }
  },
  "closed explicitly": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: false
    }
  },
  "with HTML": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      html: outdent.outdent`
        <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
        <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
      `
    },
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "with HTML via call block": {
    context: {
      summary: {
        text: "How to find your NHS number"
      }
    },
    callBlock: outdent.outdent`
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
    `
  },
  "with summary HTML": {
    context: {
      summary: {
        html: "How to find your <span>NHS number</span>"
      },
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    }
  },
  "with summary as string": {
    context: {
      summary: "How to find your NHS number",
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    }
  },
  "expander": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander"
    }
  },
  "expander open": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: true
    }
  },
  "expander closed explicitly": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: false
    }
  },
  "expander with HTML": {
    context: {
      summary: {
        text: "Opening times"
      },
      html: _lib.components.render("tables", fixtures$1.examples["with first cell as header"]),
      classes: "nhsuk-expander"
    },
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "expander with HTML via call block": {
    context: {
      summary: {
        text: "Opening times"
      },
      classes: "nhsuk-expander"
    },
    callBlock: _lib.components.render("tables", fixtures$1.examples["with first cell as header"])
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
