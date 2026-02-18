'use strict';

var outdent = require('outdent');
var fixtures$1 = require('../tables/fixtures.js');
var _lib = require('#lib');

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      summaryText: 'How to find your NHS number'
    },
    callBlock: outdent.outdent(_t || (_t = _`
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
    `)),
    screenshot: {
      states: ['click'],
      selector: '.nhsuk-details__summary'
    }
  },
  'open': {
    context: {
      summaryText: 'How to find your NHS number',
      open: true
    },
    callBlock: outdent.outdent(_t2 || (_t2 = _`
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
    `))
  },
  'expander': {
    context: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander'
    },
    callBlock: outdent.outdent(_t3 || (_t3 = _`
      ${0}
    `), _lib.components.render('tables', fixtures$1.examples['with first cell as header'])),
    screenshot: {
      states: ['click'],
      selector: '.nhsuk-details__summary'
    }
  },
  'expander open': {
    context: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander',
      open: true
    },
    callBlock: outdent.outdent(_t4 || (_t4 = _`
      ${0}
    `), _lib.components.render('tables', fixtures$1.examples['with first cell as header']))
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
