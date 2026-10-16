import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Stepper input component
 *
 * @augments {ConfigurableComponent<StepperInputConfig>}
 */
export class StepperInput extends ConfigurableComponent {
  valueAsNumber = NaN

  /** @type {Element | null} */
  $prefix = null

  /** @type {Element | null} */
  $suffix = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<StepperInputConfig>} [config] - Stepper input config
   */
  constructor($root, config) {
    super($root, config)

    const { prefixClass, suffixClass, screenReaderCountMessageClass } =
      this.config

    const $input = this.$root.querySelector('.nhsuk-js-stepper-input-input')
    if (!($input instanceof HTMLInputElement)) {
      throw new ElementError({
        component: StepperInput,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-stepper-input-input`)'
      })
    }

    if ($input.type !== 'text') {
      throw new ElementError({
        component: StepperInput,
        element: $input,
        expectedType: 'HTMLInputElement with attribute (`type="text"`)',
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
    this.$prefix = this.$root.querySelector(`.${prefixClass}`)
    this.$suffix = this.$root.querySelector(`.${suffixClass}`)
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
    $input.addEventListener('keydown', (event) => this.handleKeyDown(event))

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
      screenReaderCountMessageClass,
      'nhsuk-u-visually-hidden'
    )

    this.$input.insertAdjacentElement(
      'afterend',
      this.$screenReaderStatusMessage
    )
  }

  /**
   * Get stepper input value
   */
  get value() {
    return this.valueAsNumber
  }

  /**
   * Set stepper input value
   */
  set value(value) {
    const { $input } = this

    this.valueAsNumber = value

    if (!Number.isFinite(value)) {
      $input.value = ''

      return
    }

    $input.valueAsNumber = value

    this.format()
  }

  /**
   * Step up number input value
   *
   * @param {MouseEvent | KeyboardEvent} [event] - Click or keyboard event
   */
  handleStepUp(event) {
    const { $input } = this

    if ($input.hasAttribute('disabled')) {
      return
    }

    $input.stepUp()
    this.handleInput(event)
  }

  /**
   * Step down number input value
   *
   * @param {MouseEvent | KeyboardEvent} [event] - Click or keyboard event
   */
  handleStepDown(event) {
    const { $input } = this

    if ($input.hasAttribute('disabled')) {
      return
    }

    $input.stepDown()
    this.handleInput(event)
  }

  /**
   * Handle number input value change
   *
   * @param {Event | MouseEvent | KeyboardEvent} [event] - Input, click or keyboard event (optional)
   */
  handleInput(event) {
    const { config, $input, $buttonStepDown, $buttonStepUp } = this

    // Skip unless number input value changes
    if (event && this.value === $input.valueAsNumber) {
      return
    }

    const isStepper = event?.type === 'click' || event?.type === 'keydown'

    const min = config.min ?? -Infinity
    const max = config.max ?? Infinity

    // Handle input number min value
    if (!$buttonStepDown.hasAttribute('aria-disabled')) {
      $buttonStepDown.disabled = Number.isFinite($input.valueAsNumber)
        ? $input.valueAsNumber <= min
        : min > 0
    }

    // Handle input number max value
    if (!$buttonStepUp.hasAttribute('aria-disabled')) {
      $buttonStepUp.disabled = Number.isFinite($input.valueAsNumber)
        ? $input.valueAsNumber >= max
        : max < 0
    }

    // Save initial or updated value
    if (!event || isStepper) {
      this.value = $input.valueAsNumber
    }

    if (!isStepper) {
      return
    }

    // Announce updated value
    this.announce()

    // Polyfill event dispatch when clicking step buttons
    if (event.type === 'click') {
      $input.dispatchEvent(new Event('input', { bubbles: true }))
      $input.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  /**
   * Prevent excluded characters and apply formatting on key down
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  handleKeyDown(event) {
    const { config } = this

    if (config.exclude.includes(event.key)) {
      event.preventDefault()
    }

    switch (event.key) {
      // 'Up' and 'Down' required for Edge 16 support.
      case 'ArrowUp':
      case 'Up':
        this.handleStepUp(event)
        event.preventDefault()
        break
      case 'ArrowDown':
      case 'Down':
        this.handleStepDown(event)
        event.preventDefault()
        break
    }
  }

  /**
   * Format number input value
   * (with optional decimal places)
   */
  format() {
    const { config, $input } = this

    // Split step into integer and decimal parts
    const parts = `${config.step}`.split('.')

    // Add or remove decimal places
    const value =
      parts.length > 1
        ? this.value.toFixed(parts[1].length)
        : this.value.toFixed(0)

    $input.value = value
  }

  /**
   * Announce number input value
   */
  announce() {
    const { $input, $prefix, $suffix, $screenReaderStatusMessage } = this

    const prefix = $prefix?.textContent ?? ''
    const suffix = $suffix?.textContent ?? ''
    const message = `${prefix} ${$input.value} ${suffix}`.trim()

    $screenReaderStatusMessage.innerText = message
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
    prefixClass: 'nhsuk-input-wrapper__prefix',
    suffixClass: 'nhsuk-input-wrapper__suffix',
    screenReaderCountMessageClass: 'nhsuk-stepper-input__sr-status',
    exclude: ['+', 'e'],
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
      prefixClass: { type: 'string' },
      suffixClass: { type: 'string' },
      screenReaderCountMessageClass: { type: 'string' },
      exclude: { type: 'array' },
      min: { type: 'number' },
      max: { type: 'number' },
      step: { type: 'number' }
    }
  })
}

/**
 * Stepper input config
 *
 * @see {@link StepperInput.defaults}
 * @typedef {object} StepperInputConfig
 * @property {string} prefixClass - Input prefix class
 * @property {string} suffixClass - Input suffix class
 * @property {string} screenReaderCountMessageClass - Announcements class
 * @property {number} [min] - The minimum value
 * @property {number} [max] - The maximum value
 * @property {number} step - The stepping interval when changing the value
 * @property {string[]} exclude - Excluded number input characters
 */

/**
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
