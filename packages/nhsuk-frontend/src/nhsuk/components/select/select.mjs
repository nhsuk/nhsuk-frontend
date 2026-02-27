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
  /** @type {HTMLButtonElement | null} */
  $button = null

  /** @type {HTMLInputElement | null} */
  $input = null

  /** @type {HTMLButtonElement | HTMLInputElement | null} */
  $invoker = null

  /** @type {HTMLUListElement | null} */
  $menu = null

  /** @type {HTMLDivElement | null} */
  $screenReaderStatusMessage = null

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
    this.$button = this.$root.querySelector('button.nhsuk-select__button')
    this.$input = this.$root.querySelector('input.nhsuk-select__input')
    this.$menu = this.$root.querySelector('ul.nhsuk-select__menu')

    // Create and append a wrapper to contain input/button and menu
    const $wrapper = document.createElement('div')
    $wrapper.className = 'nhsuk-select-wrapper'
    this.$wrapper = $wrapper
    this.$select.insertAdjacentElement('afterend', $wrapper)

    if (this.$root.dataset.search === '') {
      // Create and append the status text
      const $screenReaderStatusMessage = document.createElement('div')
      $screenReaderStatusMessage.className = 'nhsuk-hint'
      $screenReaderStatusMessage.setAttribute('aria-live', 'polite')
      this.$screenReaderStatusMessage = $screenReaderStatusMessage
      this.$wrapper.before($screenReaderStatusMessage)

      this.updateStatusMessage()

      this.setupInput()
      this.$invoker = this.$input
    } else {
      this.setupButton()
      this.$invoker = this.$button
    }

    // Save bound functions so we can remove event listeners when unnecessary
    this.handleTabKey = this.onTabKey.bind(this)

    document.addEventListener('click', (event) =>
      this.handleDocumentClick(event)
    )

    this.setupMenu()
    this.hideSelect()
    this.bindChangeEvents()
  }

  /**
   * Bind change events
   */
  bindChangeEvents() {
    if (this.$button) {
      this.$button.addEventListener('click', (e) => this.handleInvokerClick(e))
      this.$button.addEventListener('keydown', (e) =>
        this.handleButtonKeyDown(e)
      )
      this.$button.addEventListener('keyup', (e) => this.handleInvokerKeyUp(e))
    } else if (this.$input) {
      this.$input.addEventListener('click', (e) => this.handleInvokerClick(e))
      this.$input.addEventListener('keyup', (e) => this.handleInvokerKeyUp(e))
    }
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
   * Setup replacement button component
   */
  setupButton() {
    const $button = document.createElement('button')
    $button.className = 'nhsuk-select__button'
    $button.setAttribute('aria-controls', this.menuId)
    $button.setAttribute('aria-expanded', 'false')
    $button.setAttribute('id', this.$select.id)
    $button.setAttribute('type', 'button')

    $button.textContent = this.$selectedOption?.text ?? ''
    $button.value = this.$selectedOption?.text ?? ''

    this.$button = $button

    this.$wrapper.append(this.$button)
  }

  /**
   * Setup replacement input component (if search enabled)
   */
  setupInput() {
    const $input = document.createElement('input')
    $input.className = 'nhsuk-input nhsuk-select__input'
    $input.setAttribute('aria-autocomplete', 'list')
    $input.setAttribute('aria-controls', this.menuId)
    $input.setAttribute('aria-expanded', 'false')
    $input.setAttribute('autocapitalize', 'none')
    $input.setAttribute('autocomplete', 'off')
    $input.setAttribute('id', this.$select.id)
    $input.setAttribute('role', 'combobox')

    if (this.$selectedOption && !this.isEmpty(this.$selectedOption.value)) {
      $input.value = this.$selectedOption.text
    }

    this.$input = $input

    this.$wrapper.append(this.$input)
  }

  /**
   * Setup menu
   */
  setupMenu() {
    if (!this.$invoker) {
      return
    }

    const $menu = document.createElement('ul')
    $menu.className = 'nhsuk-select__menu'
    $menu.setAttribute('aria-labelled-by', this.$invoker.id)
    $menu.setAttribute('id', this.menuId)
    $menu.setAttribute('role', 'listbox')
    $menu.hidden = true

    $menu.addEventListener('click', (event) => {
      if (event.target instanceof Element) {
        const option = event.target.closest('[role=option]')

        if (option instanceof HTMLLIElement) {
          this.selectMenuOption(option)
        }
      }
    })

    $menu.addEventListener('keydown', (event) => {
      this.handleMenuKeyDown(event)
    })

    this.$menu = $menu

    this.$wrapper.append($menu)
  }

  /**
   * Handle clicking outside component
   *
   * Close menu (if open) and update select with valid input (if any)
   *
   * @param {MouseEvent} event - Event
   */
  handleDocumentClick(event) {
    if (event.target instanceof Node && !this.$wrapper.contains(event.target)) {
      this.closeMenu()
      this.updateSelect()
    }
  }

  /**
   * Handle click on invoking element
   *
   * @param {MouseEvent} event - Event
   */
  handleInvokerClick(event) {
    const options = this.getAllValidSelectOptions()
    this.buildMenu(options)

    const target = event.currentTarget
    if (target instanceof HTMLButtonElement) {
      this.handleButtonType()
    } else if (target instanceof HTMLInputElement) {
      target.focus()
    }
  }

  /**
   * Handle key press on invoking element
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleInvokerKeyUp(event) {
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

    if (this.$button && event.key === 'ArrowDown') {
      this.handleButtonArrowDownKey()
      return
    }

    if (this.$input && event.key === 'ArrowDown') {
      this.handleInputArrowDownKey()
      return
    }

    if (this.$input) {
      this.handleInputType()
    } else {
      this.handleButtonType()
    }
  }

  /**
   * Handle keydown press on button element
   *
   * Ensures menu opens only on keyup but keydown doesn’t invoke page scroll
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleButtonKeyDown(event) {
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

    if (this.$button && event.key === 'ArrowDown') {
      event.preventDefault()
    }
  }

  /**
   * Handle key press on button
   */
  handleButtonType() {
    if (!this.$button) {
      return
    }

    const options = this.getAllValidSelectOptions()
    this.buildMenu(options)

    const option = this.$selectedMenuOption ?? this.$firstMenuOption
    this.highlightMenuOption(option)
  }

  /**
   * Handle Arrow Down key press on button
   *
   * @returns {undefined}
   */
  handleButtonArrowDownKey() {
    if (!this.$button) {
      return
    }

    const options = this.getAllValidSelectOptions()
    if (options.length > 0) {
      this.buildMenu(options)
      this.highlightMenuOption(this.$firstMenuOption)
    }
  }

  /**
   * Handle key press on input
   */
  handleInputType() {
    if (!this.$input) {
      return
    }

    if (this.isEmpty(this.$input.value)) {
      this.closeMenu()
      this.updateSelect()
    } else {
      const options = this.getAllMatchingSelectOptions(this.$input.value)
      this.buildMenu(options)
      this.updateCountMessage(options.length)
    }
  }

  /**
   * Handle Arrow Down key press on input
   *
   * @returns {undefined}
   */
  handleInputArrowDownKey() {
    if (!this.$input) {
      return
    }

    const value = this.$input.value
    // If empty value, or value exactly matches an option, show all options
    if (this.isEmpty(value)) {
      const options = this.getAllValidSelectOptions()
      this.buildMenu(options)
      this.highlightMenuOption(this.$firstMenuOption)
    } else {
      const options = this.getAllMatchingSelectOptions(value)
      if (options.length > 0) {
        this.buildMenu(options)
        this.highlightMenuOption(this.$firstMenuOption)
      }
    }
  }

  /**
   * Handle keydown press on input
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuKeyDown(event) {
    if (!this.$invoker) {
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
        this.$invoker.focus()
    }
  }

  /**
   * Handle Enter (or Space) keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuEnterKey(event) {
    if (document.activeElement === event.target) {
      if (event.target instanceof HTMLLIElement) {
        this.selectMenuOption(event.target)
      }
    }

    event.preventDefault()
  }

  /**
   * Handle Arrow Down keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuArrowDownKey(event) {
    this.highlightMenuOption(this.$nextMenuOption)

    event.preventDefault()
  }

  /**
   * Handle Arrow Up keydown event within options menu
   *
   * @param {KeyboardEvent} event - Key press event
   */
  handleMenuArrowUpKey(event) {
    if (this.$previousMenuOption) {
      this.highlightMenuOption(this.$previousMenuOption)
    } else {
      this.focusInvoker()
      this.closeMenu()
    }

    event.preventDefault()
  }

  /**
   * Tear down menu and return focus to input
   */
  handleMenuEscapeKey() {
    this.removeMenuOptions()
    this.closeMenu()
    this.focusInvoker()
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
      this.updateSelect()
    }
  }

  /**
   * Build menu with options from select
   *
   * @param {HTMLOptionElement[]} options - Array of option elements
   */
  buildMenu(options) {
    this.removeMenuOptions()

    if (options.length) {
      this.openMenu()

      options.forEach((option, index) => {
        const $menuOption = this.getMenuOptionHtml(index, option)
        if ($menuOption) {
          this.$menu?.append($menuOption)
        }
      })
    } else {
      this.closeMenu()
    }
  }

  /**
   * Open menu
   */
  openMenu() {
    if (!this.$invoker || !this.$menu?.hidden) {
      return
    }

    this.$invoker.setAttribute('aria-expanded', 'true')
    this.$menu.hidden = false

    // Add tab key listener to close menu
    document.addEventListener('keydown', this.handleTabKey)
  }

  /**
   * Close menu
   */
  closeMenu() {
    if (!this.$invoker || !this.$menu) {
      return
    }

    this.removeMenuOptions()
    this.updateStatusMessage()

    this.$invoker.setAttribute('aria-expanded', 'false')
    this.$menu.hidden = true

    // Remove tab key listener to close menu
    document.removeEventListener('keyup', this.handleTabKey)
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
   * Highlight menu option and scroll into position if needed
   *
   * @param {HTMLLIElement|null|undefined} option - Menu option element
   */
  highlightMenuOption(option) {
    if (!this.$menu || !option) {
      return
    }

    if (!this.isMenuOptionVisible(this.$menu, option)) {
      this.$menu.scrollTop = option.offsetTop
    }

    option.focus()
  }

  /**
   * Select menu option
   *
   * @param {HTMLLIElement} option - Option element
   */
  selectMenuOption(option) {
    if (option.dataset.optionValue) {
      this.setValue(option.dataset.optionValue)
    }

    this.closeMenu()
    this.focusInvoker()
  }

  /**
   * Get selected menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  get $selectedMenuOption() {
    const activeOption = this.$menu?.querySelector(`[aria-selected="true"]`)

    return /** @type {HTMLLIElement|null|undefined} */ (activeOption)
  }

  /**
   * Get focused menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  get $focusedMenuOption() {
    const activeOption = this.$menu?.querySelector(`:focus`)

    return /** @type {HTMLLIElement|null|undefined} */ (activeOption)
  }

  /**
   * Get first menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  get $firstMenuOption() {
    const firstOption = this.$menu?.firstElementChild

    return /** @type {HTMLLIElement|null|undefined} */ (firstOption)
  }

  /**
   * Get previous menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  get $previousMenuOption() {
    if (!this.$focusedMenuOption || !this.$menu) {
      return null
    }

    const previousOption = this.$menu.querySelector(
      `#${this.$focusedMenuOption.id}`
    )?.previousElementSibling

    return /** @type {HTMLLIElement|null|undefined} */ (previousOption)
  }

  /**
   * Get next menu option
   *
   * @returns {HTMLLIElement|null|undefined}
   */
  get $nextMenuOption() {
    if (!this.$focusedMenuOption || !this.$menu) {
      return null
    }

    const nextOption = this.$menu.querySelector(
      `#${this.$focusedMenuOption.id}`
    )?.nextElementSibling

    return /** @type {HTMLLIElement|null|undefined} */ (nextOption)
  }

  /**
   * Get all disabled and non-empty options from select
   *
   * @returns {Array<HTMLOptionElement>} Options
   */
  getAllValidSelectOptions() {
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
  getAllMatchingSelectOptions(value) {
    return this.getAllValidSelectOptions().filter((option) => {
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
  getMatchingSelectOption(value) {
    return Array.from(this.$select.options).find(
      (option) => option.text.toLowerCase() === value.toLowerCase()
    )
  }

  /**
   * Get select option matching value
   *
   * @param {string} value
   * @returns {HTMLOptionElement|undefined}
   */
  getSelectOption(value) {
    return Array.from(this.$select.options).find(
      (option) => option.value === value
    )
  }

  /**
   * Update select with matched menu option (or input value)
   */
  updateSelect() {
    if (!this.$invoker) {
      return
    }

    const matchingOption = this.getMatchingSelectOption(this.$invoker.value)

    // If input value is not valid, revert to previous valid value
    if (this.$input && this.$selectedOption && !matchingOption) {
      const inputValueIsEmpty = this.isEmpty(this.$input.value)
      const selectedOptionIsEmpty = this.isEmpty(this.$selectedOption.value)

      // Only update text shown in input if non-empty value has been entered
      // If input is empty, user may have deleted value to enter a new one
      if (!inputValueIsEmpty) {
        // Only use selected value if it’s value is no empty to prevent search
        // input displaying text for empty option value like ‘Select option…’
        this.$input.value = selectedOptionIsEmpty
          ? ''
          : this.$selectedOption.textContent
      }

      this.$select.value = this.$selectedOption.value
    } else {
      this.$select.value = matchingOption?.value ?? ''
    }
  }

  /**
   * Get currently selected option in original select
   *
   * @returns {HTMLOptionElement|undefined}
   */
  get $selectedOption() {
    return this.$select.options[this.$select.selectedIndex]
  }

  /**
   * Format default status message
   *
   * @returns {string} Formatted default status message
   */
  formatStatusMessage() {
    const options = this.getAllValidSelectOptions()

    return this.i18n.t('selectDescription', { count: options.length })
  }

  /**
   * Update default status message
   */
  updateStatusMessage() {
    if (this.$screenReaderStatusMessage) {
      this.$screenReaderStatusMessage.textContent = this.formatStatusMessage()
    }
  }

  /**
   * Format results count message
   *
   * @param {number|undefined} [count] - The number of search results
   * @returns {string} Formatted results count message
   */
  formatCountMessage(count) {
    return count === 0
      ? this.i18n.t('noResults')
      : this.i18n.t('results', { count })
  }

  /**
   * Update results count message
   *
   * @param {number|undefined} [count] - The number of search results
   */
  updateCountMessage(count) {
    if (this.$screenReaderStatusMessage) {
      this.$screenReaderStatusMessage.textContent =
        this.formatCountMessage(count)
    }
  }

  /**
   * Focus invoking element
   */
  focusInvoker() {
    if (this.$invoker) {
      this.$invoker.focus()
    }
  }

  /**
   * Check if value is an empty string
   *
   * @param {string} value
   * @returns {boolean} Value is empty string
   */
  isEmpty(value) {
    return value.trim() === ''
  }

  /**
   * Check if menu option is visible
   *
   * @param {HTMLUListElement} menu - Menu
   * @param {HTMLLIElement} option - Menu option
   * @returns {boolean} Menu option visible
   */
  isMenuOptionVisible(menu, option) {
    const menuHeight = menu.clientHeight
    const optionHeight = option.clientHeight
    const menuTop = menu.getBoundingClientRect().top
    const optionTop = option.getBoundingClientRect().top

    return !(
      optionTop - menuTop < 0 || optionTop - menuTop + optionHeight > menuHeight
    )
  }

  /**
   * Get ID of options menu
   *
   * @returns {string} Options menu ID
   */
  get menuId() {
    return `nhsuk-select__menu-${this.$select.id}`
  }

  /**
   * Get menu option ID
   *
   * @param {number} index - Index
   * @param {HTMLOptionElement} option - Select option
   * @returns {HTMLLIElement|undefined} - Menu option
   */
  getMenuOptionHtml(index, option) {
    if (!this.$invoker) {
      return
    }

    const selected = option.textContent === this.$selectedOption?.textContent

    const $menuItem = document.createElement('li')
    $menuItem.className = 'nhsuk-select__option'
    $menuItem.dataset.optionValue = option.value
    $menuItem.textContent = option.text
    $menuItem.setAttribute('id', `nhsuk-select__option-${index}`)
    $menuItem.setAttribute('aria-selected', String(selected))
    $menuItem.setAttribute('tabindex', '-1')
    $menuItem.setAttribute('role', 'option')

    if (option.nextElementSibling instanceof HTMLHRElement) {
      $menuItem.classList.add('nhsuk-select__option--divider')
    }

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
   * Set value shown in invoking element
   *
   * @param {string} value
   */
  setValue(value) {
    if (!this.$invoker) {
      return
    }

    this.$select.value = value

    if (this.isEmpty(value)) {
      this.$invoker.value = ''
    } else {
      const option = this.getSelectOption(value)

      if (option) {
        this.$invoker.value = option.text

        if (this.$button) {
          this.$button.textContent = option.textContent
        }
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
    search: false,
    i18n: {
      noResults: 'No options found',
      results: {
        one: '%{count} option found',
        other: '%{count} options found'
      },
      selectDescription: 'Select an option or search (%{count} options)'
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
      search: { type: 'boolean' },
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
 * @property {boolean} [search=false] - Whether options available to the select can be searched.
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
 * @property {string} [noResults] - Message displayed when no results returned.
 * @property {TranslationPluralForms} [results] - Number of results.
 * @property {string} [selectDescription] - Message describing how to interact
 *   with the component.
 */

/**
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
