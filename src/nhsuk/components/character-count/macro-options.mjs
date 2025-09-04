import { components } from '@nhsuk/frontend-lib'

export const name = 'Character count'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the textarea. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description:
      'The name of the textarea, which is submitted with the form data.'
  },
  rows: {
    type: 'string',
    required: false,
    description: 'Optional number of textarea rows (default is 5 rows).'
  },
  value: {
    type: 'string',
    required: false,
    description: 'Optional initial value of the textarea.'
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
    description: 'Options for the error message component.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the character count component.',
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
          'Content to add before the textarea used by the character count component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the textarea. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the textarea. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the textarea used by the character count component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the textarea. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the textarea. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to the textarea tag. Separate each class with a space.'
  },
  maxlength: {
    type: 'string',
    required: false,
    description:
      'If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` argument will be ignored.'
  },
  maxwords: {
    type: 'string',
    required: false,
    description:
      'If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` argument will be ignored.'
  },
  threshold: {
    type: 'string',
    required: false,
    description:
      'The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the spellcheck attribute on the textarea.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'Any extra HTML attributes (for example data attributes) to add to the textarea tag.'
  },
  countMessage: {
    type: 'object',
    required: false,
    description:
      'Additional options for the count message used by the character count component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the count message.'
      }
    }
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
        text: 'Can you provide more detail?'
      },
      name: 'example',
      maxlength: 10
    },
    screenshot: true
  },
  'with hint': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      },
      id: 'with-hint',
      name: 'example',
      maxlength: 10
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      errorMessage: {
        text: 'Enter more detail'
      },
      id: 'with-error-message',
      name: 'example',
      maxlength: 10
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      },
      errorMessage: {
        text: 'Enter more detail'
      },
      id: 'with-hint-error',
      name: 'example',
      maxlength: 10
    },
    screenshot: true
  },
  'with default value': {
    context: {
      label: {
        text: 'What is your job description?'
      },
      id: 'default-value',
      name: 'example',
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.',
      maxlength: 350
    }
  },
  'with default value exceeding limit': {
    context: {
      label: {
        text: 'What is your job description?'
      },
      errorMessage: {
        text: 'Job description must be 350 characters or less'
      },
      id: 'exceeding-limit',
      name: 'example',
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.',
      maxlength: 350
    }
  },
  'with custom rows': {
    context: {
      label: {
        text: 'What is your job description?'
      },
      id: 'custom-rows',
      name: 'example',
      maxlength: 350,
      rows: 8
    }
  },
  'with label as page heading': {
    context: {
      label: {
        text: 'What is your job description?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'page-heading',
      name: 'example',
      maxlength: 350,
      rows: 8
    }
  },
  'with maxlength attribute': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      id: 'maxlength-attribute',
      name: 'example',
      maxlength: 11,
      attributes: {
        maxlength: 11
      }
    }
  },
  'with word count': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      id: 'with-word-count',
      name: 'example',
      maxwords: 10
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'with threshold': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      id: 'with-threshold',
      name: 'example',
      maxlength: 10,
      threshold: 8
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'with neither maxlength nor maxwords set': {
    context: {
      label: {
        text: 'Can you provide more detail?'
      },
      id: 'no-maximum',
      name: 'example',
      value: 'This textarea has no maximum character or word count.',
      rows: 8
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
