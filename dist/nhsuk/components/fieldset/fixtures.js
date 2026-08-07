'use strict';

var outdent = require('outdent');
var _lib = require('#lib');
var fixtures$1 = require('../input/fixtures.js');

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      }
    },
    screenshot: true
  },
  "with HTML": {
    context: {
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      },
      html: outdent.outdent`
        ${_lib.components.render("input", fixtures$1.examples["example address line 1"])}
        ${_lib.components.render("input", fixtures$1.examples["example address line 2"])}
        ${_lib.components.render("input", fixtures$1.examples["example address town or city"])}
        ${_lib.components.render("input", fixtures$1.examples["example address postcode"])}
      `
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with HTML via call block": {
    context: {
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      }
    },
    callBlock: outdent.outdent`
      ${_lib.components.render("input", fixtures$1.examples["example address line 1"])}
      ${_lib.components.render("input", fixtures$1.examples["example address line 2"])}
      ${_lib.components.render("input", fixtures$1.examples["example address town or city"])}
      ${_lib.components.render("input", fixtures$1.examples["example address postcode"])}
    `
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
