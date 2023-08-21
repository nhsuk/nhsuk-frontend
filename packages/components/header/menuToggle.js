export default () => {
  let menuIsOpen = false
  const navigation = document.querySelector('.nhsuk-navigation')
  const navigationList = document.querySelector('.nhsuk-header__navigation-list')
  const mobileMenu = document.createElement('ul')
  const mobileMenuToggleButton = document.querySelector('.nhsuk-header__menu-toggle')
  const mobileMenuCloseButton = document.createElement('button')
  const mobileMenuContainer = document.querySelector('.nhsuk-mobile-menu-container')
  const breakpoints = []
  const width = document.body.offsetWidth

  // Throttle the watcher on resize
  function debounce(func, timeout = 100) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  // Check break points
  function calculateBreakpoints() {
    let childrenWidth = 0
    for (let i = 0; i < navigationList.children.length; i++) {
      childrenWidth += navigationList.children[i].offsetWidth
      breakpoints[i] = childrenWidth
    }
  }

  // Setup dropdown
  function setupMobileMenu() {
    // add dropdown
    mobileMenuContainer.appendChild(mobileMenu)
    mobileMenu.classList.add('nhsuk-header__drop-down', 'js-hidden')
  }

  // close menu
  function closeMobileMenu() {
    menuIsOpen = false

    mobileMenu.classList.add('js-hidden')

    navigation.style.marginBottom = 0
    mobileMenuToggleButton.setAttribute('aria-expanded', 'false')

    mobileMenuToggleButton.focus()

    // remove event listener for close icon
    mobileMenuCloseButton.removeEventListener('click', closeMobileMenu)

    // remove event listerer for esc key
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', handleEscapeKey)
  }

  // close menu when escape key is pressed
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeMobileMenu()
    }
  }

  // open mobile menu
  function openMobileMenu() {
    menuIsOpen = true

    mobileMenu.classList.remove('js-hidden')

    const marginBody = mobileMenu.offsetHeight
    navigation.style.marginBottom = `${marginBody}px`

    mobileMenuToggleButton.setAttribute('aria-expanded', 'true')

    // add event listerer for esc key to close menu
    document.addEventListener('keydown', handleEscapeKey)

    // add event listener for close icon to close menu
    mobileMenuCloseButton.addEventListener('click', closeMobileMenu)
  }

  // toggle menu
  function toggleMobileMenu() {
    if (menuIsOpen) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  // Check available screen space
  function updateNavigation() {
    const availableSpace = navigation.offsetWidth
    let itemsVisible = navigationList.children.length

    if (availableSpace < breakpoints[itemsVisible - 1]) {
      mobileMenuToggleButton.classList.add('js-show')
      mobileMenuContainer.classList.add('js-show')
      if (itemsVisible === 2) {
        return
      }
      while (availableSpace < breakpoints[itemsVisible - 1]) {
        mobileMenu.insertBefore(navigationList.children[itemsVisible - 2], mobileMenu.firstChild)
        itemsVisible -= 1
      }
    } else if (availableSpace > breakpoints[itemsVisible]) {
      while (availableSpace > breakpoints[itemsVisible]) {
        navigationList.insertBefore(mobileMenu.removeChild(mobileMenu.firstChild), mobileMenuContainer)
        itemsVisible += 1
      }
    }

    if (!mobileMenu.children.length) {
      mobileMenuToggleButton.classList.remove('js-show')
      mobileMenuContainer.classList.remove('js-show')
    }

    if (document.body.offsetWidth !== width && menuIsOpen) {
      closeMobileMenu()
    }
  }

  // Trigger screen orientation events
  function doOnOrientationChange() {
    switch (window.orientation) {
      case 90:
        setTimeout(() => {
          calculateBreakpoints()
          updateNavigation()
        }, 200)
        break
      default:
        break
    }
  }

  // Setup menu, check breakpoints and update the nav
  setupMobileMenu()
  calculateBreakpoints()
  updateNavigation()
  doOnOrientationChange()

  // Event listeners
  window.addEventListener('resize', debounce(calculateBreakpoints))
  window.addEventListener('resize', debounce(updateNavigation))
  window.addEventListener('orientationchange', doOnOrientationChange)
  mobileMenuToggleButton.addEventListener('click', toggleMobileMenu)
}
