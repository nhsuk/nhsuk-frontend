class CharacterCount {
  constructor($module) {
    this.$module = $module
    this.$textarea = $module.querySelector('.nhsuk-js-character-count')
    this.$visibleCountMessage = null
    this.$screenReaderCountMessage = null
    this.lastInputTimestamp = null
  }

  // Initialize component
  init() {
    // Check that required elements are present
    if (!this.$textarea) {
      return
    }

    // Check for module
    const { $module } = this
    const { $textarea } = this
    const $fallbackLimitMessage = document.getElementById(`${$textarea.id}-info`)

    // Move the fallback count message to be immediately after the textarea
    // Kept for backwards compatibility
    $textarea.insertAdjacentElement('afterend', $fallbackLimitMessage)

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    const $screenReaderCountMessage = document.createElement('div')
    $screenReaderCountMessage.className = 'nhsuk-character-count__sr-status nhsuk-u-visually-hidden'
    $screenReaderCountMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderCountMessage = $screenReaderCountMessage
    $fallbackLimitMessage.insertAdjacentElement('afterend', $screenReaderCountMessage)

    // Create our live-updating counter element, copying the classes from the
    // fallback element for backwards compatibility as these may have been configured
    const $visibleCountMessage = document.createElement('div')
    $visibleCountMessage.className = $fallbackLimitMessage.className
    $visibleCountMessage.classList.add('nhsuk-character-count__status')
    $visibleCountMessage.setAttribute('aria-hidden', 'true')
    this.$visibleCountMessage = $visibleCountMessage
    $fallbackLimitMessage.insertAdjacentElement('afterend', $visibleCountMessage)

    // Hide the fallback limit message
    $fallbackLimitMessage.classList.add('nhsuk-u-visually-hidden')

    // Read options set using dataset ('data-' values)
    this.options = CharacterCount.getDataset($module)

    // Determine the limit attribute (characters or words)
    let countAttribute = this.defaults.characterCountAttribute
    if (this.options.maxwords) {
      countAttribute = this.defaults.wordCountAttribute
    }

    // Save the element limit
    this.maxLength = $module.getAttribute(countAttribute)

    // Check for limit
    if (!this.maxLength) {
      return
    }

    // Remove hard limit if set
    $textarea.removeAttribute('maxlength')

    this.bindChangeEvents()

    // When the page is restored after navigating 'back' in some browsers the
    // state of the character count is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to manually update it after the pageshow event
    // in browsers that support it.
    if ('onpageshow' in window) {
      window.addEventListener('pageshow', this.updateCountMessage.bind(this))
    } else {
      window.addEventListener('DOMContentLoaded', this.updateCountMessage.bind(this))
    }
    this.updateCountMessage()
  }

  // Read data attributes
  static getDataset(element) {
    const dataset = {}
    const { attributes } = element
    if (attributes) {
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i]
        const match = attribute.name.match(/^data-(.+)/)
        if (match) {
          dataset[match[1]] = attribute.value
        }
      }
    }
    return dataset
  }

  // Counts characters or words in text
  count(text) {
    let length
    if (this.options.maxwords) {
      const tokens = text.match(/\S+/g) || [] // Matches consecutive non-whitespace chars
      length = tokens.length // eslint-disable-line prefer-destructuring
    } else {
      length = text.length // eslint-disable-line prefer-destructuring
    }
    return length
  }

  // Bind input propertychange to the elements and update based on the change
  bindChangeEvents() {
    const { $textarea } = this
    $textarea.addEventListener('keyup', this.handleKeyUp.bind(this))

    // Bind focus/blur events to start/stop polling
    $textarea.addEventListener('focus', this.handleFocus.bind(this))
    $textarea.addEventListener('blur', this.handleBlur.bind(this))
  }

  // Speech recognition software such as Dragon NaturallySpeaking will modify the
  // fields by directly changing its `value`. These changes don't trigger events
  // in JavaScript, so we need to poll to handle when and if they occur.
  checkIfValueChanged() {
    if (!this.$textarea.oldValue) {
      this.$textarea.oldValue = ''
    }
    if (this.$textarea.value !== this.$textarea.oldValue) {
      this.$textarea.oldValue = this.$textarea.value
      this.updateCountMessage()
    }
  }

  // Helper function to update both the visible and screen reader-specific
  // counters simultaneously (e.g. on init)
  updateCountMessage() {
    this.updateVisibleCountMessage()
    this.updateScreenReaderCountMessage()
  }

  // Update visible counter
  updateVisibleCountMessage() {
    const { $textarea } = this
    const { $visibleCountMessage } = this
    const remainingNumber = this.maxLength - this.count($textarea.value)

    // If input is over the threshold, remove the disabled class which renders the
    // counter invisible.
    if (this.isOverThreshold()) {
      $visibleCountMessage.classList.remove('nhsuk-character-count__message--disabled')
    } else {
      $visibleCountMessage.classList.add('nhsuk-character-count__message--disabled')
    }

    // Update styles
    if (remainingNumber < 0) {
      $textarea.classList.add('nhsuk-textarea--error')
      $visibleCountMessage.classList.remove('nhsuk-hint')
      $visibleCountMessage.classList.add('nhsuk-error-message')
    } else {
      $textarea.classList.remove('nhsuk-textarea--error')
      $visibleCountMessage.classList.remove('nhsuk-error-message')
      $visibleCountMessage.classList.add('nhsuk-hint')
    }

    // Update message
    $visibleCountMessage.innerHTML = this.formattedUpdateMessage()
  }

  // Update screen reader-specific counter
  updateScreenReaderCountMessage() {
    const { $screenReaderCountMessage } = this

    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      $screenReaderCountMessage.removeAttribute('aria-hidden')
    } else {
      $screenReaderCountMessage.setAttribute('aria-hidden', true)
    }

    // Update message
    $screenReaderCountMessage.innerHTML = this.formattedUpdateMessage()
  }

  // Format update message
  formattedUpdateMessage() {
    const { $textarea } = this
    const { options } = this
    const remainingNumber = this.maxLength - this.count($textarea.value)

    let charVerb = 'remaining'
    let charNoun = 'character'
    let displayNumber = remainingNumber
    if (options.maxwords) {
      charNoun = 'word'
    }
    charNoun += remainingNumber === -1 || remainingNumber === 1 ? '' : 's'

    charVerb = remainingNumber < 0 ? 'too many' : 'remaining'
    displayNumber = Math.abs(remainingNumber)

    return `You have ${displayNumber} ${charNoun} ${charVerb}`
  }

  // Checks whether the value is over the configured threshold for the input.
  // If there is no configured threshold, it is set to 0 and this function will
  // always return true.
  isOverThreshold() {
    const { $textarea } = this
    const { options } = this

    // Determine the remaining number of characters/words
    const currentLength = this.count($textarea.value)
    const { maxLength } = this

    // Set threshold if presented in options
    const thresholdPercent = options.threshold ? options.threshold : 0
    const thresholdValue = (maxLength * thresholdPercent) / 100

    return thresholdValue <= currentLength
  }

  // Update the visible character counter and keep track of when the last update
  // happened for each keypress
  handleKeyUp() {
    this.updateVisibleCountMessage()
    this.lastInputTimestamp = Date.now()
  }

  handleFocus() {
    // If the field is focused, and a keyup event hasn't been detected for at
    // least 1000 ms (1 second), then run the manual change check.
    // This is so that the update triggered by the manual comparison doesn't
    // conflict with debounced KeyboardEvent updates.
    this.valueChecker = setInterval(() => {
      if (!this.lastInputTimestamp || Date.now() - 500 >= this.lastInputTimestamp) {
        this.checkIfValueChanged()
      }
    }, 1000)
  }

  handleBlur() {
    // Cancel value checking on blur
    clearInterval(this.valueChecker)
  }
}

CharacterCount.prototype.defaults = {
  characterCountAttribute: 'data-maxlength',
  wordCountAttribute: 'data-maxwords'
}

export default ({ scope = document } = {}) => {
  const characterCounts = scope.querySelectorAll('[data-module="nhsuk-character-count"]')
  characterCounts.forEach((el) => {
    new CharacterCount(el).init()
  })
}
