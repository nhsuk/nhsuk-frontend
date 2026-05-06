export const name = 'Date input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: true,
    description:
      'This is used for the main component and to compose the `id` attribute for each item.',
    released: '1.0.0'
  },
  namePrefix: {
    type: 'string',
    required: false,
    description:
      'Optional prefix. This is used to prefix each date input `name` attribute, wrapped in `[` and `]`. For example, setting `namePrefix: "dob"` will output the `name` attributes `dob[day]`, `dob[month]` and `dob[year]` respectively.',
    released: '1.0.0'
  },
  items: {
    type: 'array',
    required: false,
    description: 'The inputs within the date input component.',
    alias: 'input',
    released: '1.0.0',
    isComponent: true,
    params: {
      name: {
        type: 'string',
        required: true,
        description:
          'Item-specific `name` attribute. Defaults to `"day"`, `"month"` or `"year"`.',
        released: '1.0.0'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'Item-specific label. Defaults to the `name` option capitalised.',
        released: '10.5.0',
        isComponent: true
      },
      error: {
        type: 'boolean',
        required: false,
        description: 'If set to `true`, show a red border on the item input.',
        released: '10.4.0'
      }
    }
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the date input component.',
    released: '1.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '1.0.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the date input component.',
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
          'Content to add before the inputs used by the date input component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the inputs. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the inputs. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInputs: {
        type: 'object',
        required: false,
        description:
          'Content to add after the inputs used by the date input component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the inputs. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the inputs. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  fieldset: {
    type: 'object',
    required: false,
    description: 'Can be used to add a fieldset to the date input component.',
    released: '1.0.0',
    isComponent: true
  },
  day: {
    type: 'object',
    required: false,
    description:
      'Can be used to customise the day input within the date input component.',
    alias: 'input',
    released: '10.5.0',
    isComponent: true,
    params: {
      name: {
        type: 'string',
        required: false,
        description:
          'The `name` attribute for the day input. Defaults to `"day"`.',
        released: '10.5.0'
      },
      value: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the day input.',
        released: '10.5.0'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'The label used by the day input. Defaults to the `name` option capitalised.',
        released: '10.5.0',
        isComponent: true
      },
      error: {
        type: 'boolean',
        required: false,
        description: 'If set to `true`, show a red border on the day input.',
        released: '10.5.0'
      }
    }
  },
  month: {
    type: 'object',
    required: false,
    description:
      'Can be used to customise the month input within the date input component.',
    alias: 'input',
    released: '10.5.0',
    isComponent: true,
    params: {
      name: {
        type: 'string',
        required: false,
        description:
          'The `name` attribute for the month input. Defaults to `"month"`.',
        released: '10.5.0'
      },
      value: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the month input.',
        released: '10.5.0'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'The label used by the month input. Defaults to the `name` option capitalised.',
        released: '10.5.0',
        isComponent: true
      },
      error: {
        type: 'boolean',
        required: false,
        description: 'If set to `true`, show a red border on the month input.',
        released: '10.5.0'
      }
    }
  },
  year: {
    type: 'object',
    required: false,
    description:
      'Can be used to customise the year input within the date input component.',
    alias: 'input',
    released: '10.5.0',
    isComponent: true,
    params: {
      name: {
        type: 'string',
        required: false,
        description:
          'The `name` attribute for the year input. Defaults to `"year"`.',
        released: '10.5.0'
      },
      value: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the year input.',
        released: '10.5.0'
      },
      label: {
        type: 'object',
        required: false,
        description:
          'The label used by the year input. Defaults to the `name` option capitalised.',
        released: '10.5.0',
        isComponent: true
      },
      error: {
        type: 'boolean',
        required: false,
        description: 'If set to `true`, show a red border on the year input.',
        released: '10.5.0'
      }
    }
  },
  values: {
    type: 'object',
    required: false,
    description:
      'An optional object used to specify `value` attributes for the inputs within the date input component without setting `items`.',
    released: '9.0.0',
    params: {
      day: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the day input.',
        released: '9.0.0'
      },
      month: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the month input.',
        released: '9.0.0'
      },
      year: {
        type: 'string',
        required: false,
        description: 'The `value` attribute for the year input.',
        released: '9.0.0'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the date-input container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the date-input container.',
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
