'use strict';

const name = 'Action link';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the action link.'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the action link. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the action link. If `html` is provided, the `text` option will be ignored.'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the link `href` attribute.'
  },
  openInNewWindow: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, then the link will open in a new window.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the anchor tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
