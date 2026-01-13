import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 'm',
      head: [
        {
          text: 'Skin symptoms'
        },
        {
          text: 'Possible cause'
        }
      ],
      rows: [
        [
          {
            text: 'Blisters on lips or around the mouth'
          },
          {
            text: 'Cold sores'
          }
        ],
        [
          {
            text: 'Itchy, dry, cracked, sore'
          },
          {
            text: 'Eczema'
          }
        ],
        [
          {
            text: 'Itchy blisters'
          },
          {
            text: 'Shingles, chickenpox'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with empty items': {
    context: {
      caption: 'Vaccinations given',
      captionSize: 'm',
      head: [
        {
          text: 'Date'
        },
        {
          text: 'Vaccine'
        },
        false
      ],
      rows: [
        [
          {
            text: '10 July 2024'
          },
          {
            text: 'RSV'
          },
          false
        ],
        false
      ]
    }
  },
  'with missing data': {
    context: {
      caption: 'Vaccinations given',
      captionSize: 'm',
      head: [
        {
          text: 'Date'
        },
        {
          text: 'Vaccine'
        },
        {
          text: 'Product'
        }
      ],
      rows: [
        [
          {
            text: '10 July 2024'
          },
          {
            text: 'RSV'
          },
          {
            text: 'Abrysvo'
          }
        ],
        [
          {
            text: '6 September 2023'
          },
          {
            text: 'Flu'
          },
          {
            text: 'No data',
            classes: 'nhsuk-u-secondary-text-colour'
          }
        ]
      ]
    }
  },
  'with numeric data': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      head: [
        {
          text: 'Item'
        },
        {
          text: 'Current charge',
          format: 'numeric'
        },
        {
          text: 'New charge',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: '3-month'
          },
          {
            text: '£31.25',
            format: 'numeric'
          },
          {
            text: '£32.05',
            format: 'numeric'
          }
        ],
        [
          {
            text: '12-month'
          },
          {
            text: '£111.60',
            format: 'numeric'
          },
          {
            text: '£114.50',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'HRT'
          },
          {
            text: '£19.30',
            format: 'numeric'
          },
          {
            text: '£19.80',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  'with responsive layout': {
    context: {
      caption: 'Ibuprofen syrup dosages for children',
      captionSize: 'm',
      responsive: true,
      head: [
        {
          text: 'Age',
          classes: 'nhsuk-u-width-one-half'
        },
        {
          text: 'How much?',
          classes: 'nhsuk-u-width-one-quarter'
        },
        {
          text: 'How often?',
          classes: 'nhsuk-u-width-one-quarter'
        }
      ],
      rows: [
        [
          {
            header: 'Age',
            text: '3 to 5 months (weighing more than 5kg)'
          },
          {
            header: 'How much?',
            text: '2.5ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '6 to 11 months'
          },
          {
            header: 'How much?',
            text: '2.5ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 to 4 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '1 to 3 years'
          },
          {
            header: 'How much?',
            text: '5ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '4 to 6 years'
          },
          {
            header: 'How much?',
            text: '7.5ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '7 to 9 years'
          },
          {
            header: 'How much?',
            text: '10ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '10 to 11 years'
          },
          {
            header: 'How much?',
            text: '15ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            header: 'Age',
            text: '12 to 17 years'
          },
          {
            header: 'How much?',
            text: '15ml to 20ml'
          },
          {
            header: 'How often?',
            text: 'Max 3 to 4 times in 24 hours'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with responsive layout and custom HTML': {
    context: {
      caption: 'Nunjucks macro options',
      firstCellIsHeader: true,
      responsive: true,
      head: [
        {
          text: 'Name'
        },
        {
          text: 'Type'
        },
        {
          text: 'Description'
        }
      ],
      rows: [
        [
          {
            header: 'Name',
            text: 'id'
          },
          {
            header: 'Type',
            text: 'string'
          },
          {
            header: 'Description',
            text: 'The ID of the table.'
          }
        ],
        [
          {
            header: 'Name',
            text: 'rows'
          },
          {
            header: 'Type',
            text: 'array'
          },
          {
            header: 'Description',
            html: outdent`
              <strong>Required.</strong> The rows within the table component.
              <a href="#/macro-options">See macro options for rows</a>.
            `
          }
        ],
        [
          {
            header: 'Name',
            text: 'head'
          },
          {
            header: 'Type',
            text: 'array'
          },
          {
            header: 'Description',
            html: outdent`
              Can be used to add a row of table header cells (<code class="app-code">&lt;th&gt;</code>) at the top of the table component.
              <a href="#/macro-options">See macro options for head</a>.
            `
          }
        ],
        [
          {
            header: 'Name',
            text: 'caption'
          },
          {
            header: 'Type',
            text: 'string'
          },
          {
            header: 'Description',
            text: 'Caption text.'
          }
        ],
        [
          {
            header: 'Name',
            text: 'captionClasses'
          },
          {
            header: 'Type',
            text: 'string'
          },
          {
            header: 'Description',
            text: 'Classes for caption text size. Classes should correspond to the available typography heading classes.'
          }
        ],
        [
          {
            header: 'Name',
            text: 'firstCellIsHeader'
          },
          {
            header: 'Type',
            text: 'string'
          },
          {
            header: 'Description',
            html: outdent`
              If set to <code class="app-code">true</code>, the first cell in each row will be a table header (<code class="app-code">&lt;th&gt;</code>).
            `
          }
        ],
        [
          {
            header: 'Name',
            text: 'classes'
          },
          {
            header: 'Type',
            text: 'string'
          },
          {
            header: 'Description',
            text: 'Classes to add to the table container.'
          }
        ],
        [
          {
            header: 'Name',
            text: 'attributes'
          },
          {
            header: 'Type',
            text: 'object'
          },
          {
            header: 'Description',
            text: '	HTML attributes (for example data attributes) to add to the table container.'
          }
        ]
      ]
    }
  },
  'with word breaks': {
    context: {
      caption: 'Users',
      captionSize: 'm',
      head: [
        {
          text: 'Name'
        },
        {
          text: 'Email address'
        },
        {
          text: 'Status'
        },
        {
          html: outdent`
            <span class="nhsuk-u-visually-hidden">Actions</span>
          `
        }
      ],
      rows: [
        [
          {
            text: 'Stephanie Meyer',
            classes: 'nhsuk-u-text-break-word'
          },
          {
            text: 'stephanie.meyer9@test.com',
            classes: 'nhsuk-u-text-break-word'
          },
          {
            html: components.render('tag', {
              context: {
                text: 'Active',
                classes: 'nhsuk-tag--green'
              }
            })
          }
        ],
        [
          {
            text: 'Aleksandrina Featherstonehaugh-Whitehead',
            classes: 'nhsuk-u-text-break-word'
          },
          {
            text: 'aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com',
            classes: 'nhsuk-u-text-break-word'
          },
          {
            html: components.render('tag', {
              context: {
                text: 'Inactive',
                classes: 'nhsuk-tag--grey'
              }
            })
          }
        ]
      ]
    }
  },
  'with first cell as header': {
    context: {
      firstCellIsHeader: true,
      head: [
        {
          text: 'Day of the week'
        },
        {
          text: 'Opening hours'
        }
      ],
      rows: [
        [
          {
            text: 'Monday'
          },
          {
            text: '9am to 6pm'
          }
        ],
        [
          {
            text: 'Tuesday'
          },
          {
            text: '9am to 6pm'
          }
        ],
        [
          {
            text: 'Wednesday'
          },
          {
            text: '9am to 6pm'
          }
        ],
        [
          {
            text: 'Thursday'
          },
          {
            text: '9am to 6pm'
          }
        ],
        [
          {
            text: 'Friday'
          },
          {
            text: '9am to 6pm'
          }
        ],
        [
          {
            text: 'Saturday'
          },
          {
            text: '9am to 1pm'
          }
        ],
        [
          {
            text: 'Sunday'
          },
          {
            text: 'Closed'
          }
        ]
      ]
    }
  },
  'as a card': {
    context: {
      card: true,
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 'm',
      head: [
        {
          text: 'Skin symptoms'
        },
        {
          text: 'Possible cause'
        }
      ],
      rows: [
        [
          {
            text: 'Blisters on lips or around the mouth'
          },
          {
            text: 'Cold sores'
          }
        ],
        [
          {
            text: 'Itchy, dry, cracked, sore'
          },
          {
            text: 'Eczema'
          }
        ],
        [
          {
            text: 'Itchy blisters'
          },
          {
            text: 'Shingles, chickenpox'
          }
        ]
      ]
    }
  },
  'as a card (feature)': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        feature: true
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      head: [
        {
          text: 'Skin symptoms'
        },
        {
          text: 'Possible cause'
        }
      ],
      rows: [
        [
          {
            text: 'Blisters on lips or around the mouth'
          },
          {
            text: 'Cold sores'
          }
        ],
        [
          {
            text: 'Itchy, dry, cracked, sore'
          },
          {
            text: 'Eczema'
          }
        ],
        [
          {
            text: 'Itchy blisters'
          },
          {
            text: 'Shingles, chickenpox'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'as a card (feature) with responsive layout': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        feature: true
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      responsive: true,
      head: [
        {
          text: 'Skin symptoms'
        },
        {
          text: 'Possible cause'
        }
      ],
      rows: [
        [
          {
            header: 'Skin problems',
            text: 'Blisters on lips or around the mouth'
          },
          {
            header: 'Possible cause',
            text: 'Cold sores'
          }
        ],
        [
          {
            header: 'Skin problems',
            text: 'Itchy, dry, cracked, sore'
          },
          {
            header: 'Possible cause',
            text: 'Eczema'
          }
        ],
        [
          {
            header: 'Skin problems',
            text: 'Itchy blisters'
          },
          {
            header: 'Possible cause',
            text: 'Shingles, chickenpox'
          }
        ]
      ]
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
