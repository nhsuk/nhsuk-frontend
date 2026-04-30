export const name = 'Checkboxes'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the checkboxes component.',
    released: '10.0.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users.',
    released: '10.0.0'
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'Can be used to add a fieldset to the checkboxes component.',
    released: '1.0.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the checkboxes component.',
    released: '1.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '1.0.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the checkboxes component.',
    released: '1.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.0.0'
      },
      beforeInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add before all checkbox items within the checkboxes component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add after all checkbox items within the checkboxes component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value.',
    released: '1.0.0'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The `name` attribute for all checkbox items.',
    released: '1.0.0'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The checkbox items within the checkboxes component.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific `id` attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.',
        released: '1.0.0'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'Specific `name` attribute for the checkbox item. If omitted, then component global `name` string will be applied.',
        released: '1.0.0'
      },
      value: {
        type: 'string',
        required: true,
        description: 'The `value` attribute for the checkbox input.',
        released: '1.0.0'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'Subset of options for the label used by each checkbox item within the checkboxes component.',
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
            description:
              'HTML attributes (for example data attributes) to add to the label tag.',
            released: '1.0.0'
          }
        }
      },
      hint: {
        type: 'object',
        required: false,
        description:
          'Can be used to add a hint to each checkbox item within the checkboxes component.',
        released: '1.0.0',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description:
          'Divider text to separate checkbox items, for example the text `"or"`.',
        released: '3.1.0'
      },
      checked: {
        type: 'boolean',
        required: false,
        description:
          'Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option.',
        released: '1.0.0'
      },
      conditional: {
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the checkbox is checked.',
        released: '1.0.0',
        params: {
          html: {
            type: 'string',
            required: true,
            description: 'The HTML to reveal when the checkbox is checked.',
            released: '1.0.0'
          }
        }
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If `true`, checkbox will be disabled.',
        released: '1.0.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the checkbox input tag.',
        released: '10.2.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the checkbox input tag.',
        released: '1.0.0'
      },
      exclusive: {
        type: 'boolean',
        required: false,
        description:
          'If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked.',
        released: '5.2.0'
      },
      exclusiveGroup: {
        type: 'string',
        required: false,
        description:
          'Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario.',
        released: '5.2.0'
      }
    }
  },
  values: {
    type: 'array',
    required: false,
    description:
      'Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.',
    released: '9.2.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, checkbox inputs used by the checkboxes component will be disabled.',
    released: '10.5.0'
  },
  small: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, small checkboxes will be used.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the checkboxes container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the checkboxes container.',
    released: '1.0.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
