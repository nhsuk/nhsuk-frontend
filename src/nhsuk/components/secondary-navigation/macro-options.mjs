export const name = 'Secondary navigation'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  label: {
    type: 'string',
    required: false,
    description:
      'The `aria-label` for the navigation landmark. Defaults to `"Secondary navigation"`. Use this to provide a meaningful label if multiple navigation landmarks are present on the page. Ignored if `labelledBy` is set.'
  },
  labelledBy: {
    type: 'string',
    required: false,
    description:
      'The `id` of an element to use as the accessible label for the navigation via `aria-labelledby`. Takes precedence over `label`.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of navigation items.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'Text for the navigation item. If `html` is provided, `text` is ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'HTML for the navigation item. If `html` is provided, `text` is ignored.'
      },
      href: {
        type: 'string',
        required: false,
        description:
          'The `href` for the navigation item link. If omitted, the item is rendered as a `<span>` instead of an `<a>`.'
      },
      current: {
        type: 'boolean',
        required: false,
        description:
          'If `true`, marks this item as the current page using `aria-current="page"` and wraps the item text in a `<strong>` element as a visual fallback.'
      },
      count: {
        type: 'integer',
        required: false,
        description:
          'An optional numeric count to display alongside the item (for example, number of results in a filtered view). Rendered as a visually distinct badge. A visually hidden label prefix (defaulting to `"Count"`) is included for assistive technology; override it with `visuallyHiddenCountText`.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the list item.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the list item.'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the navigation element. Use `"nhsuk-secondary-navigation--reverse"` for use on coloured backgrounds.'
  },
  visuallyHiddenCountText: {
    type: 'string',
    required: false,
    description:
      'Visually hidden text prepended to each count badge for assistive technology (for example, `"Results"`). Defaults to `"Count"`. Only used when one or more items have a `count` value.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` of the navigation element.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the navigation element.'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
