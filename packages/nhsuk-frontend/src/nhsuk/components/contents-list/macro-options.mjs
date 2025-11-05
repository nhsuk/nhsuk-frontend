import { components } from '@nhsuk/frontend-lib'

export const name = 'Contents list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the contents list.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of content list items objects.',
    params: {
      href: {
        type: 'string',
        required: true,
        description: 'href value to use within each content list item label.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text to use within each content list item label.'
      }
    }
  },
  current: {
    type: 'boolean',
    required: false,
    description: 'Set the current active page.'
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description:
      'The label for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the content list container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to items in the content list.'
  },
  visuallyHiddenTitle: {
    type: 'string',
    required: false,
    description:
      'Visually hidden title for the contents list items. Defaults to `"Contents"`.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      items: [
        {
          href: '#',
          text: 'What is AMD?',
          current: true
        },
        {
          href: '#',
          text: 'Symptoms'
        },
        {
          href: '#',
          text: 'Getting diagnosed'
        },
        {
          href: '#',
          text: 'Treatments'
        },
        {
          href: '#',
          text: 'Living with AMD'
        }
      ]
    },
    screenshot: true
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
