import initRadios from './radios.js'

describe('Radios module', () => {
  describe('does not throw an error', () => {
    it('if there is no conditional radios container', () => {
      expect(() => initRadios()).not.toThrow()
    })
    it('if there are no conditional radios inside the container', () => {
      document.body.innerHTML = '<div class="nhsuk-radios--conditional"></div>'
      expect(() => initRadios()).not.toThrow()
    })
  })

  describe('displays conditional content', () => {
    it('when checking the input', () => {
      document.body.innerHTML = `<div class="nhsuk-radios--conditional">
            <input class="nhsuk-radios__input" id="input-1" type="radio" aria-controls="conditional-1" aria-expanded="false" />
            <div class="nhsuk-radios__conditional--hidden" id="conditional-1">Test</div>
            </div>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      initRadios()
      input.click()
      expect(conditional).not.toHaveClass('nhsuk-radios__conditional--hidden')
      expect(input).toHaveAttribute('aria-expanded', 'true')
    })
  })

  describe('hides conditional content', () => {
    it('when checking another input', () => {
      document.body.innerHTML = `<div class="nhsuk-radios--conditional">
            <input class="nhsuk-radios__input" id="input-1" name="test" type="radio" aria-controls="conditional-1" aria-expanded="false" />
            <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-1">Test</div>
            <input class="nhsuk-radios__input" id="input-2" name="test" type="radio" aria-expanded="false" />
            </div>`
      const input = document.querySelector('#input-1')
      const conditional = document.querySelector('#conditional-1')
      const otherInput = document.querySelector('#input-2')
      initRadios()
      input.click()
      expect(conditional).not.toHaveClass('nhsuk-radios__conditional--hidden')
      expect(input).toHaveAttribute('aria-expanded', 'true')
      otherInput.click()
      expect(conditional).toHaveClass('nhsuk-radios__conditional--hidden')
      expect(input).toHaveAttribute('aria-expanded', 'false')
    })
  })
})
