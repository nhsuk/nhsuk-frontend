const name = 'Panel';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the panel.',
    released: '10.0.0'
  },
  heading: {
    type: 'object',
    required: true,
    description: 'Heading of the panel component.',
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
        description: 'Size of the heading – `"m"`, `"l"` or `"xl"`.',
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
  titleText: {
    type: 'string',
    required: true,
    description: 'Replaced by the `heading.text` option.',
    released: '9.3.0',
    deprecated: '10.6.0'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.html` option.',
    released: '9.3.0',
    deprecated: '10.6.0'
  },
  titleSize: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.size` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
  },
  titleClasses: {
    type: 'string',
    required: false,
    description: 'Replaced by the `heading.classes` option.',
    released: '10.3.0',
    deprecated: '10.6.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Replaced by the `heading.level` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored.',
    released: '9.3.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the panel content. If `text` is provided, the `html` option will be ignored.',
    released: '9.3.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block.',
    released: '9.3.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the panel.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the panel.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of panel. You can use only `"interruption"` or empty values with this option.',
    released: '10.4.0'
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
