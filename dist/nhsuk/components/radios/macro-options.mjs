const name = 'Radios';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the radios component.',
    released: '10.0.0'
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'The fieldset used by the radios component.',
    released: '1.0.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the radios component.',
    released: '1.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description: 'Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '1.0.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description: 'Additional options for the form group containing the radios component.',
    released: '1.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the form group (for example to show error state for the whole group).',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.0.0'
      },
      beforeInputs: {
        type: 'object',
        required: false,
        description: 'Content to add before all radio items within the radios component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'Text to add before all radio items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'HTML to add before all radio items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description: 'Content to add after all radio items within the radios component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description: 'Text to add after all radio items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description: 'HTML to add after all radio items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description: 'Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value.',
    released: '1.0.0'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The `name` attribute for the radio items.',
    released: '1.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The radio items within the radios component.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      id: {
        type: 'string',
        required: false,
        description: 'Specific `id` attribute for the radio item. If omitted, then `idPrefix` string will be applied.',
        released: '1.0.0'
      },
      value: {
        type: 'string',
        required: true,
        description: 'The `value` attribute for the radio input.',
        released: '1.0.0'
      },
      label: {
        type: 'object',
        required: false,
        description: 'Subset of options for the label used by each radio item within the radios component.',
        released: '1.0.0',
        isComponent: true,
        params: {
          id: {
            type: 'string',
            required: false,
            description: 'The ID of the label tag.',
            released: '10.4.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the label tag.',
            released: '1.0.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description: 'HTML attributes (for example data attributes) to add to the label tag.',
            released: '1.0.0'
          }
        }
      },
      hint: {
        type: 'object',
        required: false,
        description: 'Can be used to add a hint to each radio item within the radios component.',
        released: '1.0.0',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description: 'Divider text to separate radio items, for example the text `"or"`.',
        released: '1.0.0'
      },
      checked: {
        type: 'boolean',
        required: false,
        description: 'Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option.',
        released: '1.0.0'
      },
      conditional: {
        type: 'object',
        required: false,
        description: 'Provide additional content to reveal when the radio is checked.',
        released: '1.0.0',
        params: {
          html: {
            type: 'string',
            required: true,
            description: 'The HTML to reveal when the radio is checked.',
            released: '1.0.0'
          }
        }
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If `true`, radio will be disabled.',
        released: '1.0.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the radio input tag.',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description: 'HTML attributes (for example data attributes) to add to the radio input tag.',
        released: '1.0.0'
      }
    }
  },
  value: {
    type: 'string',
    required: false,
    description: 'The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.',
    released: '9.2.0'
  },
  small: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, small radios will be used.',
    released: '10.4.0'
  },
  inline: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, inline radios will be used.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the radios container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the radios container.',
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
