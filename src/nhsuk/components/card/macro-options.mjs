export const name = 'Card'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the card.'
  },
  heading: {
    type: 'string',
    required: true,
    description:
      'Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.'
  },
  headingHtml: {
    type: 'string',
    required: true,
    description:
      'HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card heading.'
  },
  headingSize: {
    type: 'string',
    required: false,
    description:
      'Size of the heading – `"xss"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the card heading. Defaults to `2`.'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the card link `href` attribute.'
  },
  clickable: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the whole card will become a clickable card variant.'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Care card variant type – `"non-urgent"`, `"urgent"` or `"emergency"`.'
  },
  feature: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the card will become a feature card variant.'
  },
  primary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a primary card variant (with chevron).'
  },
  secondary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a secondary card variant.'
  },
  imgURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the card.'
  },
  imgALT: {
    type: 'string',
    required: false,
    description: 'The alternative text of the image in the card.'
  },
  description: {
    type: 'string',
    required: false,
    description:
      'Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.'
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.'
  },
  actions: {
    type: 'object',
    required: false,
    description: 'Can be used to add actions to the card component.',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of actions as links for use in the card component.',
        params: {
          href: {
            type: 'string',
            required: true,
            description:
              "The value of the link's `href` attribute for an action item."
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.'
          },
          visuallyHiddenText: {
            type: 'string',
            required: false,
            description:
              'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the action item.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the action item.'
          }
        }
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the actions wrapper.'
      }
    }
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the card.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
