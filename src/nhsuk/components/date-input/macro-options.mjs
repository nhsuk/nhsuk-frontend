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
    released: '1.0.0',
    params: {
      id: {
        type: 'string',
        required: false,
        description:
          'Item-specific `id` attribute. If provided, it will be used instead of the generated ID.',
        released: '1.0.0'
      },
      name: {
        type: 'string',
        required: true,
        description: 'Item-specific `name` attribute.',
        released: '1.0.0'
      },
      label: {
        type: 'string',
        required: false,
        description:
          'Item-specific label text. If provided, this will be used instead of `name` for item label text.',
        released: '1.0.0'
      },
      error: {
        type: 'boolean',
        required: false,
        description: 'If set to `true`, show a red border on the item input.',
        released: '10.4.0'
      },
      width: {
        type: 'integer',
        required: false,
        description: 'Optional fixed width for the item input – `2` or `4`.',
        released: '10.4.0'
      },
      inputmode: {
        type: 'string',
        required: false,
        description:
          'Optional value for [the `inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). Defaults to `"numeric"`.',
        released: '4.1.0'
      },
      value: {
        type: 'string',
        required: false,
        description:
          'If provided, it will be used as the initial `value` attribute of the input.',
        released: '1.0.0'
      },
      autocomplete: {
        type: 'string',
        required: false,
        description:
          'Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for a full list of attributes that can be used.',
        released: '2.1.0'
      },
      pattern: {
        type: 'string',
        required: false,
        description:
          'Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value.',
        released: '2.1.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to date input item.',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the date input tag.',
        released: '2.1.0'
      }
    }
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to a date input component.',
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
  values: {
    type: 'object',
    required: false,
    description:
      'An optional object use to specify `value` attributes for the date parts without setting items.',
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
