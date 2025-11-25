export const name = 'Footer'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the footer.'
  },
  columns: {
    type: 'integer',
    required: false,
    description:
      'Number of columns to display per row in the navigation section of the footer – `4`, `3`, `2` or `1`. Defaults to `4`.'
  },
  navigation: {
    type: 'object',
    required: false,
    description:
      'The navigation section of the footer before the copyright information. Alternatively supports an array of `navigation` objects.',
    params: {
      title: {
        type: 'string',
        required: false,
        description: 'Title for group of footer navigation links.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          'Optional text to use within each navigation section column. If `html` is provided, the `text` option will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'Optional HTML to use within each navigation section column. If `html` is provided, the `text` option will be ignored.'
      },
      width: {
        type: 'string',
        required: false,
        description:
          'Width of each navigation section column in the footer. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-quarter"`.'
      },
      items: {
        type: 'array',
        required: false,
        description:
          'Contains the array of footer navigation link items for this group.',
        params: {
          href: {
            type: 'string',
            required: true,
            description: 'Footer navigation link `href` attribute.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each footer navigation link. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each footer navigation link. If `html` is provided, the `text` option will be ignored.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the anchor in the footer meta section.'
          }
        }
      }
    }
  },
  meta: {
    type: 'object',
    required: false,
    description:
      'The meta section of the footer after any navigation, before the copyright information.',
    params: {
      visuallyHiddenTitle: {
        type: 'string',
        required: false,
        description:
          'Title for meta `items` links. Defaults to `"Support links"`.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`.'
      },
      text: {
        type: 'string',
        required: false,
        description:
          'Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored.'
      },
      items: {
        type: 'array',
        required: false,
        description: 'Contains the array of key policy footer link items.',
        params: {
          href: {
            type: 'string',
            required: true,
            description: 'Footer meta link `href` attribute.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each footer meta link. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each footer meta link. If `html` is provided, the `text` option will be ignored.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the footer meta link.'
          }
        }
      }
    }
  },
  copyright: {
    type: 'object',
    required: false,
    description:
      'The copyright information in the footer component, this defaults to `"© NHS England"`.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© NHS England"` is used.'
      }
    }
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the footer container, useful if you want to make the footer fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the footer container.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire footer component in a `call` block.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the footer container.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
