import { within } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { components } from '#lib'

import { examples } from './fixtures.mjs'
import { StepperInput } from './stepper-input.mjs'

const user = userEvent.setup()

describe('Stepper input', () => {
  /** @type {HTMLElement} */
  let $root

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLElement} */
  let $stepUpButton

  /** @type {HTMLElement} */
  let $stepDownButton

  /** @type {HTMLElement | null} */
  let $screenReaderCountMessage

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

    const $buttons = within($root).getAllByRole('button', {
      hidden: true
    })

    $input = within($root).getByRole('textbox')
    $stepDownButton = $buttons[0]
    $stepUpButton = $buttons[1]

    jest.spyOn($input, 'addEventListener')
    jest.spyOn($stepDownButton, 'addEventListener')
    jest.spyOn($stepUpButton, 'addEventListener')
  }

  /**
   * @param {keyof typeof examples} example
   */
  function createExample(example) {
    initExample(example)

    new StepperInput($root)

    $screenReaderCountMessage = /** @type {HTMLElement} */ (
      document.querySelector("[aria-live='polite']")
    )
  }

  describe('Initialisation via class', () => {
    beforeEach(() => {
      initExample('default')
    })

    it('should add event listeners', () => {
      new StepperInput($root)

      // Adds listener for step input mouse wheel
      expect($input.addEventListener).toHaveBeenNthCalledWith(
        1,
        'wheel',
        expect.any(Function)
      )

      // Adds listener for step input changes
      expect($input.addEventListener).toHaveBeenNthCalledWith(
        2,
        'input',
        expect.any(Function)
      )

      // Adds listener for step input arrow keys
      expect($input.addEventListener).toHaveBeenNthCalledWith(
        3,
        'keydown',
        expect.any(Function)
      )

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

    it('should not throw with $root element', () => {
      expect(() => new StepperInput($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new StepperInput($root)).toThrow(
        'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
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

    it('should throw with missing step down button', () => {
      $stepDownButton.remove()

      expect(() => new StepperInput($root)).toThrow(
        `${StepperInput.moduleName}: Step down button (\`.nhsuk-js-stepper-input-step-down\`) not found`
      )
    })

    it('should throw with missing step up button', () => {
      $stepUpButton.remove()

      expect(() => new StepperInput($root)).toThrow(
        `${StepperInput.moduleName}: Step up button (\`.nhsuk-js-stepper-input-step-up\`) not found`
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

  describe('Accessibility', () => {
    beforeEach(() => {
      initExample('default')
      new StepperInput($root)
    })

    it('should have accessible name and role', async () => {
      expect($stepUpButton).toHaveRole('button')
      expect($stepUpButton).toHaveAccessibleName('Increase')

      expect($stepDownButton).toHaveRole('button')
      expect($stepDownButton).toHaveAccessibleName('Decrease')
    })
  })

  describe('Input', () => {
    it('should use text type by default', () => {
      initExample('default')

      expect($input).toHaveAttribute('type', 'text')
      expect($input).toHaveAttribute('inputmode', 'numeric')
    })

    it('should use number type when initialised', () => {
      initExample('default')

      new StepperInput($root)

      expect($input).toHaveAttribute('type', 'number')
      expect($input).toHaveAttribute('inputmode', 'numeric')
    })

    it('should prevent excluded characters', async () => {
      initExample('default')

      new StepperInput($root)

      await user.click($input)
      await user.keyboard('+2.4e3')

      expect($input).toHaveValue(2.43)
      expect($input).toHaveDisplayValue('2.43')
    })
  })

  describe('Buttons', () => {
    it('should be hidden by default', () => {
      initExample('default')

      expect($stepUpButton).toHaveRole('button')
      expect($stepUpButton).toHaveAttribute('hidden')

      expect($stepDownButton).toHaveRole('button')
      expect($stepDownButton).toHaveAttribute('hidden')
    })

    it('should be visible when initialised', () => {
      initExample('default')

      new StepperInput($root)

      expect($stepUpButton).not.toHaveAttribute('hidden')
      expect($stepDownButton).not.toHaveAttribute('hidden')
    })

    it('should be enabled when initialised', () => {
      initExample('default')

      new StepperInput($root)

      expect($stepUpButton).not.toBeDisabled()
      expect($stepDownButton).not.toBeDisabled()
    })

    describe('Step up button', () => {
      it('increments empty input', async () => {
        createExample('default')

        expect($input).toHaveValue(null)
        expect($input).toHaveDisplayValue('')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepUpButton)

        expect($input).toHaveValue(1)
        expect($input).toHaveDisplayValue('1')
        expect($screenReaderCountMessage).toHaveTextContent('1')
      })

      it('increments empty input with step', async () => {
        createExample('step')

        await user.click($stepUpButton)

        expect($input).toHaveValue(0.1)
        expect($input).toHaveDisplayValue('0.1')
        expect($screenReaderCountMessage).toHaveTextContent('0.1')
      })

      it('increments input with value', async () => {
        createExample('with value')

        expect($input).toHaveValue(2)
        expect($input).toHaveDisplayValue('2')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepUpButton)

        expect($input).toHaveValue(3)
        expect($input).toHaveDisplayValue('3')
        expect($screenReaderCountMessage).toHaveTextContent('3')
      })

      it('increments input with step and value', async () => {
        createExample('step and value')

        expect($input).toHaveValue(1.6)
        expect($input).toHaveDisplayValue('1.60')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepUpButton)

        expect($input).toHaveValue(1.61)
        expect($input).toHaveDisplayValue('1.61')
        expect($screenReaderCountMessage).toHaveTextContent('1.61')
      })

      it('is disabled when max value is reached', async () => {
        createExample('max')

        await user.click($stepUpButton)
        await user.click($stepUpButton)
        await user.click($stepUpButton)
        await user.click($stepUpButton)
        await user.click($stepUpButton)

        expect($input).toHaveValue(5)
        expect($input).toHaveDisplayValue('5')
        expect($screenReaderCountMessage).toHaveTextContent('5')

        expect($stepDownButton).not.toBeDisabled()
        expect($stepUpButton).toBeDisabled()
      })

      it('is disabled at max value', async () => {
        createExample('max and value')

        expect($input).toHaveValue(5)
        expect($input).toHaveDisplayValue('5')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        expect($stepDownButton).not.toBeDisabled()
        expect($stepUpButton).toBeDisabled()
      })
    })

    describe('Step down button', () => {
      it('decrements empty input', async () => {
        createExample('default')

        expect($input).toHaveValue(null)
        expect($input).toHaveDisplayValue('')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepDownButton)

        expect($input).toHaveValue(-1)
        expect($input).toHaveDisplayValue('-1')
        expect($screenReaderCountMessage).toHaveTextContent('-1')
      })

      it('decrements empty input with step', async () => {
        createExample('step')

        await user.click($stepDownButton)

        expect($input).toHaveValue(-0.1)
        expect($input).toHaveDisplayValue('-0.1')
        expect($screenReaderCountMessage).toHaveTextContent('-0.1')
      })

      it('decrements input with value', async () => {
        createExample('with value')

        expect($input).toHaveValue(2)
        expect($input).toHaveDisplayValue('2')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepDownButton)

        expect($input).toHaveValue(1)
        expect($input).toHaveDisplayValue('1')
        expect($screenReaderCountMessage).toHaveTextContent('1')
      })

      it('decrements input with step and value', async () => {
        createExample('step and value')

        expect($input).toHaveValue(1.6)
        expect($input).toHaveDisplayValue('1.60')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        await user.click($stepDownButton)

        expect($input).toHaveValue(1.59)
        expect($input).toHaveDisplayValue('1.59')
        expect($screenReaderCountMessage).toHaveTextContent('1.59')
      })

      it('is disabled when min value is reached', async () => {
        createExample('min')

        await user.keyboard('5')
        await user.click($stepDownButton)
        await user.click($stepDownButton)
        await user.click($stepDownButton)
        await user.click($stepDownButton)
        await user.click($stepDownButton)

        expect($input).toHaveValue(0)
        expect($input).toHaveDisplayValue('0')
        expect($screenReaderCountMessage).toHaveTextContent('0')

        expect($stepDownButton).toBeDisabled()
        expect($stepUpButton).not.toBeDisabled()
      })

      it('is disabled at min value', async () => {
        createExample('min and value')

        expect($input).toHaveValue(0)
        expect($input).toHaveDisplayValue('0')
        expect($screenReaderCountMessage).toBeEmptyDOMElement()

        expect($stepDownButton).toBeDisabled()
        expect($stepUpButton).not.toBeDisabled()
      })
    })
  })
})
