import { outdent } from 'outdent'

import { components } from '#lib'

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
    description: 'compact',
    context: {
      compact: true
    }
  },
  {
    description: 'striped',
    context: {
      striped: true
    }
  },
  {
    description: 'striped compact',
    context: {
      compact: true,
      striped: true
    }
  },
  {
    description: 'reverse',
    context: {
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  },
  {
    description: 'reverse compact',
    context: {
      compact: true,
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  },
  {
    description: 'reverse striped',
    context: {
      striped: true,
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  },
  {
    description: 'reverse striped compact',
    context: {
      compact: true,
      striped: true,
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
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 'm',
      firstCellIsHeader: true,
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
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with empty items': {
    context: {
      caption: 'Vaccinations given',
      captionSize: 'm',
      firstCellIsHeader: true,
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
      firstCellIsHeader: true,
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
      firstCellIsHeader: true,
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
            text: '3-month',
            classes: 'nhsuk-u-nowrap'
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
            text: '12-month',
            classes: 'nhsuk-u-nowrap'
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
    },
    variants
  },
  'with numeric data (full width, past day)': {
    context: {
      caption: 'Past day',
      head: [
        {
          text: 'Case manager'
        },
        {
          text: 'Cases opened',
          format: 'numeric'
        },
        {
          text: 'Cases closed',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'David Francis'
          },
          {
            text: '3',
            format: 'numeric'
          },
          {
            text: '0',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Paul Farmer'
          },
          {
            text: '1',
            format: 'numeric'
          },
          {
            text: '0',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Rita Patel'
          },
          {
            text: '2',
            format: 'numeric'
          },
          {
            text: '0',
            format: 'numeric'
          }
        ]
      ]
    },
    options: {
      width: 'full'
    }
  },
  'with numeric data (full width, past week)': {
    context: {
      caption: 'Past week',
      head: [
        {
          text: 'Case manager'
        },
        {
          text: 'Cases opened',
          format: 'numeric'
        },
        {
          text: 'Cases closed',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'David Francis'
          },
          {
            text: '24',
            format: 'numeric'
          },
          {
            text: '18',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Paul Farmer'
          },
          {
            text: '16',
            format: 'numeric'
          },
          {
            text: '20',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Rita Patel'
          },
          {
            text: '24',
            format: 'numeric'
          },
          {
            text: '27',
            format: 'numeric'
          }
        ]
      ]
    },
    options: {
      width: 'full'
    }
  },
  'with numeric data (full width, past month)': {
    context: {
      caption: 'Past month',
      head: [
        {
          text: 'Case manager'
        },
        {
          text: 'Cases opened',
          format: 'numeric'
        },
        {
          text: 'Cases closed',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'David Francis'
          },
          {
            text: '98',
            format: 'numeric'
          },
          {
            text: '95',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Paul Farmer'
          },
          {
            text: '122',
            format: 'numeric'
          },
          {
            text: '131',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Rita Patel'
          },
          {
            text: '126',
            format: 'numeric'
          },
          {
            text: '142',
            format: 'numeric'
          }
        ]
      ]
    },
    options: {
      width: 'full'
    }
  },
  'with numeric data (full width, past year)': {
    context: {
      caption: 'Past year',
      head: [
        {
          text: 'Case manager'
        },
        {
          text: 'Cases opened',
          format: 'numeric'
        },
        {
          text: 'Cases closed',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'David Francis'
          },
          {
            text: '1380',
            format: 'numeric'
          },
          {
            text: '1472',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Paul Farmer'
          },
          {
            text: '1129',
            format: 'numeric'
          },
          {
            text: '1083',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Rita Patel'
          },
          {
            text: '1539',
            format: 'numeric'
          },
          {
            text: '1265',
            format: 'numeric'
          }
        ]
      ]
    },
    options: {
      width: 'full'
    }
  },
  'responsive': {
    context: {
      caption: 'Ibuprofen syrup dosages for children',
      captionSize: 'm',
      responsive: true,
      firstCellIsHeader: true,
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
            text: '3 to 5 months (weighing more than 5kg)'
          },
          {
            text: '2.5ml'
          },
          {
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            text: '6 to 11 months'
          },
          {
            text: '2.5ml'
          },
          {
            text: 'Max 3 to 4 times in 24 hours'
          }
        ],
        [
          {
            text: '1 to 3 years'
          },
          {
            text: '5ml'
          },
          {
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            text: '4 to 6 years'
          },
          {
            text: '7.5ml'
          },
          {
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            text: '7 to 9 years'
          },
          {
            text: '10ml'
          },
          {
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            text: '10 to 11 years'
          },
          {
            text: '15ml'
          },
          {
            text: 'Max 3 times in 24 hours'
          }
        ],
        [
          {
            text: '12 to 17 years'
          },
          {
            text: '15ml to 20ml'
          },
          {
            text: 'Max 3 to 4 times in 24 hours'
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'responsive and custom HTML': {
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
            text: 'id'
          },
          {
            text: 'string'
          },
          {
            text: 'The ID of the table.'
          }
        ],
        [
          {
            text: 'rows'
          },
          {
            text: 'array'
          },
          {
            html: outdent`
              <strong>Required.</strong> The rows within the table component.
              <a href="#/macro-options">See macro options for rows</a>.
            `
          }
        ],
        [
          {
            text: 'head'
          },
          {
            text: 'array'
          },
          {
            html: outdent`
              Can be used to add a row of table header cells (<code>&lt;th&gt;</code>) at the top of the table component.
              <a href="#/macro-options">See macro options for head</a>.
            `
          }
        ],
        [
          {
            text: 'caption'
          },
          {
            text: 'string'
          },
          {
            text: 'Caption text.'
          }
        ],
        [
          {
            text: 'captionClasses'
          },
          {
            text: 'string'
          },
          {
            text: 'Classes for caption text size. Classes should correspond to the available typography heading classes.'
          }
        ],
        [
          {
            text: 'firstCellIsHeader'
          },
          {
            text: 'string'
          },
          {
            html: outdent`
              If set to <code>true</code>, the first cell in each row will be a table header (<code>&lt;th&gt;</code>).
            `
          }
        ],
        [
          {
            text: 'classes'
          },
          {
            text: 'string'
          },
          {
            text: 'Classes to add to the table container.'
          }
        ],
        [
          {
            text: 'attributes'
          },
          {
            text: 'object'
          },
          {
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
      firstCellIsHeader: true,
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
                colour: 'green'
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
                colour: 'grey'
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
      firstCellIsHeader: true,
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
    variants: [
      variants[0], // Regular variant
      variants[2] // Striped variant
    ]
  },
  'as a card (feature)': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        variant: 'feature'
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      firstCellIsHeader: true,
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
    variants: [
      variants[0], // Regular variant
      variants[2] // Striped variant
    ],
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'as a card (feature) responsive': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        variant: 'feature'
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      firstCellIsHeader: true,
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
    variants: [
      variants[0], // Regular variant
      variants[2] // Striped variant
    ]
  },
  'sortable': {
    context: {
      caption: 'Appointments',
      firstCellIsHeader: true,
      head: [
        {
          text: 'Time',
          sort: 'ascending'
        },
        {
          text: 'Name',
          sort: true
        },
        {
          text: 'Date of birth',
          classes: 'nhsuk-u-nowrap'
        }
      ],
      rows: [
        [
          {
            text: '11:00'
          },
          {
            text: 'Laura Stone'
          },
          {
            text: '4 January 1986'
          }
        ],
        [
          {
            text: '11:30'
          },
          {
            text: 'Emma Katie-Brown'
          },
          {
            text: '7 February 1976'
          }
        ],
        [
          {
            text: '13:10'
          },
          {
            text: 'David Chen'
          },
          {
            text: '19 March 1981'
          }
        ],
        [
          {
            text: '13:40'
          },
          {
            text: 'Michael Thompson'
          },
          {
            text: '6 December 1964'
          }
        ],
        [
          {
            text: '14:20'
          },
          {
            text: 'Juan Martinez'
          },
          {
            text: '18 April 1975'
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'sortable responsive': {
    context: {
      caption: 'Appointments',
      responsive: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Time',
          sort: 'ascending'
        },
        {
          text: 'Name',
          sort: true
        },
        {
          text: 'Date of birth',
          classes: 'nhsuk-u-nowrap'
        }
      ],
      rows: [
        [
          {
            text: '11:00'
          },
          {
            text: 'Laura Stone'
          },
          {
            text: '4 January 1986'
          }
        ],
        [
          {
            text: '11:30'
          },
          {
            text: 'Emma Katie-Brown'
          },
          {
            text: '7 February 1976'
          }
        ],
        [
          {
            text: '13:10'
          },
          {
            text: 'David Chen'
          },
          {
            text: '19 March 1981'
          }
        ],
        [
          {
            text: '13:40'
          },
          {
            text: 'Michael Thompson'
          },
          {
            text: '6 December 1964'
          }
        ],
        [
          {
            text: '14:20'
          },
          {
            text: 'Juan Martinez'
          },
          {
            text: '18 April 1975'
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'sortable server-side': {
    context: {
      caption: 'Appointments',
      firstCellIsHeader: true,
      head: [
        {
          href: '#',
          text: 'Time',
          sort: 'ascending'
        },
        {
          href: '#',
          text: 'Name',
          sort: true
        },
        {
          text: 'Date of birth',
          classes: 'nhsuk-u-nowrap'
        }
      ],
      rows: [
        [
          {
            text: '11:00'
          },
          {
            text: 'Laura Stone'
          },
          {
            text: '4 January 1986'
          }
        ],
        [
          {
            text: '11:30'
          },
          {
            text: 'Emma Katie-Brown'
          },
          {
            text: '7 February 1976'
          }
        ],
        [
          {
            text: '13:10'
          },
          {
            text: 'David Chen'
          },
          {
            text: '19 March 1981'
          }
        ],
        [
          {
            text: '13:40'
          },
          {
            text: 'Michael Thompson'
          },
          {
            text: '6 December 1964'
          }
        ],
        [
          {
            text: '14:20'
          },
          {
            text: 'Juan Martinez'
          },
          {
            text: '18 April 1975'
          }
        ]
      ]
    },
    variants
  },
  'sortable with numeric data': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      firstCellIsHeader: true,
      head: [
        {
          text: 'Item'
        },
        {
          text: 'Current charge',
          format: 'numeric',
          sort: true,
          sortNext: 'descending'
        },
        {
          text: 'New charge',
          format: 'numeric',
          sort: true,
          sortNext: 'descending'
        }
      ],
      rows: [
        [
          {
            text: '3-month',
            classes: 'nhsuk-u-nowrap'
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
            text: '12-month',
            classes: 'nhsuk-u-nowrap'
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
  'sortable with numeric data and sort values': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      firstCellIsHeader: true,
      head: [
        {
          text: 'Item',
          sort: 'ascending'
        },
        {
          text: 'Current charge',
          format: 'numeric',
          sort: true,
          sortNext: 'descending'
        },
        {
          text: 'New charge',
          format: 'numeric',
          sort: true,
          sortNext: 'descending'
        }
      ],
      rows: [
        [
          {
            text: '3-month',
            sortValue: '3',
            classes: 'nhsuk-u-nowrap'
          },
          {
            text: '£31.25',
            format: 'numeric',
            sortValue: '31.25'
          },
          {
            text: '£32.05',
            format: 'numeric',
            sortValue: '32.05'
          }
        ],
        [
          {
            text: '12-month',
            sortValue: '12',
            classes: 'nhsuk-u-nowrap'
          },
          {
            text: '£111.60',
            format: 'numeric',
            sortValue: '111.60'
          },
          {
            text: '£114.50',
            format: 'numeric',
            sortValue: '114.50'
          }
        ],
        [
          {
            text: 'HRT',
            sortValue: '100'
          },
          {
            text: '£19.30',
            format: 'numeric',
            sortValue: '19.30'
          },
          {
            text: '£19.80',
            format: 'numeric',
            sortValue: '19.80'
          }
        ]
      ]
    }
  },
  'sortable with sort values': {
    context: {
      caption: 'Appointments',
      firstCellIsHeader: true,
      head: [
        {
          text: 'Time',
          sort: 'ascending'
        },
        {
          text: 'Name',
          sort: true
        },
        {
          text: 'Date of birth',
          sort: true,
          sortNext: 'descending'
        }
      ],
      rows: [
        [
          {
            text: '11:00am',
            sortValue: '11:00'
          },
          {
            text: 'Laura Stone',
            sortValue: 'Stone, Laura'
          },
          {
            text: '4 January 1986',
            sortValue: '1986-01-04'
          }
        ],
        [
          {
            text: '11:30am',
            sortValue: '11:30'
          },
          {
            text: 'Emma Katie-Brown',
            sortValue: 'Katie-Brown, Emma'
          },
          {
            text: '7 February 1976',
            sortValue: '1976-02-07'
          }
        ],
        [
          {
            text: '1:10pm',
            sortValue: '13:10'
          },
          {
            text: 'David Chen',
            sortValue: 'Chen, David'
          },
          {
            text: '19 March 1981',
            sortValue: '1981-03-19'
          }
        ],
        [
          {
            text: '1:40pm',
            sortValue: '13:40'
          },
          {
            text: 'Michael Thompson',
            sortValue: 'Thompson, Michael'
          },
          {
            text: '6 December 1964',
            sortValue: '1964-12-06'
          }
        ],
        [
          {
            text: '2:20pm',
            sortValue: '14:20'
          },
          {
            text: 'Juan Martinez',
            sortValue: 'Martinez, Juan'
          },
          {
            text: '18 April 1975',
            sortValue: '1975-04-18'
          }
        ]
      ]
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
