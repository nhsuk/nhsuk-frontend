import '@testing-library/jest-dom'
import { outdent } from 'outdent'

/**
 * Polyfill Element methods for NHS.UK frontend error summary
 *
 * @see {@link https://github.com/jsdom/jsdom/issues/1695}
 */
Object.defineProperties(Element.prototype, {
  scrollIntoView: { value: jest.fn() }
})

/**
 * Polyfill `window.matchMedia()` for NHS.UK frontend tabs
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    addEventListener: jest.fn(),
    removeListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

beforeEach(() => {
  const stylesheet = document.createElement('style')

  stylesheet.innerHTML = outdent`
    :root {
      --nhsuk-breakpoint-mobile: 20rem;
      --nhsuk-breakpoint-tablet: 40.0625rem;
      --nhsuk-breakpoint-desktop: 48.0625rem;
      --nhsuk-breakpoint-large-desktop: 61.875rem;
    }
  `

  // Add styles for NHS.UK frontend checks
  document.head.appendChild(stylesheet)

  // Flag NHS.UK frontend as supported
  document.body.classList.add('nhsuk-frontend-supported')
})
