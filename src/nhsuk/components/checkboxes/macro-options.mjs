import { components } from '@nhsuk/frontend-lib'

export const name = 'Checkboxes'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  fieldset: {
    type: 'object',
    required: false,
    description: 'Options for the fieldset component (for example legend).',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Options for the hint component (for example text).',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description: 'Options for the error message component.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the checkboxes component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      }
    }
  },
  idPrefix: {
    type: 'string',
    required: false,
    description:
      'String to prefix id for each checkbox item if no id is specified on each item. If not passed, fall back to using the name option instead.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for all checkbox items.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of checkbox items objects.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` argument will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific id attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'Specific name for the checkbox item. If omitted, then component global `name` string will be applied.'
      },
      label: {
        type: 'object',
        required: false,
        description: 'Options for the label component.',
        isComponent: true
      },
      value: {
        type: 'string',
        required: true,
        description: 'Value for the checkbox input.'
      },
      divider: {
        type: 'string',
        required: true,
        description:
          "Optional divider text to separate checkbox items, for example the text `'or'`."
      },
      hint: {
        type: 'object',
        required: false,
        description: 'Provide hint to each checkbox item.',
        isComponent: true
      },
      checked: {
        type: 'boolean',
        required: false,
        description: 'If true, checkbox will be checked.'
      },
      conditional: {
        type: 'boolean',
        required: false,
        description:
          'If true, content provided will be revealed when the item is checked.'
      },
      'conditional.html': {
        type: 'string',
        required: false,
        description: 'Provide content for the conditional reveal.'
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'If true, checkbox will be disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the checkbox input tag.'
      }
    }
  },
  exclusive: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, marks this checkbox as the None option in a None of these type behaviour. Unchecking all other checkboxes in the group when None is clicked.'
  },
  exclusiveGroup: {
    type: 'string',
    required: false,
    description:
      'Used in conjunction with `exclusive` - this should be set to a string which groups checkboxes together into a set for use in a None of these scenario.'
  },
  values: {
    type: 'array',
    required: false,
    description:
      'Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the checkboxes container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
