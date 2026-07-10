const name = 'Skip link';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the skip link.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`.',
    released: '10.2.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the skip link\'s `href` attribute. Defaults to `"#maincontent"`.',
    released: '1.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the skip link.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the skip link.',
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
