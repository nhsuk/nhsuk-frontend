export const name = 'Tabs'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the tabs component.',
    released: '7.0.0'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`. Defaults to the `id` option value.',
    released: '7.0.0'
  },
  title: {
    type: 'string',
    required: false,
    description: 'Replaced by the `visuallyHiddenText` option.',
    released: '7.0.0',
    deprecated: '10.6.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'Visually hidden heading for the tabs contents list items. Defaults to `"Contents"`.',
    released: '10.6.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of tab items.',
    released: '7.0.0',
    params: {
      id: {
        type: 'string',
        required: true,
        description:
          'Specific `id` attribute for the tab item. If omitted, then `idPrefix` string is required instead.',
        released: '7.0.0'
      },
      label: {
        type: 'string',
        required: true,
        description: 'The text label of a tab item.',
        released: '7.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the tab.',
        released: '7.0.0'
      },
      panel: {
        type: 'object',
        required: true,
        description: 'Content for the tab panel.',
        released: '7.0.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text for the tab panel. If `html` is provided, the `text` option will be ignored.',
            released: '7.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML for the tab panel. If `html` is provided, the `text` option will be ignored.',
            released: '7.0.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the tab panel.',
            released: '7.0.0'
          }
        }
      }
    }
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
