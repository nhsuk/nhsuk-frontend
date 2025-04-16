import { setTimeout } from 'timers/promises'

import { fireEvent, getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import Header from '../../../packages/components/header/header.js'

const user = userEvent.setup()

describe('Header class', () => {
  /** @type {HTMLElement} */
  let navigation

  /** @type {HTMLElement} */
  let menuButton

  let listWidth = 0
  let itemWidth = 0

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="nhsuk-header__navigation">
        <nav class="nhsuk-header__navigation-container" id="header-navigation" role="navigation" aria-label="Primary navigation">
          <ul class="nhsuk-header__navigation-list">
            <li class="nhsuk-header__navigation-item">
              <a class="nhsuk-header__navigation-link" href="#">
                Health A-Z
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
            <li class="nhsuk-header__menu">
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

    const container = document.querySelector('.nhsuk-header__navigation')

    navigation = getByRole(container, 'navigation')
    menuButton = getByRole(container, 'button', { name: 'Browse More' })

    listWidth = 800
    itemWidth = 100

    jest
      .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
      .mockImplementation(function () {
        return this instanceof HTMLUListElement
          ? listWidth // Mock list width
          : itemWidth // Mock item width
      })
  })

  describe('Menu button', () => {
    it('should be hidden by default', async () => {
      expect(menuButton).toHaveRole('button')
      expect(menuButton).not.toHaveClass('nhsuk-header__menu-toggle--visible')
    })

    it('should be hidden when items do not overflow', async () => {
      await Header()

      expect(menuButton).not.toHaveClass('nhsuk-header__menu-toggle--visible')
    })

    it('should be visible when items overflow', async () => {
      listWidth = 700

      await Header()

      expect(menuButton).toHaveClass('nhsuk-header__menu-toggle--visible')
    })

    it('should toggle menu via click', async () => {
      listWidth = 700

      await Header()

      // Menu closed
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )

      // Open menu
      menuButton.click()

      // Menu open
      expect(menuButton.nextElementSibling).not.toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )

      // Close menu
      menuButton.click()

      // Menu closed
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )
    })

    it('should close menu via escape key', async () => {
      listWidth = 700

      await Header()

      // Menu closed
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )

      // Open menu
      menuButton.click()

      // Menu open
      expect(menuButton.nextElementSibling).not.toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )

      // Press the escape key to close it
      await user.keyboard('[Escape]')

      // Menu closed
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )
    })
  })

  describe('Menu list', () => {
    it('should be skipped by default', async () => {
      expect(menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be skipped when items do not overflow', async () => {
      await Header()

      expect(menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be added when items overflow', async () => {
      listWidth = 700

      await Header()

      expect(menuButton.nextElementSibling).toBeInTheDocument()
      expect(menuButton.nextElementSibling).toHaveRole('list')
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )
    })

    it('should be added when items overflow when resized', async () => {
      await Header()

      expect(menuButton.nextElementSibling).not.toBeInTheDocument()

      listWidth = 700

      // Trigger resize
      await fireEvent.resize(window)
      await setTimeout(100)

      expect(menuButton.nextElementSibling).toBeInTheDocument()
      expect(menuButton.nextElementSibling).toHaveRole('list')
      expect(menuButton.nextElementSibling).toHaveClass(
        'nhsuk-header__menu-list--hidden'
      )
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

      await Header()

      const listItems = navigation.querySelectorAll('nav > ul > li')
      const menuItems = navigation.querySelectorAll('nav > ul > li li')

      expect(listItems).toHaveLength(expected.listItems)
      expect(menuItems).toHaveLength(expected.menuItems)
    })

    it.each(examples)(
      'should be allocated when resized up',
      async (expected) => {
        listWidth = 0

        await Header()

        listWidth = expected.listWidth

        // Trigger resize
        await fireEvent.resize(window)
        await setTimeout(100)

        const listItems = navigation.querySelectorAll('nav > ul > li')
        const menuItems = navigation.querySelectorAll('nav > ul > li li')

        expect(listItems).toHaveLength(expected.listItems)
        expect(menuItems).toHaveLength(expected.menuItems)
      }
    )

    it.each(examples)(
      'should be allocated when resized down',
      async (expected) => {
        listWidth = 900

        await Header()

        listWidth = expected.listWidth

        // Trigger resize
        await fireEvent.resize(window)
        await setTimeout(100)

        const listItems = navigation.querySelectorAll('nav > ul > li')
        const menuItems = navigation.querySelectorAll('nav > ul > li li')

        expect(listItems).toHaveLength(expected.listItems)
        expect(menuItems).toHaveLength(expected.menuItems)
      }
    )
  })
})
