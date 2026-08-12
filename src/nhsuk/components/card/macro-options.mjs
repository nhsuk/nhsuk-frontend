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
    type: 'object',
    required: true,
    description: 'Heading of the card component.',
    released: '10.6.0',
    isComponent: true,
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the heading.',
        released: '10.6.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the heading.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the heading.',
        released: '10.6.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'Optional visually hidden prefix used before the heading.',
        released: '10.6.0'
      },
      size: {
        type: 'string',
        required: false,
        description:
          'Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`.',
        released: '10.6.0'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level. Defaults to `2`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the heading.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the heading.',
        released: '10.6.0'
      }
    }
  },
  headingHtml: {
    type: 'string',
    required: true,
    description: 'Replaced by the `heading.html` option.',
    released: '4.0.0',
    deprecated: '10.6.0'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.classes` option.',
    released: '4.0.0',
    deprecated: '10.6.0'
  },
  headingSize: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.size` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Replaced by the `heading.level` option.',
    released: '4.0.0',
    deprecated: '10.6.0'
  },
  headingId: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.id` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
  },
  headingVisuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.visuallyHiddenText` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
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
    description: 'Replaced by the `variant` option.',
    released: '6.0.0',
    deprecated: '10.4.0'
  },
  feature: {
    type: 'boolean',
    required: false,
    description: 'Replaced by the `variant: "feature"` option.',
    released: '4.0.0',
    deprecated: '10.4.0'
  },
  primary: {
    type: 'boolean',
    required: false,
    description: 'Replaced by the `variant: "primary"` option.',
    released: '7.1.0',
    deprecated: '10.4.0'
  },
  secondary: {
    type: 'boolean',
    required: false,
    description: 'Replaced by the `variant: "secondary"` option.',
    released: '7.1.0',
    deprecated: '10.4.0'
  },
  warning: {
    type: 'boolean',
    required: false,
    description: 'Replaced by the `variant: "warning"` option.',
    released: '10.3.0',
    deprecated: '10.4.0'
  },
  imgURL: {
    type: 'string',
    required: false,
    description: 'Replaced by the `image.src` option.',
    released: '4.0.0',
    deprecated: '10.3.0'
  },
  imgALT: {
    type: 'string',
    required: false,
    description: 'Replaced by the `image.alt` option.',
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
    type: 'object',
    required: false,
    description:
      'Description to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.',
    released: '10.6.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the card content. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the card content. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the card content.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the card content.',
        released: '10.6.0'
      }
    }
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description: 'Replaced by the `description.html` option.',
    released: '4.0.0',
    deprecated: '10.6.0'
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
          id: {
            type: 'string',
            required: false,
            description: 'The ID of the action item.',
            released: '10.6.0'
          },
          element: {
            type: 'string',
            required: false,
            description:
              'HTML element for the action item – `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided.',
            released: '10.6.0'
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
          name: {
            type: 'string',
            required: false,
            description:
              'Name for the `button`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          type: {
            type: 'string',
            required: false,
            description:
              'Type of `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          value: {
            type: 'string',
            required: false,
            description:
              'The `value` attribute for the `button`. This has no effect on `a` elements.',
            released: '10.6.0'
          },
          href: {
            type: 'string',
            required: true,
            description:
              'The URL that the action item should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined.',
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
