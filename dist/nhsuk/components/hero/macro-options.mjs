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
  heading: {
    type: 'string',
    required: true,
    description: 'Text heading of the hero.',
    released: '1.0.0'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Optional additional classes to add to heading. Separate each class with a space.',
    released: '9.4.0'
  },
  headingSize: {
    type: 'string',
    required: false,
    description: 'Size of the heading – `"xxs"`, `"xs"`, `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.3.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `1`.',
    released: '9.4.0'
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
    description: 'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block.',
    released: '9.4.0'
  },
  imageURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the hero. Replaced by the `image.src` option.',
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
