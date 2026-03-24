export const name = 'Back link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the back link.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.',
    released: '1.0.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the link `href` attribute.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of back link. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.',
    released: '1.0.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component.',
    released: '10.1.0'
  },
  element: {
    type: 'string',
    required: false,
    description:
      'HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`.',
    released: '6.2.0'
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
