export const name = 'Tables'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the table.',
    released: '10.0.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove separating borders from all rows.',
    released: '10.6.0'
  },
  lastRowBorder: {
    type: 'boolean',
    required: false,
    description:
      'If set to `false`, remove separating border from the last row.',
    released: '10.6.0'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'Array of table rows and cells.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the table cell.',
        released: '10.6.0'
      },
      header: {
        type: 'string',
        required: false,
        description: 'Header text for cells in responsive table rows only.',
        released: '4.0.0',
        deprecated: '10.6.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'If set, the table cell will become a link.',
        released: '10.6.0'
      },
      format: {
        type: 'string',
        required: false,
        description:
          'Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"`',
        released: '1.0.0'
      },
      sortValue: {
        type: 'string',
        required: false,
        description: 'Sort value text for cells in table rows.',
        released: '10.6.0'
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell spans.',
        released: '1.0.0'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell spans.',
        released: '1.0.0'
      },
      align: {
        type: 'string',
        required: false,
        description:
          'Specify the table cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"`',
        released: '10.6.0'
      },
      width: {
        type: 'string',
        required: false,
        description:
          'Specify the table cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the table cell.',
        released: '9.4.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the table cell.',
        released: '9.4.0'
      }
    }
  },
  head: {
    type: 'array',
    required: false,
    description: 'Array of table head cells.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the table head cell.',
        released: '10.6.0'
      },
      href: {
        type: 'string',
        required: false,
        description:
          'If set, the table header will become a link for server-side table sorting. Use `sort` to set the column sort direction.',
        released: '10.6.0'
      },
      format: {
        type: 'string',
        required: false,
        description:
          'Specify format of a cell – `"numeric"` or `"string"`. Defaults to `"string"`',
        released: '1.0.0'
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell spans.',
        released: '1.0.0'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell spans.',
        released: '1.0.0'
      },
      align: {
        type: 'string',
        required: false,
        description:
          'Specify the table head cell alignment – `"left"`, `"centre"`, or `"right"`. Defaults to `"left"`',
        released: '10.6.0'
      },
      width: {
        type: 'string',
        required: false,
        description:
          'Specify the table head cell width. You can pass any design system grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the table head cell.',
        released: '9.4.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the table head cell.',
        released: '9.4.0'
      },
      sort: {
        type: 'string',
        required: false,
        description:
          'The sort direction applied to the column using `aria-sort` – `"ascending"`, `"descending"`, `"none"` or `true`. To enable sorting without a default direction, set `sort` to `"none"` or `true`.',
        released: '10.6.0'
      },
      sortNext: {
        type: 'string',
        required: false,
        description:
          'The next sort direction applied to the column using `aria-sort` when clicked – `"ascending"` or `"descending"`. Defaults to `"ascending"`. If you set `sort` to `"ascending"`, `sortNext` defaults to `"descending"`.',
        released: '10.6.0'
      }
    }
  },
  caption: {
    type: 'string',
    required: false,
    description: 'Caption text.',
    released: '1.0.0'
  },
  captionClasses: {
    type: 'string',
    required: false,
    description:
      'Classes for caption text size. Classes to add to the table caption, for example `"nhsuk-table__caption--l"`.',
    released: '1.0.0'
  },
  captionSize: {
    type: 'string',
    required: false,
    description: 'Size of the caption – `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.2.0'
  },
  captionDescriptionText: {
    type: 'string',
    required: false,
    description:
      'Message made available to assistive technologies to describe that the table is sortable. Defaults to `"Column headers are sortable"`.',
    released: '10.6.0'
  },
  firstCellIsHeader: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, first cell in table row will be a `th` instead of a `td`.',
    released: '1.0.0'
  },
  compact: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, vertical padding will be reduced for table cells.',
    released: '10.6.0'
  },
  responsive: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, responsive table classes will be applied.',
    released: '4.0.0'
  },
  striped: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, striped background colours will be applied to table rows.',
    released: '10.6.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of table. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  card: {
    type: 'object',
    required: false,
    description:
      'Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table.',
    released: '10.3.0',
    isComponent: true
  },
  panel: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the table will render within a panel with a heading. Replaced by the `card` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  panelClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the table panel. Replaced by the `card.classes` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  heading: {
    type: 'string',
    required: false,
    description:
      'Heading text that displays above the table when `panel` is `true`. Replaced by the `card.heading` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description:
      'Optional heading level for the table panel heading. Defaults to `3`. Replaced by the `card.headingLevel` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the table container.',
    released: '10.3.0'
  },
  tableClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the table element. Replaced by the `classes` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the table container.',
    released: '1.0.0'
  },
  ascendingText: {
    type: 'string',
    required: false,
    description:
      'Text for columns in ascending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"ascending"`.',
    released: '10.6.0'
  },
  descendingText: {
    type: 'string',
    required: false,
    description:
      'Text for columns in descending sort order, used to populate the `%{direction}` placeholder in `sortAnnouncementText`. Defaults to `"descending"`.',
    released: '10.6.0'
  },
  sortAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when a table column has been sorted. The component will replace the `%{header}` placeholder with the column header, and the `%{direction}` placeholder with the `ascendingText` or `descendingText` option value.',
    released: '10.6.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
