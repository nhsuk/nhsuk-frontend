export const name = 'Breadcrumb'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the breadcrumb.',
    released: '10.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description:
      'Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'Text to use within the breadcrumbs item.',
        released: '1.0.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'The value of the breadcrumb item link `href` attribute.',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the individual crumb.',
        released: '1.0.0'
      }
    }
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text to use for the parent page.',
    released: '1.0.0'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the parent page link `href` attribute.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of breadcrumb. You can use only `"reverse"` or empty values with this option.',
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
      'HTML attributes (for example data attributes) to add to the container.',
    released: '1.0.0'
  },
  labelText: {
    type: 'string',
    required: false,
    description:
      'Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb".',
    released: '9.6.2'
  },
  backLink: {
    type: 'object',
    required: false,
    description: 'The back link used by the breadcrumbs component on mobile.',
    released: '10.1.0',
    isComponent: true
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
