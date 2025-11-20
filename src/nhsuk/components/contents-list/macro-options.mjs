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
        description:
          'The `href` attribute for the content list item label. Required unless `item.current` is set.'
      },
      current: {
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to indicate the current page the user is on.'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each content list item label. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each content list item label. If `html` is provided, the `text` argument will be ignored.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the content list item label.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the content list item label.'
      }
    }
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
      'HTML attributes (for example data attributes) to add to the content list container.'
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
  'default': {
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
  },
  'with empty items': {
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
        false,
        {
          href: '#',
          text: 'Treatments'
        },
        false
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
