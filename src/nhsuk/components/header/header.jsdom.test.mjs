import * as timers from 'node:timers/promises'

import { components } from '@nhsuk/frontend-lib'
import { fireEvent, getByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { examples } from './fixtures.mjs'
import { Header, initHeader } from './header.mjs'

const user = userEvent.setup()

describe('Header class', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLAnchorElement | null} */
  let $serviceLogo

  /** @type {HTMLElement} */
  let $navigation

  /** @type {HTMLElement} */
  let $navigationList

  /** @type {HTMLElement} */
  let $menuButton

  let listWidth = 0
  let itemWidth = 0

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render('header', examples[example])

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Header.moduleName}"]`)
    )

    $serviceLogo = /** @type {HTMLAnchorElement | null} */ (
      $root.querySelector('.nhsuk-header__service-logo')
    )
  }

  beforeEach(() => {
    document.body.innerHTML = components.render(
      'header',
      examples['blue with navigation (overflow)']
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${Header.moduleName}"]`)
    )

    $navigation = getByRole($root, 'navigation')
    $navigationList = getByRole($navigation, 'list')

    $menuButton = getByRole($root, 'button', {
      name: 'Browse More',
      hidden: true
    })

    listWidth = 800
    itemWidth = 100

    jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(
      /** @this {HTMLElement} */
      function () {
        return this instanceof HTMLUListElement
          ? listWidth // Mock list width
          : itemWidth // Mock item width
      }
    )

    jest.spyOn($menuButton, 'addEventListener')
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(document, 'addEventListener')
    jest.spyOn(document, 'removeEventListener')
  })

  describe('Initialisation via init function', () => {
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

    it('should throw with missing navigation list', () => {
      $navigationList.remove()

      expect(() => initHeader()).toThrow(
        `${Header.moduleName}: List (\`<ul class="nhsuk-header__navigation-list">\`) not found`
      )
    })

    it('should throw with missing navigation list items', () => {
      $navigationList.innerHTML = ''

      expect(() => initHeader()).toThrow(
        `${Header.moduleName}: List items (\`<li class="nhsuk-header__navigation-item">\`) not found`
      )
    })

    it('should throw with missing menu item', () => {
      $menuButton.parentElement.remove()

      expect(() => initHeader()).toThrow(
        `${Header.moduleName}: Menu item (\`<li class="nhsuk-header__menu" hidden>\`) not found`
      )
    })

    it('should throw with missing menu button', () => {
      $menuButton.remove()

      expect(() => initHeader()).toThrow(
        `${Header.moduleName}: Menu button (\`<button class="nhsuk-header__menu-toggle">\`) not found`
      )
    })

    it('should not throw with missing navigation', () => {
      $navigation.remove()

      expect(() => initHeader()).not.toThrow()
    })

    it('should not throw with missing navigation and related elements', () => {
      $navigation.remove()
      $navigationList.remove()
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

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new Header($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new Header($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new Header()).toThrow(
        `${Header.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new Header($svg)).toThrow(
        `${Header.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new Header($root)
        new Header($root)
      }).toThrow(
        `${Header.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    it('should append ‘homepage’ to linked NHS logo', () => {
      initExample('blue (linked logo)')

      expect($serviceLogo).toHaveAccessibleName('NHS homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS homepage')
    })

    it('should use a custom `aria-label` for linked NHS logo', () => {
      initExample('white (linked logo, ARIA label)')

      expect($serviceLogo).toHaveAccessibleName('NHS white homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS white homepage')
    })

    it('should append ‘homepage’ to linked NHS logo with separate service name', () => {
      initExample('blue with service name')

      expect($serviceLogo).toHaveAccessibleName('NHS homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS homepage')
    })

    it('should append ‘homepage’ to linked service name logo combo', () => {
      initExample('blue with service name (linked with logo)')

      expect($serviceLogo).toHaveAccessibleName('NHS Prototype kit homepage')
    })

    it('should append ‘homepage’ to linked logo and organisation name', () => {
      initExample('blue with organisation name')

      expect($serviceLogo).toHaveAccessibleName(
        'NHS Business Services Authority homepage'
      )
    })

    it('should append ‘homepage’ to linked logo and split organisation name', () => {
      initExample('blue with organisation name (split with descriptor), search')

      expect($serviceLogo).toHaveAccessibleName(
        'NHS Anytown Anyplace Anywhere homepage'
      )
    })

    it('should append ‘homepage’ to linked custom logo', () => {
      initExample('white (linked logo, custom)')

      expect($serviceLogo).toHaveAccessibleName(
        'Great Ormond Street Hospital for Children, NHS Foundation Trust homepage'
      )
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
      await timers.setTimeout(100)

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
      await timers.setTimeout(100)

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
      await timers.setTimeout(100)

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
        await timers.setTimeout(100)

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
        await timers.setTimeout(100)

        const $listItems = $navigation.querySelectorAll('div > ul > li')
        const $menuItems = $navigation.querySelectorAll('div > ul > li li')

        expect($listItems).toHaveLength(expected.listItems)
        expect($menuItems).toHaveLength(expected.menuItems)
      }
    )
  })
})
