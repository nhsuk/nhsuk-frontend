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

    const { i18n, bodyClass, captionClass, headClass, headerClass, rowClass } =
      this.config

    const $head = this.$root.querySelector(`thead.${headClass}`)
    if (!($head instanceof HTMLTableSectionElement)) {
      throw new ElementError({
        component: Table,
        element: $head,
        expectedType: 'HTMLTableSectionElement',
        identifier: `Table head (\`<thead class="${headClass}">\`)`
      })
    }

    this.$head = $head

    const $body = this.$root.querySelector(`tbody.${bodyClass}`)
    if (!($body instanceof HTMLTableSectionElement)) {
      throw new ElementError({
        component: Table,
        element: $body,
        expectedType: 'HTMLTableSectionElement',
        identifier: `Table body (\`<tbody class="${bodyClass}">\`)`
      })
    }

    this.$body = $body

    const $caption = this.$root.querySelector(`caption.${captionClass}`)
    if (!($caption instanceof HTMLTableCaptionElement)) {
      throw new ElementError({
        component: Table,
        element: $caption,
        expectedType: 'HTMLTableCaptionElement',
        identifier: `Table caption (\`<caption class="${captionClass}">\`)`
      })
    }

    this.$caption = $caption

    const $headers = Array.from(
      this.$head.querySelectorAll(`th.${headerClass}`)
    )

    if (
      !$headers.length ||
      !$headers.every(($header) => $header instanceof HTMLElement) ||
      !$headers.some(($header) => 'sort' in $header.dataset)
    ) {
      throw new ElementError({
        component: Table,
        identifier: `Table headers (\`<th class="${headerClass}">\`) with attribute (\`data-sort\`)`
      })
    }

    this.$headers = $headers

    const $rows = Array.from(this.$body.querySelectorAll(`.${rowClass}`))
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
    this.setupButtons()

    const $header = this.$headers.find(($header) =>
      $header.matches('[aria-sort="ascending"], [aria-sort="descending"]')
    )

    const index = this.getIndex($header)
    const direction = this.getDirection($header)

    // Apply initial sort
    this.sort(index, direction)
    this.update(index, direction)

    this.$head.addEventListener('click', (event) => this.handleSort(event))
  }

  setupButtons() {
    for (const $header of this.$headers) {
      if ('sort' in $header.dataset) {
        const $button = document.createElement('button')

        $button.setAttribute('type', 'button')
        $button.textContent = $header.textContent

        $header.textContent = ''
        $header.appendChild($button)
      }
    }
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  sort(index, direction = 'ascending') {
    if (!(direction === 'ascending' || direction === 'descending')) {
      return
    }

    this.$rows.sort(($rowA, $rowB) => {
      const $cellA = $rowA.querySelectorAll('td, th')[index]
      const $cellB = $rowB.querySelectorAll('td, th')[index]

      const [valueA, isNumericA] =
        direction === 'ascending'
          ? this.getValue($cellA)
          : this.getValue($cellB)

      const [valueB, isNumericB] =
        direction === 'ascending'
          ? this.getValue($cellB)
          : this.getValue($cellA)

      return isNumericA && isNumericB
        ? this.collators.number.compare(valueA, valueB)
        : this.collators.string.compare(valueA, valueB)
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
    if (!(direction === 'ascending' || direction === 'descending')) {
      return
    }

    for (const $row of this.$rows) {
      this.$body.append($row)
    }

    const $header = this.$headers[index]

    // Skip header updates unless direction has changed
    if (direction === this.getDirection($header)) {
      return
    }

    $header.setAttribute('aria-sort', direction)
    $header.firstElementChild?.setAttribute('aria-pressed', 'true')

    for (const $header of this.$headers) {
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

    this.updateScreenReaderStatusMessage(index, direction)
  }

  /**
   * @param {number} index
   * @param {TableSortDirection} [direction]
   */
  updateScreenReaderStatusMessage(index, direction = 'ascending') {
    const $header = this.$headers[index]

    this.$screenReaderStatusMessage.textContent = this.i18n.t(
      'sortAnnouncement',
      {
        header: $header.textContent.trim(),
        direction: this.i18n.t(direction)
      }
    )
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
    } else if (direction === 'descending') {
      directionNext = 'ascending'
    } else if (direction === 'ascending') {
      directionNext = 'descending'
    }

    return directionNext
  }

  /**
   * @param {HTMLElement} $cell
   * @returns {[string, boolean]} - Cell value and whether it is numeric
   */
  getValue($cell) {
    const { cellClass, headerClass } = this.config
    const { sortValue = $cell.textContent.trim() } = $cell.dataset

    const hasFormatNumeric =
      $cell.classList.contains(`${headerClass}--numeric`) ||
      $cell.classList.contains(`${cellClass}--numeric`)

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
      captionClass: { type: 'string' },
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
