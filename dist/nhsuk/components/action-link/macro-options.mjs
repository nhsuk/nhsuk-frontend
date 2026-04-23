const name = 'Action link';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the action link.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the action link. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the action link. If `html` is provided, the `text` option will be ignored.',
    released: '10.2.0'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the link `href` attribute.',
    released: '1.0.0'
  },
  openInNewWindow: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, then the link will open in a new window.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of action link. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the anchor tag.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the anchor tag.',
    released: '1.0.0'
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
