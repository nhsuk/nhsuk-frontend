const name = 'Tag';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the tag.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored.',
    released: '4.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored.',
    released: '4.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the tag.',
    released: '4.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the tag.',
    released: '4.0.0'
  },
  colour: {
    type: 'string',
    required: false,
    description: 'Optional colour modifier for the tag – `"white"`, `"grey"`, `"green"`, `"aqua-green"`, `"blue"`, `"purple"`, `"pink"`, `"red"`, `"orange"` or `"yellow"`.',
    released: '10.4.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove border from the tag.',
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
