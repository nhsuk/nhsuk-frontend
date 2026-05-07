export const name = 'Character count'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the textarea. Defaults to the value of `name`.',
    released: '7.0.0'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the textarea, which is submitted with the form data.',
    released: '7.0.0'
  },
  rows: {
    type: 'string',
    required: false,
    description: 'Optional number of textarea rows (default is 5 rows).',
    released: '7.0.0'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the textarea.',
    released: '7.0.0'
  },
  maxlength: {
    type: 'string',
    required: true,
    description:
      'The maximum number of characters (or words if `countType` is set to `"words"`).',
    released: '7.0.0'
  },
  maxwords: {
    type: 'string',
    required: true,
    description:
      'The maximum number of words. Replaced by the `maxlength` and `countType: "words"` options.',
    released: '7.0.0',
    deprecated: '10.5.0'
  },
  countType: {
    type: 'string',
    required: false,
    description:
      'The count type used to count the text – `"length"` or `"words"`. Defaults to `"length"`.',
    released: '10.5.0'
  },
  threshold: {
    type: 'string',
    required: false,
    description:
      'The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.',
    released: '7.0.0'
  },
  label: {
    type: 'object',
    required: true,
    description: 'The label used by the character count component.',
    released: '7.0.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the character count component.',
    released: '7.0.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '7.0.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the character count component.',
    released: '7.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).',
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.1.0'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the textarea used by the character count component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the textarea. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the textarea. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the textarea used by the character count component.',
        released: '10.1.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the textarea. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the textarea. If `html` is provided, the `text` option will be ignored.',
            released: '10.1.0'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the textarea.',
    released: '7.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.',
    released: '7.0.0'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the character count.',
    released: '7.0.0'
  },
  countMessage: {
    type: 'object',
    required: false,
    description:
      'Additional options for the count message used by the character count component.',
    released: '7.0.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the count message.',
        released: '7.0.0'
      }
    }
  },
  textareaDescriptionText: {
    type: 'string',
    required: false,
    description:
      'Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` parameter.',
    released: '10.1.0'
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
