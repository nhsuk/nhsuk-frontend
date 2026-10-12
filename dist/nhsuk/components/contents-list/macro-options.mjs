const name = 'Contents list';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the contents list.',
    released: '10.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of contents list items objects.',
    released: '1.0.0',
    params: {
      href: {
        type: 'string',
        required: true,
        description: 'The contents list item `href` attribute. Required unless `item.current` is set.',
        released: '1.0.0'
      },
      current: {
        type: 'boolean',
        required: false,
        description: 'Set to `true` to indicate the current page the user is on.',
        released: '1.0.0'
      },
      text: {
        type: 'string',
        required: true,
        description: 'If `html` is set, this is not required. Text to use within each contents list item. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML to use within each contents list item. If `html` is provided, the `text` option will be ignored.',
        released: '10.2.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the contents list item.',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the contents list item.',
        released: '10.2.0'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the contents list container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the contents list container.',
    released: '1.0.0'
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description: 'Replaced by the `ariaLabel` option.',
    released: '10.1.0',
    deprecated: '10.6.0'
  },
  ariaLabel: {
    type: 'string',
    required: false,
    description: 'The accessible name for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`.',
    released: '10.6.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'Visually hidden heading for the contents list items. Defaults to `"Contents"`.',
    released: '10.1.0'
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

export { name, params };
//# sourceMappingURL=macro-options.mjs.map
