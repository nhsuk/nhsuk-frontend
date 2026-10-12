const name = 'Hero';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the hero.',
    released: '10.0.0'
  },
  content: {
    type: 'object',
    required: false,
    description: 'The content section of the hero. Alternatively supports an array of `content` objects.',
    released: '10.6.0',
    params: {
      heading: {
        type: 'object',
        required: false,
        description: 'Optional heading for content column.',
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
            description: 'If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored.',
            released: '10.6.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored.',
            released: '10.6.0'
          },
          visuallyHiddenText: {
            type: 'string',
            required: false,
            description: 'A visually hidden suffix added to the heading.',
            released: '10.6.0'
          },
          href: {
            type: 'string',
            required: false,
            description: 'If set, the heading will become a link.',
            released: '10.6.0'
          },
          caption: {
            type: 'object',
            required: false,
            description: 'Optional caption for the heading.',
            released: '10.6.0',
            isComponent: true
          },
          size: {
            type: 'string',
            required: false,
            description: 'Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`.',
            released: '10.6.0'
          },
          level: {
            type: 'integer',
            required: false,
            description: 'Optional heading level. Defaults to `1`.',
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
            description: 'HTML attributes (for example data attributes) to add to the heading.',
            released: '10.6.0'
          }
        }
      },
      text: {
        type: 'string',
        required: false,
        description: 'Optional text to use within each content column. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: false,
        description: 'Optional HTML to use within each content column. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      image: {
        type: 'object',
        required: false,
        description: 'Optional image to use within each content column.',
        alias: 'images',
        released: '10.6.0',
        isComponent: true
      },
      width: {
        type: 'string',
        required: false,
        description: 'Width of each content column. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the content column.',
        released: '10.6.0'
      }
    }
  },
  heading: {
    type: 'object',
    required: true,
    description: 'Heading of the hero.',
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
        description: 'If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the heading.',
        released: '10.6.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'If set, the heading will become a link.',
        released: '10.6.0'
      },
      caption: {
        type: 'object',
        required: false,
        description: 'Optional caption for the heading.',
        released: '10.6.0',
        isComponent: true
      },
      size: {
        type: 'string',
        required: false,
        description: 'Size of the heading – `"m"`, `"l"` or `"xl"`. Defaults to `"xl"`.',
        released: '10.6.0'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level. Defaults to `1`.',
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
        description: 'HTML attributes (for example data attributes) to add to the heading.',
        released: '10.6.0'
      }
    }
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.classes` option.',
    released: '9.4.0',
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
    released: '9.4.0',
    deprecated: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored.',
    released: '9.4.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire hero component in a `call` block.',
    released: '9.4.0'
  },
  imageURL: {
    type: 'string',
    required: false,
    description: 'Replaced by the `image.src` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  image: {
    type: 'object',
    required: false,
    description: 'Can be used to add an image to the hero component.',
    released: '10.3.0',
    params: {
      src: {
        type: 'string',
        required: true,
        description: 'The URL of the image in the hero.',
        released: '10.3.0'
      }
    }
  },
  width: {
    type: 'string',
    required: false,
    description: 'Width of the hero content. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"one-half"`.',
    released: '10.6.0'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hero container, useful if you want to make the hero fixed width.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hero.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the hero.',
    released: '1.0.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove border from the hero.',
    released: '10.6.0'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

export { name, params };
//# sourceMappingURL=macro-options.mjs.map
