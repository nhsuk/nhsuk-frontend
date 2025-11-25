import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Sortable table component
 *
 * @augments {ConfigurableComponent<SortableTableConfig>}
 */
export class SortableTable extends ConfigurableComponent {
  $upArrow = `
    <svg width="22" height="22" focusable="false" aria-hidden="true" role="img" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.4 8.3L10.4 3.3C10.6 3.1 10.8 3.00001 11.1 3.00001C11.4 3.00001 11.6 3.1 11.8 3.3L16.8 8.3C16.9444 8.49258 17.0145 8.73078 16.9975 8.97089C16.9804 9.211 16.8773 9.4369 16.7071 9.60711C16.5369 9.77732 16.311 9.88042 16.0709 9.89749C15.8308 9.91455 15.5926 9.84443 15.4 9.7L12.1 6.4L12.1 18C12.1 18.2652 11.9946 18.5196 11.8071 18.7071C11.6196 18.8946 11.3652 19 11.1 19C10.8348 19 10.5804 18.8946 10.3929 18.7071C10.2054 18.5196 10.1 18.2652 10.1 18L10.1 6.4L6.8 9.7C6.71404 9.81462 6.60445 9.90943 6.47866 9.97801C6.35286 10.0466 6.2138 10.0873 6.07089 10.0975C5.92798 10.1076 5.78455 10.087 5.65033 10.0369C5.5161 9.98677 5.3942 9.90842 5.29289 9.80711C5.19159 9.7058 5.11323 9.58391 5.06313 9.44968C5.01303 9.31545 4.99236 9.17203 5.00252 9.02911C5.01267 8.8862 5.05342 8.74714 5.122 8.62135C5.19058 8.49556 5.28538 8.38597 5.4 8.3Z" fill="currentColor"/>
    </svg>
  `

  $downArrow = `
    <svg width="22" height="22" focusable="false" aria-hidden="true" role="img" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6 13.7L11.6 18.7C11.4 18.9 11.2 19 10.9 19C10.6 19 10.4 18.9 10.2 18.7L5.2 13.7C5.05557 13.5074 4.98545 13.2692 5.00252 13.0291C5.01958 12.789 5.12268 12.5631 5.29289 12.3929C5.4631 12.2227 5.689 12.1196 5.92911 12.1025C6.16922 12.0854 6.40743 12.1556 6.6 12.3L9.9 15.6V4C9.9 3.73478 10.0054 3.48043 10.1929 3.29289C10.3804 3.10536 10.6348 3 10.9 3C11.1652 3 11.4196 3.10536 11.6071 3.29289C11.7946 3.48043 11.9 3.73478 11.9 4V15.6L15.2 12.3C15.286 12.1854 15.3956 12.0906 15.5213 12.022C15.6471 11.9534 15.7862 11.9127 15.9291 11.9025C16.072 11.8924 16.2154 11.913 16.3497 11.9631C16.4839 12.0132 16.6058 12.0916 16.7071 12.1929C16.8084 12.2942 16.8868 12.4161 16.9369 12.5503C16.987 12.6845 17.0076 12.828 16.9975 12.9709C16.9873 13.1138 16.9466 13.2529 16.878 13.3787C16.8094 13.5044 16.7146 13.614 16.6 13.7Z" fill="currentColor"/>
    </svg>
  `

  $upDownArrow = `
    <svg width="22" height="22" focusable="false" aria-hidden="true" role="img" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6 13.7L16.6 18.7C16.4 18.9 16.2 19 15.9 19C15.6 19 15.4 18.9 15.2 18.7L10.2 13.7C10.0556 13.5074 9.98545 13.2692 10.0025 13.0291C10.0196 12.789 10.1227 12.5631 10.2929 12.3929C10.4631 12.2227 10.689 12.1196 10.9291 12.1025C11.1692 12.0854 11.4074 12.1556 11.6 12.3L14.9 15.6V4C14.9 3.73478 15.0054 3.48043 15.1929 3.29289C15.3804 3.10536 15.6348 3 15.9 3C16.1652 3 16.4196 3.10536 16.6071 3.29289C16.7946 3.48043 16.9 3.73478 16.9 4V15.6L20.2 12.3C20.286 12.1854 20.3956 12.0906 20.5213 12.022C20.6471 11.9534 20.7862 11.9127 20.9291 11.9025C21.072 11.8924 21.2154 11.913 21.3497 11.9631C21.4839 12.0132 21.6058 12.0916 21.7071 12.1929C21.8084 12.2942 21.8868 12.4161 21.9369 12.5503C21.987 12.6845 22.0076 12.828 21.9975 12.9709C21.9873 13.1138 21.9466 13.2529 21.878 13.3787C21.8094 13.5044 21.7146 13.614 21.6 13.7Z" fill="currentColor"/>
      <path d="M0.400001 8.3L5.4 3.3C5.6 3.1 5.8 3.00001 6.1 3.00001C6.4 3.00001 6.6 3.1 6.8 3.3L11.8 8.3C11.9444 8.49258 12.0145 8.73078 11.9975 8.97089C11.9804 9.211 11.8773 9.4369 11.7071 9.60711C11.5369 9.77732 11.311 9.88042 11.0709 9.89749C10.8308 9.91455 10.5926 9.84443 10.4 9.7L7.1 6.4L7.1 18C7.1 18.2652 6.99464 18.5196 6.80711 18.7071C6.61957 18.8946 6.36522 19 6.1 19C5.83478 19 5.58043 18.8946 5.39289 18.7071C5.20536 18.5196 5.1 18.2652 5.1 18L5.1 6.4L1.8 9.7C1.71404 9.81462 1.60445 9.90943 1.47866 9.97801C1.35286 10.0466 1.2138 10.0873 1.07089 10.0975C0.927978 10.1076 0.784553 10.087 0.650325 10.0369C0.516098 9.98677 0.394202 9.90842 0.292894 9.80711C0.191585 9.7058 0.113229 9.58391 0.0631299 9.44968C0.0130312 9.31545 -0.00763965 9.17203 0.00251678 9.02911C0.0126732 8.8862 0.05342 8.74714 0.121998 8.62135C0.190576 8.49556 0.285383 8.38597 0.400001 8.3Z" fill="currentColor"/>
    </svg>
  `

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<SortableTableConfig>} [config] - Sortable table config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $head = this.$root.querySelector('thead')
    const $body = this.$root.querySelector('tbody')

    if (!$head) {
      throw new ElementError({
        component: SortableTable,
        identifier: 'Table head (`<thead>`)'
      })
    }

    if (!$body) {
      throw new ElementError({
        component: SortableTable,
        identifier: 'Table body (`<tbody>`)'
      })
    }

    this.$head = $head
    this.$body = $body
    this.$caption = this.$root.querySelector('caption')

    this.$headings = Array.from(this.$head.querySelectorAll('th'))

    this.createHeadingButtons()
    this.updateCaption()
    this.updateDirectionIndicators()
    this.createStatusBox()
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
   * @param {HTMLTableCellElement} $heading
   */
  createHeadingButton($heading) {
    const index = this.$headings.indexOf($heading)
    const $button = document.createElement('button')

    $button.setAttribute('type', 'button')
    $button.setAttribute('data-index', `${index}`)
    $button.textContent = $heading.textContent

    $heading.textContent = ''
    $heading.appendChild($button)
  }

  createStatusBox() {
    this.$status = document.createElement('div')

    this.$status.setAttribute('aria-atomic', 'true')
    this.$status.setAttribute('aria-live', 'polite')
    this.$status.setAttribute('class', 'nhsuk-u-visually-hidden')
    this.$status.setAttribute('role', 'status')

    this.$root.insertAdjacentElement('afterend', this.$status)
  }

  initialiseSortedColumn() {
    const $rows = this.getTableRowsArray()

    const $heading = this.$root.querySelector(
      'th[aria-sort="ascending"], th[aria-sort="descending"]'
    )
    const $sortButton = $heading?.querySelector('button')
    const sortDirection = $heading?.getAttribute('aria-sort')

    const columnNumber = Number.parseInt(
      $sortButton?.getAttribute('data-index') ?? '0',
      10
    )

    if (
      !$heading ||
      !$sortButton ||
      !(sortDirection === 'ascending' || sortDirection === 'descending')
    ) {
      return
    }

    const $sortedRows = this.sort($rows, columnNumber, sortDirection)
    this.addRows($sortedRows)
  }

  /**
   * @param {MouseEvent} event - Click event
   */
  onSortButtonClick(event) {
    const $target = /** @type {HTMLElement} */ (event.target)
    const $button = $target.closest('button')

    if (!$button?.parentElement) {
      return
    }

    const $heading = $button.parentElement
    const sortDirection = $heading.getAttribute('aria-sort')

    const columnNumber = Number.parseInt(
      $button.getAttribute('data-index') ?? '0',
      10
    )

    const newSortDirection =
      sortDirection === 'none' || sortDirection === 'descending'
        ? 'ascending'
        : 'descending'

    const $rows = this.getTableRowsArray()
    const $sortedRows = this.sort($rows, columnNumber, newSortDirection)

    this.addRows($sortedRows)
    this.removeButtonStates()
    this.updateButtonState($button, newSortDirection)
    this.updateDirectionIndicators()
  }

  updateCaption() {
    if (!this.$caption) {
      return
    }

    let assistiveText = this.$caption.querySelector('.nhsuk-u-visually-hidden')
    if (assistiveText) {
      return
    }

    assistiveText = document.createElement('span')
    assistiveText.classList.add('nhsuk-u-visually-hidden')
    assistiveText.textContent = ' (column headers with buttons are sortable).'

    this.$caption.appendChild(assistiveText)
  }

  /**
   * @param {HTMLButtonElement} $button
   * @param {string} direction
   */
  updateButtonState($button, direction) {
    const { config, $status } = this

    if (
      !(direction === 'ascending' || direction === 'descending') ||
      !$button.parentElement ||
      !config.statusMessage ||
      !$status
    ) {
      return
    }

    const directionText = config[`${direction}Text`]
    if (!directionText) {
      return
    }

    $button.parentElement.setAttribute('aria-sort', direction)
    let message = config.statusMessage

    message = message.replace(/%heading%/, $button.textContent)
    message = message.replace(/%direction%/, directionText)
    $status.textContent = message
  }

  updateDirectionIndicators() {
    for (const $heading of this.$headings) {
      const $button = $heading.querySelector('button')

      if ($heading.hasAttribute('aria-sort') && $button) {
        const direction = $heading.getAttribute('aria-sort')
        $button.querySelector('svg')?.remove()

        switch (direction) {
          case 'ascending':
            $button.insertAdjacentHTML('beforeend', this.$upArrow)
            break
          case 'descending':
            $button.insertAdjacentHTML('beforeend', this.$downArrow)
            break
          default:
            $button.insertAdjacentHTML('beforeend', this.$upDownArrow)
        }
      }
    }
  }

  removeButtonStates() {
    for (const $heading of this.$headings) {
      $heading.setAttribute('aria-sort', 'none')
    }
  }

  /**
   * @param {HTMLTableRowElement[]} $rows
   */
  addRows($rows) {
    for (const $row of $rows) {
      this.$body.append($row)
    }
  }

  getTableRowsArray() {
    return Array.from(this.$body.querySelectorAll('tr'))
  }

  /**
   * @param {HTMLTableRowElement[]} $rows
   * @param {number} columnNumber
   * @param {string} sortDirection
   */
  sort($rows, columnNumber, sortDirection) {
    return $rows.sort(($rowA, $rowB) => {
      const $tdA = $rowA.querySelectorAll('td, th')[columnNumber]
      const $tdB = $rowB.querySelectorAll('td, th')[columnNumber]

      if (!($tdA instanceof HTMLElement) || !($tdB instanceof HTMLElement)) {
        return 0
      }

      const valueA =
        sortDirection === 'ascending'
          ? this.getCellValue($tdA)
          : this.getCellValue($tdB)

      const valueB =
        sortDirection === 'ascending'
          ? this.getCellValue($tdB)
          : this.getCellValue($tdA)

      return !(typeof valueA === 'number' && typeof valueB === 'number')
        ? valueA.toString().localeCompare(valueB.toString())
        : valueA - valueB
    })
  }

  /**
   * @param {HTMLElement} $cell
   */
  getCellValue($cell) {
    const val = $cell.getAttribute('data-sort-value') ?? $cell.innerHTML
    const valAsNumber = Number(val)

    return Number.isFinite(valAsNumber)
      ? valAsNumber // Exclude invalid numbers, infinity etc
      : val
  }

  /**
   * Sortable table config
   *
   * @see {@link SortableTableConfig}
   * @constant
   * @type {SortableTableConfig}
   */
  static defaults = Object.freeze({
    statusMessage: 'Sort by %heading% (%direction%)',
    ascendingText: 'ascending',
    descendingText: 'descending'
  })

  /**
   * Sortable table config schema
   *
   * @constant
   * @satisfies {Schema<SortableTableConfig>}
   */
  static schema = Object.freeze({
    properties: {
      statusMessage: { type: 'string' },
      ascendingText: { type: 'string' },
      descendingText: { type: 'string' }
    }
  })

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-sortable-table'
}

/**
 * Initialise sortable table component
 *
 * @deprecated Use {@link createAll | `createAll(SortableTable)`} instead.
 * @param {InitOptions} [options]
 */
export function initSortableTables(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $sortableTables = $scope?.querySelectorAll(
    `[data-module="${SortableTable.moduleName}"]`
  )

  $sortableTables?.forEach(($root) => {
    new SortableTable($root)
  })
}

/**
 * Sortable table config
 *
 * @typedef {object} SortableTableConfig
 * @property {string} [statusMessage] - Status message
 * @property {string} [ascendingText] - Ascending text
 * @property {string} [descendingText] - Descending text
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
