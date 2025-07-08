import { Component } from '../../component.mjs'
import { ElementError } from '../../errors/index.mjs'

/**
 * Character count component
 */
export class CharacterCount extends Component {
  /**
   * @type {number | null}
   */
  lastInputTimestamp = null
  lastInputValue = ''

  /**
   * @type {number | null}
   */
  valueChecker = null

  /**
   * @param {Element | null} [$root] - HTML element to use for component
   */
  constructor($root) {
    super($root)

    const $textarea = this.$root.querySelector('.nhsuk-js-character-count')
    if (
      !$textarea ||
      !(
        $textarea instanceof HTMLTextAreaElement ||
        $textarea instanceof HTMLInputElement
      )
    ) {
      throw new ElementError({
        component: CharacterCount,
        element: $textarea,
        expectedType: 'HTMLTextareaElement or HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-character-count`)'
      })
    }

    this.$textarea = $textarea
    this.$visibleCountMessage = null
    this.$screenReaderCountMessage = null

    const fallbackLimitMessageId = `${this.$textarea.id}-info`
    const $fallbackLimitMessage = document.getElementById(
      fallbackLimitMessageId
    )

    if (!$fallbackLimitMessage) {
      throw new ElementError({
        component: CharacterCount,
        element: $fallbackLimitMessage,
        identifier: `Count message (\`id="${fallbackLimitMessageId}"\`)`
      })
    }

    // Pre-existing validation error rendered from server
    this.$errorMessage = this.$root.querySelector('.nhsuk-error-message')

    // Move the fallback count message to be immediately after the textarea
    // Kept for backwards compatibility
    this.$textarea.insertAdjacentElement('afterend', $fallbackLimitMessage)

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    const $screenReaderCountMessage = document.createElement('div')
    $screenReaderCountMessage.className =
      'nhsuk-character-count__sr-status nhsuk-u-visually-hidden'
    $screenReaderCountMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderCountMessage = $screenReaderCountMessage
    $fallbackLimitMessage.insertAdjacentElement(
      'afterend',
      $screenReaderCountMessage
    )

    // Create our live-updating counter element, copying the classes from the
    // fallback element for backwards compatibility as these may have been configured
    const $visibleCountMessage = document.createElement('div')
    $visibleCountMessage.className = $fallbackLimitMessage.className
    $visibleCountMessage.classList.add('nhsuk-character-count__status')
    $visibleCountMessage.setAttribute('aria-hidden', 'true')
    this.$visibleCountMessage = $visibleCountMessage
    $fallbackLimitMessage.insertAdjacentElement(
      'afterend',
      $visibleCountMessage
    )

    // Hide the fallback limit message
    $fallbackLimitMessage.classList.add('nhsuk-u-visually-hidden')

    /**
     * Read config set using dataset ('data-' values)
     *
     * @type {CharacterCountConfig}
     */
    this.config = Object.assign(
      {},
      CharacterCount.defaults,
      CharacterCount.getDataset(this.$root)
    )

    // Determine the limit attribute (characters or words)
    this.maxLength = this.config.maxwords ?? this.config.maxlength ?? Infinity

    // Remove hard limit if set
    this.$textarea.removeAttribute('maxlength')

    this.bindChangeEvents()

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => this.updateCountMessage())

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so update now too.
    this.updateCountMessage()
  }

  /**
   * Read data attributes
   *
   * @param {HTMLElement} element - HTML element
   */
  static getDataset(element) {
    const dataset = /** @type {CharacterCountConfig} */ ({})

    for (const [key, value] of Object.entries(element.dataset)) {
      if (key === 'maxlength' || key === 'maxwords' || key === 'threshold') {
        dataset[key] = Number(value)
      }
    }

    return dataset
  }

  /**
   * Counts characters or words in text
   *
   * @param {string} text
   */
  count(text) {
    let length
    if (this.config.maxwords) {
      const tokens = text.match(/\S+/g) ?? [] // Matches consecutive non-whitespace chars
      length = tokens.length
    } else {
      length = text.length
    }
    return length
  }

  /**
   * Bind input propertychange to the elements and update based on the change
   */
  bindChangeEvents() {
    const { $textarea } = this
    $textarea.addEventListener('keyup', this.handleKeyUp.bind(this))

    // Bind focus/blur events to start/stop polling
    $textarea.addEventListener('focus', this.handleFocus.bind(this))
    $textarea.addEventListener('blur', this.handleBlur.bind(this))
  }

  /**
   * Speech recognition software such as Dragon NaturallySpeaking will modify the
   * fields by directly changing its `value`. These changes don't trigger events
   * in JavaScript, so we need to poll to handle when and if they occur
   */
  checkIfValueChanged() {
    if (this.$textarea.value !== this.lastInputValue) {
      this.lastInputValue = this.$textarea.value
      this.updateCountMessage()
    }
  }

  /**
   * Helper function to update both the visible and screen reader-specific
   * counters simultaneously (e.g. on init)
   */
  updateCountMessage() {
    this.updateVisibleCountMessage()
    this.updateScreenReaderCountMessage()
  }

  /**
   * Update visible counter
   */
  updateVisibleCountMessage() {
    const { $textarea } = this
    const { $visibleCountMessage } = this

    const remainingNumber = this.maxLength - this.count($textarea.value)
    const isError = remainingNumber < 0

    // If input is over the threshold, remove the disabled class which renders the
    // counter invisible.
    $visibleCountMessage.classList.toggle(
      'nhsuk-character-count__message--disabled',
      !this.isOverThreshold()
    )

    // Update styles
    if (!this.$errorMessage) {
      // Only toggle the textarea error class if there isn't an error message
      // already, as it may be unrelated to the limit (eg: allowed characters)
      // and would set the border colour back to black.
      $textarea.classList.toggle('nhsuk-textarea--error', isError)
    }
    $visibleCountMessage.classList.toggle('nhsuk-error-message', isError)
    $visibleCountMessage.classList.toggle('nhsuk-hint', !isError)

    // Update message
    $visibleCountMessage.innerHTML = this.formattedUpdateMessage()
  }

  /**
   * Update screen reader-specific counter
   */
  updateScreenReaderCountMessage() {
    const { $screenReaderCountMessage } = this

    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      $screenReaderCountMessage.removeAttribute('aria-hidden')
    } else {
      $screenReaderCountMessage.setAttribute('aria-hidden', 'true')
    }

    // Update message
    $screenReaderCountMessage.innerHTML = this.formattedUpdateMessage()
  }

  /**
   * Format update message
   */
  formattedUpdateMessage() {
    const { $textarea } = this
    const { config } = this
    const remainingNumber = this.maxLength - this.count($textarea.value)

    let charVerb = 'remaining'
    let charNoun = 'character'
    let displayNumber = remainingNumber
    if (config.maxwords) {
      charNoun = 'word'
    }
    charNoun += remainingNumber === -1 || remainingNumber === 1 ? '' : 's'

    charVerb = remainingNumber < 0 ? 'too many' : 'remaining'
    displayNumber = Math.abs(remainingNumber)

    return `You have ${displayNumber} ${charNoun} ${charVerb}`
  }

  /**
   * Check if count is over threshold
   *
   * Checks whether the value is over the configured threshold for the input.
   * If there is no configured threshold, it is set to 0 and this function will
   * always return true
   */
  isOverThreshold() {
    const { $textarea } = this
    const { config } = this

    // Determine the remaining number of characters/words
    const currentLength = this.count($textarea.value)
    const { maxLength } = this

    // Set threshold if presented in config
    const thresholdPercent = config.threshold ?? 0
    const thresholdValue = (maxLength * thresholdPercent) / 100

    return thresholdValue <= currentLength
  }

  /**
   * Handle key up event
   *
   * Update the visible character counter and keep track of when the last update
   * happened for each keypress
   */
  handleKeyUp() {
    this.updateVisibleCountMessage()
    this.lastInputTimestamp = Date.now()
  }

  /**
   * Handle focus event
   */
  handleFocus() {
    // If the field is focused, and a keyup event hasn't been detected for at
    // least 1000 ms (1 second), then run the manual change check.
    // This is so that the update triggered by the manual comparison doesn't
    // conflict with debounced KeyboardEvent updates.
    this.valueChecker = window.setInterval(() => {
      if (
        !this.lastInputTimestamp ||
        Date.now() - 500 >= this.lastInputTimestamp
      ) {
        this.checkIfValueChanged()
      }
    }, 1000)
  }

  /**
   * Handle blur event
   *
   * Stop checking the textarea value once the textarea no longer has focus
   */
  handleBlur() {
    // Cancel value checking on blur
    if (this.valueChecker) {
      window.clearInterval(this.valueChecker)
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-character-count'

  /**
   * Character count default config
   *
   * @see {@link CharacterCountConfig}
   * @constant
   * @type {CharacterCountConfig}
   */
  static defaults = Object.freeze({
    threshold: 0
  })
}

/**
 * Initialise character count component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initCharacterCounts(options = {}) {
  const $scope = options.scope ?? document
  const $characterCounts = $scope.querySelectorAll(
    `[data-module="${CharacterCount.moduleName}"]`
  )

  $characterCounts.forEach(($root) => {
    new CharacterCount($root)
  })
}

/**
 * Character count config
 *
 * @see {@link CharacterCount.defaults}
 * @typedef {object} CharacterCountConfig
 * @property {number} [maxlength] - The maximum number of characters.
 *   If maxwords is provided, the maxlength option will be ignored.
 * @property {number} [maxwords] - The maximum number of words. If maxwords is
 *   provided, the maxlength option will be ignored.
 * @property {number} [threshold=0] - The percentage value of the limit at
 *   which point the count message is displayed. If this attribute is set, the
 *   count message will be hidden by default.
 */
