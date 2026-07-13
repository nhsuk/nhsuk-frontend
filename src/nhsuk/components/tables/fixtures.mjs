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
  'with numeric data, sortable': {
    context: {
      caption: 'Childhood vaccination coverage',
      captionSize: 'm',
      sortable: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Nation',
          sortable: true,
          initialSortColumn: true,
          sortFirstDirection: 'ascending'
        },
        {
          text: 'MMR',
          format: 'numeric',
          sortable: true,
          sortFirstDirection: 'descending'
        },
        {
          text: '6-in-1',
          format: 'numeric',
          sortable: true,
          sortFirstDirection: 'descending'
        },
        {
          text: 'Rotavirus',
          format: 'numeric',
          sortable: true,
          sortFirstDirection: 'descending'
        }
      ],
      rows: [
        [
          {
            text: 'England'
          },
          {
            text: '83.7%',
            format: 'numeric'
          },
          {
            text: '92.8%',
            format: 'numeric'
          },
          {
            text: '88.8%',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Northern Ireland'
          },
          {
            text: '86.4%',
            format: 'numeric'
          },
          {
            text: '94.6%',
            format: 'numeric'
          },
          {
            text: '88.0%',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Scotland'
          },
          {
            text: '89.2%',
            format: 'numeric'
          },
          {
            text: '96.9%',
            format: 'numeric'
          },
          {
            text: '92.2%',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'Wales'
          },
          {
            text: '89.5%',
            format: 'numeric'
          },
          {
            text: '95.4%',
            format: 'numeric'
          },
          {
            text: '92.0%',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  'with names and dates, sortable': {
    context: {
      caption: 'Screening schedule',
      sortable: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Name',
          sortable: true
        },
        {
          text: 'NHS number',
          format: 'numeric'
        },
        {
          text: 'Next screening',
          sortable: true,
          initialSortColumn: true,
          sortFirstDirection: 'ascending'
        }
      ],
      rows: [
        [
          {
            text: 'Laura Stone'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 123 4567</span>',
            format: 'numeric'
          },
          {
            text: '4 January 2027',
            sortValue: '2027-01-04'
          }
        ],
        [
          {
            text: 'Michael Thompson'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 856 2341</span>',
            format: 'numeric'
          },
          {
            text: '15 March 2027',
            sortValue: '2027-03-15'
          }
        ],
        [
          {
            text: 'Sarah Louise Williams'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 512 7834</span>',
            format: 'numeric'
          },
          {
            text: '22 June 2026',
            sortValue: '2026-06-22'
          }
        ],
        [
          {
            text: 'David Chen'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 234 9876</span>',
            format: 'numeric'
          },
          {
            text: '8 September 2027',
            sortValue: '2027-09-08'
          }
        ],
        [
          {
            text: 'Emma Katie-Brown'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 678 4512</span>',
            format: 'numeric'
          },
          {
            text: '30 November 2026',
            sortValue: '2026-11-30'
          }
        ],
        [
          {
            text: 'Juan Martinez'
          },
          {
            html: '<span class="nhsuk-u-nowrap">999 345 1298</span>',
            format: 'numeric'
          },
          {
            text: '17 February 2028',
            sortValue: '2028-02-17'
          }
        ]
      ]
    },
    variants
  },
  'with names and times, sortable server-side': {
    context: {
      caption: 'Appointments',
      sortable: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Time',
          href: '#',
          sortable: true,
          initialSortColumn: true,
          sortFirstDirection: 'ascending'
        },
        {
          href: '#',
          text: 'Name',
          sortable: true
        },
        {
          text: 'Date of birth'
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
              Can be used to add a row of table header cells (<code>&lt;th&gt;</code>) at the top of the table component.
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
              If set to <code>true</code>, the first cell in each row will be a table header (<code>&lt;th&gt;</code>).
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
    }
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
  },
  'compact': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      compact: true,
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
        },
        {
          text: '% Increase',
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
          },
          {
            text: '2.56%',
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
          },
          {
            text: '2.60%',
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
          },
          {
            text: '2.59%',
            format: 'numeric'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'compact, sortable': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      compact: true,
      sortable: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Item'
        },
        {
          text: 'Current charge',
          format: 'numeric',
          sortable: true
        },
        {
          text: 'New charge',
          format: 'numeric',
          sortable: true
        },
        {
          text: '% Increase',
          format: 'numeric',
          sortable: true
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
          },
          {
            text: '2.56%',
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
          },
          {
            text: '2.60%',
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
          },
          {
            text: '2.59%',
            format: 'numeric'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'compact and responsive': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      compact: true,
      responsive: true,
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
        },
        {
          text: '% Increase',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            header: 'Item',
            text: '3-month'
          },
          {
            header: 'Current charge',
            text: '£31.25',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£32.05',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.56%',
            format: 'numeric'
          }
        ],
        [
          {
            header: 'Item',
            text: '12-month'
          },
          {
            header: 'Current charge',
            text: '£111.60',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£114.50',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.60%',
            format: 'numeric'
          }
        ],
        [
          {
            header: 'Item',
            text: 'HRT'
          },
          {
            header: 'Current charge',
            text: '£19.30',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£19.80',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.59%',
            format: 'numeric'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'compact and responsive, sortable': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      compact: true,
      responsive: true,
      sortable: true,
      firstCellIsHeader: true,
      head: [
        {
          text: 'Item'
        },
        {
          text: 'Current charge',
          format: 'numeric',
          sortable: true
        },
        {
          text: 'New charge',
          format: 'numeric',
          sortable: true
        },
        {
          text: '% Increase',
          format: 'numeric',
          sortable: true
        }
      ],
      rows: [
        [
          {
            header: 'Item',
            text: '3-month'
          },
          {
            header: 'Current charge',
            text: '£31.25',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£32.05',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.56%',
            format: 'numeric'
          }
        ],
        [
          {
            header: 'Item',
            text: '12-month'
          },
          {
            header: 'Current charge',
            text: '£111.60',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£114.50',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.60%',
            format: 'numeric'
          }
        ],
        [
          {
            header: 'Item',
            text: 'HRT'
          },
          {
            header: 'Current charge',
            text: '£19.30',
            format: 'numeric'
          },
          {
            header: 'New charge',
            text: '£19.80',
            format: 'numeric'
          },
          {
            header: '% Increase',
            text: '2.59%',
            format: 'numeric'
          }
        ]
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
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
