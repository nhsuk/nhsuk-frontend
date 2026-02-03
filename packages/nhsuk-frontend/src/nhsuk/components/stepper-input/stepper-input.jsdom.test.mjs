import { getByRole, getAllByRole } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { examples } from './fixtures.mjs'
import { StepperInput, initStepperInputs } from './stepper-input.mjs'

import { components } from '#lib'

const user = userEvent.setup()

describe('Stepper input', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLButtonElement} */
  let $stepUpButton

  /** @type {HTMLButtonElement} */
  let $stepDownButton

  /** @type {HTMLInputElement} */
  let $input

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'stepper-input',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${StepperInput.moduleName}"]`)
    )

    const $buttons = /** @type {HTMLButtonElement[]} */ (
      getAllByRole($root, 'button', {
        hidden: true
      })
    )

    $stepDownButton = $buttons[0]
    $stepUpButton = $buttons[1]

    $input = getByRole($root, 'textbox', {
      name: 'How many images were taken?'
    })

    jest.spyOn($stepDownButton, 'addEventListener')
    jest.spyOn($stepUpButton, 'addEventListener')
  }

  beforeEach(() => {
    initExample('with button text')
  })

  describe('Initialisation via init function', () => {
    it('should add event listeners', () => {
      initStepperInputs()

      // Adds listener for step down button click
      expect($stepDownButton.addEventListener).toHaveBeenNthCalledWith(
        1,
        'click',
        expect.any(Function)
      )

      // Adds listener for step up button click
      expect($stepUpButton.addEventListener).toHaveBeenNthCalledWith(
        1,
        'click',
        expect.any(Function)
      )
    })

    it('should throw with missing text input', () => {
      $input.remove()

      expect(() => initStepperInputs()).toThrow(
        `${StepperInput.moduleName}: Form field (\`.nhsuk-js-stepper-input-input\`) not found`
      )
    })

    it('should throw with missing step down button', () => {
      $stepDownButton.remove()

      expect(() => initStepperInputs()).toThrow(
        `${StepperInput.moduleName}: Step down button (\`.nhsuk-js-stepper-input-step-down\`) not found`
      )
    })

    it('should throw with missing step up button', () => {
      $stepUpButton.remove()

      expect(() => initStepperInputs()).toThrow(
        `${StepperInput.moduleName}: Step up button (\`.nhsuk-js-stepper-input-step-up\`) not found`
      )
    })

    it('should not throw with missing component', () => {
      $root.remove()
      expect(() => initStepperInputs()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initStepperInputs()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initStepperInputs({ scope })).not.toThrow()
    })
  })

  it('shows buttons when javascript is enabled', async () => {
    expect($stepUpButton).toHaveAttribute('hidden')
    expect($stepDownButton).toHaveAttribute('hidden')

    initStepperInputs()

    expect($stepUpButton).not.toHaveAttribute('hidden')
    expect($stepDownButton).not.toHaveAttribute('hidden')
  })

  it('steps up when the button is clicked', async () => {
    initStepperInputs()
    expect($input).toHaveValue(2)

    await user.click($stepUpButton)

    expect($input).toHaveValue(3)
  })

  it('steps down when the button is clicked', async () => {
    initStepperInputs()
    expect($input).toHaveValue(2)

    await user.click($stepDownButton)

    expect($input).toHaveValue(1)
  })

  it('announces the change after buttons are clicked', async () => {
    initStepperInputs()

    const liveRegion = /** @type {HTMLElement} */ (
      document.querySelector("[aria-live='polite']")
    )

    await user.click($stepUpButton)
    expect(liveRegion.innerText).toBe('3')
    await user.click($stepDownButton)
    expect(liveRegion.innerText).toBe('2')
  })

  it('assumes the min value when stepping down if the input is empty', async () => {
    initStepperInputs()
    $input.value = ''

    await user.click($stepDownButton)

    expect($input).toHaveValue(0)
  })

  it('starts from 1 when stepping up if the input is empty and min is 0', async () => {
    initStepperInputs()
    $input.value = ''

    await user.click($stepUpButton)

    expect($input).toHaveValue(1)
  })
})
