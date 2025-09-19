import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Tables'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the table.'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'Array of table rows and cells.',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored.'
      },
      header: {
        type: 'string',
        required: false,
        description: 'Header text for cells in responsive table rows only.'
      },
      format: {
        type: 'string',
        required: false,
        description:
          "Specify format of a cell. Currently we only use `'numeric'`."
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell extends.'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell extends.'
      }
    }
  },
  head: {
    type: 'array',
    required: false,
    description: 'Array of table head cells.',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored.'
      },
      format: {
        type: 'string',
        required: false,
        description:
          "Specify format of a cell. Currently we only use `'numeric'`."
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell extends.'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell extends.'
      }
    }
  },
  heading: {
    type: 'string',
    required: false,
    description:
      'Heading/label of the panel if the panel argument is set to true.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `3`.'
  },
  caption: {
    type: 'string',
    required: false,
    description: 'Caption text.'
  },
  captionClasses: {
    type: 'string',
    required: false,
    description:
      "Classes for caption text size. Classes to add to the table caption, for example `'nhsuk-table__caption--l'`."
  },
  firstCellIsHeader: {
    type: 'boolean',
    required: false,
    description:
      'If set to true, first cell in table row will be a TH instead of a TD.'
  },
  responsive: {
    type: 'boolean',
    required: false,
    description: 'If set to true, responsive table classes will be applied.'
  },
  tableClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the table container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the table container.'
  }
}

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      caption: 'Skin symptoms and possible causes',
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
  'with missing data': {
    context: {
      caption: 'Vaccinations given',
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
  'with word breaks': {
    context: {
      caption: 'Users',
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
            text: 'Active'
          },
          {
            html: outdent`
              <a href="#">Change <span class="nhsuk-u-visually-hidden">status for Stephanie Meyer</span></a>
            `
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
            text: 'Inactive'
          },
          {
            html: outdent`
              <a href="#">Change <span class="nhsuk-u-visually-hidden">status for Aleksandrina Featherstonehaugh-Whitehead</span></a>
            `
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
  'as a panel': {
    context: {
      heading: 'Conditions similar to impetigo',
      caption: 'Other possible causes of your symptoms',
      captionClasses: 'nhsuk-u-visually-hidden',
      panel: true,
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
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
