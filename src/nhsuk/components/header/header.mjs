import { normaliseOptions } from '../../common/configuration/index.mjs'
import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Header component
 */
export class Header extends Component {
  /** @type {HTMLElement | null} */
  $navigation = null

  /** @type {HTMLElement | null} */
  $navigationList = null

  /** @type {NodeListOf<HTMLElement> | null} */
  $navigationItems = null

  /** @type {HTMLElement | null} */
  $menu = null

  /** @type {HTMLButtonElement | null} */
  $menuToggle = null

  /** @type {HTMLElement | null} */
  $menuList = null

  width = 0

  /**
   * @type {{ element: HTMLElement, right: number }[]}
   */
  breakpoints = []

  /**
   * @type {number | null}
   */
  updateNavigationTimer = null

  menuIsEnabled = false
  menuIsOpen = false

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $navigation = this.$root.querySelector('.nhsuk-header__navigation')
    const $navigationList = this.$root.querySelector(
      '.nhsuk-header__navigation-list'
    )

    const $navigationItems = /** @type {NodeListOf<HTMLElement>} */ (
      this.$root.querySelectorAll('.nhsuk-header__navigation-item')
    )

    const $menu = this.$root.querySelector('.nhsuk-header__menu')
    const $menuToggle = this.$root.querySelector('.nhsuk-header__menu-toggle')

    // Check for navigation (optional)
    if ($navigation) {
      if (!($navigation instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'Navigation (`<nav class="nhsuk-header__navigation">`)'
        })
      }

      if (!$navigationList || !($navigationList instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'List (`<ul class="nhsuk-header__navigation-list">`)'
        })
      }

      if (!$navigationItems.length) {
        throw new ElementError({
          component: Header,
          identifier:
            'List items (`<li class="nhsuk-header__navigation-item">`)'
        })
      }

      if (!$menu || !($menu instanceof HTMLElement)) {
        throw new ElementError({
          component: Header,
          identifier: 'Menu item (`<li class="nhsuk-header__menu" hidden>`)'
        })
      }

      if (!$menuToggle || !($menuToggle instanceof HTMLButtonElement)) {
        throw new ElementError({
          component: Header,
          identifier:
            'Menu button (`<button class="nhsuk-header__menu-toggle">`)',
          expectedType: 'HTMLButtonElement'
        })
      }

      this.$navigation = $navigation
      this.$navigationList = $navigationList
      this.$navigationItems = $navigationItems
      this.$menu = $menu
      this.$menuToggle = $menuToggle
      this.$menuList = document.createElement('ul')
    }

    // Save bound functions so we can remove event listeners when unnecessary
    this.handleEscapeKey = this.onEscapeKey.bind(this)
    this.handleUpdateNavigation = this.updateNavigation.bind(this)
    this.handleToggleMenu = this.toggleMenu.bind(this)

    this.setupNavigation()
    this.updateNavigation()
  }

  /**
   * Reset navigation
   *
   * Calculate available space by summing the width of each navigation item
   */
  resetNavigation() {
    const { $menu, $navigationList } = this
    if (!$menu || !$navigationList) {
      return
    }

    let right = 0

    // Reset and calculate widths on every resize
    this.breakpoints.forEach((breakpoint) => {
      $navigationList.insertBefore(breakpoint.element, $menu)

      // Calculate widths
      right += breakpoint.element.offsetWidth
      breakpoint.right = right
    })

    // Reset space for menu button
    this.width = $navigationList.offsetWidth
  }

  /**
   * Add the breakpoints with default positions
   */
  setupNavigation() {
    const { $navigationItems } = this

    // Skip with no navigation items
    if (!$navigationItems) {
      return
    }

    $navigationItems.forEach((element) => {
      this.breakpoints.push({ element, right: 0 })
    })

    // Add resize listener for next update
    window.addEventListener('resize', () => {
      if (this.updateNavigationTimer) {
        window.clearTimeout(this.updateNavigationTimer)
      }

      this.updateNavigationTimer = window.setTimeout(
        this.handleUpdateNavigation,
        100
      )
    })
  }

  /**
   * Add the menu to the DOM
   */
  setupMenu() {
    const { $menu, $menuList } = this

    // Skip with no menu or when already appended
    if (!$menu || !$menuList || $menuList.parentElement) {
      return
    }

    $menuList.classList.add('nhsuk-header__menu-list')
    $menuList.setAttribute('hidden', '')
    $menu.appendChild($menuList)
  }

  /**
   * Enable the menu
   */
  enableMenu() {
    const { $menu, $menuToggle } = this

    // Skip with no menu or when already enabled
    if (!$menu || !$menuToggle || this.menuIsEnabled) {
      return
    }

    this.menuIsEnabled = true
    $menu.removeAttribute('hidden')

    // Add click listener to toggle menu
    $menuToggle.addEventListener('click', this.handleToggleMenu)
  }

  /**
   * Disable the menu
   */
  disableMenu() {
    const { $menu, $menuToggle } = this

    // Skip with no menu or when already disabled
    if (!$menu || !$menuToggle || !this.menuIsEnabled) {
      return
    }

    this.closeMenu()
    this.menuIsEnabled = false
    $menu.setAttribute('hidden', '')

    // Remove click listener from toggle menu
    $menuToggle.removeEventListener('click', this.handleToggleMenu)
  }

  /**
   * Close the menu
   *
   * Closes the menu and updates accessibility state.
   *
   * Removes the bottom border from the navigation
   */
  closeMenu() {
    const { $menuList, $menuToggle, $navigation } = this

    // Skip with no menu or when already closed
    if (
      !$navigation ||
      !$menuList ||
      !$menuToggle ||
      !this.menuIsEnabled ||
      !this.menuIsOpen
    ) {
      return
    }

    this.menuIsOpen = false
    $menuList.setAttribute('hidden', '')
    $menuToggle.setAttribute('aria-expanded', 'false')
    $navigation.style.removeProperty('border-bottom-width')

    // Remove escape key listener to close menu
    document.removeEventListener('keydown', this.handleEscapeKey)
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the menu.
   *
   * @param {KeyboardEvent} event - Key press event
   */
  onEscapeKey(event) {
    if (event.key === 'Escape') {
      this.closeMenu()
    }
  }

  /**
   * Open the menu
   *
   * Opens the menu and updates accessibility state.
   *
   * The menu is absolutely positioned, so it adds a border
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */
  openMenu() {
    const { $menuList, $menuToggle, $navigation } = this

    // Skip with no menu or when already open
    if (
      !$navigation ||
      !$menuList ||
      !$menuToggle ||
      !this.menuIsEnabled ||
      this.menuIsOpen
    ) {
      return
    }

    this.menuIsOpen = true
    $menuList.removeAttribute('hidden')
    $menuToggle.setAttribute('aria-expanded', 'true')
    $navigation.style.setProperty(
      'border-bottom-width',
      `${$menuList.offsetHeight}px`
    )

    // Add escape key listener to close menu
    document.addEventListener('keydown', this.handleEscapeKey)
  }

  /**
   * Handle menu button click
   *
   * Toggles the menu between open and closed
   */
  toggleMenu() {
    if (!this.menuIsEnabled) {
      return
    }

    if (this.menuIsOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  /**
   * Update navigation for the available space
   *
   * Moves all items that overflow the available space into the menu
   */
  updateNavigation() {
    this.resetNavigation()

    // Check for items that overflow
    let menuItems = this.breakpoints.filter((breakpoint) => {
      return breakpoint.right > this.width
    })

    // Disable menu if empty
    if (!menuItems.length) {
      this.disableMenu()
      return
    }

    this.setupMenu()
    this.enableMenu()

    const { $menu, $menuList, $navigation } = this

    // Skip when no menu or menu list
    if (!$menu || !$menuList || !$navigation) {
      return
    }

    // Subtract space for menu button
    this.width -= $menu.offsetWidth

    // Move items based on available width
    this.breakpoints.forEach((breakpoint) => {
      if (breakpoint.right > this.width) {
        $menuList.insertAdjacentElement('beforeend', breakpoint.element)
      }
    })

    // Update menu height if open
    if (this.menuIsOpen) {
      $navigation.style.setProperty(
        'border-bottom-width',
        `${$menuList.offsetHeight}px`
      )
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-header'
}

/**
 * Initialise header component
 *
 * @deprecated Use {@link createAll | `createAll(Header)`} instead.
 * @param {InitOptions} [options]
 */
export function initHeader(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $root = $scope?.querySelector(`[data-module="${Header.moduleName}"]`)

  if (!$root) {
    return
  }

  new Header($root)
}

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 */
