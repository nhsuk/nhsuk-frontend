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
          'Specify format of a cell. Currently we only use `"numeric"`.'
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
          'Specify format of a cell. Currently we only use `"numeric"`.'
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
      'Classes for caption text size. Classes to add to the table caption, for example `"nhsuk-table__caption--l"`.'
  },
  captionSize: {
    type: 'string',
    required: false,
    description: 'Size of the caption – `"s"`, `"m"`, `"l"` or `"xl"`.'
  },
  firstCellIsHeader: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, first cell in table row will be a TH instead of a TD.'
  },
  responsive: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, responsive table classes will be applied.'
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
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
