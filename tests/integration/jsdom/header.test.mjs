import Header from '../../../packages/components/header/header.js'

describe('Header class', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="nhsuk-navigation-container">
        <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
          <ul class="nhsuk-header__navigation-list">
            <li class="nhsuk-header__navigation-item" style="width: 50px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Health A-Z
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 75px;">
              <a class="nhsuk-header__navigation-link" href="#">
                NHS services
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 100px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Live Well
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 125px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Mental health
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 150px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Care and support
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 275px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Pregnancy
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 200px;">
              <a class="nhsuk-header__navigation-link" href="#">
                Home
              </a>
            </li>
            <li class="nhsuk-header__navigation-item" style="width: 225px;">
              <a class="nhsuk-header__navigation-link" href="#">
                More
              </a>
            </li>
            <li class="nhsuk-mobile-menu-container">
              <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" id="toggle-menu" aria-expanded="false">
                <span class="nhsuk-u-visually-hidden">Browse</span>
                More
                <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    `
  })

  it('Should create navigation elements in the DOM', async () => {
    // Call the Header initialization function
    await Header()

    // Ensure the navigation elements are created in the DOM
    expect(document.querySelector('.nhsuk-navigation')).not.toBeNull()
  })

  it('Should toggle mobile menu visibility', async () => {
    const toggleButton = document.querySelector('.nhsuk-header__menu-toggle')
    let mobileMenuList = document.querySelector(
      '.nhsuk-mobile-menu-container ul'
    )
    // Call the Header initialization function
    await Header()

    mobileMenuList = document.querySelector('.nhsuk-mobile-menu-container ul')
    // Initially, the menu should be closed
    expect(
      mobileMenuList.classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(true)

    // Open the mobile menu
    toggleButton.click()

    expect(
      mobileMenuList.classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(false)

    // Close the mobile menu
    toggleButton.click()

    expect(
      mobileMenuList.classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(true)
  })

  it('Should close menu when escape key is pressed', async () => {
    // Define a event for the escape key
    const escapeKeyEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
      charCode: 27
    })
    const toggleButton = document.querySelector('.nhsuk-header__menu-toggle')

    await Header()

    // Expect the menu to be hidden initially
    expect(
      document
        .querySelector('.nhsuk-header__drop-down')
        .classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(true)

    // Toggle the menu - open it
    toggleButton.click()
    expect(
      document
        .querySelector('.nhsuk-header__drop-down')
        .classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(false)

    // Press the escape key to close it
    document.dispatchEvent(escapeKeyEvent)
    expect(
      document
        .querySelector('.nhsuk-header__drop-down')
        .classList.contains('nhsuk-header__drop-down--hidden')
    ).toBe(true)
  })

  it('Should setup the Mobile Menu Container during initialization', async () => {
    const mobileMenuContainer = document.querySelector(
      '.nhsuk-mobile-menu-container'
    )
    expect(mobileMenuContainer.childElementCount).toBe(1)
    await Header()
    expect(mobileMenuContainer.childElementCount).toBeGreaterThan(1)
  })

  it('Should setup the Mobile Menu List during initialization', async () => {
    // Initially there won't be any ul elements inside the container- it gets added in the setupMobileMenu method
    let mobileMenuList = document.querySelector(
      '.nhsuk-mobile-menu-container ul'
    )

    // So we expect that to be null until it gets created
    expect(mobileMenuList).toBeNull()

    // Call the Header initialization function
    await Header()

    // We update the variable to hold the ul element from the container that has been created
    mobileMenuList = document.querySelector('.nhsuk-mobile-menu-container ul')

    expect(mobileMenuList).not.toBeNull()
    expect(mobileMenuList.classList).toContain('nhsuk-header__drop-down')
    expect(mobileMenuList.classList).toContain(
      'nhsuk-header__drop-down--hidden'
    )
  })

  it('Should not update navigation when the available space is enough for all elements', async () => {
    const mobileMenuToggleButton = document.querySelector(
      '.nhsuk-header__menu-toggle'
    )
    const mobileMenuContainer = document.querySelector(
      '.nhsuk-mobile-menu-container'
    )
    const navigationList = document.querySelector(
      '.nhsuk-header__navigation-list'
    )
    let mobileMenuList = document.querySelector(
      '.nhsuk-mobile-menu-container ul'
    )

    // Spy on offsetWidth property for navigation element
    const navigationOffsetWidthSpy = jest.spyOn(
      HTMLElement.prototype,
      'offsetWidth',
      'get'
    )
    // Mock offsetWidth for navigation element
    navigationOffsetWidthSpy.mockImplementation(function () {
      if (this === navigationList) {
        return 1000 // Mock navigation element offsetWidth
      }
      return 50 // Mock children offsetWidth
    })

    await Header()

    // breakpoints will be [50,100,150,200,250,300,350,400]
    // the available space - navigation offsetWidth - will be greater than the last element from the breakpoints array
    // meaning we don't need the mobile menu to get any items from the navigation
    expect(
      mobileMenuToggleButton.classList.contains(
        'nhsuk-header__menu-toggle--visible'
      )
    ).toBe(false)
    expect(
      mobileMenuContainer.classList.contains(
        'nhsuk-mobile-menu-container--visible'
      )
    ).toBe(false)

    mobileMenuList = document.querySelector('.nhsuk-mobile-menu-container ul')
    expect(mobileMenuList.children).toHaveLength(0)
    expect(navigationList.children).toHaveLength(9)

    navigationOffsetWidthSpy.mockRestore()
  })

  it('Should update navigation when the available space is not enough for all elements', async () => {
    const mobileMenuToggleButton = document.querySelector(
      '.nhsuk-header__menu-toggle'
    )
    const mobileMenuContainer = document.querySelector(
      '.nhsuk-mobile-menu-container'
    )
    const navigationList = document.querySelector(
      '.nhsuk-header__navigation-list'
    )
    let mobileMenuList = document.querySelector(
      '.nhsuk-mobile-menu-container ul'
    )

    // Spy on offsetWidth property for navigation element
    const navigationOffsetWidthSpy = jest.spyOn(
      HTMLElement.prototype,
      'offsetWidth',
      'get'
    )
    // Mock offsetWidth for navigation element
    navigationOffsetWidthSpy.mockImplementation(function () {
      if (this === navigationList) {
        return 700 // Mock navigation element offsetWidth
      }
      return 100 // Mock children offsetWidth
    })

    await Header()

    // breakpoints will be [100,200,300,400,500,600,700,800]
    // the available space - navigation offsetWidth - will be smaller than the last element from the breakpoints array
    // meaning we need the mobile menu to get 1 item from the navigation
    expect(
      mobileMenuToggleButton.classList.contains(
        'nhsuk-header__menu-toggle--visible'
      )
    ).toBe(true)
    expect(
      mobileMenuContainer.classList.contains(
        'nhsuk-mobile-menu-container--visible'
      )
    ).toBe(true)

    mobileMenuList = document.querySelector('.nhsuk-mobile-menu-container ul')
    expect(mobileMenuList.children).toHaveLength(2)
    expect(navigationList.children).toHaveLength(7)

    navigationOffsetWidthSpy.mockRestore()
  })
})
