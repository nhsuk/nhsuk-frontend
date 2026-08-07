'use strict';

const name = 'Select';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'ID for the select box. Defaults to the value of `name`.',
    released: '1.0.0'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The `name` attribute for the select.',
    released: '1.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The items within the select component.',
    released: '1.0.0',
    params: {
      value: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the option. If this is omitted, the value is taken from the text content of the option element.',
        released: '1.0.0'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text for the option item.',
        released: '1.0.0'
      },
      divider: {
        type: 'boolean',
        required: false,
        description: 'Divider line used to separate option items.',
        released: '10.2.0'
      },
      selected: {
        type: 'boolean',
        required: false,
        description: 'Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option.',
        released: '1.0.0'
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'Sets the option item as disabled.',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the option.',
        released: '1.0.0'
      }
    }
  },
  value: {
    type: 'string',
    required: false,
    description: 'The value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.',
    released: '10.0.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.',
    released: '10.0.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description: 'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.',
    released: '10.0.0'
  },
  label: {
    type: 'object',
    required: true,
    description: 'The label used by the select component.',
    released: '1.0.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the select component.',
    released: '1.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description: 'Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '1.0.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description: 'Additional options for the form group containing the select component.',
    released: '10.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the form group (for example to show error state for the whole group).',
        released: '10.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.0.0'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description: 'Content to add before the select used by the select component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'Text to add before the select. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'HTML to add before the select. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description: 'Content to add after the select used by the select component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'Text to add after the select. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'HTML to add after the select. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the select.',
    released: '1.0.0'
  },
  inputWrapper: {
    type: 'object',
    required: false,
    description: 'If any of `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the select and inserted content. This object allows you to customise that wrapping element.',
    released: '10.2.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the wrapping element.',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the wrapping element.',
        released: '10.2.0'
      }
    }
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the select.',
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

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
