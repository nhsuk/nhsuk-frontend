'use strict';

const name = 'Fieldset';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the fieldset.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description: 'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  legend: {
    type: 'object',
    required: false,
    description: 'The legend for the fieldset component.',
    isComponent: true
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.'
  },
  role: {
    type: 'string',
    required: false,
    description: 'Optional ARIA `role` attribute.'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the fieldset container.'
  },
  html: {
    type: 'string',
    required: false,
    description: 'HTML to use/render within the fieldset element.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.'
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

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
