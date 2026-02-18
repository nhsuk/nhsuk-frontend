'use strict';

var outdent = require('outdent');

let _ = t => t,
  _t;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  default: {
    callBlock: outdent.outdent(_t || (_t = _`
      <p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
    `)),
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

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
