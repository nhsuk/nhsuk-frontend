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

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new StepperInput($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new StepperInput($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new StepperInput()).toThrow(
        `${StepperInput.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new StepperInput($svg)).toThrow(
        `${StepperInput.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw with missing $input element', () => {
      $input.remove()

      expect(() => new StepperInput($root)).toThrow(
        `${StepperInput.moduleName}: Form field (\`.nhsuk-js-stepper-input-input\`) not found`
      )
    })

    it('should throw with wrong $input element type', () => {
      $input.setAttribute('type', 'email')

      expect(() => new StepperInput($root)).toThrow(
        `${StepperInput.moduleName}: Form field (\`.nhsuk-js-stepper-input-input\`) is not of type HTMLInputElement with attribute (\`type="text"\`)`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new StepperInput($root)
        new StepperInput($root)
      }).toThrow(
        `${StepperInput.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Buttons', () => {
    it('should be hidden by default', () => {
      expect($stepUpButton).toHaveRole('button')
      expect($stepUpButton).toHaveAttribute('hidden')

      expect($stepDownButton).toHaveRole('button')
      expect($stepDownButton).toHaveAttribute('hidden')
    })

    it('should be visible when JavaScript is enabled', () => {
      new StepperInput($root)

      expect($stepUpButton).not.toHaveAttribute('hidden')
      expect($stepDownButton).not.toHaveAttribute('hidden')
    })

    it('should announce changes when clicked', async () => {
      new StepperInput($root)

      const $liveRegion = /** @type {HTMLElement} */ (
        document.querySelector("[aria-live='polite']")
      )

      await user.click($stepUpButton)
      expect($liveRegion.innerText).toBe('3')

      await user.click($stepDownButton)
      expect($liveRegion.innerText).toBe('2')
    })

    describe('Increase', () => {
      beforeEach(() => {
        new StepperInput($root)
      })

      it('steps up when clicked', async () => {
        expect($input).toHaveValue(2)

        await user.click($stepUpButton)

        expect($input).toHaveValue(3)
      })

      it('steps up from 1 if the input is empty and min is 0', async () => {
        await user.clear($input)
        await user.click($stepUpButton)

        expect($input).toHaveValue(1)
      })
    })

    describe('Decrease', () => {
      beforeEach(() => {
        new StepperInput($root)
      })

      it('steps down when clicked', async () => {
        expect($input).toHaveValue(2)

        await user.click($stepDownButton)

        expect($input).toHaveValue(1)
      })

      it('steps down to min value if the input is empty', async () => {
        await user.clear($input)
        await user.click($stepDownButton)

        expect($input).toHaveValue(0)
      })
    })
  })
})
