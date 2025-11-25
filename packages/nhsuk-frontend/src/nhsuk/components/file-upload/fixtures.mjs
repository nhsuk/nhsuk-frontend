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
  },
  'with multiple': {
    context: {
      id: 'file-upload-6',
      name: 'file-upload-6',
      multiple: true,
      chooseFilesButtonText: 'Choose files',
      dropInstructionText: 'or drop files',
      noFileChosenText: 'No files chosen',
      label: {
        text: 'Upload multiple files'
      }
    }
  },
  'disabled': {
    context: {
      id: 'file-upload-7',
      name: 'file-upload-7',
      label: {
        text: 'Upload a file'
      },
      disabled: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
