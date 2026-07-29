'use strict';

var closestAttributeValue = require('../../common/closest-attribute-value.js');
require('../../common/configuration/index.js');
var normaliseString = require('../../common/configuration/normalise-string.js');
var configurableComponent = require('../../configurable-component.js');
var index = require('../../errors/index.js');
var i18n = require('../../i18n.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

/**
 * Table component
 *
 * @augments {ConfigurableComponent<TableConfig>}
 */
class Table extends configurableComponent.ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<TableConfig>} [config] - Sortable table config
   */
  constructor($root, config = {}) {
    super($root, config);
    const {
      i18n: i18n$1,
      bodyClass,
      captionClass,
      headClass,
      headerClass,
      rowClass
    } = this.config;
    const $head = this.$root.querySelector(`thead.${headClass}`);
    if (!($head instanceof HTMLTableSectionElement)) {
      throw new index.ElementError({
        component: Table,
        element: $head,
        expectedType: 'HTMLTableSectionElement',
        identifier: `Table head (\`<thead class="${headClass}">\`)`
      });
    }
    this.$head = $head;
    const $body = this.$root.querySelector(`tbody.${bodyClass}`);
    if (!($body instanceof HTMLTableSectionElement)) {
      throw new index.ElementError({
        component: Table,
        element: $body,
        expectedType: 'HTMLTableSectionElement',
        identifier: `Table body (\`<tbody class="${bodyClass}">\`)`
      });
    }
    this.$body = $body;
    const $caption = this.$root.querySelector(`caption.${captionClass}`);
    if (!($caption instanceof HTMLTableCaptionElement)) {
      throw new index.ElementError({
        component: Table,
        element: $caption,
        expectedType: 'HTMLTableCaptionElement',
        identifier: `Table caption (\`<caption class="${captionClass}">\`)`
      });
    }
    this.$caption = $caption;
    const $headers = Array.from(this.$head.querySelectorAll(`th.${headerClass}`));
    if (!$headers.length || !$headers.every($header => $header instanceof HTMLElement) || !$headers.some($header => 'sort' in $header.dataset)) {
      throw new index.ElementError({
        component: Table,
        identifier: `Table headers (\`<th class="${headerClass}">\`) with attribute (\`data-sort\`)`
      });
    }
    this.$headers = $headers;
    const $rows = Array.from(this.$body.querySelectorAll(`.${rowClass}`));
    if (!$rows.length || !$rows.every($row => $row instanceof HTMLElement)) {
      throw new index.ElementError({
        component: Table,
        identifier: `Table rows (\`<tr class="${rowClass}">\`)`
      });
    }
    this.$rows = $rows;
    this.i18n = new i18n.I18n(i18n$1, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue.closestAttributeValue(this.$root, 'lang')
    });
    this.collators = Object.freeze({
      string: new Intl.Collator(this.i18n.locale, {
        ignorePunctuation: true,
        sensitivity: 'base'
      }),
      number: new Intl.Collator(this.i18n.locale, {
        ignorePunctuation: true,
        numeric: true,
        sensitivity: 'base'
      })
    });

    // Create and append the status text for screen readers
    this.$screenReaderStatusMessage = document.createElement('div');
    this.$screenReaderStatusMessage.setAttribute('aria-atomic', 'true');
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite');
    this.$screenReaderStatusMessage.setAttribute('role', 'status');
    this.$screenReaderStatusMessage.classList.add('nhsuk-u-visually-hidden');
    this.$root.insertAdjacentElement('afterend', this.$screenReaderStatusMessage);
    this.setup();
  }
  setup() {
    this.setupButtons();
    const $header = this.$headers.find($header => $header.matches('[aria-sort="ascending"], [aria-sort="descending"]'));
    const index = this.getIndex($header);
    const direction = this.getDirection($header);

    // Apply initial sort
    this.sort(index, direction);
    this.update(index, direction);
    this.$head.addEventListener('click', event => this.handleSort(event));
  }
  setupButtons() {
    for (const $header of this.$headers) {
      if ('sort' in $header.dataset) {
        const $button = document.createElement('button');
        $button.setAttribute('type', 'button');
        $button.innerHTML = $header.innerHTML;
        $header.innerHTML = '';
        $header.appendChild($button);
      }
    }
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  sort(index, direction = 'ascending') {
    if (!(direction === 'ascending' || direction === 'descending')) {
      return;
    }
    this.$rows.sort(($rowA, $rowB) => {
      const valueA = this.getValue(index, $rowA);
      const valueB = this.getValue(index, $rowB);
      let collator = this.collators.string;
      if (valueA.format === 'numeric' || valueB.format === 'numeric') {
        collator = this.collators.number;

        // Sort string format before numeric unless sort value provided
        if (valueA.format !== 'numeric' && !valueA.sort) valueA.text = '';
        if (valueB.format !== 'numeric' && !valueB.sort) valueB.text = '';
      }
      const rank = collator.compare(valueA.text, valueB.text);
      return direction === 'ascending' ? rank : -rank;
    });
  }

  /**
   * @param {MouseEvent} event - Click event
   */
  handleSort(event) {
    const $target = event.target;
    if (!($target instanceof HTMLButtonElement)) {
      return;
    }
    const {
      parentElement: $header
    } = $target;
    if (!($header instanceof HTMLTableCellElement)) {
      return;
    }
    const index = this.getIndex($header);
    const directionNext = this.getDirectionNext($header);
    this.sort(index, directionNext);
    this.update(index, directionNext);
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  update(index, direction = 'ascending') {
    var _$header$firstElement;
    if (!(direction === 'ascending' || direction === 'descending')) {
      return;
    }
    const $header = this.getHeader(index);
    for (const $row of this.$rows) {
      this.$body.append($row);
    }

    // Skip header updates unless direction has changed
    if (direction === this.getDirection($header)) {
      return;
    }
    $header.setAttribute('aria-sort', direction);
    (_$header$firstElement = $header.firstElementChild) == null || _$header$firstElement.setAttribute('aria-pressed', 'true');
    for (const _$header of this.$headers) {
      const isActive = this.getIndex(_$header) === index;
      const directionNext = isActive ? this.getDirectionNext(_$header) : this.getDirection(_$header);
      if (directionNext !== 'none') {
        _$header.dataset.sortNext = directionNext;
      }
      if (!isActive) {
        var _$header$firstElement2;
        _$header.removeAttribute('aria-sort');
        (_$header$firstElement2 = _$header.firstElementChild) == null || _$header$firstElement2.removeAttribute('aria-pressed');
      }
    }
    this.$screenReaderStatusMessage.textContent = this.formatStatusMessage(index, direction);
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  formatStatusMessage(index, direction = 'ascending') {
    if (!(direction === 'ascending' || direction === 'descending')) {
      return '';
    }
    return this.i18n.t('sortAnnouncement', {
      header: this.getHeader(index).innerText.trim(),
      direction: this.i18n.t(direction)
    });
  }

  /**
   * @param {number} index
   */
  getHeader(index$1) {
    const {
      headerClass
    } = this.config;
    const $header = this.$headers[index$1];
    if (!($header instanceof HTMLTableCellElement)) {
      throw new index.ElementError({
        component: Table,
        element: $header,
        expectedType: 'HTMLTableCellElement',
        identifier: `Table header (\`<th class="${headerClass}">\`)`
      });
    }
    return $header;
  }

  /**
   * @param {HTMLTableCellElement | null} [$header]
   */
  getIndex($header) {
    return $header ? this.$headers.indexOf($header) : -1;
  }

  /**
   * @param {HTMLElement | null} [$header]
   * @returns {TableSortDirection}
   */
  getDirection($header) {
    const direction = $header == null ? void 0 : $header.getAttribute('aria-sort');
    return direction === 'ascending' || direction === 'descending' ? direction : 'none';
  }

  /**
   * @param {HTMLElement | null} [$header]
   * @returns {TableSortDirection}
   */
  getDirectionNext($header) {
    var _$header$dataset;
    const direction = this.getDirection($header);
    const {
      sortNext
    } = (_$header$dataset = $header == null ? void 0 : $header.dataset) != null ? _$header$dataset : {};

    /** @type {'ascending' | 'descending'} */
    let directionNext = 'ascending';
    if (direction !== sortNext && (sortNext === 'ascending' || sortNext === 'descending')) {
      directionNext = sortNext;
    } else if (direction === 'ascending') {
      directionNext = 'descending';
    }
    return directionNext;
  }

  /**
   * @param {number} index
   * @param {HTMLElement} [$row]
   * @returns {{ sort: string | undefined, text: string, format: 'numeric' | 'string' }}
   */
  getValue(index, $row) {
    var _$row$querySelectorAl, _$cell$dataset$sortVa, _value$toString;
    const {
      cellClass,
      headerClass
    } = this.config;
    const $header = this.getHeader(index);
    const $cell = (_$row$querySelectorAl = $row == null ? void 0 : $row.querySelectorAll('td, th')[index]) != null ? _$row$querySelectorAl : $header;
    const innerText = $cell.innerText.trim();
    const sortValue = (_$cell$dataset$sortVa = $cell.dataset.sortValue) == null ? void 0 : _$cell$dataset$sortVa.trim();
    const value = normaliseString.normaliseString(sortValue != null ? sortValue : innerText);
    const hasFormatNumeric = $cell.classList.contains(`${headerClass}--numeric`) || $cell.classList.contains(`${cellClass}--numeric`) || typeof value === 'number';
    return {
      sort: sortValue,
      text: (_value$toString = value == null ? void 0 : value.toString()) != null ? _value$toString : '',
      format: hasFormatNumeric ? 'numeric' : 'string'
    };
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table, options)`} instead.
 * @param {InitOptions & Partial<TableConfig>} [options]
 */
Table.moduleName = 'nhsuk-table';
/**
 * Sortable table config
 *
 * @see {@link TableConfig}
 * @constant
 * @type {TableConfig}
 */
Table.defaults = Object.freeze({
  bodyClass: 'nhsuk-table__body',
  captionClass: 'nhsuk-table__caption',
  cellClass: 'nhsuk-table__cell',
  headClass: 'nhsuk-table__head',
  headerClass: 'nhsuk-table__header',
  rowClass: 'nhsuk-table__row',
  i18n: {
    sortAnnouncement: 'Sorted by %{header} (%{direction})',
    ascending: 'ascending',
    descending: 'descending'
  }
});
/**
 * Sortable table config schema
 *
 * @constant
 * @satisfies {Schema<TableConfig>}
 */
Table.schema = Object.freeze({
  properties: {
    bodyClass: {
      type: 'string'
    },
    captionClass: {
      type: 'string'
    },
    cellClass: {
      type: 'string'
    },
    headClass: {
      type: 'string'
    },
    headerClass: {
      type: 'string'
    },
    rowClass: {
      type: 'string'
    },
    i18n: {
      type: 'object'
    }
  }
});
function initTables(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $tables = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Table.moduleName}"]`);
  $tables == null || $tables.forEach($root => {
    new Table($root, options);
  });
}

/**
 * Table config
 *
 * @see {@link Table.defaults}
 * @typedef {object} TableConfig
 * @property {string} bodyClass - Table body class for `<tbody>` element
 * @property {string} captionClass - Table caption class for `<caption>` element
 * @property {string} cellClass - Table cell class for `<td>` elements
 * @property {string} headClass - Table head class for `<thead>` element
 * @property {string} headerClass - Table header class for `<th>` elements
 * @property {string} rowClass - Table row class for `<tr>` elements
 * @property {TableTranslations} [i18n=Table.defaults.i18n] - Table translations
 */

/**
 * Table sort direction
 *
 * @typedef {'ascending' | 'descending' | 'none'} TableSortDirection
 */

/**
 * Table translations
 *
 * @see {@link Table.defaults.i18n}
 * @typedef {object} TableTranslations
 * @property {string} [sortAnnouncement] - Status message
 * @property {string} [ascending] - Ascending text
 * @property {string} [descending] - Descending text
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.Table = Table;
exports.initTables = initTables;
//# sourceMappingURL=table.js.map
