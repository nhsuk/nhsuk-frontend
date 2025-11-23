import { closestAttributeValue } from '../../common/closest-attribute-value.mjs'
import {
  normaliseOptions,
  validateConfig
} from '../../common/configuration/index.mjs'
import { formatErrorMessage } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ConfigError, ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * Select component
 *
 * @augments ConfigurableComponent<SelectConfig>
 */
export class Select extends ConfigurableComponent {
  /** @type {HTMLInputElement | null} */
  $input = null

  /** @type {HTMLUListElement | null} */
  $menu = null

  /** @type {string | null} */
  activeOptionId = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {SelectConfig} [config] - Select config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $select = this.$root.querySelector('.nhsuk-js-select')
    if (!($select instanceof HTMLSelectElement)) {
      throw new ElementError({
        component: Select,
        element: $select,
        expectedType: 'HTMLSelectElement',
        identifier: 'Form field (`.nhsuk-js-select`)'
      })
    }

    // Check for valid config
    const errors = validateConfig(Select.schema, this.config)
    if (errors[0]) {
      throw new ConfigError(formatErrorMessage(Select, errors[0]))
    }

    this.i18n = new I18n(this.config.i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    })

    this.$select = $select
    this.$input = this.$root.querySelector('input.nhsuk-select__input')
    this.$menu = this.$root.querySelector('ul.nhsuk-select__menu')

    // Create and append the status text
    const $screenReaderStatusMessage = document.createElement('div')
    $screenReaderStatusMessage.className = 'nhsuk-hint'
    $screenReaderStatusMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderStatusMessage = $screenReaderStatusMessage
    this.$select.insertAdjacentElement('afterend', $screenReaderStatusMessage)

    // Create and append a combobox to contain the combobox input and menu
    const $combobox = document.createElement('div')
    $combobox.className = 'nhsuk-select__combobox'
    this.$combobox = $combobox
    this.$select.insertAdjacentElement('afterend', $combobox)

    this.updateStatusMessage()

    // Save bound functions so we can remove event listeners when unnecessary
    this.handleTabKey = this.onTabKey.bind(this)

    document.addEventListener('click', (event) =>
      this.handleDocumentClick(event)
    )

    this.setupInput()
    this.setupMenu()
    this.hideSelect()
    this.bindChangeEvents()
  }

  /**
   * Visually hide select
   */
  hideSelect() {
    this.$select.setAttribute('aria-hidden', 'true')
    this.$select.setAttribute('tabindex', '-1')
    this.$select.removeAttribute('id')
    this.$select.className = 'nhsuk-u-visually-hidden'
  }

  /**
   * Bind change events
   */
  bindChangeEvents() {
    if (!this.$input) {
      return
    }

    this.$input.addEventListener('click', (e) => this.handleInputClick(e))
    this.$input.addEventListener('keyup', (e) => this.handleInputKeyUp(e))
  }

  /**
   * Setup replacement input component
   */
  setupInput() {
    const $input = document.createElement('input')
    $input.className = 'nhsuk-input nhsuk-select__input'
    $input.setAttribute('aria-autocomplete', 'list')
    $input.setAttribute('aria-controls', this.getMenuId())
    $input.setAttribute('aria-expanded', 'false')
    $input.setAttribute('autocapitalize', 'none')
    $input.setAttribute('autocomplete', 'off')
    $input.setAttribute('id', this.$select.id)
    $input.setAttribute('role', 'combobox')

    const selected = this.$select.options[this.$select.selectedIndex]
    if (!this.isEmpty(selected.value)) {
      $input.value = this.$select.options[this.$select.selectedIndex].text
    }

    this.$input = $input

    this.$combobox.append(this.$input)
  }

  /**
   * @param {MouseEvent} event - Event
   */
  handleInputClick(event) {
    this.removeMenuOptions()

    const options = this.getAllValidOptions()
    this.buildMenu(options)

    const target = event.currentTarget
    if (target instanceof HTMLInputElement) {
      target.select()
    }
  }

  /**
   * @param {KeyboardEvent} event - Key press event
   */
  handleInputKeyUp(event) {
    const ignoredKeys = [
      'Escape',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight',
      ' ',
      'Enter',
      'Tab',
      'Shift'
    ]

    if (ignoredKeys.includes(event.key)) {
      return
    }

    if (event.key === 'ArrowDown') {
      this.handleInputArrowDownKey()
      return
    }

    this.handleInputType()
  }

  handleInputType() {
    if (!this.$input) {
      return
    }

    if (this.isEmpty(this.$input.value)) {
      this.closeMenu()
    } else {
      const options = this.getAllMatchingOptions(this.$input.value)
      this.buildMenu(options)
      this.updateResultsCountMessage(options.length)
    }

    this.updateSelect()
  }

  handleInputArrowDownKey() {
    if (!this.$input) {
      return
    }

    const value = this.$input.value
    // If empty value, or value exactly matches an option, show all options
    if (this.isEmpty(value) || this.isExactMatch(value)) {
      const options = this.getAllValidOptions()
      this.buildMenu(options)

      const option = this.getFirstOption()
      if (option) {
        this.highlightOption(option)
      }
    } else {
      const options = this.getAllMatchingOptions(value)
      if (options.length > 0) {
        this.buildMenu(options)

        const option = this.getFirstOption()
        if (option) {
          this.highlightOption(option)
        }
      }
    }
  }

  focusInput() {
    if (this.$input) {
      this.$input.focus()
    }
  }

  /**
   * Setup menu
   */
  setupMenu() {
    if (!this.$input) {
      return
    }

    const $menu = document.createElement('ul')
    $menu.className = 'nhsuk-select__menu'
    $menu.setAttribute('aria-labelled-by', this.$input.id)
    $menu.setAttribute('id', this.getMenuId())
    $menu.setAttribute('role', 'listbox')
    $menu.hidden = true

    $menu.addEventListener('click', (event) => {
      if (event.target instanceof Element) {
        const option = event.target.closest('[role=option]')

        if (option instanceof HTMLLIElement) {
          this.selectOption(option)
        }
      }
    })

    $menu.addEventListener('keydown', (event) => {
      this.handleMenuKeyDown(event)
    })

    this.$menu = $menu

    this.$combobox.append($menu)
  }

  /**
   * Build menu with options from select
   *
   * @param {HTMLOptionElement[]} options - Array of option elements
   */
  buildMenu(options) {
    if (!this.$menu) {
      return
    }

    this.removeMenuOptions()
    this.activeOptionId = null

    if (options.length) {
      this.openMenu()

      options.forEach((option, index) => {
        this.$menu?.append(this.getOptionHtml(index, option))
      })
    } else {
      this.closeMenu()
    }
  }

  /**
   * Open menu
   */
  openMenu() {
    if (!this.$input || !this.$menu) {
      return
    }

    this.$input.setAttribute('aria-expanded', 'true')
    this.$menu.hidden = false

    // Add tab key listener to close menu
    document.addEventListener('keydown', this.handleTabKey)
  }

  /**
   * Close menu
   */
  closeMenu() {
    if (!this.$input || !this.$menu) {
      return
    }

    this.removeMenuOptions()
    this.updateStatusMessage()
    this.handleInvalidInput(this.$input)

    this.activeOptionId = null
    this.$input.setAttribute('aria-expanded', 'false')
    this.$menu.hidden = true

    // Remove tab key listener to close menu
    document.removeEventListener('keydown', this.handleTabKey)
  }

  /**
   * Remove menu items from the DOM
   */
  removeMenuOptions() {
    if (this.$menu) {
      this.$menu.innerHTML = ''
    }
  }

  /**
   * Get ID of options menu
   *
   * @returns {string} Options menu ID
   */
  getMenuId() {
    return `nhsuk-select__menu-${this.$select.id}`
  }

  /**
   * Indicate if currently entered value is invalid
   *
   * @param {HTMLInputElement} $input - Search input
   */
  handleInvalidInput($input) {
    const matchingOption = this.getMatchingOption($input.value)
    $input.classList.toggle(
      'nhsuk-select__input--invalid',
      matchingOption === undefined && !this.isEmpty($input.value)
    )
  }

  /**
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuKeyDown(event) {
    if (!this.$input) {
      return
    }

    switch (event.key) {
      case 'ArrowUp':
        this.handleMenuArrowUpKey(event) // Highlight previous menu option
        break
      case 'ArrowDown':
        this.handleMenuArrowDownKey(event) // Highlight next menu option
        break
      case 'Enter':
      case ' ':
        this.handleMenuEnterKey(event) // Select menu option
        break
      case 'Escape':
        this.handleMenuEscapeKey() // Hide menu
        break
      case 'Tab':
        this.closeMenu()
        break
      default:
        this.$input.focus()
    }
  }

  /**
   * Handle Enter (or Space) keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuEnterKey(event) {
    if (this.isOptionSelected()) {
      this.selectActiveOption()
    }

    event.preventDefault()
  }

  /**
   * Handle Arrow Down keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuArrowDownKey(event) {
    const option = this.getNextOption()

    if (option) {
      this.highlightOption(option)
    }

    event.preventDefault()
  }

  /**
   * Handle Arrow Up keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuArrowUpKey(event) {
    if (this.isOptionSelected()) {
      const option = this.getPreviousOption()

      if (option) {
        this.highlightOption(option)
      } else {
        this.focusInput()
        this.closeMenu()
      }
    }

    event.preventDefault()
  }

  /**
   * @param {MouseEvent} event - Event
   */
  handleDocumentClick(event) {
    if (
      event.target instanceof Node &&
      !this.$combobox.contains(event.target)
    ) {
      this.closeMenu()
    }
  }

  /**
   * Tab key handler
   *
   * This function is called when the user tabs away from the search input.
   *
   * @param {KeyboardEvent} event - Key press event
   */
  onTabKey(event) {
    if (event.key === 'Tab') {
      this.closeMenu()
    }
  }

  /**
   * Tear down menu and return focus to input
   */
  handleMenuEscapeKey() {
    this.removeMenuOptions()
    this.closeMenu()
    this.focusInput()
  }

  /**
   * Highlight menu option and scroll into position if needed
   *
   * @param {HTMLLIElement} option - Menu option element
   */
  highlightOption(option) {
    if (!this.$menu) {
      return
    }

    if (this.activeOptionId) {
      const activeOption = this.$menu.querySelector(`#${this.activeOptionId}`)

      if (activeOption) {
        activeOption.setAttribute('aria-selected', 'false')
      }
    }

    option.setAttribute('aria-selected', 'true')

    if (!this.isOptionVisible(this.$menu, option)) {
      this.$menu.scrollTop = option.offsetTop
    }

    this.activeOptionId = option.id

    option.focus()
  }

  /**
   * Select menu option
   *
   * @param {HTMLLIElement} option - Option element
   */
  selectOption(option) {
    if (option.dataset.optionValue) {
      this.setValue(option.dataset.optionValue)
    }

    this.closeMenu()
    this.focusInput()
  }

  /**
   * Select active menu option
   */
  selectActiveOption() {
    const option = this.getActiveOption()

    if (option instanceof HTMLLIElement) {
      this.selectOption(option)
    }
  }
  /**
   * Get active menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  getActiveOption() {
    if (!this.$menu) {
      return
    }

    const activeOption = this.$menu.querySelector(`#${this.activeOptionId}`)

    return /** @type {HTMLLIElement|null|undefined} */ (activeOption)
  }

  /**
   * @returns {HTMLLIElement|null|undefined}
   */
  getFirstOption() {
    const firstOption = this.$menu?.firstElementChild

    return /** @type {HTMLLIElement|null|undefined} */ (firstOption)
  }

  /**
   * @returns {HTMLLIElement|null|undefined}
   */
  getPreviousOption() {
    if (!this.$menu) {
      return
    }

    const previousOption = this.$menu.querySelector(
      `#${this.activeOptionId}`
    )?.previousElementSibling

    return /** @type {HTMLLIElement|null|undefined} */ (previousOption)
  }

  /**
   * @returns {HTMLLIElement|null|undefined}
   */
  getNextOption() {
    if (!this.$menu) {
      return
    }

    const nextOption = this.$menu.querySelector(
      `#${this.activeOptionId}`
    )?.nextElementSibling

    return /** @type {HTMLLIElement|null|undefined} */ (nextOption)
  }

  /**
   * Get all disabled and non-empty options from select
   *
   * @returns {Array<HTMLOptionElement>} Options
   */
  getAllValidOptions() {
    return Array.from(this.$select.options)
      .filter((option) => !option.disabled)
      .filter((option) => !this.isEmpty(option.value))
  }

  /**
   * Get all valid options (with any synonyms) that match search value
   *
   * @param {string} value - Search value
   * @returns {Array<HTMLOptionElement>} Options
   */
  getAllMatchingOptions(value) {
    return this.getAllValidOptions().filter((option) => {
      let searchText = option.text.toLowerCase()

      if (option.dataset.synonyms) {
        searchText += option.dataset.synonyms.toLowerCase()
      }

      return searchText.includes(value.toLowerCase())
    })
  }

  /**
   * Get matching option that matches search value
   *
   * @param {string} value
   * @returns {HTMLOptionElement|undefined}
   */
  getMatchingOption(value) {
    return Array.from(this.$select.options).find(
      (option) => option.text.toLowerCase() === value.toLowerCase()
    )
  }

  /**
   * Update select with matched menu option
   */
  updateSelect() {
    if (!this.$input) {
      return
    }

    const option = this.getMatchingOption(this.$input.value)
    if (option) {
      this.$select.value = option.value
    } else {
      this.$select.value = ''
    }
  }

  /**
   * @returns {string|null}
   */
  isOptionSelected() {
    return this.activeOptionId
  }

  /**
   * @param {string} value
   * @returns {boolean}
   */
  isEmpty(value) {
    return value.trim() === ''
  }

  /**
   * @param {string} value
   * @returns {boolean}
   */
  isExactMatch(value) {
    const matchingOption = this.getMatchingOption(value)

    return matchingOption?.value === value
  }

  /**
   * @param {number} index - Index
   * @param {HTMLOptionElement} option - Menu option
   */
  getOptionHtml(index, option) {
    const $menuItem = document.createElement('li')
    $menuItem.className = 'nhsuk-select__option'
    $menuItem.dataset.optionValue = option.value
    $menuItem.textContent = option.text
    $menuItem.setAttribute('id', `nhsuk-select__option-${index}`)
    $menuItem.setAttribute('aria-selected', 'false')
    $menuItem.setAttribute('tabindex', '-1')
    $menuItem.setAttribute('role', 'option')

    if (option.dataset.hint) {
      const $hintText = this.getHintTextHtml(option.dataset.hint)
      $menuItem.append($hintText)
    }

    return $menuItem
  }

  /**
   * Get hint text HTML
   *
   * @param {string} hint - Hint text
   * @returns {HTMLSpanElement} Hint text HTML
   */
  getHintTextHtml(hint) {
    const $hint = document.createElement('span')
    $hint.className = 'nhsuk-select__hint'
    $hint.textContent = hint

    return $hint
  }

  /**
   * Update results count message
   *
   * @param {number|undefined} [count] - The number of search results
   */
  updateResultsCountMessage(count) {
    if (count === 0) {
      this.$screenReaderStatusMessage.textContent = this.i18n.t('noResultsText')
    } else {
      this.$screenReaderStatusMessage.textContent = this.i18n.t('resultsText', {
        count
      })
    }
  }

  /**
   * Update default status message
   */
  updateStatusMessage() {
    const options = this.getAllValidOptions()

    this.$screenReaderStatusMessage.textContent = this.i18n.t(
      'selectDescriptionText',
      {
        count: options.length
      }
    )
  }

  /**
   * Check if menu option is visible
   *
   * @param {HTMLUListElement} menu - Menu
   * @param {HTMLLIElement} option - Menu option
   * @returns {boolean} Menu option visible
   */
  isOptionVisible(menu, option) {
    const menuHeight = menu.clientHeight
    const optionHeight = option.clientHeight
    const menuTop = menu.getBoundingClientRect().top
    const optionTop = option.getBoundingClientRect().top

    return !(
      optionTop - menuTop < 0 || optionTop - menuTop + optionHeight > menuHeight
    )
  }

  /**
   *
   * @param {string} value
   * @returns {HTMLOptionElement|undefined}
   */
  getOption(value) {
    return Array.from(this.$select.options).find(
      (option) => option.value === value
    )
  }

  /**
   *
   * @param {string} value
   */
  setValue(value) {
    if (!this.$input) {
      return
    }

    this.$select.value = value

    if (this.isEmpty(value)) {
      this.$input.value = ''
    } else {
      const option = this.getOption(value)

      if (option) {
        this.$input.value = option.text
      }
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-select'

  /**
   * Select default config
   *
   * @see {@link SelectConfig}
   * @constant
   * @type {SelectConfig}
   */
  static defaults = Object.freeze({
    i18n: {
      noResultsText: 'No options found',
      resultsText: {
        one: '%{count} option found',
        other: '%{count} options found'
      },
      selectDescriptionText: 'Select an option or search (%{count} options)'
    }
  })

  /**
   * Select config schema
   *
   * @constant
   * @satisfies {Schema<SelectConfig>}
   */
  static schema = Object.freeze({
    properties: {
      i18n: { type: 'object' }
    }
  })
}

/**
 * Initialise select component
 *
 * @deprecated Use {@link createAll | `createAll(Select, options)`} instead.
 * @param {InitOptions & SelectConfig} [options]
 */
export function initSelects(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $selects = $scope?.querySelectorAll(
    `[data-module="${Select.moduleName}"]`
  )

  $selects?.forEach(($root) => {
    new Select($root, options)
  })
}

/**
 * Select config
 *
 * @see {@link Select.defaults}
 * @typedef {object} SelectConfig
 * @property {SelectTranslations} [i18n=Select.defaults.i18n] - Select translations
 */

/**
 * Select translations
 *
 * @see {@link Select.defaults.i18n}
 * @see {@link https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md}
 * @typedef {object} SelectTranslations
 *
 * Messages shown to users as they type. It provides feedback on how many
 * results have been returned This also includes a message used as an accessible
 * description for the select.
 * @property {string} [noResultsText] - Message displayed when no results returned.
 * @property {TranslationPluralForms} [resultsText] - Number of results.
 * @property {string} [selectDescriptionText] - Message made
 *   available to assistive technologies, if none is already present in the
 *   HTML, to describe how to interact with the component.
 */

/**
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
