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
  maxlength: {
    type: 'string',
    required: true,
    description:
      'If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored.'
  },
  maxwords: {
    type: 'string',
    required: true,
    description:
      'If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored.'
  },
  threshold: {
    type: 'string',
    required: false,
    description:
      'The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.'
  },
  label: {
    type: 'object',
    required: true,
    description: 'The label used by the character count component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the character count component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
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
    description: 'Classes to add to the textarea.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.'
  },
  spellcheck: {
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the character count.'
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
  },
  textareaDescriptionText: {
    type: 'string',
    required: false,
    description:
      'Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter.'
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
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      name: 'example',
      maxlength: 200
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-textarea'
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Enter a job description',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      id: 'with-hint',
      name: 'example',
      maxlength: 200
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Enter a job description',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Job description must be 350 characters or less'
      },
      id: 'with-error-message',
      name: 'example',
      maxlength: 350,
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Enter a job description',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Do not include personal information like your name, date of birth or NHS number'
      },
      errorMessage: {
        text: 'Job description must be 350 characters or less'
      },
      id: 'with-error-message',
      name: 'example',
      maxlength: 350,
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-textarea'
    }
  },
  'with default value': {
    context: {
      label: {
        text: 'Enter a job description',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'with-default-value',
      name: 'example',
      maxlength: 350,
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.'
    }
  },
  'with custom rows': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'custom-rows',
      name: 'example',
      maxlength: 350,
      rows: 15
    }
  },
  'with label size S': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--s',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      maxlength: 200
    }
  },
  'with label size M': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--m',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      maxlength: 200
    }
  },
  'with label size L': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      maxlength: 200
    }
  },
  'with label size XL': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--xl',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      maxlength: 200
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Tell us more about what happened'
      },
      id: 'without-heading',
      name: 'example',
      maxlength: 150
    }
  },
  'with maxlength attribute': {
    context: {
      label: {
        text: 'Enter a job description'
      },
      id: 'maxlength-attribute',
      name: 'example',
      maxlength: 11,
      attributes: {
        maxlength: 11
      }
    },
    options: {
      hidden: true
    }
  },
  'with word count': {
    context: {
      label: {
        text: 'Enter a job description',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'with-word-count',
      name: 'example',
      maxwords: 150
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'with threshold': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'with-threshold',
      name: 'example',
      value:
        'Type another letter into this field after this message to see the threshold feature',
      maxlength: 112,
      threshold: 75
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
