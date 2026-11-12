export const name = 'File upload'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the input, which is submitted with the form data.',
    released: '10.3.0'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the input. Defaults to the value of `name`.',
    released: '10.3.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, file input will be disabled.',
    released: '10.3.0'
  },
  multiple: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system.',
    released: '10.3.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.',
    released: '10.3.0'
  },
  label: {
    type: 'object',
    required: true,
    description: 'The label used by the file upload component.',
    released: '10.3.0',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the file upload component.',
    released: '10.3.0',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    released: '10.3.0',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the file upload component.',
    released: '10.3.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).',
        released: '10.3.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the form group.',
        released: '10.3.0'
      },
      beforeInput: {
        type: 'object',
        required: false,
        description:
          'Content to add before the input used by the file upload component.',
        released: '10.3.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the input used by the file upload component.',
        released: '10.3.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the input. If `html` is provided, the `text` option will be ignored.',
            released: '10.3.0'
          }
        }
      }
    }
  },
  chooseFilesButtonClassList: {
    type: 'array',
    required: false,
    description:
      'Classes to add to the button that opens the file picker. Default is `["nhsuk-button--secondary"]`.',
    released: '10.3.0'
  },
  chooseFilesButtonText: {
    type: 'string',
    required: false,
    description:
      'The text of the button that opens the file picker. Default is `"Choose file"`.',
    released: '10.3.0'
  },
  dropInstructionText: {
    type: 'string',
    required: false,
    description:
      'The text informing users they can drop files. Default is `"or drop file"`.',
    released: '10.3.0'
  },
  multipleFilesChosenText: {
    type: 'object',
    required: false,
    description:
      'The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md#understanding-pluralisation-rules).',
    released: '10.3.0'
  },
  noFileChosenText: {
    type: 'string',
    required: false,
    description:
      'The text displayed when no file has been chosen by the user. Default is `"No file chosen"`.',
    released: '10.3.0'
  },
  enteredDropZoneText: {
    type: 'string',
    required: false,
    description:
      'The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`.',
    released: '10.3.0'
  },
  leftDropZoneText: {
    type: 'string',
    required: false,
    description:
      'The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`.',
    released: '10.3.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the file upload component.',
    released: '10.3.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the file upload component.',
    released: '10.3.0'
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
