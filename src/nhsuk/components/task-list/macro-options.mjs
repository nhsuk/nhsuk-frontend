import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Task list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the `ul` container for the task list.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the `ul` container for the task list.'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      "Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `'-'`. Defaults to `'task-list'`."
  },
  items: {
    type: 'array',
    required: true,
    description:
      'The items for each task within the task list component. See items.',
    params: {
      title: {
        type: 'object',
        required: true,
        description:
          'The main title for the task within the task list component. See title.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to use within the title. If `html` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to use within the title. If `html` is provided, the `text` argument will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the title wrapper.'
          }
        }
      },
      hint: {
        type: 'object',
        required: false,
        description:
          'Can be used to add a hint to each task within the task list component. See items hint.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to use within the hint. If `html` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.'
          }
        }
      },
      status: {
        type: 'object',
        required: true,
        description:
          'The status for each task within the task list component. See items status.',
        params: {
          tag: {
            type: 'object',
            required: false,
            description:
              'Can be used to add a tag to the status of the task within the task list component. See tag.'
          },
          text: {
            type: 'string',
            required: false,
            description:
              'Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: false,
            description:
              'HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the status container.'
          }
        }
      },
      href: {
        type: 'string',
        required: false,
        description:
          "The value of the link's `href` attribute for the task list item."
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the item `div`.'
      }
    }
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
