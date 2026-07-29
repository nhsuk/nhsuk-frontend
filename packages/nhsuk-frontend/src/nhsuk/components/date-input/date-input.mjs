import { Component } from '../../component.mjs'

/**
 * Date input component
 */
export class DateInput extends Component {
  /**
   * @type {HTMLInputElement | undefined}
   */
  $dayInput

  /**
   * @type {HTMLInputElement | undefined}
   */
  $monthInput

  /**
   * @type {HTMLInputElement | undefined}
   */
  $yearInput

  /**
   * The input that focus should return to if Backspace is pressed during the
   * auto-advance window
   *
   * @type {HTMLInputElement | null}
   */
  autoAdvanceSource = null

  /**
   * The input that the auto-advance keydown listener is currently attached to
   *
   * @type {HTMLInputElement | null}
   */
  autoAdvanceTarget = null

  /**
   * @type {ReturnType<typeof setTimeout> | null}
   */
  autoAdvanceTimer = null

  /**
   * @type {((event: KeyboardEvent) => void) | null}
   */
  autoAdvanceHandler = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $dayInput = this.$root.querySelector(
      '[data-nhsuk-date-input-field="day"]'
    )
    const $monthInput = this.$root.querySelector(
      '[data-nhsuk-date-input-field="month"]'
    )
    const $yearInput = this.$root.querySelector(
      '[data-nhsuk-date-input-field="year"]'
    )

    if (
      !($dayInput instanceof HTMLInputElement) ||
      !($monthInput instanceof HTMLInputElement)
    ) {
      return
    }

    this.$dayInput = $dayInput
    this.$monthInput = $monthInput

    if ($yearInput instanceof HTMLInputElement) {
      this.$yearInput = $yearInput
    }

    this.$dayInput.addEventListener('input', this.onDayInput.bind(this))
    this.$monthInput.addEventListener('input', this.onMonthInput.bind(this))
  }

  /**
   * Handle input events on the day input.
   *
   * The `input` event fires after the value has changed, so by the time this
   * runs the digit is already in the day field. If the day field now contains
   * exactly 2 digits and the month field is empty, advance focus to the month
   * input. The empty check prevents unintentional tabbing when the user is
   * editing a field that already has a value.
   */
  onDayInput() {
    if (!this.$dayInput || !this.$monthInput) return
    if (this.$dayInput.disabled || this.$monthInput.disabled) return
    if (!/^\d{2}$/.test(this.$dayInput.value)) return
    if (this.$monthInput.value !== '') return

    this.startAutoAdvance(this.$dayInput, this.$monthInput)
  }

  /**
   * Handle input events on the month input.
   *
   * If the month field now contains exactly 2 digits and the year field is
   * empty, advance focus to the year input. The empty check prevents
   * unintentional tabbing when the user is editing a field that already has
   * a value.
   */
  onMonthInput() {
    if (!this.$monthInput || !this.$yearInput) return
    if (this.$monthInput.disabled || this.$yearInput.disabled) return
    if (!/^\d{2}$/.test(this.$monthInput.value)) return
    if (this.$yearInput.value !== '') return

    this.startAutoAdvance(this.$monthInput, this.$yearInput)
  }

  /**
   * Move focus to the target input and open the auto-advance window
   *
   * @param {HTMLInputElement} $from - The input focus is advancing from
   * @param {HTMLInputElement} $to - The input focus is advancing to
   */
  startAutoAdvance($from, $to) {
    this.endAutoAdvance()

    $to.focus()
    $to.setSelectionRange(0, 0)

    this.autoAdvanceSource = $from
    this.autoAdvanceTarget = $to
    this.autoAdvanceHandler = this.onAutoAdvanceKeydown.bind(this)
    $to.addEventListener('keydown', this.autoAdvanceHandler)

    this.autoAdvanceTimer = setTimeout(() => this.endAutoAdvance(), 500)
  }

  /**
   * End the auto-advance window, removing its event listener and clearing the timer
   */
  endAutoAdvance() {
    if (this.autoAdvanceTimer !== null) {
      clearTimeout(this.autoAdvanceTimer)
      this.autoAdvanceTimer = null
    }

    if (this.autoAdvanceHandler && this.autoAdvanceTarget) {
      this.autoAdvanceTarget.removeEventListener(
        'keydown',
        this.autoAdvanceHandler
      )
      this.autoAdvanceHandler = null
      this.autoAdvanceTarget = null
      this.autoAdvanceSource = null
    }
  }

  /**
   * Handle keydown events on the target input during the auto-advance window.
   *
   * - Forward Tab: cancelled to prevent skipping the target field
   * - Backspace: moves focus back to the source field and deletes the last character there
   * - Any other key: ends the window so subsequent keypresses behave normally
   *
   * @param {KeyboardEvent} event - The keydown event
   */
  onAutoAdvanceKeydown(event) {
    if (event.key === 'Tab' && !event.shiftKey) {
      // Cancel the forward Tab to keep focus on the target field
      event.preventDefault()
      this.endAutoAdvance()
    } else if (event.key === 'Backspace') {
      // Capture source before endAutoAdvance clears it
      const $source = this.autoAdvanceSource

      event.preventDefault()
      this.endAutoAdvance()

      if (!$source) return

      // Move focus back to the source field and delete the last character there
      $source.focus()
      const len = $source.value.length
      $source.setSelectionRange(len, len)
      $source.value = $source.value.slice(0, -1)
      $source.dispatchEvent(new Event('input', { bubbles: true }))
    } else {
      // Any other key (e.g. a digit) ends the auto-advance window immediately,
      // so that subsequent Tab or Backspace presses behave normally
      this.endAutoAdvance()
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-date-input'
}
