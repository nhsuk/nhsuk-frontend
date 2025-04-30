import initCheckboxes from './checkboxes.js'

describe('Checkboxes module', () => {
  describe('does not throw an error', () => {
    it('if there is no conditional checkboxes container', () => {
      expect(() => initCheckboxes()).not.toThrow()
    })
    it('if there are no conditional checkboxes inside the container', () => {
      document.body.innerHTML = '<div class="nhsuk-checkboxes"></div>'
      expect(() => initCheckboxes()).not.toThrow()
    })
  })

  describe('displays conditional content', () => {
    it('when checking the input', () => {
      document.body.innerHTML = `<form><div class="nhsuk-checkboxes">
            <input class="nhsuk-checkboxes__input" id="input-1" type="checkbox" aria-controls="conditional-1" aria-expanded="false" />
            <div class="nhsuk-checkboxes__conditional--hidden" id="conditional-1">Test</div>
            </div></form>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      initCheckboxes()
      input.click()
      expect(conditional).not.toHaveClass(
        'nhsuk-checkboxes__conditional--hidden'
      )
      expect(input).toHaveAttribute('aria-expanded', 'true')
    })
  })

  describe('hides conditional content', () => {
    it('when unchecking the input', () => {
      document.body.innerHTML = `<form><div class="nhsuk-checkboxes">
            <input class="nhsuk-checkboxes__input" id="input-1" type="checkbox" aria-controls="conditional-1" aria-expanded="false" />
            <div class="nhsuk-checkboxes__conditional nhsuk-checkboxes__conditional--hidden" id="conditional-1">Test</div>
            </div></form>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      initCheckboxes()
      input.click()
      expect(conditional).not.toHaveClass(
        'nhsuk-checkboxes__conditional--hidden'
      )
      expect(input).toHaveAttribute('aria-expanded', 'true')
      input.click()
      expect(conditional).toHaveClass('nhsuk-checkboxes__conditional--hidden')
      expect(input).toHaveAttribute('aria-expanded', 'false')
    })
  })
})
