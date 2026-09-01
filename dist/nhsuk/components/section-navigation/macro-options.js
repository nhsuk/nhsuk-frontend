'use strict';

const name = 'Section navigation';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the section navigation.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of navigation items.',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'Text for the navigation item. If `html` is provided, `text` is ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description: 'HTML for the navigation item. If `html` is provided, `text` is ignored.'
      },
      href: {
        type: 'string',
        required: false,
        description: 'The `href` for the navigation item link. If omitted, the item is rendered as a `<span>` instead of an `<a>`.'
      },
      current: {
        type: 'boolean',
        required: false,
        description: 'Set to `true` if this links to the current page being shown.'
      },
      active: {
        type: 'boolean',
        required: false,
        description: "Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page"
      },
      badge: {
        type: 'object',
        required: false,
        description: 'Optional badge to display alongside the item text, for example a count or status label. Accepts the same params as the badge component.',
        isComponent: true
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the list item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the list item.'
      }
    }
  },
  direction: {
    type: 'string',
    required: false,
    description: 'Optional direction for the section navigation – `"horizontal"` or `"vertical"`. Defaults to `"vertical"` (stacked) on small screens or `"horizontal"` on tablet and above if there\'s enough space.'
  },
  small: {
    type: 'boolean',
    required: false,
    description: 'If `true`, uses a smaller text size that does not change responsively. Suitable for compact layouts or secondary navigation.'
  },
  ariaLabel: {
    type: 'string',
    required: false,
    description: 'The accessible name for the navigation landmark that wraps the section navigation list. Defaults to `"Section information"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the section navigation. Use `"nhsuk-section-navigation--reverse"` for use on coloured backgrounds.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the section navigation.'
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
