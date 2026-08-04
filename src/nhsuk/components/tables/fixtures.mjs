import { outdent } from "outdent"

import { components } from "#lib"

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
    description: "compact",
    context: {
      compact: true
    }
  },
  {
    description: "striped",
    context: {
      striped: true
    }
  },
  {
    description: "striped compact",
    context: {
      compact: true,
      striped: true
    }
  },
  {
    description: "responsive",
    context: {
      responsive: true
    }
  },
  {
    description: "responsive compact",
    context: {
      compact: true,
      responsive: true
    }
  },
  {
    description: "responsive striped",
    context: {
      responsive: true,
      striped: true
    }
  },
  {
    description: "responsive striped compact",
    context: {
      compact: true,
      responsive: true,
      striped: true
    }
  },
  {
    description: "reverse",
    context: {
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "reverse compact",
    context: {
      compact: true,
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "reverse striped",
    context: {
      striped: true,
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  {
    description: "reverse striped compact",
    context: {
      compact: true,
      striped: true,
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      caption: "Impetigo can look similar to other skin conditions",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Skin symptoms"
        },
        {
          text: "Possible cause"
        }
      ],
      rows: [
        [
          {
            text: "Blisters on lips or around the mouth"
          },
          {
            text: "Cold sores"
          }
        ],
        [
          {
            text: "Itchy, dry, cracked, sore"
          },
          {
            text: "Eczema"
          }
        ],
        [
          {
            text: "Itchy blisters"
          },
          {
            text: "Shingles, chickenpox"
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with column widths": {
    context: {
      caption: "Ibuprofen syrup dosages for children",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Age",
          width: "one-third"
        },
        {
          text: "How much?",
          width: "one-quarter"
        },
        {
          text: "How often?"
        }
      ],
      rows: [
        [
          {
            html: '3 to 5 months <span class="nhsuk-u-font-weight-normal">(weighing more than 5kg)</span>'
          },
          {
            text: "2.5ml"
          },
          {
            text: "Max 3 times in 24 hours"
          }
        ],
        [
          {
            text: "6 to 11 months"
          },
          {
            text: "2.5ml"
          },
          {
            text: "Max 3 to 4 times in 24 hours"
          }
        ],
        [
          {
            text: "1 to 3 years"
          },
          {
            text: "5ml"
          },
          {
            text: "Max 3 times in 24 hours"
          }
        ],
        [
          {
            text: "4 to 6 years"
          },
          {
            text: "7.5ml"
          },
          {
            text: "Max 3 times in 24 hours"
          }
        ],
        [
          {
            text: "7 to 9 years"
          },
          {
            text: "10ml"
          },
          {
            text: "Max 3 times in 24 hours"
          }
        ],
        [
          {
            text: "10 to 11 years"
          },
          {
            text: "15ml"
          },
          {
            text: "Max 3 times in 24 hours"
          }
        ],
        [
          {
            text: "12 to 17 years"
          },
          {
            text: "15ml to 20ml"
          },
          {
            text: "Max 3 to 4 times in 24 hours"
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with custom HTML": {
    context: {
      caption: "Nunjucks macro options",
      firstCellIsHeader: true,
      head: [
        {
          text: "Name"
        },
        {
          text: "Type"
        },
        {
          text: "Description"
        }
      ],
      rows: [
        [
          {
            text: "id"
          },
          {
            text: "string"
          },
          {
            text: "The ID of the table."
          }
        ],
        [
          {
            text: "rows"
          },
          {
            text: "array"
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
            text: "head"
          },
          {
            text: "array"
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
            text: "caption"
          },
          {
            text: "string"
          },
          {
            text: "Caption text."
          }
        ],
        [
          {
            text: "captionClasses"
          },
          {
            text: "string"
          },
          {
            text: "Classes for caption text size. Classes should correspond to the available typography heading classes."
          }
        ],
        [
          {
            text: "firstCellIsHeader"
          },
          {
            text: "string"
          },
          {
            html: outdent`
              If set to <code>true</code>, the first cell in each row will be a table header (<code>&lt;th&gt;</code>).
            `
          }
        ],
        [
          {
            text: "classes"
          },
          {
            text: "string"
          },
          {
            text: "Classes to add to the table container."
          }
        ],
        [
          {
            text: "attributes"
          },
          {
            text: "object"
          },
          {
            text: "	HTML attributes (for example data attributes) to add to the table container."
          }
        ]
      ]
    }
  },
  "with first cell as header": {
    context: {
      firstCellIsHeader: true,
      head: [
        {
          text: "Day of the week"
        },
        {
          text: "Opening hours"
        }
      ],
      rows: [
        [
          {
            text: "Monday"
          },
          {
            text: "9am to 6pm"
          }
        ],
        [
          {
            text: "Tuesday"
          },
          {
            text: "9am to 6pm"
          }
        ],
        [
          {
            text: "Wednesday"
          },
          {
            text: "9am to 6pm"
          }
        ],
        [
          {
            text: "Thursday"
          },
          {
            text: "9am to 6pm"
          }
        ],
        [
          {
            text: "Friday"
          },
          {
            text: "9am to 6pm"
          }
        ],
        [
          {
            text: "Saturday"
          },
          {
            text: "9am to 1pm"
          }
        ],
        [
          {
            text: "Sunday"
          },
          {
            text: "Closed"
          }
        ]
      ]
    }
  },
  "with empty items": {
    context: {
      caption: "Vaccinations given",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Date"
        },
        {
          text: "Vaccine"
        },
        false
      ],
      rows: [
        [
          {
            text: "10 July 2024"
          },
          {
            text: "RSV"
          },
          false
        ],
        false
      ]
    }
  },
  "with missing data": {
    context: {
      caption: "Vaccinations given",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Date"
        },
        {
          text: "Vaccine"
        },
        {
          text: "Product"
        }
      ],
      rows: [
        [
          {
            text: "10 July 2024"
          },
          {
            text: "RSV"
          },
          {
            text: "Abrysvo"
          }
        ],
        [
          {
            text: "6 September 2023"
          },
          {
            text: "Flu"
          },
          {
            text: "No data",
            classes: "nhsuk-u-secondary-text-colour"
          }
        ]
      ]
    }
  },
  "with numeric format": {
    context: {
      caption: "Prescription prepayment certificate (PPC) charges",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Item"
        },
        {
          text: "Current charge",
          format: "numeric"
        },
        {
          text: "New charge",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "3-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£31.25"
          },
          {
            text: "£32.05"
          }
        ],
        [
          {
            text: "12-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£111.60"
          },
          {
            text: "£114.50"
          }
        ],
        [
          {
            text: "HRT"
          },
          {
            text: "£19.30"
          },
          {
            text: "£19.80"
          }
        ]
      ]
    },
    variants
  },
  "with numeric format and missing data": {
    context: {
      caption: "Prescription prepayment certificate (PPC) charges",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Item"
        },
        {
          text: "Current charge",
          format: "numeric"
        },
        {
          text: "New charge",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "3-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£31.25"
          },
          {
            text: "£32.05"
          }
        ],
        [
          {
            text: "12-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£111.60"
          },
          {
            text: "No data",
            format: "string",
            classes: "nhsuk-u-secondary-text-colour"
          }
        ],
        [
          {
            text: "HRT"
          },
          {
            text: "£19.30"
          },
          {
            text: "£19.80"
          }
        ]
      ]
    },
    variants
  },
  "with numeric format (full width, past day)": {
    context: {
      caption: "Past day",
      head: [
        {
          text: "Case manager"
        },
        {
          text: "Cases opened",
          format: "numeric"
        },
        {
          text: "Cases closed",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "3"
          },
          {
            text: "0"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "1"
          },
          {
            text: "0"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "2"
          },
          {
            text: "0"
          }
        ]
      ]
    },
    options: {
      width: "full"
    }
  },
  "with numeric format (full width, past week)": {
    context: {
      caption: "Past week",
      head: [
        {
          text: "Case manager"
        },
        {
          text: "Cases opened",
          format: "numeric"
        },
        {
          text: "Cases closed",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "24"
          },
          {
            text: "18"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "16"
          },
          {
            text: "20"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "24"
          },
          {
            text: "27"
          }
        ]
      ]
    },
    options: {
      width: "full"
    }
  },
  "with numeric format (full width, past month)": {
    context: {
      caption: "Past month",
      head: [
        {
          text: "Case manager"
        },
        {
          text: "Cases opened",
          format: "numeric"
        },
        {
          text: "Cases closed",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "98"
          },
          {
            text: "95"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "122"
          },
          {
            text: "131"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "126"
          },
          {
            text: "142"
          }
        ]
      ]
    },
    options: {
      width: "full"
    }
  },
  "with numeric format (full width, past year)": {
    context: {
      caption: "Past year",
      head: [
        {
          text: "Case manager"
        },
        {
          text: "Cases opened",
          format: "numeric"
        },
        {
          text: "Cases closed",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "1380"
          },
          {
            text: "1472"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "1129"
          },
          {
            text: "1083"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "1539"
          },
          {
            text: "1265"
          }
        ]
      ]
    },
    options: {
      width: "full"
    }
  },
  "with word breaks": {
    context: {
      caption: "Users",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Name"
        },
        {
          text: "Email address"
        },
        {
          text: "Status"
        },
        {
          visuallyHiddenText: "Actions"
        }
      ],
      rows: [
        [
          {
            text: "Stephanie Meyer",
            classes: "nhsuk-u-text-break-word"
          },
          {
            text: "stephanie.meyer9@test.com",
            classes: "nhsuk-u-text-break-word"
          },
          {
            html: components.render("tag", {
              context: {
                text: "Active",
                colour: "green"
              }
            })
          }
        ],
        [
          {
            text: "Aleksandrina Featherstonehaugh-Whitehead",
            classes: "nhsuk-u-text-break-word"
          },
          {
            text: "aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com",
            classes: "nhsuk-u-text-break-word"
          },
          {
            html: components.render("tag", {
              context: {
                text: "Inactive",
                colour: "grey"
              }
            })
          }
        ]
      ]
    }
  },
  "without border": {
    context: {
      caption: "Cases per manager",
      captionClasses: "nhsuk-u-visually-hidden",
      border: false,
      head: [
        {
          text: "Manager"
        },
        {
          text: "Cases",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "1380"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "1129"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "24"
          }
        ]
      ]
    },
    variants
  },
  "without last row border": {
    context: {
      caption: "Cases per manager",
      captionClasses: "nhsuk-u-visually-hidden",
      lastRowBorder: false,
      head: [
        {
          text: "Manager"
        },
        {
          text: "Cases",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "David Francis"
          },
          {
            text: "1380"
          }
        ],
        [
          {
            text: "Paul Farmer"
          },
          {
            text: "1129"
          }
        ],
        [
          {
            text: "Rita Patel"
          },
          {
            text: "24"
          }
        ]
      ]
    },
    variants
  },
  "as a card": {
    context: {
      card: true,
      caption: "Impetigo can look similar to other skin conditions",
      captionSize: "m",
      firstCellIsHeader: true,
      lastRowBorder: false,
      head: [
        {
          text: "Skin symptoms"
        },
        {
          text: "Possible cause"
        }
      ],
      rows: [
        [
          {
            text: "Blisters on lips or around the mouth"
          },
          {
            text: "Cold sores"
          }
        ],
        [
          {
            text: "Itchy, dry, cracked, sore"
          },
          {
            text: "Eczema"
          }
        ],
        [
          {
            text: "Itchy blisters"
          },
          {
            text: "Shingles, chickenpox"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[4] // Responsive variant
    ]
  },
  "as a card (feature)": {
    context: {
      card: {
        heading: "Other conditions like impetigo",
        headingSize: "m",
        variant: "feature"
      },
      caption: "Impetigo can look similar to other skin conditions",
      captionSize: "s",
      firstCellIsHeader: true,
      lastRowBorder: false,
      head: [
        {
          text: "Skin symptoms"
        },
        {
          text: "Possible cause"
        }
      ],
      rows: [
        [
          {
            text: "Blisters on lips or around the mouth"
          },
          {
            text: "Cold sores"
          }
        ],
        [
          {
            text: "Itchy, dry, cracked, sore"
          },
          {
            text: "Eczema"
          }
        ],
        [
          {
            text: "Itchy blisters"
          },
          {
            text: "Shingles, chickenpox"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[4] // Responsive variant
    ],
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "scrolling": {
    context: {
      caption: "Childhood vaccination coverage by nation",
      captionId: "scrolling-caption",
      captionSize: "m",
      firstCellIsHeader: true,
      scroll: true,
      head: [
        {
          text: "Nation"
        },
        {
          text: "2013 to 2014",
          format: "numeric"
        },
        {
          text: "2014 to 2015",
          format: "numeric"
        },
        {
          text: "2015 to 2016",
          format: "numeric"
        },
        {
          text: "2016 to 2017",
          format: "numeric"
        },
        {
          text: "2017 to 2018",
          format: "numeric"
        },
        {
          text: "2018 to 2019",
          format: "numeric"
        },
        {
          text: "2019 to 2020",
          format: "numeric"
        },
        {
          text: "2020 to 2021",
          format: "numeric"
        },
        {
          text: "2021 to 2022",
          format: "numeric"
        },
        {
          text: "2022 to 2023",
          format: "numeric"
        },
        {
          text: "2023 to 2024",
          format: "numeric"
        },
        {
          text: "2024 to 2025",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "England"
          },
          {
            text: "94.34%"
          },
          {
            text: "94.23%"
          },
          {
            text: "93.56%"
          },
          {
            text: "93.41%"
          },
          {
            text: "93.12%"
          },
          {
            text: "92.09%"
          },
          {
            text: "92.57%"
          },
          {
            text: "92.04%"
          },
          {
            text: "91.84%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.22%"
          },
          {
            text: "91.30%"
          }
        ],
        [
          {
            text: "Northern Ireland"
          },
          {
            text: "97.48%"
          },
          {
            text: "96.84%"
          },
          {
            text: "97.22%"
          },
          {
            text: "97.04%"
          },
          {
            text: "96.20%"
          },
          {
            text: "94.52%"
          },
          {
            text: "94.45%"
          },
          {
            text: "94.53%"
          },
          {
            text: "93.52%"
          },
          {
            text: "93.10%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.00%"
          }
        ],
        [
          {
            text: "Scotland"
          },
          {
            text: "97.51%"
          },
          {
            text: "97.39%"
          },
          {
            text: "97.15%"
          },
          {
            text: "96.77%"
          },
          {
            text: "96.51%"
          },
          {
            text: "95.80%"
          },
          {
            text: "96.23%"
          },
          {
            text: "96.54%"
          },
          {
            text: "96.32%"
          },
          {
            text: "95.55%"
          },
          {
            text: "94.84%"
          },
          {
            text: "94.50%"
          }
        ],
        [
          {
            text: "Wales"
          },
          {
            text: "96.70%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.34%"
          },
          {
            text: "95.92%"
          },
          {
            text: "95.42%"
          },
          {
            text: "95.77%"
          },
          {
            text: "95.56%"
          },
          {
            text: "95.18%"
          },
          {
            text: "94.47%"
          },
          {
            text: "94.19%"
          },
          {
            text: "94.10%"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[8] // Reverse variant
    ],
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "scrolling sortable": {
    context: {
      caption: "Childhood vaccination coverage by nation",
      captionId: "scrolling-sortable-caption",
      captionSize: "m",
      firstCellIsHeader: true,
      scroll: true,
      head: [
        {
          text: "Nation",
          sort: "ascending"
        },
        {
          text: "2013 to 2014",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2014 to 2015",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2015 to 2016",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2016 to 2017",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2017 to 2018",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2018 to 2019",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2019 to 2020",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2020 to 2021",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2021 to 2022",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2022 to 2023",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2023 to 2024",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2024 to 2025",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "England"
          },
          {
            text: "94.34%"
          },
          {
            text: "94.23%"
          },
          {
            text: "93.56%"
          },
          {
            text: "93.41%"
          },
          {
            text: "93.12%"
          },
          {
            text: "92.09%"
          },
          {
            text: "92.57%"
          },
          {
            text: "92.04%"
          },
          {
            text: "91.84%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.22%"
          },
          {
            text: "91.30%"
          }
        ],
        [
          {
            text: "Northern Ireland"
          },
          {
            text: "97.48%"
          },
          {
            text: "96.84%"
          },
          {
            text: "97.22%"
          },
          {
            text: "97.04%"
          },
          {
            text: "96.20%"
          },
          {
            text: "94.52%"
          },
          {
            text: "94.45%"
          },
          {
            text: "94.53%"
          },
          {
            text: "93.52%"
          },
          {
            text: "93.10%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.00%"
          }
        ],
        [
          {
            text: "Scotland"
          },
          {
            text: "97.51%"
          },
          {
            text: "97.39%"
          },
          {
            text: "97.15%"
          },
          {
            text: "96.77%"
          },
          {
            text: "96.51%"
          },
          {
            text: "95.80%"
          },
          {
            text: "96.23%"
          },
          {
            text: "96.54%"
          },
          {
            text: "96.32%"
          },
          {
            text: "95.55%"
          },
          {
            text: "94.84%"
          },
          {
            text: "94.50%"
          }
        ],
        [
          {
            text: "Wales"
          },
          {
            text: "96.70%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.34%"
          },
          {
            text: "95.92%"
          },
          {
            text: "95.42%"
          },
          {
            text: "95.77%"
          },
          {
            text: "95.56%"
          },
          {
            text: "95.18%"
          },
          {
            text: "94.47%"
          },
          {
            text: "94.19%"
          },
          {
            text: "94.10%"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[8] // Reverse variant
    ],
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "scrolling (full width)": {
    context: {
      caption: "Childhood vaccination coverage by nation",
      captionId: "scrolling-full-width-caption",
      captionSize: "m",
      firstCellIsHeader: true,
      scroll: true,
      head: [
        {
          text: "Nation"
        },
        {
          text: "2013 to 2014",
          format: "numeric"
        },
        {
          text: "2014 to 2015",
          format: "numeric"
        },
        {
          text: "2015 to 2016",
          format: "numeric"
        },
        {
          text: "2016 to 2017",
          format: "numeric"
        },
        {
          text: "2017 to 2018",
          format: "numeric"
        },
        {
          text: "2018 to 2019",
          format: "numeric"
        },
        {
          text: "2019 to 2020",
          format: "numeric"
        },
        {
          text: "2020 to 2021",
          format: "numeric"
        },
        {
          text: "2021 to 2022",
          format: "numeric"
        },
        {
          text: "2022 to 2023",
          format: "numeric"
        },
        {
          text: "2023 to 2024",
          format: "numeric"
        },
        {
          text: "2024 to 2025",
          format: "numeric"
        }
      ],
      rows: [
        [
          {
            text: "England"
          },
          {
            text: "94.34%"
          },
          {
            text: "94.23%"
          },
          {
            text: "93.56%"
          },
          {
            text: "93.41%"
          },
          {
            text: "93.12%"
          },
          {
            text: "92.09%"
          },
          {
            text: "92.57%"
          },
          {
            text: "92.04%"
          },
          {
            text: "91.84%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.22%"
          },
          {
            text: "91.30%"
          }
        ],
        [
          {
            text: "Northern Ireland"
          },
          {
            text: "97.48%"
          },
          {
            text: "96.84%"
          },
          {
            text: "97.22%"
          },
          {
            text: "97.04%"
          },
          {
            text: "96.20%"
          },
          {
            text: "94.52%"
          },
          {
            text: "94.45%"
          },
          {
            text: "94.53%"
          },
          {
            text: "93.52%"
          },
          {
            text: "93.10%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.00%"
          }
        ],
        [
          {
            text: "Scotland"
          },
          {
            text: "97.51%"
          },
          {
            text: "97.39%"
          },
          {
            text: "97.15%"
          },
          {
            text: "96.77%"
          },
          {
            text: "96.51%"
          },
          {
            text: "95.80%"
          },
          {
            text: "96.23%"
          },
          {
            text: "96.54%"
          },
          {
            text: "96.32%"
          },
          {
            text: "95.55%"
          },
          {
            text: "94.84%"
          },
          {
            text: "94.50%"
          }
        ],
        [
          {
            text: "Wales"
          },
          {
            text: "96.70%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.34%"
          },
          {
            text: "95.92%"
          },
          {
            text: "95.42%"
          },
          {
            text: "95.77%"
          },
          {
            text: "95.56%"
          },
          {
            text: "95.18%"
          },
          {
            text: "94.47%"
          },
          {
            text: "94.19%"
          },
          {
            text: "94.10%"
          }
        ]
      ]
    },
    options: {
      width: "full"
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[8] // Reverse variant
    ]
  },
  "scrolling sortable (full width)": {
    context: {
      caption: "Childhood vaccination coverage by nation",
      captionId: "scrolling-sortable-full-width-caption",
      captionSize: "m",
      firstCellIsHeader: true,
      scroll: true,
      head: [
        {
          text: "Nation",
          sort: "ascending"
        },
        {
          text: "2013 to 2014",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2014 to 2015",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2015 to 2016",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2016 to 2017",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2017 to 2018",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2018 to 2019",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2019 to 2020",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2020 to 2021",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2021 to 2022",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2022 to 2023",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2023 to 2024",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "2024 to 2025",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "England"
          },
          {
            text: "94.34%"
          },
          {
            text: "94.23%"
          },
          {
            text: "93.56%"
          },
          {
            text: "93.41%"
          },
          {
            text: "93.12%"
          },
          {
            text: "92.09%"
          },
          {
            text: "92.57%"
          },
          {
            text: "92.04%"
          },
          {
            text: "91.84%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.22%"
          },
          {
            text: "91.30%"
          }
        ],
        [
          {
            text: "Northern Ireland"
          },
          {
            text: "97.48%"
          },
          {
            text: "96.84%"
          },
          {
            text: "97.22%"
          },
          {
            text: "97.04%"
          },
          {
            text: "96.20%"
          },
          {
            text: "94.52%"
          },
          {
            text: "94.45%"
          },
          {
            text: "94.53%"
          },
          {
            text: "93.52%"
          },
          {
            text: "93.10%"
          },
          {
            text: "91.80%"
          },
          {
            text: "91.00%"
          }
        ],
        [
          {
            text: "Scotland"
          },
          {
            text: "97.51%"
          },
          {
            text: "97.39%"
          },
          {
            text: "97.15%"
          },
          {
            text: "96.77%"
          },
          {
            text: "96.51%"
          },
          {
            text: "95.80%"
          },
          {
            text: "96.23%"
          },
          {
            text: "96.54%"
          },
          {
            text: "96.32%"
          },
          {
            text: "95.55%"
          },
          {
            text: "94.84%"
          },
          {
            text: "94.50%"
          }
        ],
        [
          {
            text: "Wales"
          },
          {
            text: "96.70%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.57%"
          },
          {
            text: "96.34%"
          },
          {
            text: "95.92%"
          },
          {
            text: "95.42%"
          },
          {
            text: "95.77%"
          },
          {
            text: "95.56%"
          },
          {
            text: "95.18%"
          },
          {
            text: "94.47%"
          },
          {
            text: "94.19%"
          },
          {
            text: "94.10%"
          }
        ]
      ]
    },
    options: {
      width: "full"
    },
    variants: [
      variants[0], // Regular variant
      variants[2], // Striped variant
      variants[8] // Reverse variant
    ]
  },
  "sortable": {
    context: {
      caption: "Appointments",
      firstCellIsHeader: true,
      head: [
        {
          text: "Time",
          sort: "ascending"
        },
        {
          text: "Name",
          sort: true
        },
        {
          text: "Date of birth",
          classes: "nhsuk-u-nowrap"
        }
      ],
      rows: [
        [
          {
            text: "11:00"
          },
          {
            text: "Laura Stone"
          },
          {
            text: "4 January 1986"
          }
        ],
        [
          {
            text: "11:30"
          },
          {
            text: "Emma Katie-Brown"
          },
          {
            text: "7 February 1976"
          }
        ],
        [
          {
            text: "13:10"
          },
          {
            text: "David Chen"
          },
          {
            text: "19 March 1981"
          }
        ],
        [
          {
            text: "13:40"
          },
          {
            text: "Michael Thompson"
          },
          {
            text: "6 December 1964"
          }
        ],
        [
          {
            text: "14:20"
          },
          {
            text: "Juan Martinez"
          },
          {
            text: "18 April 1975"
          }
        ]
      ]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "sortable server-side": {
    context: {
      caption: "Appointments",
      firstCellIsHeader: true,
      head: [
        {
          text: "Name",
          href: "#",
          sort: "descending",
          width: "one-half"
        },
        {
          text: "Last log in",
          href: "#",
          sort: true,
          align: "right",
          width: "one-third",
          classes: "nhsuk-u-nowrap"
        },
        {
          visuallyHiddenText: "Action"
        }
      ],
      rows: [
        [
          {
            text: "Zadie Munroe"
          },
          {
            text: "7 May 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Zadie Munroe"
          }
        ],
        [
          {
            text: "Yolanda Pierce"
          },
          {
            text: "13 May 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Yolanda Pierce"
          }
        ],
        [
          {
            text: "Xanthe Beaumont"
          },
          {
            text: "19 May 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Xanthe Beaumont"
          }
        ],
        [
          {
            text: "Wendell Shaw"
          },
          {
            text: "25 May 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Wendell Shaw"
          }
        ],
        [
          {
            text: "Val Cruz"
          },
          {
            text: "1 June 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Val Cruz"
          }
        ],
        [
          {
            text: "Uta Brennan"
          },
          {
            text: "7 June 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Uta Brennan"
          }
        ],
        [
          {
            text: "Tamsin Foley-Whitworth"
          },
          {
            text: "14 June 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Tamsin Foley-Whitworth"
          }
        ],
        [
          {
            text: "Stellan Park"
          },
          {
            text: "20 June 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Stellan Park"
          }
        ],
        [
          {
            text: "Ro Nkosi"
          },
          {
            text: "28 June 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Ro Nkosi"
          }
        ],
        [
          {
            text: "Reuben Tate"
          },
          {
            text: "1 May 2026"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "details for Reuben Tate"
          }
        ]
      ]
    },
    variants
  },
  "sortable with numeric format": {
    context: {
      caption: "Prescription prepayment certificate (PPC) charges",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Item"
        },
        {
          text: "Current charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "New charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "3-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£31.25"
          },
          {
            text: "£32.05"
          }
        ],
        [
          {
            text: "12-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£111.60"
          },
          {
            text: "£114.50"
          }
        ],
        [
          {
            text: "HRT"
          },
          {
            text: "£19.30"
          },
          {
            text: "£19.80"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2] // Responsive variant
    ]
  },
  "sortable with numeric format and missing data": {
    context: {
      caption: "Prescription prepayment certificate (PPC) charges",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Item"
        },
        {
          text: "Current charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "New charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "3-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£31.25"
          },
          {
            text: "£32.05"
          }
        ],
        [
          {
            text: "12-month",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£111.60"
          },
          {
            text: "No data",
            format: "string",
            classes: "nhsuk-u-secondary-text-colour"
          }
        ],
        [
          {
            text: "HRT"
          },
          {
            text: "£19.30"
          },
          {
            text: "£19.80"
          }
        ]
      ]
    },
    variants: [
      variants[0], // Regular variant
      variants[2] // Responsive variant
    ]
  },
  "sortable with numeric format and sort values": {
    context: {
      caption: "Prescription prepayment certificate (PPC) charges",
      captionSize: "m",
      firstCellIsHeader: true,
      head: [
        {
          text: "Item",
          sort: "ascending"
        },
        {
          text: "Current charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        },
        {
          text: "New charge",
          format: "numeric",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "3-month",
            sortValue: "3",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£31.25",
            sortValue: "31.25"
          },
          {
            text: "£32.05",
            sortValue: "32.05"
          }
        ],
        [
          {
            text: "12-month",
            sortValue: "12",
            classes: "nhsuk-u-nowrap"
          },
          {
            text: "£111.60",
            sortValue: "111.60"
          },
          {
            text: "£114.50",
            sortValue: "114.50"
          }
        ],
        [
          {
            text: "HRT",
            sortValue: "100"
          },
          {
            text: "£19.30",
            sortValue: "19.30"
          },
          {
            text: "£19.80",
            sortValue: "19.80"
          }
        ]
      ]
    }
  },
  "sortable with sort values": {
    context: {
      caption: "Appointments",
      firstCellIsHeader: true,
      head: [
        {
          text: "Time",
          sort: "ascending"
        },
        {
          text: "Name",
          sort: true
        },
        {
          text: "Date of birth",
          sort: true,
          sortNext: "descending"
        }
      ],
      rows: [
        [
          {
            text: "11:00am",
            sortValue: "11:00"
          },
          {
            text: "Laura Stone",
            sortValue: "Stone, Laura"
          },
          {
            text: "4 January 1986",
            sortValue: "1986-01-04"
          }
        ],
        [
          {
            text: "11:30am",
            sortValue: "11:30"
          },
          {
            text: "Emma Katie-Brown",
            sortValue: "Katie-Brown, Emma"
          },
          {
            text: "7 February 1976",
            sortValue: "1976-02-07"
          }
        ],
        [
          {
            text: "1:10pm",
            sortValue: "13:10"
          },
          {
            text: "David Chen",
            sortValue: "Chen, David"
          },
          {
            text: "19 March 1981",
            sortValue: "1981-03-19"
          }
        ],
        [
          {
            text: "1:40pm",
            sortValue: "13:40"
          },
          {
            text: "Michael Thompson",
            sortValue: "Thompson, Michael"
          },
          {
            text: "6 December 1964",
            sortValue: "1964-12-06"
          }
        ],
        [
          {
            text: "2:20pm",
            sortValue: "14:20"
          },
          {
            text: "Juan Martinez",
            sortValue: "Martinez, Juan"
          },
          {
            text: "18 April 1975",
            sortValue: "1975-04-18"
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
