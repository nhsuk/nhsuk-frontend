import { setTimeout } from 'timers/promises'

import { components } from '@nhsuk/frontend-lib'
import { fireEvent, getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { initHeader } from './header.mjs'

const user = userEvent.setup()

describe('Header class', () => {
  /** @type {HTMLElement} */
  let $navigation

  /** @type {HTMLElement} */
  let $menuButton

  let listWidth = 0
  let itemWidth = 0

  beforeEach(() => {
    document.body.innerHTML = components.render('header', {
      context: {
        navigation: {
          items: [
            {
              href: '#',
              text: 'Health A to Z'
            },
            {
              href: '#',
              text: 'Live Well'
            },
            {
              href: '#',
              text: 'Mental health'
            },
            {
              href: '#',
              text: 'Care and support'
            },
            {
              href: '#',
              text: 'Pregnancy',
              active: true
            },
            {
              href: '#',
              text: 'NHS services'
            },
            {
              href: '#',
              text: 'Another item #1'
            },
            {
              href: '#',
              text: 'Another item #2'
            }
          ]
        }
      }
    })

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

    it('should stay open when resized down', async () => {
      listWidth = 700

      initHeader()

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      listWidth = 500

      // Trigger resize
      fireEvent.resize(window)
      await setTimeout(100)

      // Menu open (still)
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')
    })

    it('should close menu when resized up', async () => {
      listWidth = 700

      initHeader()

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      listWidth = 900

      // Trigger resize
      fireEvent.resize(window)
      await setTimeout(100)

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
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
