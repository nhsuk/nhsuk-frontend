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
      id: 'file-upload',
      name: 'file-upload'
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'Upload your photo'
      },
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      },
      id: 'file-upload',
      name: 'file-upload'
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Upload a file'
      },
      errorMessage: {
        text: 'The selected file must be a JPG, BMP or TIF.'
      },
      id: 'file-upload',
      name: 'file-upload'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Upload a file'
      },
      id: 'file-upload',
      name: 'file-upload',
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
      label: {
        text: 'Upload a file',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload'
    }
  },
  'with multiple': {
    context: {
      label: {
        text: 'Upload multiple files'
      },
      id: 'file-upload',
      name: 'file-upload',
      multiple: true,
      chooseFilesButtonText: 'Choose files',
      dropInstructionText: 'or drop files',
      noFileChosenText: 'No files chosen'
    }
  },
  'disabled': {
    context: {
      label: {
        text: 'Upload a file'
      },
      id: 'file-upload',
      name: 'file-upload',
      disabled: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
