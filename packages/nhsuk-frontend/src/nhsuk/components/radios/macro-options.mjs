import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Radios'

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
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the radios component.',
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
      'String to prefix id for each radio item if no id is specified on each item. If `idPrefix` is not passed, fallback to using the name attribute instead.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name attribute for each radio item.'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of radio items objects.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` argument will be ignored.'
      },
      id: {
        type: 'string',
        required: false,
        description:
          'Specific id attribute for the radio item. If omitted, then `idPrefix` string will be applied.'
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
        description: 'Value for the radio input.'
      },
      hint: {
        type: 'object',
        required: false,
        description: 'Provide hint to each radio item.',
        isComponent: true
      },
      divider: {
        type: 'string',
        required: false,
        description:
          "Divider text to separate radio items, for example the text `'or'`."
      },
      checked: {
        type: 'boolean',
        required: false,
        description: 'If true, radio will be checked.'
      },
      conditional: {
        type: 'string',
        required: false,
        description:
          'If true, content provided will be revealed when the item is checked.'
      },
      'conditional.html': {
        type: 'html',
        required: false,
        description: 'Provide content for the conditional reveal.'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the radio container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the radio input tag.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
