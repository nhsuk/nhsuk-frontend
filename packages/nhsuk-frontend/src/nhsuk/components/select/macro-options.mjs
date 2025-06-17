import { components } from '@nhsuk/frontend-lib'

export const name = 'Select'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: true,
    description: 'Id for each select box.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name property for the select.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'Array of option items for the select.',
    params: {
      value: {
        type: 'string',
        required: false,
        description: 'Value for the option item. Defaults to an empty string.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text for the option item.'
      },
      selected: {
        type: 'boolean',
        required: false,
        description: 'Sets the option as the selected.'
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'Sets the option item as disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the option.'
      }
    }
  },
  value: {
    type: 'string',
    required: false,
    description:
      'Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.'
  },
  label: {
    type: 'object',
    required: false,
    description: 'Options for the label component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Options for the hint component.',
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
      'Additional options for the form group containing the select component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the select.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the select.'
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
