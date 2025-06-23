import { components } from '@nhsuk/frontend-lib'

export const name = 'Input'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: true,
    description: 'The id of the input.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The name of the input, which is submitted with the form data.'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of input control to render. Defaults to `"text"`.'
  },
  inputmode: {
    type: 'string',
    required: false,
    description: 'Optional value for inputmode.'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the input.'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  label: {
    type: 'object',
    required: true,
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
  prefix: {
    type: 'string',
    required: false,
    description: 'Optional prefix text to be displayed before the input.'
  },
  suffix: {
    type: 'string',
    required: false,
    description: 'Optional suffix text to be displayed after the input.'
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the input component.',
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
    description: 'Classes to add to the input.'
  },
  autocomplete: {
    type: 'string',
    required: false,
    description:
      'autocomplete attribute to identify input purpose, for instance `"postal-code"` or `"username"`.'
  },
  pattern: {
    type: 'string',
    required: false,
    description:
      'pattern attribute to provide a regular expression pattern, used to match allowed character combinations for the input value.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the spellcheck attribute on the input.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the input.'
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
