'use strict';

const name = 'Details';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  summary: {
    type: 'object',
    required: false,
    description: 'Summary element content (the visible part of the details element).',
    released: '10.6.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'If `html` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the summary element.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the summary element.',
        released: '10.6.0'
      }
    }
  },
  summaryText: {
    type: 'string',
    required: true,
    description: 'Replaced by the `summary.text` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  summaryHtml: {
    type: 'string',
    required: true,
    description: 'Replaced by the `summary.html` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.',
    released: '9.2.0'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` to add to the details element.',
    released: '7.0.0'
  },
  open: {
    type: 'boolean',
    required: false,
    description: 'If `true`, details element will be expanded.',
    released: '7.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire details component in a `call` block.',
    released: '9.5.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of details. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the details element.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the details element.',
    released: '1.0.0'
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
