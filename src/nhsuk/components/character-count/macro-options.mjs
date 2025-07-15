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
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  },
  'with default value': {
    context: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 70,
      value: '123',
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  },
  'with default value exceeding limit': {
    context: {
      name: 'exceeding-characters',
      id: 'exceeding-characters',
      maxlength: 350,
      value:
        'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.',
      label: {
        text: 'What is your job description?'
      },
      errorMessage: {
        text: 'Job description must be 350 characters or less'
      }
    }
  },
  'with error message': {
    context: {
      name: 'with-error-message',
      id: 'with-error-message',
      maxlength: 350,
      label: {
        text: 'What is your job description?'
      },
      errorMessage: {
        text: 'Enter a job description'
      }
    }
  },
  'with maxlength attribute': {
    context: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 11,
      attributes: {
        maxlength: 11
      },
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  },
  'with threshold': {
    context: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 10,
      threshold: 8,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  },
  'with max words': {
    context: {
      name: 'more-detail',
      id: 'more-detail',
      maxwords: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
