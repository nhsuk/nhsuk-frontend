import { closestAttributeValue } from '../../common/closest-attribute-value.mjs'
import { normaliseOptions } from '../../common/configuration/index.mjs'
import { normaliseString } from '../../common/configuration/normalise-string.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * Table component
 *
 * @augments {ConfigurableComponent<TableConfig>}
 */
export class Table extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<TableConfig>} [config] - Sortable table config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $head = this.$root.querySelector('.nhsuk-table__head')
    if (!($head instanceof HTMLTableSectionElement)) {
      throw new ElementError({
        component: Table,
        element: $head,
        expectedType: 'HTMLTableSectionElement',
        identifier: 'Table head (`<thead class="nhsuk-table__head">`)'
      })
    }

    this.$head = $head

    const $body = this.$root.querySelector('.nhsuk-table__body')
    if (!($body instanceof HTMLTableSectionElement)) {
      throw new ElementError({
        component: Table,
        element: $body,
        expectedType: 'HTMLTableSectionElement',
        identifier: 'Table body (`<tbody class="nhsuk-table__body">`)'
      })
    }

    this.$body = $body

    const $caption = this.$root.querySelector('.nhsuk-table__caption')
    if (!($caption instanceof HTMLTableCaptionElement)) {
      throw new ElementError({
        component: Table,
        element: $caption,
        expectedType: 'HTMLTableCaptionElement',
        identifier: 'Table caption (`<caption class="nhsuk-table__caption">`)'
      })
    }

    this.$caption = $caption

    const $headings = Array.from(
      this.$head.querySelectorAll('.nhsuk-table__header')
    )

    if (
      !$headings.length ||
      !$headings.every(($heading) => $heading instanceof HTMLElement)
    ) {
      throw new ElementError({
        component: Table,
        identifier:
          'Table headings (`<th class="nhsuk-table__header">`) with sortable columns'
      })
    }

    this.$headings = $headings

    const $rows = Array.from(this.$body.querySelectorAll('.nhsuk-table__row'))
    if (!$rows.length || !$rows.every(($row) => $row instanceof HTMLElement)) {
      throw new ElementError({
        component: Table,
        identifier: 'Table rows (`<tr class="nhsuk-table__row">`)'
      })
    }

    this.$rows = $rows

    this.i18n = new I18n(this.config.i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    })

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
    })

    // Create and append the status text for screen readers
    this.$screenReaderStatusMessage = document.createElement('div')
    this.$screenReaderStatusMessage.setAttribute('aria-atomic', 'true')
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderStatusMessage.setAttribute('role', 'status')
    this.$screenReaderStatusMessage.classList.add('nhsuk-u-visually-hidden')

    this.$root.insertAdjacentElement(
      'afterend',
      this.$screenReaderStatusMessage
    )

    this.createHeadingButtons()
    this.initialiseSortedColumn()

    this.$head.addEventListener('click', this.onSortButtonClick.bind(this))
  }

  createHeadingButtons() {
    for (const $heading of this.$headings) {
      if ($heading.hasAttribute('aria-sort')) {
        this.createHeadingButton($heading)
      }
    }
  }

  /**
   * @param {HTMLElement} $heading
   */
  createHeadingButton($heading) {
    const $button = document.createElement('button')

    $button.setAttribute('type', 'button')
    $button.textContent = $heading.textContent

    $heading.textContent = ''
    $heading.appendChild($button)
  }

  initialiseSortedColumn() {
    const $heading = this.$headings.find(($heading) =>
      $heading.matches('[aria-sort="ascending"], [aria-sort="descending"]')
    )

    const index = this.getIndex($heading)
    if (!$heading || index < 0) {
      return
    }

    const sortDirection = $heading.getAttribute('aria-sort')
    if (!(sortDirection === 'ascending' || sortDirection === 'descending')) {
      return
    }

    const $sortedRows = this.sort(index, sortDirection)
    this.addRows($sortedRows)
  }

  /**
   * @param {MouseEvent} event - Click event
   */
  onSortButtonClick(event) {
    const $target = /** @type {HTMLElement} */ (event.target)
    const $button = $target.closest('button')

    const $heading = $button?.parentElement
    const index = this.getIndex($heading)
    if (!$heading || index < 0) {
      return
    }

    const sortDirection = $heading.getAttribute('aria-sort')
    const { sortFirstDirection } = $heading.dataset

    /** @type {'ascending' | 'descending'} */
    let newSortDirection

    if (sortDirection === 'descending') {
      newSortDirection = 'ascending'
    } else if (sortDirection === 'ascending') {
      newSortDirection = 'descending'
    } else if (
      sortFirstDirection === 'ascending' ||
      sortFirstDirection === 'descending'
    ) {
      newSortDirection = sortFirstDirection
    } else {
      newSortDirection = 'ascending'
    }

    const $sortedRows = this.sort(index, newSortDirection)

    this.addRows($sortedRows)
    this.removeButtonStates()
    this.updateColumnState($heading, newSortDirection)
  }

  /**
   * @param {Element} $heading
   * @param {'ascending' | 'descending'} direction
   */
  updateColumnState($heading, direction) {
    $heading.setAttribute('aria-sort', direction)

    this.$screenReaderStatusMessage.textContent = this.i18n.t(
      'sortAnnouncement',
      {
        heading: $heading.textContent.trim(),
        direction: this.i18n.t(direction)
      }
    )
  }

  removeButtonStates() {
    for (const $heading of this.$headings) {
      if ($heading.hasAttribute('aria-sort')) {
        $heading.setAttribute('aria-sort', 'none')
      }
    }
  }

  /**
   * @param {HTMLElement[]} $rows
   */
  addRows($rows) {
    for (const $row of $rows) {
      this.$body.append($row)
    }
  }

  /**
   * @param {number} index
   * @param {string} sortDirection
   */
  sort(index, sortDirection) {
    return this.$rows.sort(($rowA, $rowB) => {
      const $cellA = $rowA.querySelectorAll('td, th')[index]
      const $cellB = $rowB.querySelectorAll('td, th')[index]

      const [valueA, isNumericA] =
        sortDirection === 'ascending'
          ? this.getValue($cellA)
          : this.getValue($cellB)

      const [valueB, isNumericB] =
        sortDirection === 'ascending'
          ? this.getValue($cellB)
          : this.getValue($cellA)

      return isNumericA && isNumericB
        ? this.collators.number.compare(valueA, valueB)
        : this.collators.string.compare(valueA, valueB)
    })
  }

  /**
   * @param {HTMLElement | null} [$heading]
   */
  getIndex($heading) {
    return $heading ? this.$headings.indexOf($heading) : -1
  }

  /**
   * @param {HTMLElement} $cell
   * @returns {[string, boolean]} - Cell value and whether it is numeric
   */
  getValue($cell) {
    const { sortValue = $cell.textContent.trim() } = $cell.dataset

    const hasFormatNumeric =
      $cell.classList.contains('nhsuk-table__header--numeric') ||
      $cell.classList.contains('nhsuk-table__cell--numeric')

    const output = normaliseString(sortValue)
    const numeric = hasFormatNumeric || typeof output === 'number'

    return [output?.toString() ?? '', numeric]
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-table'

  /**
   * Sortable table config
   *
   * @see {@link TableConfig}
   * @constant
   * @type {TableConfig}
   */
  static defaults = Object.freeze({
    i18n: {
      sortAnnouncement: 'Sorted by %{heading} (%{direction})',
      ascending: 'ascending',
      descending: 'descending'
    }
  })

  /**
   * Sortable table config schema
   *
   * @constant
   * @satisfies {Schema<TableConfig>}
   */
  static schema = Object.freeze({
    properties: {
      i18n: { type: 'object' }
    }
  })
}

/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table, options)`} instead.
 * @param {InitOptions & Partial<TableConfig>} [options]
 */
export function initTables(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $tables = $scope?.querySelectorAll(
    `[data-module="${Table.moduleName}"]`
  )

  $tables?.forEach(($root) => {
    new Table($root, options)
  })
}

/**
 * Table config
 *
 * @see {@link Table.defaults}
 * @typedef {object} TableConfig
 * @property {TableTranslations} [i18n=Table.defaults.i18n] - Table translations
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
