export const name = 'Select'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'ID for the select box. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'The `name` attribute for the select.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The items within the select component.',
    params: {
      value: {
        type: 'string',
        required: false,
        description:
          'The `value` attribute for the option. If this is omitted, the value is taken from the text content of the option element.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text for the option item.'
      },
      divider: {
        type: 'boolean',
        required: false,
        description: 'Divider line used to separate option items.'
      },
      selected: {
        type: 'boolean',
        required: false,
        description:
          'Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option.'
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
      'The value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.'
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
    description: 'The label used by the select component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the select component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
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
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the select used by the select component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the select. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the select. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the select used by the select component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the select. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the select. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the select.'
  },
  inputWrapper: {
    type: 'object',
    required: false,
    description:
      'If any of `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the select and inserted content. This object allows you to customise that wrapping element.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the wrapping element.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the wrapping element.'
      }
    }
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the select.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
