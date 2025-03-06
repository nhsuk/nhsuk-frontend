import Checkboxes from '../../../packages/components/checkboxes/checkboxes.js'

describe('Checkboxes module', () => {
  describe('does not throw an error', () => {
    it('if there is no conditional checkboxes container', () => {
      expect(() => Checkboxes()).not.toThrow()
    })
    it('if there are no conditional checkboxes inside the container', () => {
      document.body.innerHTML = '<div class="nhsuk-checkboxes"></div>'
      expect(() => Checkboxes()).not.toThrow()
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
      Checkboxes()
      input.click()
      expect(
        conditional.classList.contains('nhsuk-checkboxes__conditional--hidden')
      ).toBe(false)
      expect(input.getAttribute('aria-expanded')).toBe('true')
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
      Checkboxes()
      input.click()
      expect(
        conditional.classList.contains('nhsuk-checkboxes__conditional--hidden')
      ).toBe(false)
      expect(input.getAttribute('aria-expanded')).toBe('true')
      input.click()
      expect(
        conditional.classList.contains('nhsuk-checkboxes__conditional--hidden')
      ).toBe(true)
      expect(input.getAttribute('aria-expanded')).toBe('false')
    })
  })
})
