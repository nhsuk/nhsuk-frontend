/**
 * Header component
 */
class Header {
  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    if (!$root || !($root instanceof HTMLElement)) {
      return this;
    }
    this.$root = $root;
    this.navigation = this.$root.querySelector('.nhsuk-header__navigation');
    this.navigationList = this.$root.querySelector('.nhsuk-header__navigation-list');
    this.navigationItems = this.$root.querySelectorAll('.nhsuk-header__navigation-item');
    this.menu = this.$root.querySelector('.nhsuk-header__menu');
    this.menuToggle = this.$root.querySelector('.nhsuk-header__menu-toggle');
    if (!this.navigation || !this.navigationList || !this.navigationItems || !this.navigationItems.length || !this.menu || !this.menuToggle) {
      return this;
    }
    this.menuList = document.createElement('ul');
    this.menuIsEnabled = false;
    this.menuIsOpen = false;
    this.handleEscapeKey = this.onEscapeKey.bind(this);
    this.handleUpdateNavigation = this.debounce(this.updateNavigation);
    this.handleToggleMenu = this.toggleMenu.bind(this);
    this.setupNavigation();
    this.updateNavigation();
  }
  debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  /**
   * Reset navigation
   *
   * Calculate available space by summing the width of each navigation item
   */
  resetNavigation() {
    let right = 0;

    // Reset and calculate widths on every resize
    this.breakpoints.forEach(breakpoint => {
      this.navigationList.insertBefore(breakpoint.element, this.menu);

      // Calculate widths
      right += breakpoint.element.offsetWidth;
      breakpoint.right = right;
    });

    // Reset space for menu button
    this.width = this.navigationList.offsetWidth;
  }

  /**
   * Add the breakpoints with default positions
   */
  setupNavigation() {
    this.breakpoints = [];
    this.navigationItems.forEach(element => {
      this.breakpoints.push({
        element,
        right: 0
      });
    });

    // Add resize listener for next update
    window.addEventListener('resize', this.handleUpdateNavigation);
  }

  /**
   * Add the menu to the DOM
   */
  setupMenu() {
    if (this.menuList.parentElement) {
      return;
    }
    this.menuList.classList.add('nhsuk-header__menu-list');
    this.menuList.setAttribute('hidden', '');
    this.menu.appendChild(this.menuList);
  }

  /**
   * Enable the menu
   */
  enableMenu() {
    if (this.menuIsEnabled) {
      return;
    }
    this.menuIsEnabled = true;
    this.menu.removeAttribute('hidden');

    // Add click listener to toggle menu
    this.menuToggle.addEventListener('click', this.handleToggleMenu);
  }

  /**
   * Disable the menu
   */
  disableMenu() {
    if (!this.menuIsEnabled) {
      return;
    }
    this.closeMenu();
    this.menuIsEnabled = false;
    this.menu.setAttribute('hidden', '');

    // Remove click listener from toggle menu
    this.menuToggle.removeEventListener('click', this.handleToggleMenu);
  }

  /**
   * Close the menu
   *
   * Closes the menu and updates accessibility state.
   *
   * Removes the bottom border from the navigation
   */
  closeMenu() {
    if (!this.menuIsEnabled || !this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = false;
    this.menuList.setAttribute('hidden', '');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.navigation.style.removeProperty('border-bottom-width');

    // Remove escape key listener to close menu
    document.removeEventListener('keydown', this.handleEscapeKey);
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
      this.closeMenu();
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
    if (!this.menuIsEnabled || this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = true;
    this.menuList.removeAttribute('hidden');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    this.navigation.style.setProperty('border-bottom-width', `${this.menuList.offsetHeight}px`);

    // Add escape key listener to close menu
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  /**
   * Handle menu button click
   *
   * Toggles the menu between open and closed
   */
  toggleMenu() {
    if (!this.menuIsEnabled) {
      return;
    }
    if (this.menuIsOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * Update navigation for the available space
   *
   * Moves all items that overflow the available space into the menu
   */
  updateNavigation() {
    this.resetNavigation();

    // Check for items that overflow
    let menuItems = this.breakpoints.filter(breakpoint => {
      return breakpoint.right > this.width;
    });

    // Disable menu if empty
    if (!menuItems.length) {
      this.disableMenu();
      return;
    }
    this.setupMenu();
    this.enableMenu();

    // Subtract space for menu button
    this.width -= this.menu.offsetWidth;

    // Move items based on available width
    this.breakpoints.forEach(breakpoint => {
      if (breakpoint.right > this.width) {
        this.menuList.insertAdjacentElement('beforeend', breakpoint.element);
      }
    });

    // Update menu height if open
    if (this.menuIsOpen) {
      this.navigation.style.setProperty('border-bottom-width', `${this.menuList.offsetHeight}px`);
    }
  }
}

/**
 * Initialise header component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
function initHeader(options = {}) {
  const $scope = options.scope || document;
  const $root = $scope.querySelector('.nhsuk-header');
  new Header($root);
}

export { Header, initHeader };
//# sourceMappingURL=header.mjs.map
