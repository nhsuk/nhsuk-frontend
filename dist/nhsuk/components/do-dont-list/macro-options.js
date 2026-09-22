'use strict';

const name = "Do and Don't list";

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: "The ID of the do and don't list component.",
    released: '10.0.0'
  },
  title: {
    type: 'string',
    required: true,
    description: 'Replaced by the `heading.text` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  heading: {
    type: 'object',
    required: true,
    description: "Heading to be displayed on the do and don't list component.",
    released: '10.6.0',
    isComponent: true,
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the heading.',
        released: '10.6.0'
      },
      text: {
        type: 'string',
        required: true,
        description: 'If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the heading.',
        released: '10.6.0'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level. Defaults to `3`.',
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
      }
    }
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Replaced by the `heading.level` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  icon: {
    type: 'string',
    required: false,
    description: 'Optional icon modifier for the do and don\'t list items – `"cross"` or `"tick"`. Defaults to `"tick"`.',
    released: '10.4.0'
  },
  items: {
    type: 'array',
    required: true,
    description: "Array of do and don't items objects.",
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: "If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored.",
        released: '10.1.0'
      },
      html: {
        type: 'string',
        required: true,
        description: "If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored.",
        released: '10.1.0'
      }
    }
  },
  prefixText: {
    type: 'string',
    required: false,
    description: 'Optional prefix text used before each do and don\'t item. Defaults to `"do not"` when `type` is `"cross"`.',
    released: '10.1.0'
  },
  hidePrefix: {
    type: 'boolean',
    required: false,
    description: "If set to `true`, the optional `prefixText` will be removed from each do and don't item.",
    released: '5.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: "Classes to add to the do and don't list container.",
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: "HTML attributes (for example data attributes) to add to the do and don't list container.",
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
