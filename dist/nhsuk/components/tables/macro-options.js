'use strict';

const name = 'Tables';

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
  rows: {
    type: 'array',
    required: true,
    description: 'Array of table rows and cells.',
    released: '1.0.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description: 'If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      header: {
        type: 'string',
        required: false,
        description: 'Header text for cells in responsive table rows only.',
        released: '4.0.0'
      },
      format: {
        type: 'string',
        required: false,
        description: 'Specify format of a cell. Currently we only use `"numeric"`.',
        released: '1.0.0'
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell extends.',
        released: '1.0.0'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell extends.',
        released: '1.0.0'
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
        description: 'If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: false,
        description: 'If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` argument will be ignored.',
        released: '1.0.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'If set, this adds a link within the header cell. This can be in conjunction with setting aria-sort for server-side table sorting.'
      },
      format: {
        type: 'string',
        required: false,
        description: 'Specify format of a cell. Currently we only use `"numeric"`.',
        released: '1.0.0'
      },
      colspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many columns a cell extends.',
        released: '1.0.0'
      },
      rowspan: {
        type: 'integer',
        required: false,
        description: 'Specify how many rows a cell extends.',
        released: '1.0.0'
      },
      sortable: {
        type: 'boolean',
        required: false,
        description: 'Set to true to allow this column to be sorted',
        released: '10.x.0'
      },
      sorted: {
        type: 'string',
        required: false,
        description: 'Set to "ascending" or "descending" if the column is sorted on initial page load',
        released: '10.x.0'
      },
      sortFirstDirection: {
        type: 'string',
        required: false,
        description: 'The first sort direction applied to the column when clicked – `"ascending"` or `"descending"`. Defaults to `"ascending"`',
        released: '10.x.0'
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
    description: 'Classes for caption text size. Classes to add to the table caption, for example `"nhsuk-table__caption--l"`.',
    released: '1.0.0'
  },
  captionSize: {
    type: 'string',
    required: false,
    description: 'Size of the caption – `"s"`, `"m"`, `"l"` or `"xl"`.',
    released: '10.2.0'
  },
  firstCellIsHeader: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, first cell in table row will be a TH instead of a TD.',
    released: '1.0.0'
  },
  responsive: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, responsive table classes will be applied.',
    released: '4.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of table. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  card: {
    type: 'object',
    required: false,
    description: 'Can be used to wrap a card around the table component. If any of these options are present, a card will wrap around the table.',
    released: '10.3.0',
    isComponent: true
  },
  panel: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, the table will render within a panel with a heading. Replaced by the `card` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  panelClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the table panel. Replaced by the `card.classes` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  heading: {
    type: 'string',
    required: false,
    description: 'Heading text that displays above the table when `panel` is `true`. Replaced by the `card.heading` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the table panel heading. Defaults to `3`. Replaced by the `card.headingLevel` option.',
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
    description: 'Classes to add to the table element. Replaced by the `classes` option.',
    released: '1.0.0',
    deprecated: '10.3.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the table container.',
    released: '1.0.0'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
