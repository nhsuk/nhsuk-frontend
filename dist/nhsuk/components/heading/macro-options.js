'use strict';

const name = 'Heading';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the heading.',
    released: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` option will be ignored.',
    released: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire heading component in a `call` block.',
    released: '10.6.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'A visually hidden suffix added to the heading.',
    released: '10.6.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'If set, the heading will become a link.',
    released: '10.6.0'
  },
  caption: {
    type: 'object',
    required: false,
    description: 'Optional caption for the heading.',
    released: '10.6.0',
    isComponent: true
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.6.0'
  },
  sizes: {
    type: 'array',
    required: false,
    description: 'Allowed sizes for the heading – Defaults to `["xxs", "xs", "s", "m", "l", "xl"]`.',
    released: '10.6.0'
  },
  level: {
    type: 'integer',
    required: false,
    description: 'Optional heading level. Defaults to `1`.',
    released: '10.6.0'
  },
  className: {
    type: 'string',
    required: false,
    description: 'Optional class to use for the heading. Defaults to `"nhsuk-heading"`.',
    released: '10.6.0'
  },
  classPrefix: {
    type: 'string',
    required: false,
    description: 'Optional class prefix to use for the heading. Defaults to `"nhsuk-heading-"`.',
    released: '10.6.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the heading.',
    released: '10.6.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the heading.',
    released: '10.6.0'
  },
  element: {
    type: 'string',
    required: false,
    description: 'HTML element for the heading component – for example, `"caption"`. Defaults to the `level` option prefixed with `"h"`.',
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
