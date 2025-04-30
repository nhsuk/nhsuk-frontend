import initErrorSummary from './error-summary.js'

describe('Error summary module', () => {
  describe('if no error summary elements exists', () => {
    it('should not throw an error', () => {
      expect(() => initErrorSummary()).not.toThrow()
    })
  })

  describe('if an error summary exists', () => {
    beforeEach(() => {
      document.body.innerHTML =
        '<div role="alert" tabindex="-1" class="nhsuk-error-summary"></div>'
      initErrorSummary()
    })

    it('should focus on the error summary', () => {
      const errorSummary = document.querySelector('.nhsuk-error-summary')

      expect(errorSummary).toHaveFocus()
    })

    it('should focus only on the first instance of the error summary', () => {
      const div = document.createElement('div')
      div.innerHTML =
        '<div role="alert" tabindex="-1" class="nhsuk-error-summary"></div>'

      document.body.appendChild(div.firstChild)

      expect(document.body.childElementCount).toBe(2)

      initErrorSummary()

      expect(document.body.firstElementChild).toHaveFocus()
      expect(document.body.children[1]).not.toHaveFocus()
    })
  })
})
