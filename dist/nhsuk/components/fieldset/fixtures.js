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
  'default': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    callBlock: outdent.outdent`
      ${_lib.components.render('input', fixtures$1.examples['example address line 1'])}
      ${_lib.components.render('input', fixtures$1.examples['example address line 2'])}
      ${_lib.components.render('input', fixtures$1.examples['example address town or city'])}
      ${_lib.components.render('input', fixtures$1.examples['example address postcode'])}
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'legend': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    variants: [{
      description: 'with size S',
      context: {
        legend: {
          size: 's'
        }
      }
    }, {
      description: 'with size M',
      context: {
        legend: {
          size: 'm'
        }
      }
    }, {
      description: 'with size L',
      context: {
        legend: {
          size: 'l'
        }
      }
    }, {
      description: 'with size XL',
      context: {
        legend: {
          size: 'xl'
        }
      }
    }]
  },
  'with legend size class': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  'with legend size class overriding size param': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        size: 's',
        isPageHeading: true
      }
    }
  },
  'without page heading': {
    context: {
      legend: {
        text: 'What is your address?'
      }
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
