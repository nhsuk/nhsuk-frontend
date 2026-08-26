/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload"
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "disabled": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload",
      disabled: true
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "with hint": {
    context: {
      label: {
        heading: "Upload your photo",
        size: "l"
      },
      hint: {
        text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
      },
      id: "file-upload",
      name: "file-upload"
    }
  },
  "with error only": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      errorMessage: true,
      id: "file-upload",
      name: "file-upload"
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      errorMessage: {
        text: "The selected file must be a JPG, BMP or TIF"
      },
      id: "file-upload",
      name: "file-upload"
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload",
      hint: {
        text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
      },
      errorMessage: {
        text: "The selected file must be a JPG, BMP or TIF"
      }
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload",
      hint: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder",
      errorMessage: "The selected file must be a JPG, BMP or TIF"
    }
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "Upload a file"
      },
      errorMessage: {
        text: "The selected file must be a JPG, BMP or TIF"
      },
      id: "file-upload",
      name: "file-upload"
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "Upload a file"
      },
      id: "file-upload",
      name: "file-upload",
      hint: {
        text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder"
      },
      errorMessage: {
        text: "The selected file must be a JPG, BMP or TIF"
      }
    }
  },
  "label": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload"
    },
    variants: [
      {
        description: "with size S",
        context: {
          label: {
            size: "s"
          }
        }
      },
      {
        description: "with size M",
        context: {
          label: {
            size: "m"
          }
        }
      },
      {
        description: "with size L",
        context: {
          label: {
            size: "l"
          }
        }
      },
      {
        description: "with size XL",
        context: {
          label: {
            size: "xl"
          }
        }
      },
      {
        description: "with id attribute on",
        context: {
          label: {
            id: "custom-id"
          }
        },
        options: {
          hidden: true
        }
      }
    ]
  },
  "button": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload"
    },
    variants: [
      {
        description: "with primary",
        context: {
          chooseFilesButtonClassList: []
        }
      },
      {
        description: "with small primary",
        context: {
          chooseFilesButtonClassList: ["nhsuk-button--small"]
        }
      },
      {
        description: "with small secondary",
        context: {
          chooseFilesButtonClassList: [
            "nhsuk-button--secondary",
            "nhsuk-button--small"
          ]
        }
      }
    ]
  },
  "without heading": {
    context: {
      label: "Upload a file",
      id: "file-upload",
      name: "file-upload"
    }
  },
  "with multiple": {
    context: {
      label: {
        heading: "Upload multiple files",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload",
      multiple: true,
      chooseFilesButtonText: "Choose files",
      dropInstructionText: "or drop files",
      noFileChosenText: "No files chosen"
    }
  },
  "with translations": {
    context: {
      label: {
        heading: "Llwythwch ffeil i fyny",
        size: "l"
      },
      id: "file-upload",
      name: "file-upload",
      multiple: true,
      chooseFilesButtonText: "Dewiswch ffeil",
      dropInstructionText: "neu ollwng ffeil",
      noFileChosenText: "Dim ffeil wedi'i dewis",
      multipleFilesChosenText: {
        other: "%{count} ffeil wedi'u dewis",
        one: "%{count} ffeil wedi'i dewis"
      },
      enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
      leftDropZoneText: "Parth gollwng i'r chwith"
    }
  },
  "to configure in JavaScript": {
    context: {
      label: {
        heading: "Upload a file",
        size: "l"
      },
      id: "to-configure-in-javascript",
      name: "file-upload"
    },
    options: {
      hidden: true
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
