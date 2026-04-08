export const name = 'Contents list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the contents list.',
    released: '10.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of content list items objects.',
    released: '1.0.0',
    params: {
      href: {
        type: 'string',
        required: true,
        description:
          'The `href` attribute for the content list item label. Required unless `item.current` is set.',
        released: '1.0.0'
      },
      current: {
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to indicate the current page the user is on.',
        released: '1.0.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each content list item label. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each content list item label. If `html` is provided, the `text` argument will be ignored.',
        released: '10.2.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the content list item label.',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the content list item label.',
        released: '10.2.0'
      }
    }
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description:
      'The label for the navigation landmark that wraps the contents list. Defaults to `"Pages in this guide"`.',
    released: '10.1.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the content list container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the content list container.',
    released: '1.0.0'
  },
  visuallyHiddenTitle: {
    type: 'string',
    required: false,
    description:
      'Visually hidden title for the contents list items. Defaults to `"Contents"`.',
    released: '10.1.0'
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
