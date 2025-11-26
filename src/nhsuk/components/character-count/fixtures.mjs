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
  'label': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      maxlength: 200
    },
    options: {
      variants: [
        {
          description: 'with size S',
          context: {
            label: {
              classes: 'nhsuk-label--s'
            }
          }
        },
        {
          description: 'with size M',
          context: {
            label: {
              classes: 'nhsuk-label--m'
            }
          }
        },
        {
          description: 'with size L',
          context: {
            label: {
              classes: 'nhsuk-label--l'
            }
          }
        },
        {
          description: 'with size XL',
          context: {
            label: {
              classes: 'nhsuk-label--xl'
            }
          }
        }
      ]
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
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      textareaDescriptionText: 'No more than %{count} characters',
      id: 'no-maximum-description',
      name: 'example',
      value: 'This textarea has no maximum character or word count.',
      rows: 8
    }
  },
  'with neither maxlength, maxwords nor textarea description set': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'no-maximum',
      name: 'example',
      value: 'This textarea has no maximum character or word count.',
      rows: 8
    }
  },
  'with translations': {
    context: {
      label: {
        text: 'Allwch chi roi mwy o fanylion?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      hint: {
        text: 'Peidiwch â chynnwys gwybodaeth bersonol, fel eich enw, dyddiad geni na rhif y GIG'
      },
      id: 'with-translations',
      name: 'example',
      maxlength: 200,
      textareaDescriptionText: 'Gallwch ddefnyddio hyd at %{count} nod',
      charactersUnderLimitText: {
        one: 'Mae gennych %{count} nod ar ôl',
        two: 'Mae gennych %{count} nod ar ôl',
        few: 'Mae gennych %{count} nod ar ôl',
        many: 'Mae gennych %{count} nod ar ôl',
        other: 'Mae gennych %{count} nod ar ôl'
      },
      charactersAtLimitText: 'Mae gennych 0 nod ar ôl',
      charactersOverLimitText: {
        one: 'Mae gennych %{count} nod yn ormod',
        two: 'Mae gennych %{count} nod yn ormod',
        few: 'Mae gennych %{count} nod yn ormod',
        many: 'Mae gennych %{count} nod yn ormod',
        other: 'Mae gennych chi %{count} nod yn ormod'
      }
    }
  },
  'to configure in JavaScript': {
    context: {
      label: {
        text: 'Can you provide more detail?',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'to-configure-in-javascript',
      name: 'example'
    },
    options: {
      hidden: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
