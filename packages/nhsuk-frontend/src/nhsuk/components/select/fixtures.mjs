import { components } from '@nhsuk/frontend-lib'

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
  'with divider': {
    context: {
      label: {
        text: 'Sort by',
        isPageHeading: true
      },
      name: 'example',
      items: [
        {
          value: 'first-name-ascending',
          text: 'First name (A to Z)'
        },
        {
          value: 'first-name-descending',
          text: 'First name (Z to A)'
        },
        {
          divider: true
        },
        {
          value: 'last-name-ascending',
          text: 'Last name (A to Z)'
        },
        {
          value: 'last-name-descending',
          text: 'Last name (Z to A)'
        }
      ]
    }
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
  'label': {
    context: {
      label: {
        text: 'Sort by',
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

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
