/**
 * Header component
 *
 */

class Header {
  constructor() {
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

    this.listWidth = 0
    this.itemsWidth = 0
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

    this.setupMobileMenu()
    this.setupNavigation()
    this.updateNavigation()

    this.handleResize = this.debounce(() => {
      this.resetNavigation()
      this.updateNavigation()
    })

    this.mobileMenuToggleButton.addEventListener(
      'click',
      this.toggleMobileMenu.bind(this)
    )

    window.addEventListener('resize', this.handleResize)
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
    this.listWidth = this.navigationList.offsetWidth
    this.itemsWidth = 0

    // Reset and calculate widths on every resize
    this.navigationItems.forEach((item) => {
      this.navigationList.insertBefore(item.element, this.mobileMenuContainer)

      // Calculate widths
      this.itemsWidth += item.element.offsetWidth
      item.right = this.itemsWidth
    })
  }

  /**
   * Add the navigation items with default positions
   */
  setupNavigation() {
    this.navigationItems = []
    this.navigationList
      .querySelectorAll('.nhsuk-header__navigation-item')
      .forEach((element) => this.navigationItems.push({ element, right: 0 }))

    // Calculate widths
    this.resetNavigation()
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
    this.mobileMenuToggleButton.classList.add(
      'nhsuk-header__menu-toggle--visible'
    )
    this.mobileMenuContainer.classList.add(
      'nhsuk-mobile-menu-container--visible'
    )
  }

  /**
   * Disable the mobile menu
   */
  disableMobileMenu() {
    this.closeMobileMenu()

    this.mobileMenuToggleButton.classList.remove(
      'nhsuk-header__menu-toggle--visible'
    )
    this.mobileMenuContainer.classList.remove(
      'nhsuk-mobile-menu-container--visible'
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
    this.menuIsOpen = false
    this.mobileMenu.classList.add('nhsuk-header__drop-down--hidden')
    this.navigation.style.marginBottom = 0
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'false')
    this.mobileMenuToggleButton.focus()
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this))
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the mobile menu.
   */
  handleEscapeKey(e) {
    if (e.key === 'Escape') {
      this.closeMobileMenu()
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
    this.menuIsOpen = true
    this.mobileMenu.classList.remove('nhsuk-header__drop-down--hidden')
    const marginBody = this.mobileMenu.offsetHeight
    this.navigation.style.marginBottom = `${marginBody}px`
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'true')

    // add event listener for esc key to close menu
    document.addEventListener('keydown', this.handleEscapeKey.bind(this))
  }

  /**
   * Handle menu button click
   *
   * Toggles the mobile menu between open and closed
   */
  toggleMobileMenu() {
    if (this.menuIsOpen) {
      this.closeMobileMenu()
    } else {
      this.openMobileMenu()
    }
  }

  /**
   * Update nav for the available space
   *
   * If the available space is less than the current breakpoint,
   * add the mobile menu toggle button and move the last
   * item in the list to the drop-down list.
   *
   * If the available space is greater than the current breakpoint,
   * remove the mobile menu toggle button and move the first item in the
   *
   * Additionally will close the mobile menu if the window gets resized
   * and the menu is open.
   */
  updateNavigation() {
    const items = this.navigationItems
    const itemsList = items.filter((item) => {
      return item.right <= this.listWidth
    })

    // Disable mobile menu if empty
    if (items.length === itemsList.length) {
      this.disableMobileMenu()
      return
    }

    this.enableMobileMenu()

    // Move items based on available width
    items.forEach((item) => {
      let maxRight = this.listWidth

      // Subtract space for menu button
      if (items.length !== itemsList.length) {
        maxRight -= this.mobileMenuContainer.offsetWidth
      }

      if (item.right > maxRight) {
        this.mobileMenu.insertAdjacentElement('beforeend', item.element)
      }
    })
  }
}

module.exports = () => {
  new Header().init()
}
