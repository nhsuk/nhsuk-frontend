import { getByRole } from '@testing-library/dom'
import { mockResizeObserver } from 'jsdom-testing-mocks'

import { examples } from './fixtures.mjs'
import { SecondaryNavigation } from './secondary-navigation.mjs'

import { components } from '#lib'

mockResizeObserver()

describe('SecondaryNavigation', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $list

  let availableWidth = 0
  let naturalWidth = 0
  let isMobile = false

  beforeEach(() => {
    document.body.innerHTML = components.render(
      'secondary-navigation',
      examples.default
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(
        `[data-module="${SecondaryNavigation.moduleName}"]`
      )
    )

    $list = getByRole($root, 'list')

    availableWidth = 320
    naturalWidth = 480
    isMobile = false

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: isMobile,
        media: '(max-width: 40em)',
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })

    jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(
      /** @this {HTMLElement} */
      function () {
        if (this === $root) {
          return availableWidth
        }

        if (this === $list) {
          return this.style.width === 'max-content' ? naturalWidth : availableWidth
        }

        return 0
      }
    )
  })

  it('adds the vertical modifier when items overflow at tablet and above', () => {
    new SecondaryNavigation($root)

    expect($root).toHaveClass('nhsuk-secondary-navigation--vertical')
    expect($root).not.toHaveClass('nhsuk-secondary-navigation--horizontal')
  })

  it('adds the horizontal modifier when items fit on mobile', () => {
    isMobile = true
    availableWidth = 480
    naturalWidth = 320

    new SecondaryNavigation($root)

    expect($root).toHaveClass('nhsuk-secondary-navigation--horizontal')
    expect($root).not.toHaveClass('nhsuk-secondary-navigation--vertical')
  })

  it('does not run layout enhancement when pre-rendered as vertical', () => {
    $root.classList.add('nhsuk-secondary-navigation--vertical')
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    new SecondaryNavigation($root)

    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
    expect($root).toHaveClass('nhsuk-secondary-navigation--vertical')
    expect($root).not.toHaveClass('nhsuk-secondary-navigation--horizontal')
  })
})