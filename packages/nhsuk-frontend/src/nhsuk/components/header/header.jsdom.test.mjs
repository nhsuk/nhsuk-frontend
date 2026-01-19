import { queryByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'
import { mockResizeObserver } from 'jsdom-testing-mocks'

import { examples } from './fixtures.mjs'
import { Header, initHeader } from './header.mjs'

import { components } from '#lib'

const user = userEvent.setup()
const resizeObserverMock = mockResizeObserver()

describe('Header class', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLAnchorElement} */
  let $serviceLogo

  /** @type {HTMLElement | null} */
  let $navigation = null

  /** @type {HTMLElement | null} */
  let $navigationList = null

  /** @type {HTMLElement | null} */
  let $menuButton = null

  /** @type {HTMLFormElement | null} */
  let $searchForm = null

  let listHeight = 0
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

    $navigation = queryByRole($root, 'navigation')
    $navigationList = $navigation ? queryByRole($navigation, 'list') : null

    $menuButton = queryByRole($root, 'button', {
      name: 'Browse More',
      hidden: true
    })

    $searchForm = /** @type {HTMLFormElement | null} */ (
      $root.querySelector('.nhsuk-header__search-form')
    )

    // Prevent form submission
    $searchForm?.addEventListener('submit', (event) => event.preventDefault())

    listHeight = 56
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

    jest.spyOn(window, 'addEventListener')
    jest.spyOn(window, 'removeEventListener')
    jest.spyOn(document, 'addEventListener')
    jest.spyOn(document, 'removeEventListener')
    jest.spyOn($root, 'addEventListener')
    jest.spyOn($root, 'removeEventListener')

    if ($menuButton) {
      jest.spyOn($menuButton, 'addEventListener')
    }
  }

  /**
   * @param {number} width
   */
  function resizeExample(width) {
    listWidth = width

    resizeObserverMock.mockElementSize($navigationList, {
      contentBoxSize: { inlineSize: listWidth, blockSize: listHeight }
    })

    // Trigger resize
    resizeObserverMock.resize()

    // Wait for resize on next frame
    return new Promise(requestAnimationFrame)
  }

  describe('Initialisation via init function', () => {
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

    it('should not add menu button event listener by default', () => {
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

    it('should add menu button event listener when items overflow', () => {
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
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

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
      initExample('linked logo')

      expect($serviceLogo).toHaveAccessibleName('NHS homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS homepage')
    })

    it('should use a custom `aria-label` for linked NHS logo', () => {
      initExample('white linked logo, ARIA label')

      expect($serviceLogo).toHaveAccessibleName('NHS white homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS white homepage')
    })

    it('should append ‘homepage’ to linked NHS logo with separate service name', () => {
      initExample('with service name')

      expect($serviceLogo).toHaveAccessibleName('NHS homepage')
      expect($serviceLogo).toHaveAttribute('aria-label', 'NHS homepage')
    })

    it('should append ‘homepage’ to linked service name logo combo', () => {
      initExample('with service name (linked with logo)')

      expect($serviceLogo).toHaveAccessibleName('NHS Prototype kit homepage')
    })

    it('should append ‘homepage’ to linked logo and organisation name', () => {
      initExample('with organisation name')

      expect($serviceLogo).toHaveAccessibleName(
        'NHS Business Services Authority homepage'
      )
    })

    it('should append ‘homepage’ to linked logo and split organisation name', () => {
      initExample('with organisation name (split with descriptor), search')

      expect($serviceLogo).toHaveAccessibleName(
        'NHS Anytown Anyplace Anywhere homepage'
      )
    })

    it('should append ‘homepage’ to linked custom logo', () => {
      initExample('white linked logo, custom')

      expect($serviceLogo).toHaveAccessibleName(
        'Great Ormond Street Hospital for Children, NHS Foundation Trust homepage'
      )
    })
  })

  describe('Menu', () => {
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

    it('should stay open when resized down', async () => {
      listWidth = 700

      new Header($root)

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Trigger resize
      await resizeExample(500)

      // Menu open (still)
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')
    })

    it.each([
      {
        description: 'header banner',
        selector: '.nhsuk-header'
      },
      {
        description: 'header container',
        selector: '.nhsuk-header__container'
      },
      {
        description: 'search input',
        selector: '.nhsuk-header__search-form input'
      },
      {
        description: 'navigation list',
        selector: '.nhsuk-header__navigation-list'
      },
      {
        description: 'menu list',
        selector: '.nhsuk-header__menu-list'
      }
    ])('should stay open when $description clicked', ({ selector }) => {
      listWidth = 700

      new Header($root)

      const $headerItem = /** @type {HTMLElement} */ (
        document.querySelector(selector)
      )

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Click header item
      $headerItem.click()

      // Menu open (still)
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')
    })

    it('should close when resized up', async () => {
      listWidth = 700

      new Header($root)

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Trigger resize
      await resizeExample(900)

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })

    it('should close via escape key', async () => {
      listWidth = 700

      new Header($root)

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

    it('should close via search form submit', () => {
      listWidth = 700

      new Header($root)

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Submit search form
      $searchForm.submit()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })

    it('should close via back/forward navigation', () => {
      listWidth = 700

      new Header($root)

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Trigger tab switching
      window.dispatchEvent(
        new PageTransitionEvent('pageshow', {
          persisted: false
        })
      )

      // Menu open (still)
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Trigger back/forward navigation
      window.dispatchEvent(
        new PageTransitionEvent('pageshow', {
          persisted: true
        })
      )

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })

    it.each([
      {
        description: 'body',
        selector: 'body'
      },
      {
        description: 'service logo',
        selector: '.nhsuk-header__service-logo'
      },
      {
        description: 'navigation link',
        selector: '.nhsuk-header__navigation-link'
      },
      {
        description: 'menu link',
        selector: '.nhsuk-header__menu-list .nhsuk-header__navigation-link'
      },
      {
        description: 'search button',
        selector: '.nhsuk-header__search-form button'
      }
    ])('should close when $description clicked', ({ selector }) => {
      listWidth = 700

      new Header($root)

      const $headerItem = /** @type {HTMLElement} */ (
        document.querySelector(selector)
      )

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Click header item
      $headerItem.click()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })
  })

  describe('Menu button', () => {
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

    it('should be hidden by default', () => {
      expect($menuButton).toHaveRole('button')
      expect($menuButton.parentElement).toHaveAttribute('hidden')
    })

    it('should be hidden when items do not overflow', () => {
      new Header($root)

      expect($menuButton.parentElement).toHaveAttribute('hidden')
    })

    it('should be visible when items overflow', () => {
      listWidth = 700

      new Header($root)

      expect($menuButton.parentElement).not.toHaveAttribute('hidden')
    })

    it('should toggle menu via click', () => {
      listWidth = 700

      new Header($root)

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')

      // Open menu
      $menuButton.click()

      // Menu open
      expect($menuButton.nextElementSibling).not.toHaveAttribute('hidden')

      // Adds listener for mouse click
      expect(document.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
        true
      )

      // Adds listener for escape key
      expect(document.addEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
        true
      )

      // Adds listener for form submit
      expect($root.addEventListener).toHaveBeenCalledWith(
        'submit',
        expect.any(Function),
        true
      )

      // Adds listener for page show
      expect(window.addEventListener).toHaveBeenCalledWith(
        'pageshow',
        expect.any(Function)
      )

      // Close menu
      $menuButton.click()

      // Menu closed
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')

      // Removes listener for mouse click
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
        true
      )

      // Removes listener for escape key
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
        true
      )

      // Removes listener for form submit
      expect($root.removeEventListener).toHaveBeenCalledWith(
        'submit',
        expect.any(Function),
        true
      )

      // Removes listener for page show
      expect(window.removeEventListener).toHaveBeenCalledWith(
        'pageshow',
        expect.any(Function)
      )
    })
  })

  describe('Menu list', () => {
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

    it('should be skipped by default', () => {
      expect($menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be skipped when items do not overflow', () => {
      new Header($root)

      expect($menuButton.nextElementSibling).not.toBeInTheDocument()
    })

    it('should be added when items overflow', () => {
      listWidth = 700

      new Header($root)

      expect($menuButton.nextElementSibling).toBeInTheDocument()
      expect($menuButton.nextElementSibling).toHaveRole('list')
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })

    it('should be added when items overflow when resized', async () => {
      new Header($root)

      expect($menuButton.nextElementSibling).not.toBeInTheDocument()

      // Trigger resize
      await resizeExample(700)

      expect($menuButton.nextElementSibling).toBeInTheDocument()
      expect($menuButton.nextElementSibling).toHaveRole('list')
      expect($menuButton.nextElementSibling).toHaveAttribute('hidden')
    })
  })

  describe('Menu items', () => {
    beforeEach(() => {
      initExample('with navigation (overflow)')
    })

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

    it.each(examples)('should be allocated $menuItems', async (expected) => {
      listWidth = expected.listWidth

      new Header($root)

      const $listItems = $navigation.querySelectorAll('div > ul > li')
      const $menuItems = $navigation.querySelectorAll('div > ul > li li')

      expect($listItems).toHaveLength(expected.listItems)
      expect($menuItems).toHaveLength(expected.menuItems)
    })

    it.each(examples)(
      'should be allocated $menuItems when resized up',
      async (expected) => {
        listWidth = 0

        new Header($root)

        // Trigger resize
        await resizeExample(expected.listWidth)

        const $listItems = $navigation.querySelectorAll('div > ul > li')
        const $menuItems = $navigation.querySelectorAll('div > ul > li li')

        expect($listItems).toHaveLength(expected.listItems)
        expect($menuItems).toHaveLength(expected.menuItems)
      }
    )

    it.each(examples)(
      'should be allocated $menuItems when resized down',
      async (expected) => {
        listWidth = 900

        new Header($root)

        // Trigger resize
        await resizeExample(expected.listWidth)

        const $listItems = $navigation.querySelectorAll('div > ul > li')
        const $menuItems = $navigation.querySelectorAll('div > ul > li li')

        expect($listItems).toHaveLength(expected.listItems)
        expect($menuItems).toHaveLength(expected.menuItems)
      }
    )
  })
})

/**
 * @typedef {ReturnType<typeof mockResizeObserver>} MockResizeObserver
 */
