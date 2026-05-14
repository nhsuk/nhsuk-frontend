const name = 'Legend';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  text: {
    type: 'string',
    required: true,
    description: 'If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored.',
    released: '10.2.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored.',
    released: '10.2.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire legend component in a `call` block.',
    released: '10.2.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the legend.',
    released: '10.2.0'
  },
  isPageHeading: {
    type: 'boolean',
    required: false,
    description: 'Whether the legend also acts as the heading for the page.',
    released: '10.2.0'
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the legend – `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.2.0'
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
