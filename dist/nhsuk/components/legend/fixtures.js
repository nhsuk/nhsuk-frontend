'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "What is your address?",
      size: "l",
      isPageHeading: true
    },
    screenshot: true
  },
  "text": {
    context: {
      text: "What is your address?",
      size: "l",
      isPageHeading: true
    },
    variants: [{
      description: "with size S",
      context: {
        size: "s"
      }
    }, {
      description: "with size M",
      context: {
        size: "m"
      }
    }, {
      description: "with size L",
      context: {
        size: "l"
      }
    }, {
      description: "with size XL",
      context: {
        size: "xl"
      }
    }],
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "with size class": {
    context: {
      text: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  "with size class overriding size param": {
    context: {
      text: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      size: "s",
      isPageHeading: true
    }
  },
  "with HTML": {
    context: {
      text: "What is your address?",
      size: "l",
      isPageHeading: true
    }
  },
  "with HTML via call block": {
    context: {
      size: "l",
      isPageHeading: true
    },
    callBlock: "What is your address?"
  },
  "without page heading": {
    context: {
      text: "What is your address?"
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
