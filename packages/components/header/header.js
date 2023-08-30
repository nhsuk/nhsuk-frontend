class Header {
  constructor() {
    this.menuIsOpen = false
    this.navigation = document.querySelector('.nhsuk-navigation')
    this.navigationList = document.querySelector('.nhsuk-header__navigation-list')
    this.mobileMenu = document.createElement('ul')
    this.mobileMenuToggleButton = document.querySelector('.nhsuk-header__menu-toggle')
    this.mobileMenuCloseButton = document.createElement('button')
    this.mobileMenuContainer = document.querySelector('.nhsuk-mobile-menu-container')
    this.breakpoints = []
    this.width = document.body.offsetWidth

    this.setupMobileMenu()
    this.calculateBreakpoints()
    this.updateNavigation()
    this.doOnOrientationChange()

    this.handleResize = this.debounce(() => {
      this.calculateBreakpoints()
      this.updateNavigation()
    })

    this.mobileMenuToggleButton.addEventListener('click', this.toggleMobileMenu.bind(this))
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('orientationchange', this.doOnOrientationChange())
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

  calculateBreakpoints() {
    let childrenWidth = 0
    for (let i = 0; i < this.navigationList.children.length; i++) {
      childrenWidth += this.navigationList.children[i].offsetWidth
      this.breakpoints[i] = childrenWidth
    }
  }

  setupMobileMenu() {
    // add dropdown
    this.mobileMenuContainer.appendChild(this.mobileMenu)
    this.mobileMenu.classList.add('nhsuk-header__drop-down', 'js-hidden')
  }

  closeMobileMenu() {
    this.menuIsOpen = false
    this.mobileMenu.classList.add('js-hidden')
    this.navigation.style.marginBottom = 0
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'false')
    this.mobileMenuToggleButton.focus()
    this.mobileMenuCloseButton.removeEventListener('click', this.closeMobileMenu.bind(this))
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this))
  }

  handleEscapeKey(e) {
    if (e.key === 'Escape') {
      this.closeMobileMenu()
    }
  }

  openMobileMenu() {
    this.menuIsOpen = true
    this.mobileMenu.classList.remove('js-hidden')
    const marginBody = this.mobileMenu.offsetHeight
    this.navigation.style.marginBottom = `${marginBody}px`
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'true')
    // add event listerer for esc key to close menu
    document.addEventListener('keydown', this.handleEscapeKey.bind(this))
    // add event listener for close icon to close menu
    this.mobileMenuCloseButton.addEventListener('click', this.closeMobileMenu.bind(this))
  }

  toggleMobileMenu() {
    if (this.menuIsOpen) {
      this.closeMobileMenu()
    } else {
      this.openMobileMenu()
    }
  }

  updateNavigation() {
    const availableSpace = this.navigation.offsetWidth
    let itemsVisible = this.navigationList.children.length

    if (availableSpace < this.breakpoints[itemsVisible - 1]) {
      this.mobileMenuToggleButton.classList.add('js-show')
      this.mobileMenuContainer.classList.add('js-show')
      if (itemsVisible === 2) {
        return
      }
      while (availableSpace < this.breakpoints[itemsVisible - 1]) {
        this.mobileMenu.insertBefore(this.navigationList.children[itemsVisible - 2], this.mobileMenu.firstChild)
        itemsVisible -= 1
      }
    } else if (availableSpace > this.breakpoints[itemsVisible]) {
      while (availableSpace > this.breakpoints[itemsVisible]) {
        this.navigationList.insertBefore(
          this.mobileMenu.removeChild(this.mobileMenu.firstChild),
          this.mobileMenuContainer
        )
        itemsVisible += 1
      }
    }

    if (!this.mobileMenu.children.length) {
      this.mobileMenuToggleButton.classList.remove('js-show')
      this.mobileMenuContainer.classList.remove('js-show')
    }

    if (document.body.offsetWidth !== this.width && this.menuIsOpen) {
      this.closeMobileMenu()
    }
  }

  doOnOrientationChange() {
    switch (window.orientation) {
      case 90:
        setTimeout(() => {
          this.calculateBreakpoints()
          this.updateNavigation()
        }, 200)
        break
      default:
        break
    }
  }
}

export default () => {
  new Header()
}
