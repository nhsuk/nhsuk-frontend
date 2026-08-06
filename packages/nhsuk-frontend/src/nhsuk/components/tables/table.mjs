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
   * @type {HTMLTableCellElement[]}
   */
  $headers = []

  /**
   * @type {HTMLElement[]}
   */
  $rows = []

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<TableConfig>} [config] - Sortable table config
   */
  constructor($root, config = {}) {
    super($root, config)

    const { i18n, bodyClass, headClass, headerClass, rowClass } = this.config

    this.$head = this.$root.querySelector(`thead.${headClass}`)
    this.$body = this.$root.querySelector(`tbody.${bodyClass}`)

    const $headers = this.$head
      ? Array.from(this.$head.querySelectorAll(`th.${headerClass}`))
      : []

    if (
      $headers.some(($header) => $header.querySelector('a')) ||
      !$headers.some(($header) => 'sort' in $header.dataset)
    ) {
      return this
    }

    if (
      $headers.length &&
      !$headers.every(($header) => $header instanceof HTMLElement)
    ) {
      throw new ElementError({
        component: Table,
        identifier: `Table headers (\`<th class="${headerClass}">\`) with attribute (\`data-sort\`)`
      })
    }

    this.$headers = $headers

    const $rows = this.$body
      ? Array.from(this.$body.querySelectorAll(`.${rowClass}`))
      : []

    if (!$rows.length || !$rows.every(($row) => $row instanceof HTMLElement)) {
      throw new ElementError({
        component: Table,
        identifier: `Table rows (\`<tr class="${rowClass}">\`)`
      })
    }

    this.$rows = $rows

    this.i18n = new I18n(i18n, {
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

    this.setup()
  }

  setup() {
    const { $head, $headers } = this
    if (!$head || !$headers.length) {
      return
    }

    this.setupButtons()

    const $header = $headers.find(($header) =>
      $header.matches('[aria-sort="ascending"], [aria-sort="descending"]')
    )

    const index = this.getIndex($header)
    const direction = this.getDirection($header)

    // Apply initial sort
    this.sort(index, direction)
    this.update(index, direction)

    $head.addEventListener('click', (event) => this.handleSort(event))
  }

  setupButtons() {
    for (const $header of this.$headers) {
      if ('sort' in $header.dataset) {
        const $button = document.createElement('button')

        $button.setAttribute('type', 'button')
        $button.classList.add('nhsuk-link')
        $button.innerHTML = $header.innerHTML

        $header.innerHTML = ''
        $header.appendChild($button)
      }
    }
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  sort(index, direction = 'ascending') {
    const { $rows, collators } = this

    if (
      !(direction === 'ascending' || direction === 'descending') ||
      !collators
    ) {
      return
    }

    $rows.sort(($rowA, $rowB) => {
      const valueA = this.getValue(index, $rowA)
      const valueB = this.getValue(index, $rowB)

      let collator = collators.string

      if (valueA.format === 'numeric' || valueB.format === 'numeric') {
        collator = collators.number

        // Sort string format before numeric unless sort value provided
        if (valueA.format !== 'numeric' && !valueA.sort) valueA.text = ''
        if (valueB.format !== 'numeric' && !valueB.sort) valueB.text = ''
      }

      const rank = collator.compare(valueA.text, valueB.text)
      return direction === 'ascending' ? rank : -rank
    })
  }

  /**
   * @param {MouseEvent} event - Click event
   */
  handleSort(event) {
    const $target = event.target
    if (!($target instanceof HTMLButtonElement)) {
      return
    }

    const { parentElement: $header } = $target
    if (!($header instanceof HTMLTableCellElement)) {
      return
    }

    const index = this.getIndex($header)
    const directionNext = this.getDirectionNext($header)

    this.sort(index, directionNext)
    this.update(index, directionNext)
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  update(index, direction = 'ascending') {
    const { $body, $headers, $rows, $screenReaderStatusMessage } = this

    if (
      !(direction === 'ascending' || direction === 'descending') ||
      !$body ||
      !$headers.length ||
      !$screenReaderStatusMessage
    ) {
      return
    }

    const $header = this.getHeader(index)

    for (const $row of $rows) {
      $body.append($row)
    }

    // Skip header updates unless direction has changed
    if (direction === this.getDirection($header)) {
      return
    }

    $header.setAttribute('aria-sort', direction)
    $header.firstElementChild?.setAttribute('aria-pressed', 'true')

    for (const $header of $headers) {
      const isActive = this.getIndex($header) === index

      const directionNext = isActive
        ? this.getDirectionNext($header)
        : this.getDirection($header)

      if (directionNext !== 'none') {
        $header.dataset.sortNext = directionNext
      }

      if (!isActive) {
        $header.removeAttribute('aria-sort')
        $header.firstElementChild?.removeAttribute('aria-pressed')
      }
    }

    $screenReaderStatusMessage.textContent = this.formatStatusMessage(
      index,
      direction
    )
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  formatStatusMessage(index, direction = 'ascending') {
    const { i18n } = this

    if (!(direction === 'ascending' || direction === 'descending') || !i18n) {
      return ''
    }

    return i18n.t('sortAnnouncement', {
      header: this.getHeader(index).innerText.trim(),
      direction: i18n.t(direction)
    })
  }

  /**
   * @param {number} index
   */
  getHeader(index) {
    const { headerClass } = this.config

    const $header = this.$headers[index]
    if (!($header instanceof HTMLTableCellElement)) {
      throw new ElementError({
        component: Table,
        element: $header,
        expectedType: 'HTMLTableCellElement',
        identifier: `Table header (\`<th class="${headerClass}">\`)`
      })
    }

    return $header
  }

  /**
   * @param {HTMLTableCellElement | null} [$header]
   */
  getIndex($header) {
    return $header ? this.$headers.indexOf($header) : -1
  }

  /**
   * @param {HTMLElement | null} [$header]
   * @returns {TableSortDirection}
   */
  getDirection($header) {
    const direction = $header?.getAttribute('aria-sort')
    return direction === 'ascending' || direction === 'descending'
      ? direction
      : 'none'
  }

  /**
   * @param {HTMLElement | null} [$header]
   * @returns {TableSortDirection}
   */
  getDirectionNext($header) {
    const direction = this.getDirection($header)
    const { sortNext } = $header?.dataset ?? {}

    /** @type {'ascending' | 'descending'} */
    let directionNext = 'ascending'

    if (
      direction !== sortNext &&
      (sortNext === 'ascending' || sortNext === 'descending')
    ) {
      directionNext = sortNext
    } else if (direction === 'ascending') {
      directionNext = 'descending'
    }

    return directionNext
  }

  /**
   * @param {number} index
   * @param {HTMLElement} [$row]
   * @returns {{ sort: string | undefined, text: string, format: 'numeric' | 'string' }}
   */
  getValue(index, $row) {
    const { cellClass, headerClass } = this.config

    const $header = this.getHeader(index)
    const $cell = $row?.querySelectorAll('td, th')[index] ?? $header

    const innerText = $cell.innerText.trim()
    const sortValue = $cell.dataset.sortValue?.trim()

    const value = normaliseString(sortValue ?? innerText)

    const hasFormatNumeric =
      $cell.classList.contains(`${headerClass}--numeric`) ||
      $cell.classList.contains(`${cellClass}--numeric`) ||
      typeof value === 'number'

    return {
      sort: sortValue,
      text: value?.toString() ?? '',
      format: hasFormatNumeric ? 'numeric' : 'string'
    }
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
    bodyClass: 'nhsuk-table__body',
    cellClass: 'nhsuk-table__cell',
    headClass: 'nhsuk-table__head',
    headerClass: 'nhsuk-table__header',
    rowClass: 'nhsuk-table__row',
    i18n: {
      sortAnnouncement: 'Sorted by %{header} (%{direction})',
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
      bodyClass: { type: 'string' },
      cellClass: { type: 'string' },
      headClass: { type: 'string' },
      headerClass: { type: 'string' },
      rowClass: { type: 'string' },
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
 * @property {string} bodyClass - Table body class for `<tbody>` element
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
