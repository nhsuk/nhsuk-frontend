import Button from './button.js'

describe('mis-instantiation', () => {
  it('does not prevent further JavaScript from running', () => {
    expect(() => {
      // `undefined` simulates the element being missing,
      // from an unchecked `document.querySelector` for example
      Button(undefined)
    }).not.toThrow()
  })
})
