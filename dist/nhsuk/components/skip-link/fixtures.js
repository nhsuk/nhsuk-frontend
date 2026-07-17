'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      href: '#maincontent',
      text: 'Skip to main content'
    }
  },
  'without hash fragment': {
    context: {
      href: '/nhsuk-frontend/components/boilerplate/',
      text: 'Skip to main content'
    },
    options: {
      hidden: true,
      throwOnError: false
    }
  },
  'without link target': {
    context: {
      href: '#this-element-does-not-exist',
      text: 'Skip to main content'
    },
    options: {
      hidden: true,
      throwOnError: false
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
