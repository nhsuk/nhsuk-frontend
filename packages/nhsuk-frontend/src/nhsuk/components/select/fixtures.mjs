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
  'with search': {
    context: {
      label: {
        text: 'Choose a fruit',
        isPageHeading: true
      },
      id: 'with-search',
      name: 'example',
      items: [
        { text: 'Choose fruit', value: '' },
        { text: 'Apple', value: 'apple' },
        { text: 'Apricot', value: 'apricot' },
        { text: 'Avocado', value: 'avocado' },
        { text: 'Banana', value: 'banana' },
        { text: 'Blackberry', value: 'blackberry' },
        { text: 'Blueberry', value: 'blueberry' },
        { text: 'Cherry', value: 'cherry' },
        { text: 'Coconut', value: 'coconut' },
        { text: 'Cranberry', value: 'cranberry' },
        { text: 'Date', value: 'date' },
        { text: 'Dragon fruit', value: 'dragon-fruit' },
        { text: 'Elderberry', value: 'elderberry' },
        { text: 'Fig', value: 'fig' },
        { text: 'Grape', value: 'grape' },
        { text: 'Grapefruit', value: 'grapefruit' },
        { text: 'Guava', value: 'guava' },
        { text: 'Kiwi', value: 'kiwi' },
        { text: 'Lemon', value: 'lemon' },
        { text: 'Lime', value: 'lime' },
        { text: 'Mango', value: 'mango' },
        { text: 'Melon', value: 'melon' },
        { text: 'Orange', value: 'orange' },
        { text: 'Papaya', value: 'papaya' },
        { text: 'Peach', value: 'peach' },
        { text: 'Pear', value: 'pear' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Plum', value: 'plum' },
        { text: 'Pomegranate', value: 'pomegranate' },
        { text: 'Raspberry', value: 'raspberry' },
        { text: 'Strawberry', value: 'strawberry' },
        { text: 'Tangerine', value: 'tangerine' },
        { text: 'Watermelon', value: 'watermelon' }
      ],
      search: true
    }
  },
  'with search with option hints': {
    context: {
      label: {
        text: 'Choose a bone',
        isPageHeading: true
      },
      id: 'with-search-hints',
      name: 'example',
      items: [
        { text: 'Choose bone', value: '' },
        { text: 'Ankle bones', hintText: 'tarsals' },
        { text: 'Calf bone', hintText: 'fibula' },
        { text: 'Foot bones', hintText: 'metatarsals' },
        { text: 'Heel bone', hintText: 'calcaneus' },
        { text: 'Kneecap', hintText: 'patella' },
        { text: 'Shin bone', hintText: 'tibia' },
        { text: 'Thigh bone', hintText: 'femur' },
        { text: 'Toe bones', hintText: 'phalanges' }
      ],
      search: true
    }
  },
  'with search with option synonyms': {
    context: {
      label: {
        text: 'Choose a medical condition',
        isPageHeading: true
      },
      id: 'with-search-synonyms',
      name: 'example',
      items: [
        {
          text: 'Choose a medical condition',
          value: ''
        },
        {
          text: 'Asthma',
          synonyms: ['reactive airway disease', 'bronchial asthma']
        },
        {
          text: 'Cystitis',
          synonyms: ['urinary tract infection', 'UTI', 'bladder infection']
        },
        {
          text: 'Diabetes',
          synonyms: ['diabetes mellitus', 'high blood sugar']
        },
        {
          text: 'Gastroenteritis',
          synonyms: ['stomach flu', 'food poisoning']
        },
        {
          text: 'Hypertension',
          synonyms: ['high blood pressure', 'HTN', 'elevated blood pressure']
        },
        {
          text: 'Myocardial infarction',
          synonyms: ['heart attack', 'MI', 'coronary thrombosis']
        },
        {
          text: 'Osteoarthritis',
          synonyms: ['degenerative joint disease', 'arthritis']
        },
        {
          text: 'Pneumonia',
          synonyms: ['lung infection', 'chest infection']
        },
        {
          text: 'Stroke',
          synonyms: ['brain attack', 'CVA', 'cerebrovascular accident']
        }
      ],
      search: true
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
  },
  'to configure in JavaScript': {
    context: {
      label: {
        text: 'Sort by?',
        size: 'l',
        isPageHeading: true
      },
      id: 'to-configure-in-javascript',
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
    options: {
      hidden: true
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
