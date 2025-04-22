/**
 * Header component
 *
 */

class Header {
  constructor() {
    this.menuIsEnabled = false
    this.menuIsOpen = false

    this.navigation = document.querySelector('.nhsuk-header__navigation')
    this.navigationList = null
    this.navigationItems = null

    this.width = 0

    if (!this.navigation) {
      return
    }

    this.navigationList = this.navigation.querySelector(
      '.nhsuk-header__navigation-list'
    )
    this.navigationItems = this.navigation.querySelectorAll(
      '.nhsuk-header__navigation-item'
    )

    this.menu = document.querySelector('.nhsuk-header__menu')
    this.menuToggle = document.querySelector('.nhsuk-header__menu-toggle')
  }

  init() {
    if (
      !this.navigation ||
      !this.navigationList ||
      !this.navigationItems ||
      !this.navigationItems.length ||
      !this.menu ||
      !this.menuToggle
    ) {
      return
    }

    this.handleEscapeKey = this.onEscapeKey.bind(this)
    this.handleUpdateNavigation = this.debounce(this.updateNavigation)
    this.handleToggleMenu = this.toggleMenu.bind(this)

    this.setupNavigation()
    this.updateNavigation()
  }

  debounce(func, timeout = 100) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  /**
   * Reset navigation
   *
   * Calculate available space by summing the width of each navigation item
   */
  resetNavigation() {
    let right = 0

    // Reset and calculate widths on every resize
    this.breakpoints.forEach((breakpoint) => {
      this.navigationList.insertBefore(breakpoint.element, this.menu)

      // Calculate widths
      right += breakpoint.element.offsetWidth
      breakpoint.right = right
    })

    // Reset space for menu button
    this.width = this.navigationList.offsetWidth
  }

  /**
   * Add the breakpoints with default positions
   */
  setupNavigation() {
    this.breakpoints = []

    this.navigationItems.forEach((element) => {
      this.breakpoints.push({ element, right: 0 })
    })

    // Add resize listener for next update
    window.addEventListener('resize', this.handleUpdateNavigation)
  }

  /**
   * Add the menu to the DOM
   */
  setupMenu() {
    if (this.menuList) {
      return
    }

    this.menuList = document.createElement('ul')
    this.menuList.classList.add('nhsuk-header__menu-list')
    this.menuList.setAttribute('hidden', '')
    this.menu.appendChild(this.menuList)
  }

  /**
   * Enable the menu
   */
  enableMenu() {
    if (this.menuIsEnabled) {
      return
    }

    this.menuIsEnabled = true
    this.menu.removeAttribute('hidden')

    // Add click listener to toggle menu
    this.menuToggle.addEventListener('click', this.handleToggleMenu)
  }

  /**
   * Disable the menu
   */
  disableMenu() {
    if (!this.menuIsEnabled) {
      return
    }

    this.closeMenu()
    this.menuIsEnabled = false
    this.menu.setAttribute('hidden', '')

    // Remove click listener to toggle menu
    this.menuToggle.removeEventListener('click', this.handleToggleMenu)
  }

  /**
   * Close the menu
   *
   * Closes the menu and updates accessibility state.
   *
   * Removes the margin-bottom from the navigation
   */
  closeMenu() {
    if (!this.menuIsEnabled || !this.menuIsOpen) {
      return
    }

    this.menuIsOpen = false
    this.menuList.setAttribute('hidden', '')
    this.menuToggle.setAttribute('aria-expanded', 'false')
    this.navigation.style.marginBottom = 0

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
   * The menu is absolutely positioned, so it adds a margin
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */
  openMenu() {
    if (!this.menuIsEnabled || this.menuIsOpen) {
      return
    }

    this.menuIsOpen = true
    this.menuList.removeAttribute('hidden')
    this.menuToggle.setAttribute('aria-expanded', 'true')
    this.navigation.style.marginBottom = `${this.menuList.offsetHeight}px`

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

    // Subtract space for menu button
    this.width -= this.menu.offsetWidth

    // Move items based on available width
    this.breakpoints.forEach((breakpoint) => {
      if (breakpoint.right > this.width) {
        this.menuList.insertAdjacentElement('beforeend', breakpoint.element)
      }
    })
  }
}

module.exports = () => {
  new Header().init()
}
