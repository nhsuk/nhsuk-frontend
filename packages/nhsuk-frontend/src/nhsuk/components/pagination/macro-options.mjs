import { components } from '@nhsuk/frontend-lib'

export const name = 'Pagination'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the pagination container.'
  },
  previous: {
    type: 'object',
    required: false,
    description: 'A link to the previous page, if there is a previous page.',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.'
      },
      href: {
        type: 'string',
        required: true,
        description: "The previous page's URL."
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    }
  },
  next: {
    type: 'object',
    required: false,
    description: 'A link to the next page, if there is a next page.',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.'
      },
      href: {
        type: 'string',
        required: true,
        description: "The next page's URL."
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    }
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description:
      'The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes you want to add to the pagination `nav` parent.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      previous: {
        labelText: 'Treatments',
        href: '/section/treatments'
      },
      next: {
        labelText: 'Symptoms',
        href: '/section/symptoms'
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with deprecated parameters': {
    context: {
      previousUrl: '/section/treatments',
      previousPage: 'Treatments',
      nextUrl: '/section/symptoms',
      nextPage: 'Symptoms'
    }
  },
  'with translations': {
    context: {
      previous: {
        text: 'Blaenorol',
        labelText: 'Driniaethau',
        href: '/section/driniaethau'
      },
      next: {
        text: 'Nesaf',
        labelText: 'Symptomau',
        href: '/section/symptomau'
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
