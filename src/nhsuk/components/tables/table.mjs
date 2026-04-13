import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

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

    const $head = this.$root.querySelector('thead')
    const $body = this.$root.querySelector('tbody')

    if (!$head) {
      throw new ElementError({
        component: Table,
        identifier: 'Table head (`<thead>`)'
      })
    }

    if (!$body) {
      throw new ElementError({
        component: Table,
        identifier: 'Table body (`<tbody>`)'
      })
    }

    this.$head = $head
    this.$body = $body
    this.$caption = this.$root.querySelector('caption')

    this.$headings = Array.from(this.$head.querySelectorAll('th'))

    // Count headings which have an aria-sort attribute but which
    // do not already have a link inside them (for server-side
    // sorting)
    const hasSortableHeadings = this.$headings.some((heading) => {
      return heading.getAttribute('aria-sort') && !heading.querySelector('a')
    })

    if (hasSortableHeadings) {
      const $upArrow = document.querySelector('template.nhsuk-js-arrow-up-icon')
      const $downArrow = document.querySelector(
        'template.nhsuk-js-arrow-down-icon'
      )
      const $upDownArrow = document.querySelector(
        'template.nhsuk-js-arrow-up-down-icon'
      )

      if (!($upArrow instanceof HTMLTemplateElement)) {
        throw new ElementError({
          component: Table,
          identifier:
            'Arrow up icon template (`<template class="nhsuk-js-arrow-up-icon">`)'
        })
      }

      if (!($downArrow instanceof HTMLTemplateElement)) {
        throw new ElementError({
          component: Table,
          identifier:
            'Arrow down icon template (`<template class="nhsuk-js-arrow-down-icon">`)'
        })
      }

      if (!($upDownArrow instanceof HTMLTemplateElement)) {
        throw new ElementError({
          component: Table,
          identifier:
            'Arrow up-down icon template (`<template class="nhsuk-js-arrow-up-down-icon">`)'
        })
      }

      this.$upArrow = $upArrow
      this.$downArrow = $downArrow
      this.$upDownArrow = $upDownArrow

      this.$root.classList.add('nhsuk-table--with-sortable-columns')
      this.createHeadingButtons()
      this.updateCaption()
      this.updateDirectionIndicators()
      this.createStatusBox()
      this.initialiseSortedColumn()

      this.$head.addEventListener('click', this.onSortButtonClick.bind(this))
    }
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
    $button.dataset.index = `${index}`
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

    const columnNumber = Number.parseInt($sortButton?.dataset.index ?? '0', 10)

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
    const initialSortOrder = $heading.dataset.initialSort

    const columnNumber = Number.parseInt($button.dataset.index ?? '0', 10)

    let newSortDirection

    if (sortDirection === 'descending') {
      newSortDirection = 'ascending'
    } else if (sortDirection === 'ascending') {
      newSortDirection = 'descending'
    } else {
      if (
        initialSortOrder === 'ascending' ||
        initialSortOrder === 'descending'
      ) {
        newSortDirection = initialSortOrder
      } else {
        newSortDirection = 'ascending'
      }
    }

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

    message = message.replace(/%heading%/, $button.textContent.trim())
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
            $button.insertAdjacentHTML('beforeend', this.$upArrow.innerHTML)
            break
          case 'descending':
            $button.insertAdjacentHTML('beforeend', this.$downArrow.innerHTML)
            break
          default:
            $button.insertAdjacentHTML('beforeend', this.$upDownArrow.innerHTML)
        }
      }
    }
  }

  removeButtonStates() {
    for (const $heading of this.$headings) {
      if ($heading.hasAttribute('aria-sort')) {
        $heading.setAttribute('aria-sort', 'none')
      }
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

      return typeof valueA === 'number' && typeof valueB === 'number'
        ? valueA - valueB
        : valueA.toString().localeCompare(valueB.toString())
    })
  }

  /**
   * @param {HTMLElement} $cell
   */
  getCellValue($cell) {
    const val = $cell.dataset.sortValue ?? $cell.innerHTML
    const valAsNumber = Number(val)

    return Number.isFinite(valAsNumber)
      ? valAsNumber // Exclude invalid numbers, infinity etc
      : val
  }

  /**
   * Sortable table config
   *
   * @see {@link TableConfig}
   * @constant
   * @type {TableConfig}
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
   * @satisfies {Schema<TableConfig>}
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
  static moduleName = 'nhsuk-table'
}

/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table)`} instead.
 * @param {InitOptions} [options]
 */
export function initTables(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $tables = $scope?.querySelectorAll(
    `[data-module="${Table.moduleName}"]`
  )

  $tables?.forEach(($root) => {
    new Table($root)
  })
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
