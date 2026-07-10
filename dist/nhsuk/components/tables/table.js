'use strict';

require('../../common/configuration/index.js');
var configurableComponent = require('../../configurable-component.js');
var index = require('../../errors/index.js');
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
    const $head = this.$root.querySelector('thead');
    const $body = this.$root.querySelector('tbody');
    if (!$head) {
      throw new index.ElementError({
        component: Table,
        identifier: 'Table head (`<thead>`)'
      });
    }
    if (!$body) {
      throw new index.ElementError({
        component: Table,
        identifier: 'Table body (`<tbody>`)'
      });
    }
    this.$head = $head;
    this.$body = $body;
    this.$caption = this.$root.querySelector('caption');
    this.$headings = Array.from(this.$head.querySelectorAll('th'));

    // Count headings which have an aria-sort attribute but which
    // do not already have a link inside them (for server-side
    // sorting)
    const hasSortableHeadings = this.$headings.some(heading => {
      return heading.getAttribute('aria-sort') && !heading.querySelector('a');
    });
    if (hasSortableHeadings) {
      this.$root.classList.add('nhsuk-table--with-sortable-columns');
      this.createHeadingButtons();
      this.updateCaption();
      this.createStatusBox();
      this.initialiseSortedColumn();
      this.$head.addEventListener('click', this.onSortButtonClick.bind(this));
    }
  }
  createHeadingButtons() {
    for (const $heading of this.$headings) {
      if ($heading.hasAttribute('aria-sort')) {
        this.createHeadingButton($heading);
      }
    }
  }

  /**
   * @param {HTMLTableCellElement} $heading
   */
  createHeadingButton($heading) {
    const index = this.$headings.indexOf($heading);
    const $button = document.createElement('button');
    $button.setAttribute('type', 'button');
    $button.dataset.index = `${index}`;
    $button.textContent = $heading.textContent;
    $heading.textContent = '';
    $heading.appendChild($button);
  }
  createStatusBox() {
    this.$status = document.createElement('div');
    this.$status.setAttribute('aria-atomic', 'true');
    this.$status.setAttribute('aria-live', 'polite');
    this.$status.setAttribute('class', 'nhsuk-u-visually-hidden');
    this.$status.setAttribute('role', 'status');
    this.$root.insertAdjacentElement('afterend', this.$status);
  }
  initialiseSortedColumn() {
    var _$sortButton$dataset$;
    const $rows = this.getTableRowsArray();
    const $heading = this.$root.querySelector('th[aria-sort="ascending"], th[aria-sort="descending"]');
    const $sortButton = $heading == null ? void 0 : $heading.querySelector('button');
    const sortDirection = $heading == null ? void 0 : $heading.getAttribute('aria-sort');
    const columnNumber = Number.parseInt((_$sortButton$dataset$ = $sortButton == null ? void 0 : $sortButton.dataset.index) != null ? _$sortButton$dataset$ : '0', 10);
    if (!$heading || !$sortButton || !(sortDirection === 'ascending' || sortDirection === 'descending')) {
      return;
    }
    const $sortedRows = this.sort($rows, columnNumber, sortDirection);
    this.addRows($sortedRows);
  }

  /**
   * @param {MouseEvent} event - Click event
   */
  onSortButtonClick(event) {
    var _$button$dataset$inde;
    const $target = /** @type {HTMLElement} */event.target;
    const $button = $target.closest('button');
    if (!($button != null && $button.parentElement)) {
      return;
    }
    const $heading = $button.parentElement;
    const sortDirection = $heading.getAttribute('aria-sort');
    const sortFirstDirection = $heading.dataset.sortFirstDirection;
    const columnNumber = Number.parseInt((_$button$dataset$inde = $button.dataset.index) != null ? _$button$dataset$inde : '0', 10);

    /** @type {'ascending' | 'descending'} */
    let newSortDirection;
    if (sortDirection === 'descending') {
      newSortDirection = 'ascending';
    } else if (sortDirection === 'ascending') {
      newSortDirection = 'descending';
    } else if (sortFirstDirection === 'ascending' || sortFirstDirection === 'descending') {
      newSortDirection = sortFirstDirection;
    } else {
      newSortDirection = 'ascending';
    }
    const $rows = this.getTableRowsArray();
    const $sortedRows = this.sort($rows, columnNumber, newSortDirection);
    this.addRows($sortedRows);
    this.removeButtonStates();
    this.updateColumnState($heading, newSortDirection);
  }
  updateCaption() {
    if (!this.$caption) {
      return;
    }
    let assistiveText = this.$caption.querySelector('.nhsuk-u-visually-hidden');
    if (assistiveText) {
      return;
    }
    assistiveText = document.createElement('span');
    assistiveText.classList.add('nhsuk-u-visually-hidden');
    assistiveText.textContent = ' (column headers with buttons are sortable).';
    this.$caption.appendChild(assistiveText);
  }

  /**
   * @param {Element} $heading
   * @param {'ascending' | 'descending'} direction
   */
  updateColumnState($heading, direction) {
    const {
      config,
      $status
    } = this;
    if (!config.statusMessage || !$status) {
      return;
    }
    const directionText = config[`${direction}Text`];
    if (!directionText) {
      return;
    }
    $heading.setAttribute('aria-sort', direction);
    let message = config.statusMessage;
    message = message.replace(/%heading%/, $heading.textContent.trim());
    message = message.replace(/%direction%/, directionText);
    $status.textContent = message;
  }
  removeButtonStates() {
    for (const $heading of this.$headings) {
      if ($heading.hasAttribute('aria-sort')) {
        $heading.setAttribute('aria-sort', 'none');
      }
    }
  }

  /**
   * @param {HTMLTableRowElement[]} $rows
   */
  addRows($rows) {
    for (const $row of $rows) {
      this.$body.append($row);
    }
  }
  getTableRowsArray() {
    return Array.from(this.$body.querySelectorAll('tr'));
  }

  /**
   * @param {HTMLTableRowElement[]} $rows
   * @param {number} columnNumber
   * @param {string} sortDirection
   */
  sort($rows, columnNumber, sortDirection) {
    return $rows.sort(($rowA, $rowB) => {
      const $tdA = $rowA.querySelectorAll('td, th')[columnNumber];
      const $tdB = $rowB.querySelectorAll('td, th')[columnNumber];
      if (!($tdA instanceof HTMLElement) || !($tdB instanceof HTMLElement)) {
        return 0;
      }
      const valueA = sortDirection === 'ascending' ? this.getCellValue($tdA) : this.getCellValue($tdB);
      const valueB = sortDirection === 'ascending' ? this.getCellValue($tdB) : this.getCellValue($tdA);
      return typeof valueA === 'number' && typeof valueB === 'number' ? valueA - valueB : valueA.toString().localeCompare(valueB.toString());
    });
  }

  /**
   * @param {HTMLElement} $cell
   */
  getCellValue($cell) {
    var _$cell$dataset$sortVa;
    const val = (_$cell$dataset$sortVa = $cell.dataset.sortValue) != null ? _$cell$dataset$sortVa : $cell.innerHTML;
    const valAsNumber = Number(val);
    return Number.isFinite(valAsNumber) ? valAsNumber // Exclude invalid numbers, infinity etc
    : val;
  }

  /**
   * Sortable table config
   *
   * @see {@link TableConfig}
   * @constant
   * @type {TableConfig}
   */
}

/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table)`} instead.
 * @param {InitOptions} [options]
 */
Table.defaults = Object.freeze({
  statusMessage: 'Sorted by %heading% (%direction%)',
  ascendingText: 'ascending',
  descendingText: 'descending'
});
/**
 * Sortable table config schema
 *
 * @constant
 * @satisfies {Schema<TableConfig>}
 */
Table.schema = Object.freeze({
  properties: {
    statusMessage: {
      type: 'string'
    },
    ascendingText: {
      type: 'string'
    },
    descendingText: {
      type: 'string'
    }
  }
});
/**
 * Name for the component used when initialising using data-module attributes
 */
Table.moduleName = 'nhsuk-table';
function initTables(options) {
  const {
    scope: $scope
  } = normaliseOptions.normaliseOptions(options);
  const $tables = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Table.moduleName}"]`);
  $tables == null || $tables.forEach($root => {
    new Table($root);
  });
}

/**
 * Table config
 *
 * @see {@link Table.defaults}
 * @typedef {object} TableConfig
 * @property {string} [statusMessage] - Status message
 * @property {string} [ascendingText] - Ascending text
 * @property {string} [descendingText] - Descending text
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.Table = Table;
exports.initTables = initTables;
//# sourceMappingURL=table.js.map
