'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      items: [{
        href: '#',
        text: 'What is AMD?',
        current: true
      }, {
        href: '#',
        text: 'Symptoms'
      }, {
        href: '#',
        text: 'Getting diagnosed'
      }, {
        href: '#',
        text: 'Treatments'
      }, {
        href: '#',
        text: 'Living with AMD'
      }]
    },
    screenshot: true
  },
  'with empty items': {
    context: {
      items: [{
        href: '#',
        text: 'What is AMD?',
        current: true
      }, {
        href: '#',
        text: 'Symptoms'
      }, false, {
        href: '#',
        text: 'Treatments'
      }, false]
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
