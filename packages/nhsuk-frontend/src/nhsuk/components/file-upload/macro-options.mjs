import { components } from '@nhsuk/frontend-lib'

export const name = 'File upload'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  name: {
    type: 'string',
    required: true,
    description: 'The name of the input, which is submitted with the form data.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the input. Defaults to the value of `name`.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'If `true`, file input will be disabled.'
  },
  multiple: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system.'
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
    description: 'The label used by the file upload component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the file upload component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the file upload component.',
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
          'Content to add before the input used by the file upload component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the input. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the input. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the input used by the file upload component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the input. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the input. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  chooseFilesButtonText: {
    type: 'string',
    required: false,
    description:
      'The text of the button that opens the file picker. Default is `"Choose file"`.'
  },
  dropInstructionText: {
    type: 'string',
    required: false,
    description:
      'The text informing users they can drop files. Default is `"or drop file"`.'
  },
  multipleFilesChosenText: {
    type: 'object',
    required: false,
    description:
      'The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules).'
  },
  noFileChosenText: {
    type: 'string',
    required: false,
    description:
      'The text displayed when no file has been chosen by the user. Default is `"No file chosen"`.'
  },
  enteredDropZoneText: {
    type: 'string',
    required: false,
    description:
      'The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`.'
  },
  leftDropZoneText: {
    type: 'string',
    required: false,
    description:
      'The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the file upload component.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the file upload component.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      label: {
        text: 'Upload a file'
      },
      name: 'file-upload-1'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      id: 'file-upload-2',
      name: 'file-upload-2',
      label: {
        text: 'Upload your photo'
      },
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      }
    }
  },
  'with error message': {
    context: {
      id: 'file-upload-3',
      name: 'file-upload-3',
      label: {
        text: 'Upload a file'
      },
      errorMessage: {
        text: 'The selected file must be a JPG, BMP or TIF.'
      }
    }
  },
  'with hint and error': {
    context: {
      id: 'file-upload-4',
      name: 'file-upload-4',
      label: {
        text: 'Upload a file'
      },
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      },
      errorMessage: {
        text: 'The selected file must be a JPG, BMP or TIF.'
      }
    }
  },
  'with label as page heading': {
    context: {
      id: 'file-upload-5',
      name: 'file-upload-5',
      label: {
        text: 'Upload a file',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
