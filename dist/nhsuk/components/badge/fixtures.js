'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const examples = {
  'default': {
    context: {
      text: '12',
      visuallyHiddenText: 'Count:'
    }
  },
  'text label': {
    context: {
      text: 'New'
    }
  },
  'zero count': {
    context: {
      text: '0',
      visuallyHiddenText: 'Count:'
    }
  }
};

/**
 * @import { MacroExample } from '#lib'
 */

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
