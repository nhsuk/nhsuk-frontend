import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Stepper input component
 *
 * @augments {ConfigurableComponent<StepperInputConfig>}
 */
export class StepperInput extends ConfigurableComponent {
  /**
   * @type {number | null}
   */
  value = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<StepperInputConfig>} [config] - Stepper input config
   */
  constructor($root, config) {
    super($root, config)

    const $input = this.$root.querySelector('.nhsuk-js-stepper-input-input')
    if (!($input instanceof HTMLInputElement)) {
      throw new ElementError({
        component: StepperInput,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-stepper-input-input`)'
      })
    }

    const $buttonStepDown = this.$root.querySelector(
      '.nhsuk-js-stepper-input-step-down'
    )

    if (!($buttonStepDown instanceof HTMLButtonElement)) {
      throw new ElementError({
        component: StepperInput,
        element: $buttonStepDown,
        expectedType: 'HTMLButtonElement',
        identifier: 'Step down button (`.nhsuk-js-stepper-input-step-down`)'
      })
    }

    const $buttonStepUp = this.$root.querySelector(
      '.nhsuk-js-stepper-input-step-up'
    )

    if (!($buttonStepUp instanceof HTMLButtonElement)) {
      throw new ElementError({
        component: StepperInput,
        element: $buttonStepUp,
        expectedType: 'HTMLButtonElement',
        identifier: 'Step up button (`.nhsuk-js-stepper-input-step-up`)'
      })
    }

    this.$input = $input
    this.$buttonStepDown = $buttonStepDown
    this.$buttonStepUp = $buttonStepUp

    // Promote from text to number input
    $input.type = 'number'

    // Use number input attributes
    for (const attribute of /** @type {const} */ (['min', 'max', 'step'])) {
      const value = this.config[attribute]

      if (typeof value === 'number') {
        $input.setAttribute(attribute, `${value}`)
        $input.removeAttribute(`data-${attribute}`)
      }
    }

    // Prevent mouse wheel changing number input value
    $input.addEventListener('wheel', (event) => {
      event.preventDefault()
    })

    // Check for input changes to (optionally) disable step buttons
    $input.addEventListener('input', (event) => this.handleInput(event))

    $buttonStepDown.addEventListener('click', (event) =>
      this.handleStepDown(event)
    )

    $buttonStepUp.addEventListener('click', (event) => this.handleStepUp(event))

    // Initial check to (optionally) disable step buttons
    this.handleInput()

    // Show step buttons
    $buttonStepDown.removeAttribute('hidden')
    $buttonStepUp.removeAttribute('hidden')

    // Create and append the status text for screen readers.
    this.$screenReaderStatusMessage = document.createElement('div')
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderStatusMessage.classList.add(
      'nhsuk-stepper-input__sr-status',
      'nhsuk-u-visually-hidden'
    )

    this.$input.insertAdjacentElement(
      'afterend',
      this.$screenReaderStatusMessage
    )
  }

  /**
   * Step up number input value
   *
   * @param {MouseEvent} [event] - Click event
   */
  handleStepUp(event) {
    this.$input.stepUp()
    this.handleInput(event)
  }

  /**
   * Step down number input value
   *
   * @param {MouseEvent} [event] - Click event
   */
  handleStepDown(event) {
    this.$input.stepDown()
    this.handleInput(event)
  }

  /**
   * Handle number input value change
   *
   * @param {Event | MouseEvent} [event] - Input or click event (optional)
   */
  handleInput(event) {
    const { $input, config, value } = this
    const min = config.min ?? 0

    // Browsers automatically populate the min or max value using arrow keys
    // but we must handle this manually when clicking step buttons
    const isEmpty = Number.isNaN($input.valueAsNumber)
    const isButton = event?.type === 'click'

    // Polyfill default value on step down
    if (isEmpty && event?.currentTarget === this.$buttonStepDown) {
      $input.valueAsNumber = min
    }

    // Polyfill default value on step up
    if (isEmpty && event?.currentTarget === this.$buttonStepUp) {
      $input.valueAsNumber = min === 0 ? 1 : min
    }

    // Polyfill event dispatch when clicking step buttons
    if (isButton && value !== $input.valueAsNumber) {
      $input.dispatchEvent(new Event('input', { bubbles: true }))
      $input.dispatchEvent(new Event('change', { bubbles: true }))
    }

    // Handle input number min value
    if (typeof config.min === 'number') {
      this.$buttonStepDown.disabled = $input.valueAsNumber <= config.min
    }

    // Handle input number max value
    if (typeof config.max === 'number') {
      this.$buttonStepUp.disabled = $input.valueAsNumber >= config.max
    }

    // Announce value when clicking step buttons
    if (isButton) {
      this.announceInput($input.valueAsNumber)
    }

    // Update saved value
    this.value = $input.valueAsNumber
  }

  /**
   * Announce number input value
   *
   * @param {number} value - Number input value
   */
  announceInput(value) {
    if (this.value === null) {
      return
    }

    this.$screenReaderStatusMessage.innerText = `${value}`
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-stepper-input'

  /**
   * Character count default config
   *
   * @see {@link StepperInputConfig}
   * @constant
   * @type {StepperInputConfig}
   */
  static defaults = Object.freeze({
    step: 1
  })

  /**
   * Character count config schema
   *
   * @constant
   * @satisfies {Schema<StepperInputConfig>}
   */
  static schema = Object.freeze({
    properties: {
      min: { type: 'number' },
      max: { type: 'number' },
      step: { type: 'number' }
    }
  })
}

/**
 * Initialise number input component
 *
 * @deprecated Use {@link createAll | `createAll(StepperInput, options)`} instead.
 * @param {InitOptions & Partial<StepperInputConfig>} [options]
 */
export function initStepperInputs(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $stepperInputs = $scope?.querySelectorAll(
    `[data-module="${StepperInput.moduleName}"]`
  )

  $stepperInputs?.forEach(($root) => {
    new StepperInput($root, options)
  })
}

/**
 * Stepper input config
 *
 * @see {@link StepperInput.defaults}
 * @typedef {object} StepperInputConfig
 * @property {number} [min] - The minimum value
 * @property {number} [max] - The maximum value
 * @property {number} [step=1] - The stepping interval when changing the value
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
