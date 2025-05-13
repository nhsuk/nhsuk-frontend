import { setTimeout } from 'timers/promises'

import { fireEvent, getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import initHeader from './header.js'

const user = userEvent.setup()

describe('Header class', () => {
  /** @type {HTMLElement} */
  let $navigation

  /** @type {HTMLElement} */
  let $menuButton

  let listWidth = 0
  let itemWidth = 0

  beforeEach(() => {
    document.body.innerHTML = `
      <header class="nhsuk-header" role="banner">
        <div class="nhsuk-header__container">
          <div class="nhsuk-header__service">
            <svg class="nhsuk-header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" height="40" width="100">
              <path fill="currentcolor" d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"></path>
            </svg>
          </div>
        </div>
        <nav class="nhsuk-header__navigation" aria-label="Menu">
          <div class="nhsuk-header__navigation-container">
            <ul class="nhsuk-header__navigation-list">
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Health A to Z
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  NHS services
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Live Well
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Mental health
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Care and support
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Pregnancy
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Home
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="#">
                  Another one
                </a>
              </li>
              <li class="nhsuk-header__menu" hidden>
                <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" id="toggle-menu" aria-expanded="false">
                  <span class="nhsuk-u-visually-hidden">Browse</span>
                  More
                  <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `

    const $container = document.querySelector('.nhsuk-header')

    $navigation = getByRole($container, 'navigation')
    $menuButton = getByRole($container, 'button', {
      name: 'Browse More',
      hidden: true
    })

    listWidth = 800
    itemWidth = 100

    jest
      .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
      .mockImplementation(function () {
        return this instanceof HTMLUListElement
          ? listWidth // Mock list width
          : itemWidth // Mock item width
      })

    jest.spyOn($menuButton, 'addEventListener')
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(document, 'addEventListener')
    jest.spyOn(document, 'removeEventListener')
  })

  describe('Initialisation', () => {
    it('should add event listeners', () => {
      initHeader()

      // Adds listener for window resize
      expect(window.addEventListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      )

      // Skips listener for menu button click
      expect($menuButton.addEventListener).not.toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should add event listeners when items overflow', () => {
      listWidth = 700

      initHeader()

      // Adds listener for window resize
      expect(window.addEventListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      )

      // Adds listener for menu button click
      expect($menuButton.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function)
      )
    })

    it('should not throw with missing navigation', () => {
      $navigation.remove()
      expect(() => initHeader()).not.toThrow()
    })

    it('should not throw with missing menu button', () => {
      $menuButton.remove()
      expect(() => initHeader()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initHeader()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initHeader({ scope })).not.toThrow()
    })
  })

  describe('Menu button', () => {
    it('should be hidden by default', () => {
      expect($menuButton).toHaveRole('button')
      expect($menuButton.parentElement).toHaveAttribute('hidden')
    })

    it('should be hidden when items do not overflow', () => {
      initHeader()

      expect($menuButton.parentElement).toHaveAttribute('hidden')
    })

    it('should be visible when items overflow', () => {
      listWidth = 700

      initHeader()

      expect($menuButton.parentElement).not.toHaveAttribute('hidden')
    })

    it('should toggle menu via click', () => {
      listWidth = 700

      initHeader()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Adds listener for escape key
      expect(document.addEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      )

      // Close menu
      $menuButton.click()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')

      // Removes listener for escape key
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      )
    })

    it('should close menu via escape key', async () => {
      listWidth = 700

      initHeader()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Press the escape key to close it
      await user.keyboard('[Escape]')

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })
  })

  describe('Menu list', () => {
    it('should be skipped by default', () => {
      expect($menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be skipped when items do not overflow', () => {
      initHeader()

      expect($menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be added when items overflow', () => {
      listWidth = 700

      initHeader()

      expect($menuButton.nextElementSibling).toBeInTheDocument()
      expect($menuButton.nextElementSibling).toHaveRole('list')
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })

    it('should be added when items overflow when resized', async () => {
      initHeader()

      expect($menuButton.nextElementSibling).not.toBeInTheDocument()

      listWidth = 700

      // Trigger resize
      fireEvent.resize(window)
      await setTimeout(100)

      expect($menuButton.nextElementSibling).toBeInTheDocument()
      expect($menuButton.nextElementSibling).toHaveRole('list')
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })
  })

  describe('Menu items', () => {
    const examples = [
      {
        listWidth: 800,
        listItems: 9,
        menuItems: 0
      },
      {
        listWidth: 700,
        listItems: 7,
        menuItems: 2
      },
      {
        listWidth: 600,
        listItems: 6,
        menuItems: 3
      },
      {
        listWidth: 500,
        listItems: 5,
        menuItems: 4
      },
      {
        listWidth: 400,
        listItems: 4,
        menuItems: 5
      },
      {
        listWidth: 300,
        listItems: 3,
        menuItems: 6
      },
      {
        listWidth: 200,
        listItems: 2,
        menuItems: 7
      },
      {
        listWidth: 100,
        listItems: 1,
        menuItems: 8
      }
    ]

    it.each(examples)('should be allocated', async (expected) => {
      listWidth = expected.listWidth

      initHeader()

      const $listItems = $navigation.querySelectorAll('div > ul > li')
      const $menuItems = $navigation.querySelectorAll('div > ul > li li')

      expect($listItems).toHaveLength(expected.listItems)
      expect($menuItems).toHaveLength(expected.menuItems)
    })

    it.each(examples)(
      'should be allocated when resized up',
      async (expected) => {
        listWidth = 0

        initHeader()

        listWidth = expected.listWidth

        // Trigger resize
        fireEvent.resize(window)
        await setTimeout(100)

        const $listItems = $navigation.querySelectorAll('div > ul > li')
        const $menuItems = $navigation.querySelectorAll('div > ul > li li')

        expect($listItems).toHaveLength(expected.listItems)
        expect($menuItems).toHaveLength(expected.menuItems)
      }
    )

    it.each(examples)(
      'should be allocated when resized down',
      async (expected) => {
        listWidth = 900

        initHeader()

        listWidth = expected.listWidth

        // Trigger resize
        fireEvent.resize(window)
        await setTimeout(100)

        const $listItems = $navigation.querySelectorAll('div > ul > li')
        const $menuItems = $navigation.querySelectorAll('div > ul > li li')

        expect($listItems).toHaveLength(expected.listItems)
        expect($menuItems).toHaveLength(expected.menuItems)
      }
    )
  })
})
