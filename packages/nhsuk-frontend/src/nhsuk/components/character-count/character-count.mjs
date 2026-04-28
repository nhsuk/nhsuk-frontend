import { closestAttributeValue } from '../../common/closest-attribute-value.mjs'
import { normaliseOptions } from '../../common/configuration/index.mjs'
import { formatErrorMessage } from '../../common/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * Character count component
 *
 * Tracks the number of characters or words in the `.nhsuk-js-character-count`
 * `<textarea>` inside the element. Displays a message with the remaining number
 * of characters/words available, or the number of characters/words in excess.
 *
 * You can configure the message to only appear after a certain percentage
 * of the available characters/words has been entered.
 *
 * @augments {ConfigurableComponent<CharacterCountConfig>}
 */
export class CharacterCount extends ConfigurableComponent {
  length = 0

  /**
   * @type {Intl.Segmenter | null}
   */
  segmenter = null

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
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<CharacterCountConfig>} [config] - Character count config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $textarea = this.$root.querySelector('.nhsuk-js-character-count')
    if (
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

    const {
      i18n,
      maxlength,
      countFunction,
      countType,
      screenReaderCountMessageClass,
      textareaDescriptionClass,
      visibleCountMessageClass
    } = this.config

    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    })

    if (
      'Segmenter' in Intl &&
      (countType === 'characters' || !!countFunction)
    ) {
      this.segmenter = new Intl.Segmenter(this.i18n.locale, {
        granularity: countType === 'words' ? 'word' : 'grapheme'
      })
    }

    // Determine the limit attribute (characters or words)
    this.maxLength = maxlength ?? Infinity

    this.$textarea = $textarea

    const textareaDescriptionId = `${this.$textarea.id}-info`
    const $textareaDescription = document.getElementById(textareaDescriptionId)
    if (!$textareaDescription) {
      throw new ElementError({
        component: CharacterCount,
        element: $textareaDescription,
        identifier: `Count message (\`id="${textareaDescriptionId}"\`)`
      })
    }

    // Pre-existing validation error rendered from server
    this.$errorMessage = this.$root.querySelector('.nhsuk-error-message')

    // Inject a description for the textarea if none is present already
    // for when the component was rendered with no maxlength nor custom
    // textareaDescriptionText
    if (/^\s*$/.exec($textareaDescription.textContent)) {
      $textareaDescription.textContent = this.i18n.t('textareaDescription', {
        count: this.maxLength
      })
    }

    // Move the textarea description to be immediately after the textarea
    // Kept for backwards compatibility
    this.$textarea.insertAdjacentElement('afterend', $textareaDescription)

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    this.$screenReaderCountMessage = document.createElement('div')
    this.$screenReaderCountMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderCountMessage.classList.add(
      screenReaderCountMessageClass,
      'nhsuk-u-visually-hidden'
    )

    $textareaDescription.insertAdjacentElement(
      'afterend',
      this.$screenReaderCountMessage
    )

    // Create our live-updating counter element, copying the classes from the
    // textarea description for backwards compatibility as these may have been
    // configured
    this.$visibleCountMessage = document.createElement('div')
    this.$visibleCountMessage.setAttribute('aria-hidden', 'true')
    this.$visibleCountMessage.setAttribute('hidden', '')
    this.$visibleCountMessage.className = $textareaDescription.className
    this.$visibleCountMessage.classList.add(visibleCountMessageClass)
    this.$visibleCountMessage.classList.remove(textareaDescriptionClass)

    $textareaDescription.insertAdjacentElement(
      'afterend',
      this.$visibleCountMessage
    )

    // Hide the textarea description
    $textareaDescription.classList.add('nhsuk-u-visually-hidden')

    // Remove hard limit if set
    this.$textarea.removeAttribute('maxlength')

    this.bindChangeEvents()

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    window.addEventListener('pageshow', () => {
      // If the current value of the textarea is the same as what's
      // in the HTML, don't re-run when users have not edited the field yet
      // (new page load or BF cache navigation without having edited).
      if (this.$textarea.value !== this.$textarea.textContent) {
        this.updateCount()
        this.updateCountMessage()
      }
    })

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so update now too.
    this.updateCount()
    this.updateCountMessage()
  }

  /**
   * Character count config override
   *
   * @param {Partial<CharacterCountConfig>} datasetConfig - Config specified by dataset
   * @returns {Partial<CharacterCountConfig>} Config to override by dataset
   */
  configOverride(datasetConfig) {
    const { maxwords } = this.config

    let configOverrides = /** @type {Partial<CharacterCountConfig>} */ ({})

    // To ensure data-attributes take complete precedence, even if they change
    // the type of count, we need to reset the `maxlength` and `maxwords` from
    // the JavaScript config
    if ('maxwords' in datasetConfig || 'maxlength' in datasetConfig) {
      configOverrides = {
        maxlength: undefined,
        maxwords: undefined
      }
    }

    if ('maxwords' in datasetConfig || maxwords !== undefined) {
      console.warn(
        formatErrorMessage(
          CharacterCount,
          'Option `maxwords` is deprecated. Use `maxlength` with `countType: "words"` instead.'
        )
      )

      if (!('maxlength' in datasetConfig)) {
        configOverrides.maxlength = datasetConfig.maxwords ?? maxwords
        configOverrides.countType = 'words'
      }
    }

    return configOverrides
  }

  /**
   * Count the number of characters (or words) in the given text, using the
   * configured count type, and update the component-wide count
   *
   * @param {string} [text] - Deprecated
   */
  updateCount(text) {
    const { $textarea, countFunctions } = this
    let { countType, countFunction } = this.config

    text ??= $textarea.value
    countFunction ??= countFunctions[countType]
    this.length = countFunction.call(this, text)
  }

  /**
   * @deprecated
   * @param {string} text - The text to count the characters of
   */
  count(text) {
    this.updateCount(text)
    return this.length
  }

  /**
   * Bind change events
   *
   * Set up event listeners on the $textarea so that the count messages update
   * when the user types.
   */
  bindChangeEvents() {
    this.$textarea.addEventListener('input', () => this.handleInput())

    // Bind focus/blur events to start/stop polling
    this.$textarea.addEventListener('focus', () => this.handleFocus())
    this.$textarea.addEventListener('blur', () => this.handleBlur())
  }

  /**
   * Update count message if textarea value has changed
   */
  updateIfValueChanged() {
    if (this.$textarea.value !== this.lastInputValue) {
      this.lastInputValue = this.$textarea.value
      this.updateCountMessage()
    }
  }

  /**
   * @deprecated Use {@link CharacterCount.updateIfValueChanged} instead.
   */
  checkIfValueChanged() {
    this.updateIfValueChanged()
  }

  /**
   * Update count message
   *
   * Helper function to update both the visible and screen reader-specific
   * counters simultaneously (e.g. on init)
   */
  updateCountMessage() {
    this.updateVisibleCountMessage()
    this.updateScreenReaderCountMessage()
  }

  /**
   * Update visible count message
   */
  updateVisibleCountMessage() {
    const remainingNumber = this.maxLength - this.length
    const isError = remainingNumber < 0

    // If input is over the threshold, show the count message
    if (this.isOverThreshold()) {
      this.$visibleCountMessage.removeAttribute('hidden')
    } else {
      this.$visibleCountMessage.setAttribute('hidden', '')
    }

    // Update styles
    if (!this.$errorMessage) {
      // Only toggle the textarea error class if there isn't an error message
      // already, as it may be unrelated to the limit (eg: allowed characters)
      // and would set the border colour back to black.
      this.$textarea.classList.toggle('nhsuk-textarea--error', isError)
    }
    this.$visibleCountMessage.classList.toggle('nhsuk-error-message', isError)
    this.$visibleCountMessage.classList.toggle('nhsuk-hint', !isError)

    // Update message
    this.$visibleCountMessage.textContent = this.getCountMessage()
  }

  /**
   * Update screen reader count message
   */
  updateScreenReaderCountMessage() {
    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      this.$screenReaderCountMessage.removeAttribute('aria-hidden')
    } else {
      this.$screenReaderCountMessage.setAttribute('aria-hidden', 'true')
    }

    // Update message
    this.$screenReaderCountMessage.textContent = this.getCountMessage()
  }

  /**
   * Get count message
   *
   * @returns {string} Status message
   */
  getCountMessage() {
    const remainingNumber = this.maxLength - this.length
    return this.formatCountMessage(remainingNumber)
  }

  /**
   * @deprecated Use {@link CharacterCount.getCountMessage} instead.
   */
  formattedUpdateMessage() {
    return this.getCountMessage()
  }

  /**
   * Formats the message shown to users according to what's counted
   * and how many remain
   *
   * @param {number} remainingNumber - The number of words/characaters remaining
   * @param {CharacterCountConfig['countType']} [countType] - Deprecated
   * @returns {string} Status message
   */
  formatCountMessage(remainingNumber, countType) {
    countType = countType ?? this.config.countType

    let translationKeyPrefix = 'characters'
    let translationKeySuffix = remainingNumber < 0 ? 'OverLimit' : 'UnderLimit'

    if (countType === 'words') {
      translationKeyPrefix = 'words'
    }

    if (remainingNumber === 0) {
      translationKeySuffix = 'AtLimit'
    }

    return this.i18n.t(`${translationKeyPrefix}${translationKeySuffix}`, {
      count: remainingNumber === 0 ? undefined : Math.abs(remainingNumber)
    })
  }

  /**
   * Check if count is over threshold
   *
   * Checks whether the value is over the configured threshold for the input.
   * If there is no configured threshold, it is set to 0 and this function will
   * always return true.
   *
   * @returns {boolean} true if the current count is over the config.threshold
   *   (or no threshold is set)
   */
  isOverThreshold() {
    const { maxLength } = this
    const { threshold } = this.config

    // No threshold means we're always above threshold so save some computation
    if (!threshold) {
      return true
    }

    // Determine the remaining number of characters/words
    const currentLength = this.length
    const thresholdValue = (maxLength * threshold) / 100

    return thresholdValue <= currentLength
  }

  /**
   * Handle input event
   *
   * Update the visible character counter and keep track of when the last update
   * happened for each keypress
   */
  handleInput() {
    this.updateCount()
    this.updateVisibleCountMessage()
    this.lastInputTimestamp = Date.now()
  }

  /**
   * @deprecated Use {@link CharacterCount.handleInput} instead.
   */
  handleKeyUp() {
    this.handleInput()
  }

  /**
   * Handle focus event
   *
   * Speech recognition software such as Dragon NaturallySpeaking will modify
   * the fields by directly changing its `value`. These changes don't trigger
   * events in JavaScript, so we need to poll to handle when and if they occur.
   *
   * Once the keyup event hasn't been detected for at least 1000 ms (1s), check
   * if the textarea value has changed and update the count message if it has.
   *
   * This is so that the update triggered by the manual comparison doesn't
   * conflict with debounced KeyboardEvent updates.
   */
  handleFocus() {
    this.valueChecker = window.setInterval(() => {
      if (
        !this.lastInputTimestamp ||
        Date.now() - 500 >= this.lastInputTimestamp
      ) {
        this.updateIfValueChanged()
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
   * Character count functions
   *
   * @constant
   * @satisfies {Record<string, CharacterCountConfig['countFunction']>}
   */
  countFunctions = Object.freeze({
    length(text) {
      return text.length
    },
    characters(text) {
      if (!this.segmenter) {
        return text.length
      }

      const segments = Array.from(this.segmenter.segment(text))
      return segments.length
    },
    words(text) {
      const tokens = text.match(/\S+/g) ?? [] // Matches consecutive non-whitespace chars
      return tokens.length
    }
  })

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
    threshold: 0,
    countType: 'length',
    textareaDescriptionClass: 'nhsuk-character-count__message',
    visibleCountMessageClass: 'nhsuk-character-count__status',
    screenReaderCountMessageClass: 'nhsuk-character-count__sr-status',
    i18n: {
      // Characters
      charactersUnderLimit: {
        one: 'You have %{count} character remaining',
        other: 'You have %{count} characters remaining'
      },
      charactersAtLimit: 'You have 0 characters remaining',
      charactersOverLimit: {
        one: 'You have %{count} character too many',
        other: 'You have %{count} characters too many'
      },
      // Words
      wordsUnderLimit: {
        one: 'You have %{count} word remaining',
        other: 'You have %{count} words remaining'
      },
      wordsAtLimit: 'You have 0 words remaining',
      wordsOverLimit: {
        one: 'You have %{count} word too many',
        other: 'You have %{count} words too many'
      },
      textareaDescription: {
        other: ''
      }
    }
  })

  /**
   * Character count config schema
   *
   * @constant
   * @satisfies {Schema<CharacterCountConfig>}
   */
  static schema = Object.freeze({
    properties: {
      maxwords: { type: 'number' },
      maxlength: { type: 'number' },
      threshold: { type: 'number' },
      countType: { type: 'string' },
      countFunction: { type: 'function' },
      textareaDescriptionClass: { type: 'string' },
      visibleCountMessageClass: { type: 'string' },
      screenReaderCountMessageClass: { type: 'string' },
      i18n: { type: 'object' }
    },
    anyOf: [
      {
        required: ['maxwords'],
        errorMessage: 'Either "maxlength" or "maxwords" must be provided'
      },
      {
        required: ['maxlength'],
        errorMessage: 'Either "maxlength" or "maxwords" must be provided'
      }
    ]
  })
}

/**
 * Initialise character count component
 *
 * @deprecated Use {@link createAll | `createAll(CharacterCount, options)`} instead.
 * @param {InitOptions & Partial<CharacterCountConfig>} [options]
 */
export function initCharacterCounts(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $characterCounts = $scope?.querySelectorAll(
    `[data-module="${CharacterCount.moduleName}"]`
  )

  $characterCounts?.forEach(($root) => {
    new CharacterCount($root, options)
  })
}

/**
 * Character count config
 *
 * @see {@link CharacterCount.defaults}
 * @typedef {object} CharacterCountConfig
 * @property {number} [maxlength] - The maximum number of characters (or words if `countType` is set to `"words"`).
 * @property {number} [maxwords] - Deprecated. Use `maxlength` and `countType: "words"` instead.
 * @property {number} [threshold=0] - The percentage value of the limit at which point the count message is displayed.
 *   If this attribute is set, the count message will be hidden by default.
 * @property {'length' | 'characters' | 'words'} countType - The count type (`"length"`, `"characters"` or `"words"`) used to count the text.
 * @property {(this: CharacterCount, text: string) => number} [countFunction] - Custom character or word counting function.
 * @property {string} textareaDescriptionClass - Textarea description class
 * @property {string} visibleCountMessageClass - Visible count message class
 * @property {string} screenReaderCountMessageClass - Screen reader count message class
 * @property {CharacterCountTranslations} [i18n=CharacterCount.defaults.i18n] - Character count translations
 */

/**
 * Character count translations
 *
 * @see {@link CharacterCount.defaults.i18n}
 * @see {@link https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md}
 * @typedef {object} CharacterCountTranslations
 *
 * Messages shown to users as they type. It provides feedback on how many words
 * or characters they have remaining or if they are over the limit. This also
 * includes a message used as an accessible description for the textarea.
 * @property {TranslationPluralForms} [charactersUnderLimit] - Message displayed
 *   when the number of characters is under the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {string} [charactersAtLimit] - Message displayed when the number of
 *   characters reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [charactersOverLimit] - Message displayed
 *   when the number of characters is over the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [wordsUnderLimit] - Message displayed when
 *   the number of words is under the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {string} [wordsAtLimit] - Message displayed when the number of
 *   words reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [wordsOverLimit] - Message displayed when
 *   the number of words is over the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [textareaDescription] - Message made
 *   available to assistive technologies, if none is already present in the
 *   HTML, to describe that the component accepts only a limited amount of
 *   content. It is visible on the page when JavaScript is unavailable. The
 *   component will replace the `%{count}` placeholder with the value of the
 *   `maxlength` parameter.
 */

/**
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
