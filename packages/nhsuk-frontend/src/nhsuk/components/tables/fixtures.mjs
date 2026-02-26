import { outdent } from 'outdent'

import { components } from '#lib'

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
  'with numeric data, sortable': {
    context: {
      caption: 'Childhood vaccination coverage',
      captionSize: 'm',
      head: [
        {
          text: 'Nation',
          attributes: {
            'aria-sort': 'ascending'
          }
        },
        {
          text: 'MMR',
          format: 'numeric',
          attributes: {
            'aria-sort': 'none'
          }
        },
        {
          text: '6-in-1',
          format: 'numeric',
          attributes: {
            'aria-sort': 'none'
          }
        },
        {
          text: 'Rotavirus',
          format: 'numeric',
          attributes: {
            'aria-sort': 'none'
          }
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
      head: [
        {
          text: 'Name',
          attributes: {
            'aria-sort': 'none'
          }
        },
        {
          text: 'NHS number',
          format: 'numeric'
        },
        {
          text: 'Next screening',
          attributes: {
            'aria-sort': 'ascending'
          }
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
            attributes: {
              'data-sort-value': '2027-01-04'
            }
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
            attributes: {
              'data-sort-value': '2027-03-15'
            }
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
            attributes: {
              'data-sort-value': '2026-06-22'
            }
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
            attributes: {
              'data-sort-value': '2027-09-08'
            }
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
            attributes: {
              'data-sort-value': '2026-11-30'
            }
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
            attributes: {
              'data-sort-value': '2028-02-17'
            }
          }
        ]
      ]
    }
  },
  'with names and times, sortable server-side': {
    context: {
      caption: 'Appointments',
      head: [
        {
          html: '<a href="#" class="">Time <svg width="22" height="22" focusable="false" aria-hidden="true" role="img" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 13.7L11.6 18.7C11.4 18.9 11.2 19 10.9 19C10.6 19 10.4 18.9 10.2 18.7L5.2 13.7C5.05557 13.5074 4.98545 13.2692 5.00252 13.0291C5.01958 12.789 5.12268 12.5631 5.29289 12.3929C5.4631 12.2227 5.689 12.1196 5.92911 12.1025C6.16922 12.0854 6.40743 12.1556 6.6 12.3L9.9 15.6V4C9.9 3.73478 10.0054 3.48043 10.1929 3.29289C10.3804 3.10536 10.6348 3 10.9 3C11.1652 3 11.4196 3.10536 11.6071 3.29289C11.7946 3.48043 11.9 3.73478 11.9 4V15.6L15.2 12.3C15.286 12.1854 15.3956 12.0906 15.5213 12.022C15.6471 11.9534 15.7862 11.9127 15.9291 11.9025C16.072 11.8924 16.2154 11.913 16.3497 11.9631C16.4839 12.0132 16.6058 12.0916 16.7071 12.1929C16.8084 12.2942 16.8868 12.4161 16.9369 12.5503C16.987 12.6845 17.0076 12.828 16.9975 12.9709C16.9873 13.1138 16.9466 13.2529 16.878 13.3787C16.8094 13.5044 16.7146 13.614 16.6 13.7Z" fill="currentColor"/></svg></a>',
          attributes: {
            'aria-sort': 'ascending'
          }
        },
        {
          html: '<a href="#">Name <svg width="22" height="22" focusable="false" aria-hidden="true" role="img" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 13.7L16.6 18.7C16.4 18.9 16.2 19 15.9 19C15.6 19 15.4 18.9 15.2 18.7L10.2 13.7C10.0556 13.5074 9.98545 13.2692 10.0025 13.0291C10.0196 12.789 10.1227 12.5631 10.2929 12.3929C10.4631 12.2227 10.689 12.1196 10.9291 12.1025C11.1692 12.0854 11.4074 12.1556 11.6 12.3L14.9 15.6V4C14.9 3.73478 15.0054 3.48043 15.1929 3.29289C15.3804 3.10536 15.6348 3 15.9 3C16.1652 3 16.4196 3.10536 16.6071 3.29289C16.7946 3.48043 16.9 3.73478 16.9 4V15.6L20.2 12.3C20.286 12.1854 20.3956 12.0906 20.5213 12.022C20.6471 11.9534 20.7862 11.9127 20.9291 11.9025C21.072 11.8924 21.2154 11.913 21.3497 11.9631C21.4839 12.0132 21.6058 12.0916 21.7071 12.1929C21.8084 12.2942 21.8868 12.4161 21.9369 12.5503C21.987 12.6845 22.0076 12.828 21.9975 12.9709C21.9873 13.1138 21.9466 13.2529 21.878 13.3787C21.8094 13.5044 21.7146 13.614 21.6 13.7Z" fill="currentColor"/><path d="M0.400001 8.3L5.4 3.3C5.6 3.1 5.8 3.00001 6.1 3.00001C6.4 3.00001 6.6 3.1 6.8 3.3L11.8 8.3C11.9444 8.49258 12.0145 8.73078 11.9975 8.97089C11.9804 9.211 11.8773 9.4369 11.7071 9.60711C11.5369 9.77732 11.311 9.88042 11.0709 9.89749C10.8308 9.91455 10.5926 9.84443 10.4 9.7L7.1 6.4L7.1 18C7.1 18.2652 6.99464 18.5196 6.80711 18.7071C6.61957 18.8946 6.36522 19 6.1 19C5.83478 19 5.58043 18.8946 5.39289 18.7071C5.20536 18.5196 5.1 18.2652 5.1 18L5.1 6.4L1.8 9.7C1.71404 9.81462 1.60445 9.90943 1.47866 9.97801C1.35286 10.0466 1.2138 10.0873 1.07089 10.0975C0.927978 10.1076 0.784553 10.087 0.650325 10.0369C0.516098 9.98677 0.394202 9.90842 0.292894 9.80711C0.191585 9.7058 0.113229 9.58391 0.0631299 9.44968C0.0130312 9.31545 -0.00763965 9.17203 0.00251678 9.02911C0.0126732 8.8862 0.05342 8.74714 0.121998 8.62135C0.190576 8.49556 0.285383 8.38597 0.400001 8.3Z" fill="currentColor"/></svg></a>',
          attributes: {
            'aria-sort': 'none'
          }
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
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
