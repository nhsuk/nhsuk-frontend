import '@testing-library/jest-dom'

/**
 * Polyfill Element methods for error summary
 *
 * @see {@link https://github.com/jsdom/jsdom/issues/1695}
 */
Object.defineProperties(Element.prototype, {
  scrollIntoView: { value: jest.fn() }
})

/**
 * Polyfill `window.matchMedia()` for NHS.UK frontend
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

beforeEach(async () => {
  const { style } = document.documentElement

  // Add styles for NHS.UK frontend checks
  style.setProperty('--nhsuk-breakpoint-mobile', '20rem')
  style.setProperty('--nhsuk-breakpoint-tablet', '40.0625rem')
  style.setProperty('--nhsuk-breakpoint-desktop', '48.0625rem')
  style.setProperty('--nhsuk-breakpoint-large-desktop', '61.875rem')

  // Flag NHS.UK frontend as supported
  document.body.classList.add('nhsuk-frontend-supported')
})
