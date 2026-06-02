const name = 'Section navigation';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  label: {
    type: 'string',
    required: false,
    description: 'The `aria-label` for the navigation landmark. Defaults to `"Section navigation"`. Use this to provide a meaningful label if multiple navigation landmarks are present on the page. Ignored if `labelledBy` is set.'
  },
  labelledBy: {
    type: 'string',
    required: false,
    description: 'The `id` of an element to use as the accessible label for the navigation via `aria-labelledby`. Takes precedence over `label`.'
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
        description: 'If `true`, marks this item as the current page using `aria-current="page"` and wraps the item text in a `<strong>` element as a visual fallback.'
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
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the navigation element. Use `"nhsuk-section-navigation--reverse"` for use on coloured backgrounds.'
  },
  vertical: {
    type: 'boolean',
    required: false,
    description: 'If `true`, forces the navigation to remain stacked vertically at all breakpoints, rather than switching to a horizontal layout at tablet width.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` of the navigation element.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the navigation element.'
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
