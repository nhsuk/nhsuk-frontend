/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      label: {
        text: 'Upload a file',
        size: 'l',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Upload your photo',
        size: 'l',
        isPageHeading: true
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
        text: 'Upload a file',
        size: 'l',
        isPageHeading: true
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
        text: 'Upload a file',
        size: 'l',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload',
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      },
      errorMessage: {
        text: 'The selected file must be a JPG, BMP or TIF.'
      }
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'label': {
    context: {
      label: {
        text: 'Upload a file',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload'
    },
    variants: [
      {
        description: 'with size S',
        context: {
          label: {
            size: 's'
          }
        }
      },
      {
        description: 'with size M',
        context: {
          label: {
            size: 'm'
          }
        }
      },
      {
        description: 'with size L',
        context: {
          label: {
            size: 'l'
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          label: {
            size: 'xl'
          }
        }
      }
    ]
  },
  'without page heading': {
    context: {
      label: {
        text: 'Upload a file'
      },
      id: 'file-upload',
      name: 'file-upload'
    }
  },
  'with multiple': {
    context: {
      label: {
        text: 'Upload multiple files',
        size: 'l',
        isPageHeading: true
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
        text: 'Upload a file',
        size: 'l',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload',
      disabled: true
    }
  },
  'with translations': {
    context: {
      label: {
        text: 'Llwythwch ffeil i fyny',
        size: 'l',
        isPageHeading: true
      },
      id: 'file-upload',
      name: 'file-upload',
      multiple: true,
      chooseFilesButtonText: 'Dewiswch ffeil',
      dropInstructionText: 'neu ollwng ffeil',
      noFileChosenText: "Dim ffeil wedi'i dewis",
      multipleFilesChosenText: {
        other: "%{count} ffeil wedi'u dewis",
        one: "%{count} ffeil wedi'i dewis"
      },
      enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
      leftDropZoneText: "Parth gollwng i'r chwith"
    }
  },
  'to configure in JavaScript': {
    context: {
      label: {
        text: 'Upload a file',
        size: 'l',
        isPageHeading: true
      },
      id: 'to-configure-in-javascript',
      name: 'file-upload'
    },
    options: {
      hidden: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
