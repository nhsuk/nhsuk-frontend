require('@testing-library/jest-dom')

/**
 * Polyfill HTMLLabelElement methods for error summary
 *
 * @see {@link https://github.com/jsdom/jsdom/issues/1695}
 */
Object.defineProperties(HTMLLabelElement.prototype, {
  scrollIntoView: { value: jest.fn() }
})

/**
 * Polyfill HTMLLabelElement methods for error summary
 *
 * @see {@link https://github.com/jsdom/jsdom/issues/1695}
 */
Object.defineProperties(HTMLLegendElement.prototype, {
  scrollIntoView: { value: jest.fn() }
})

/**
 * Polyfill `window.matchMedia()` for GOV.UK Frontend
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
