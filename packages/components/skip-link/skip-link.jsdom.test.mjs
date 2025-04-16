import SkipLink from './skip-link.js'

// Mock HTML
const skipLinkHtml =
  '<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>'
const mainHtml = '<main class="nhsuk-main-wrapper" id="maincontent"></main>'

/** @type {HTMLElement} */
let main

/** @type {HTMLAnchorElement} */
let skipLink

// Helper to set DOM Elements
const initTest = (html = '') => {
  document.body.innerHTML = html

  skipLink = /** @type {HTMLAnchorElement} */ (
    document.querySelector('.nhsuk-skip-link')
  )

  main = document.querySelector('main')

  SkipLink()
}

describe('NHS.UK skiplink', () => {
  describe('Does not throw an error', () => {
    it('if no skiplink exists', () => {
      initTest(mainHtml)
      expect(skipLink).toBeNull()
      expect(main).toBeDefined()
    })

    it('if no main content exists', () => {
      initTest(skipLinkHtml)
      expect(skipLink).toBeDefined()
      expect(main).toBeNull()
    })

    it('if no skiplink or main content exists', () => {
      initTest()
      expect(skipLink).toBeNull()
      expect(main).toBeNull()
    })
  })

  describe('Focuses main content on skiplink click', () => {
    it('if skiplink and main element exist', () => {
      initTest(skipLinkHtml + mainHtml)

      // Main content not focused
      expect(main).not.toHaveFocus()
      expect(main).not.toHaveAttribute('tabIndex')
      expect(main).not.toHaveClass('nhsuk-skip-link-focused-element')

      skipLink.click()

      // Main content focused
      expect(main).toHaveFocus()
      expect(main).toHaveAttribute('tabIndex', '-1')
      expect(main).toHaveClass('nhsuk-skip-link-focused-element')
    })
  })

  describe('Unfocuses main content on blur', () => {
    it('if skiplink and main element exist', () => {
      initTest(skipLinkHtml + mainHtml)

      skipLink.click()

      // Main content focused
      expect(main).toHaveFocus()
      expect(main).toHaveAttribute('tabIndex', '-1')
      expect(main).toHaveClass('nhsuk-skip-link-focused-element')

      main.blur()

      // Main content not focused
      expect(main).not.toHaveFocus()
      expect(main).not.toHaveAttribute('tabIndex')
      expect(main).not.toHaveClass('nhsuk-skip-link-focused-element')
    })
  })
})
