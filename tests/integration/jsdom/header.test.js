import ServiceNavigation from '../../../packages/components/service-navigation/service-navigation.js'

describe('ServiceNavigation class', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="nhsuk-service-navigation">
      <nav class="nhsuk-service-navigation__wrapper" aria-label="Menu">
        <ul class="nhsuk-service-navigation__list">
          <li class="nhsuk-service-navigation__item">Health A-Z</li>
          <li class="nhsuk-service-navigation__item">NHS services</li>
          <li class="nhsuk-service-navigation__item">Live Well</li>
          <li class="nhsuk-service-navigation__item">Mental health</li>
          <li class="nhsuk-service-navigation__item">Care and support</li>
          <li class="nhsuk-service-navigation__item">Pregnancy</li>
          <li class="nhsuk-service-navigation__item nhsuk-service-navigation__item--overflow" hidden>
            <button class="nhsuk-service-navigation__toggle" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse </span>More
            </button>
          </li>
        </ul>
      </nav>
    </div>`
  })

  it('Should create navigation elements in the DOM', async () => {
    // Call the ServiceNavigation initialization function
    await ServiceNavigation()

    // Ensure the navigation elements are created in the DOM
    expect(document.querySelector('.nhsuk-service-navigation')).not.toBeNull()
  })

  it('Should toggle mobile menu visibility', async () => {
    await ServiceNavigation()

    const toggleButton = document.querySelector(
      '.nhsuk-service-navigation__toggle'
    )
    const mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__overflow'
    )

    // Initially, the menu should be closed
    expect(mobileMenuList.hidden).toBe(true)

    // Open the mobile menu
    toggleButton.click()

    expect(mobileMenuList.hidden).toBe(false)

    // Close the mobile menu
    toggleButton.click()

    expect(mobileMenuList.hidden).toBe(true)
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
    const toggleButton = document.querySelector(
      '.nhsuk-service-navigation__toggle'
    )

    await ServiceNavigation()

    // Expect the menu to be hidden initially
    expect(
      document.querySelector('.nhsuk-service-navigation__overflow').hidden
    ).toBe(true)

    // Toggle the menu - open it
    toggleButton.click()
    expect(
      document.querySelector('.nhsuk-service-navigation__overflow').hidden
    ).toBe(false)

    // Press the escape key to close it
    document.dispatchEvent(escapeKeyEvent)
    expect(
      document.querySelector('.nhsuk-service-navigation__overflow').hidden
    ).toBe(true)
  })

  it('Should setup the Mobile Menu List during initialization', async () => {
    // Initially there won't be any ul elements inside the container - it gets added in the setupMobileMenu method
    let mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__overflow'
    )

    // So we expect that to be null until it gets created
    expect(mobileMenuList).toBeNull()

    // Call the ServiceNavigation initialization function
    await ServiceNavigation()

    // We update the variable to hold the ul element from the container that has been created
    mobileMenuList = document.querySelector(
      'nhsuk-service-navigation__overflow'
    )

    expect(mobileMenuList).not.toBeNull()
    expect(mobileMenuList.classList).toContain(
      'nhsuk-service-navigation__overflow'
    )
    expect(mobileMenuList.hidden).toBe(true)
  })

  it('Should not update navigation when the available space is enough for all elements', async () => {
    const mobileMenuToggleButton = document.querySelector(
      '.nhsuk-service-navigation__toggle'
    )
    const mobileMenuContainer = document.querySelector(
      '.nhsuk-service-navigation__item--overflow'
    )
    const navigationList = document.querySelector(
      '.nhsuk-service-navigation__list'
    )
    let mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__overflow'
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

    await ServiceNavigation()

    // breakpoints will be [50,100,150,200,250,300,350,400]
    // the available space - navigation offsetWidth - will be greater than the last element from the breakpoints array
    // meaning we don't need the mobile menu to get any items from the navigation
    expect(mobileMenuToggleButton.hidden).toBe(true)
    expect(mobileMenuContainer.hidden).toBe(true)

    mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__overflow'
    )
    expect(mobileMenuList.children).toHaveLength(0)
    expect(navigationList.children).toHaveLength(8)

    navigationOffsetWidthSpy.mockRestore()
  })

  it('Should update navigation when the available space is not enough for all elements', async () => {
    const mobileMenuToggleButton = document.querySelector(
      '.nhsuk-service-navigation__toggle'
    )
    const mobileMenuContainer = document.querySelector(
      '.nhsuk-service-navigation__item--overflow'
    )
    const navigationList = document.querySelector(
      '.nhsuk-header__navigation-list'
    )
    let mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__overflow'
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

    await ServiceNavigation()

    // breakpoints will be [100,200,300,400,500,600,700,800]
    // the available space - navigation offsetWidth - will be smaller than the last element from the breakpoints array
    // meaning we need the mobile menu to get 1 item from the navigation
    expect(mobileMenuToggleButton.hidden).toBe(false)
    expect(mobileMenuContainer.hidden).toBe(false)

    mobileMenuList = document.querySelector(
      '.nhsuk-service-navigation__item--overflow ul'
    )
    expect(mobileMenuList.children).toHaveLength(1)
    expect(navigationList.children).toHaveLength(7)

    navigationOffsetWidthSpy.mockRestore()
  })
})
