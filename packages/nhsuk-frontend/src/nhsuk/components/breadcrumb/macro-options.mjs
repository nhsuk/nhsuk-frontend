export const name = 'Breadcrumb'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the breadcrumb.'
  },
  items: {
    type: 'array',
    required: true,
    description:
      'Array of breadcrumbs item objects. This should contain all pages in the breadcrumb except for the parent page.',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'Text to use within the breadcrumbs item.'
      },
      href: {
        type: 'string',
        required: false,
        description: 'The value of the breadcrumb item link `href` attribute.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the individual crumb.'
      }
    }
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text to use for the parent page.'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the parent page link `href` attribute.'
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
      'HTML attributes (for example data attributes) to add to the container.'
  },
  labelText: {
    type: 'string',
    required: false,
    description:
      'Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb".'
  },
  backLink: {
    type: 'object',
    required: false,
    description: 'The back link used by the breadcrumbs component on mobile.',
    isComponent: true
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
