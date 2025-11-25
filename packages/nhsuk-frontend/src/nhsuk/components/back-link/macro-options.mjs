export const name = 'Back link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the back link.'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the link `href` attribute.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component.'
  },
  element: {
    type: 'string',
    required: false,
    description:
      'HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
