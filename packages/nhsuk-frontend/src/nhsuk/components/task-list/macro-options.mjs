export const name = 'Task list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the button.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the `ul` container for the task list.',
    released: '9.1.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the `ul` container for the task list.',
    released: '9.1.0'
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `"-"`. Defaults to `"task-list"`.',
    released: '9.1.0'
  },
  items: {
    type: 'array',
    required: true,
    description:
      'The items for each task within the task list component. See items.',
    released: '9.1.0',
    params: {
      title: {
        type: 'object',
        required: true,
        description:
          'The main title for the task within the task list component. See title.',
        released: '9.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to use within the title. If `html` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to use within the title. If `html` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the title wrapper.',
            released: '9.1.0'
          }
        }
      },
      hint: {
        type: 'object',
        required: false,
        description:
          'Can be used to add a hint to each task within the task list component. See items hint.',
        released: '9.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to use within the hint. If `html` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          }
        }
      },
      status: {
        type: 'object',
        required: true,
        description:
          'The status for each task within the task list component. See items status.',
        released: '9.1.0',
        params: {
          tag: {
            type: 'object',
            required: false,
            description:
              'Can be used to add a tag to the status of the task within the task list component. See tag.',
            released: '9.1.0'
          },
          text: {
            type: 'string',
            required: false,
            description:
              'Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          },
          html: {
            type: 'string',
            required: false,
            description:
              'HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.',
            released: '9.1.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the status container.',
            released: '9.1.0'
          }
        }
      },
      href: {
        type: 'string',
        required: false,
        description:
          "The value of the link's `href` attribute for the task list item.",
        released: '9.1.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the item `div`.',
        released: '9.1.0'
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
