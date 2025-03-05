import SkipLink from '../../../packages/components/skip-link/skip-link.js'

// Mock HTML
const skipLinkHtml =
  '<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>'
const mainHtml = '<main class="nhsuk-main-wrapper" id="maincontent"></main>'

/** @type {HTMLElement | null} */
let main = null

/** @type {HTMLAnchorElement | null} */
let skipLink = null

// Helper to set DOM Elements
const initTest = (html = '') => {
  document.body.innerHTML = html
  skipLink = document.querySelector('.nhsuk-skip-link')
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
      expect(main).not.toEqual(document.activeElement)
      expect(main.getAttribute('tabIndex')).toBeNull()
      expect(main.classList.value).not.toContain(
        'nhsuk-skip-link-focused-element'
      )

      skipLink.click()

      // Main content focused
      expect(main).toEqual(document.activeElement)
      expect(main.getAttribute('tabIndex')).toBe('-1')
      expect(main.classList.value).toContain('nhsuk-skip-link-focused-element')
    })
  })

  describe('Unfocuses main content on blur', () => {
    it('if skiplink and main element exist', () => {
      initTest(skipLinkHtml + mainHtml)

      skipLink.click()

      // Main content focused
      expect(main).toEqual(document.activeElement)
      expect(main.getAttribute('tabIndex')).toBe('-1')
      expect(main.classList.value).toContain('nhsuk-skip-link-focused-element')

      main.blur()

      // Main content not focused
      expect(main).not.toEqual(document.activeElement)
      expect(main.getAttribute('tabIndex')).toBeNull()
      expect(main.classList.value).not.toContain(
        'nhsuk-skip-link-focused-element'
      )
    })
  })
})
