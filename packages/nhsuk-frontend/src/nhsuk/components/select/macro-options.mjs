import { components } from '@nhsuk/frontend-lib'

export const name = 'Select'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'ID for the select box. Defaults to the value of `name`.'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Name property for the select.'
  },
  items: {
    type: 'array',
    required: true,
    description: 'The items within the select component.',
    params: {
      value: {
        type: 'string',
        required: false,
        description:
          'Value for the option. If this is omitted, the value is taken from the text content of the option element.'
      },
      text: {
        type: 'string',
        required: true,
        description: 'Text for the option item.'
      },
      selected: {
        type: 'boolean',
        required: false,
        description:
          'Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option.'
      },
      disabled: {
        type: 'boolean',
        required: false,
        description: 'Sets the option item as disabled.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the option.'
      }
    }
  },
  value: {
    type: 'string',
    required: false,
    description:
      'Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.'
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
    description: 'The label used by the select component.',
    isComponent: true
  },
  hint: {
    type: 'object',
    required: false,
    description: 'Can be used to add a hint to the select component.',
    isComponent: true
  },
  errorMessage: {
    type: 'object',
    required: false,
    description:
      'Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  formGroup: {
    type: 'object',
    required: false,
    description:
      'Additional options for the form group containing the select component.',
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
          'Content to add before the select used by the select component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add before the select. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add before the select. If `html` is provided, the `text` option will be ignored.'
          }
        }
      },
      afterInput: {
        type: 'object',
        required: false,
        description:
          'Content to add after the select used by the select component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Text to add after the select. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'HTML to add after the select. If `html` is provided, the `text` option will be ignored.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the select.'
  },
  inputWrapper: {
    type: 'object',
    required: false,
    description:
      'If any of `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the select and inserted content. This object allows you to customise that wrapping element.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the wrapping element.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the wrapping element.'
      }
    }
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the select.'
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
        text: 'Sort by',
        isPageHeading: true
      },
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    },
    screenshot: true
  },
  'with disabled item': {
    context: {
      label: {
        text: 'Sort by',
        isPageHeading: true
      },
      id: 'with-disabled-item',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments',
          disabled: true
        }
      ]
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Choose location',
        isPageHeading: true
      },
      hint: {
        text: 'This can be different to where you went before'
      },
      id: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ]
    },
    screenshot: true
  },
  'with button': {
    context: {
      label: {
        text: 'Choose location',
        isPageHeading: true
      },
      hint: {
        text: 'This can be different to where you went before'
      },
      id: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ],
      formGroup: {
        afterInput: {
          html: components.render('button', {
            context: {
              text: 'Save',
              classes: 'nhsuk-button--secondary nhsuk-button--small'
            }
          })
        }
      }
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with button and error message': {
    context: {
      label: {
        text: 'Choose location',
        isPageHeading: true
      },
      hint: {
        text: 'This can be different to where you went before'
      },
      errorMessage: {
        text: 'Select a location'
      },
      id: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ],
      formGroup: {
        afterInput: {
          html: components.render('button', {
            context: {
              text: 'Save',
              classes: 'nhsuk-button--secondary nhsuk-button--small'
            }
          })
        }
      }
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with label size S': {
    context: {
      label: {
        text: 'Sort by',
        classes: 'nhsuk-label--s',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  },
  'with label size M': {
    context: {
      label: {
        text: 'Sort by',
        classes: 'nhsuk-label--m',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  },
  'with label size L': {
    context: {
      label: {
        text: 'Sort by',
        classes: 'nhsuk-label--l',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  },
  'with label size XL': {
    context: {
      label: {
        text: 'Sort by',
        classes: 'nhsuk-label--xl',
        isPageHeading: true
      },
      id: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Sort by'
      },
      id: 'without-heading',
      name: 'example',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Choose location',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Select a location'
      },
      id: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ]
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Choose location',
        isPageHeading: true
      },
      hint: {
        text: 'This can be different to where you went before'
      },
      errorMessage: {
        text: 'Select a location'
      },
      id: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ]
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error'
    }
  },
  'with selected value': {
    context: {
      label: {
        text: 'Sort by',
        isPageHeading: true
      },
      id: 'with-value',
      name: 'example',
      value: 'updated',
      items: [
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
