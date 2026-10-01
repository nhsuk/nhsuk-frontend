import { within } from '@testing-library/dom'
import { mockResizeObserver } from 'jsdom-testing-mocks'

import { components } from '#lib'

import { examples } from './fixtures.mjs'
import { SectionNavigation } from './section-navigation.mjs'

mockResizeObserver()

describe('SectionNavigation', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLElement} */
  let $list

  let availableWidth = 0
  let naturalWidth = 0
  let isMobile = false

  beforeEach(() => {
    document.body.innerHTML = components.render(
      'section-navigation',
      examples.default
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${SectionNavigation.moduleName}"]`)
    )

    $list = within($root).getByRole('list')

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
          return this.style.width === 'max-content'
            ? naturalWidth
            : availableWidth
        }

        return 0
      }
    )
  })

  it('adds the vertical modifier when items overflow at tablet and above', () => {
    new SectionNavigation($root)

    expect($root).toHaveClass('nhsuk-section-navigation--vertical')
    expect($root).not.toHaveClass('nhsuk-section-navigation--horizontal')
  })

  it('adds the horizontal modifier when items fit on mobile', () => {
    isMobile = true
    availableWidth = 480
    naturalWidth = 320

    new SectionNavigation($root)

    expect($root).toHaveClass('nhsuk-section-navigation--horizontal')
    expect($root).not.toHaveClass('nhsuk-section-navigation--vertical')
  })

  it('does not run layout enhancement when pre-rendered as vertical', () => {
    $root.classList.add('nhsuk-section-navigation--vertical')
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    new SectionNavigation($root)

    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
    expect($root).toHaveClass('nhsuk-section-navigation--vertical')
    expect($root).not.toHaveClass('nhsuk-section-navigation--horizontal')
  })
})
