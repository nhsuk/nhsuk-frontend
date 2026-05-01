import { components } from '#lib'

import { examples as buttonExamples } from '../button/fixtures.mjs'

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: 'reverse',
    context: {
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
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
    variants,
    screenshot: true
  },
  'disabled': {
    context: {
      label: {
        text: 'Sort by',
        isPageHeading: true
      },
      name: 'example',
      disabled: true,
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
    variants,
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
    variants,
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
      formGroup: getFormGroup()
    },
    variants: variants.map(customVariant()),
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
      formGroup: getFormGroup()
    },
    variants: variants.map(customVariant()),
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'label': {
    context: {
      label: {
        text: 'Sort by',
        size: 'l',
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
      },
      {
        description: 'with id attribute on',
        context: {
          label: {
            id: 'custom-id'
          }
        },
        options: {
          hidden: true
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
    },
    variants
  },
  'with error message and hint': {
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
    variants,
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
 * Get example form group by variant
 *
 * @param {{ variant?: unknown }} [options]
 */
function getFormGroup(options = {}) {
  return {
    afterInput: {
      html: components.render(
        'button',
        options.variant === 'reverse'
          ? buttonExamples['example reverse save button, small']
          : buttonExamples['example secondary save button, small']
      )
    }
  }
}

/**
 * Replace form group for each variant
 *
 * @returns {(variant: MacroExample) => MacroExample}
 */
function customVariant() {
  return (example) => {
    example = structuredClone(example)
    example.context ??= {}

    const { variant } = example.context
    example.context.formGroup = getFormGroup({ variant })

    return example
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
