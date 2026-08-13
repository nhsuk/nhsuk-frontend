const name = 'Error message';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error message component in a `call` block.',
    released: '10.6.0'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` attribute to add to the error message `<span>` tag.',
    released: '1.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the error message `<span>` tag.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the error message `<span>` tag.',
    released: '1.0.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'A visually hidden prefix used before the error message. Defaults to `"Error"`.',
    released: '2.1.0'
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
