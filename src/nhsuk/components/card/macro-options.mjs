export const name = 'Card'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the card.',
    released: '10.0.0'
  },
  heading: {
    type: 'string',
    required: true,
    description:
      'Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.',
    released: '4.0.0'
  },
  headingHtml: {
    type: 'string',
    required: true,
    description:
      'HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.',
    released: '4.0.0'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card heading.',
    released: '4.0.0'
  },
  headingSize: {
    type: 'string',
    required: false,
    description:
      'Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.3.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description:
      'Optional heading level for the card heading. Defaults to `2`.',
    released: '4.0.0'
  },
  headingId: {
    type: 'string',
    required: false,
    description: 'Optional `id` attribute for the card heading.',
    released: '10.3.0'
  },
  headingVisuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'Optional visually hidden prefix used before the heading.',
    released: '10.3.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the card link `href` attribute.',
    released: '4.0.0'
  },
  clickable: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the whole card will become a clickable card variant.',
    released: '4.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of card – `"feature"`, `"primary"`, `"secondary"`, `"warning"`, `"non-urgent"`, `"urgent"` or `"emergency"`.',
    released: '10.4.0'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Optional type of care card – `"non-urgent"`, `"urgent"` or `"emergency"`. Replaced by the `variant` option.',
    released: '6.0.0',
    deprecated: '10.4.0'
  },
  feature: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the card will become a feature card variant.',
    released: '4.0.0',
    deprecated: '10.4.0'
  },
  primary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a primary card variant (with chevron).',
    released: '7.1.0',
    deprecated: '10.4.0'
  },
  secondary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a secondary card variant.',
    released: '7.1.0',
    deprecated: '10.4.0'
  },
  warning: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the card will become a warning card variant used by the warning callout.',
    released: '10.3.0',
    deprecated: '10.4.0'
  },
  imgURL: {
    type: 'string',
    required: false,
    description:
      'The URL of the image in the card. Replaced by the `image.src` option.',
    released: '4.0.0',
    deprecated: '10.3.0'
  },
  imgALT: {
    type: 'string',
    required: false,
    description:
      'The alternative text of the image in the card. Replaced by the `image.alt` option.',
    released: '4.0.0',
    deprecated: '10.3.0'
  },
  image: {
    type: 'object',
    required: false,
    description: 'Can be used to add an image to the card component.',
    released: '10.3.0',
    params: {
      src: {
        type: 'string',
        required: true,
        description: 'The URL of the image in the card.',
        released: '10.3.0'
      },
      alt: {
        type: 'string',
        required: false,
        description: 'The alternative text of the image in the card.',
        released: '10.3.0'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'HTML to use for the image content. If `html` is provided, the `src` and `alt` arguments will be ignored.',
        released: '10.3.0'
      }
    }
  },
  description: {
    type: 'string',
    required: false,
    description:
      'Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.',
    released: '4.0.0'
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.',
    released: '4.0.0'
  },
  actions: {
    type: 'object',
    required: false,
    description: 'Can be used to add actions to the card component.',
    released: '10.3.0',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of actions as links for use in the card component.',
        released: '10.3.0',
        params: {
          href: {
            type: 'string',
            required: true,
            description:
              "The value of the link's `href` attribute for an action item.",
            released: '10.3.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          visuallyHiddenText: {
            type: 'string',
            required: false,
            description:
              'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.',
            released: '10.3.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the action item.',
            released: '10.3.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the action item.',
            released: '10.3.0'
          }
        }
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the actions wrapper.',
        released: '10.3.0'
      }
    }
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block.',
    released: '9.5.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card.',
    released: '4.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the card.',
    released: '4.0.0'
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
