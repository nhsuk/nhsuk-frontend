/**
 * Header component
 *
 */

class Header {
  constructor() {
    this.menuIsEnabled = false
    this.menuIsOpen = false

    this.navigation = document.querySelector('.nhsuk-navigation')
    this.navigationList = document.querySelector(
      '.nhsuk-header__navigation-list'
    )

    this.mobileMenu = document.createElement('ul')
    this.mobileMenuToggleButton = document.querySelector(
      '.nhsuk-header__menu-toggle'
    )
    this.mobileMenuContainer = document.querySelector(
      '.nhsuk-mobile-menu-container'
    )

    this.width = 0
  }

  init() {
    if (
      !this.navigation ||
      !this.navigationList ||
      !this.mobileMenuToggleButton ||
      !this.mobileMenuContainer
    ) {
      return
    }

    this.handleEscapeKey = this.onEscapeKey.bind(this)
    this.handleUpdateNavigation = this.debounce(this.updateNavigation)
    this.handleToggleMobileMenu = this.toggleMobileMenu.bind(this)

    this.setupMobileMenu()
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
    this.navigationItems.forEach((item) => {
      this.navigationList.insertBefore(item.element, this.mobileMenuContainer)

      // Calculate widths
      right += item.element.offsetWidth
      item.right = right
    })

    // Reset space for menu button
    this.width = this.navigationList.offsetWidth
  }

  /**
   * Add the navigation items with default positions
   */
  setupNavigation() {
    this.navigationItems = []
    this.navigationList
      .querySelectorAll('.nhsuk-header__navigation-item')
      .forEach((element) => this.navigationItems.push({ element, right: 0 }))

    // Add resize listener for next update
    window.addEventListener('resize', this.handleUpdateNavigation)
  }

  /**
   * Add the mobile menu to the DOM
   */
  setupMobileMenu() {
    this.mobileMenuContainer.appendChild(this.mobileMenu)
    this.mobileMenu.classList.add(
      'nhsuk-header__drop-down',
      'nhsuk-header__drop-down--hidden'
    )
  }

  /**
   * Enable the mobile menu
   */
  enableMobileMenu() {
    if (this.menuIsEnabled) {
      return
    }

    this.menuIsEnabled = true

    this.mobileMenuToggleButton.classList.add(
      'nhsuk-header__menu-toggle--visible'
    )

    this.mobileMenuContainer.classList.add(
      'nhsuk-mobile-menu-container--visible'
    )

    // Add click listener to toggle menu
    this.mobileMenuToggleButton.addEventListener(
      'click',
      this.handleToggleMobileMenu
    )
  }

  /**
   * Disable the mobile menu
   */
  disableMobileMenu() {
    if (!this.menuIsEnabled) {
      return
    }

    this.closeMobileMenu()
    this.menuIsEnabled = false

    this.mobileMenuToggleButton.classList.remove(
      'nhsuk-header__menu-toggle--visible'
    )

    this.mobileMenuContainer.classList.remove(
      'nhsuk-mobile-menu-container--visible'
    )

    // Remove click listener to toggle menu
    this.mobileMenuToggleButton.removeEventListener(
      'click',
      this.handleToggleMobileMenu
    )
  }

  /**
   * Close the mobile menu
   *
   * Closes the mobile menu and updates accessibility state.
   *
   * Removes the margin-bottom from the navigation
   */
  closeMobileMenu() {
    if (!this.menuIsEnabled || !this.menuIsOpen) {
      return
    }

    this.menuIsOpen = false
    this.mobileMenu.classList.add('nhsuk-header__drop-down--hidden')
    this.navigation.style.marginBottom = 0
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'false')

    // Remove escape key listener to close menu
    document.removeEventListener('keydown', this.handleEscapeKey)
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the mobile menu.
   *
   * @param {KeyboardEvent} event - Key press event
   */
  onEscapeKey(event) {
    if (event.key === 'Escape') {
      this.closeMobileMenu(event)
    }
  }

  /**
   * Open the mobile menu
   *
   * Opens the mobile menu and updates accessibility state.
   *
   * The mobile menu is absolutely positioned, so it adds a margin
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */
  openMobileMenu() {
    if (!this.menuIsEnabled || this.menuIsOpen) {
      return
    }

    this.menuIsOpen = true
    this.mobileMenu.classList.remove('nhsuk-header__drop-down--hidden')
    const marginBody = this.mobileMenu.offsetHeight
    this.navigation.style.marginBottom = `${marginBody}px`
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'true')

    // Add escape key listener to close menu
    document.addEventListener('keydown', this.handleEscapeKey)
  }

  /**
   * Handle menu button click
   *
   * Toggles the mobile menu between open and closed
   */
  toggleMobileMenu() {
    if (!this.menuIsEnabled) {
      return
    }

    if (this.menuIsOpen) {
      this.closeMobileMenu()
    } else {
      this.openMobileMenu()
    }
  }

  /**
   * Update navigation for the available space
   *
   * Moves all items that overflow the available space into the mobile menu
   */
  updateNavigation() {
    this.resetNavigation()

    // Check for items that overflow
    let menuItems = this.navigationItems.filter((item) => {
      return item.right > this.width
    })

    // Disable mobile menu if empty
    if (!menuItems.length) {
      this.disableMobileMenu()
      return
    }

    this.enableMobileMenu()

    // Subtract space for menu button
    this.width -= this.mobileMenuContainer.offsetWidth

    // Move items based on available width
    this.navigationItems.forEach((item) => {
      if (item.right > this.width) {
        this.mobileMenu.insertAdjacentElement('beforeend', item.element)
      }
    })
  }
}

module.exports = () => {
  new Header().init()
}
