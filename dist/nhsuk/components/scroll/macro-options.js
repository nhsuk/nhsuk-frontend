'use strict';

const name = 'Scroll';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The `id` to add to the scroll component.',
    released: '10.6.0'
  },
  labelledBy: {
    type: 'string',
    required: false,
    description: 'One or more element IDs to add to the scrolling content `aria-labelledby` attribute, used to provide accessible names for screenreader users.',
    released: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the scrolling content. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the scrolling content. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire scroll component in a `call` block.',
    released: '10.6.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of scroll. You can use only `"reverse"` or empty values with this option.',
    released: '10.6.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the scroll component.',
    released: '10.6.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the scroll component.',
    released: '10.6.0'
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
