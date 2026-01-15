import { closestAttributeValue } from '../../common/closest-attribute-value.mjs'
import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * Password input component
 *
 * @augments {ConfigurableComponent<PasswordInputConfig>}
 */
export class PasswordInput extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<PasswordInputConfig>} [config] - Password input config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $input = this.$root.querySelector('.nhsuk-js-password-input-input')
    if (!($input instanceof HTMLInputElement)) {
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      })
    }

    if ($input.type !== 'password') {
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement with attribute (`type="password"`)',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      })
    }

    const $showHideButton = this.$root.querySelector(
      '.nhsuk-js-password-input-toggle'
    )
    if (!($showHideButton instanceof HTMLButtonElement)) {
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      })
    }

    if ($showHideButton.type !== 'button') {
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement with type="button"',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      })
    }

    this.$input = $input
    this.$showHideButton = $showHideButton

    const { i18n, screenReaderStatusMessageClass } = this.config

    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    })

    // Show the toggle button element
    this.$showHideButton.removeAttribute('hidden')

    // Create and append the status text for screen readers.
    // This is injected between the input and button so that users get a sensible reading order if
    // moving through the page content linearly:
    // [password input] -> [your password is visible/hidden] -> [show/hide password]
    this.$screenReaderStatusMessage = document.createElement('div')
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite')
    this.$screenReaderStatusMessage.classList.add(
      screenReaderStatusMessageClass,
      'nhsuk-u-visually-hidden'
    )

    this.$input.insertAdjacentElement(
      'afterend',
      this.$screenReaderStatusMessage
    )

    // Bind toggle button
    this.$showHideButton.addEventListener('click', this.toggle.bind(this))

    // Bind event to revert the password visibility to hidden
    if (this.$input.form) {
      this.$input.form.addEventListener('submit', () => this.hide())
    }

    // If the page is restored from bfcache and the password is visible, hide it again
    window.addEventListener('pageshow', (event) => {
      if (event.persisted && this.$input.type !== 'password') {
        this.hide()
      }
    })

    // Default the component to having the password hidden.
    this.hide()
  }

  /**
   * Toggle the visibility of the password input
   *
   * @param {MouseEvent} event - Click event
   */
  toggle(event) {
    event.preventDefault()

    // If on this click, the field is type="password", show the value
    if (this.$input.type === 'password') {
      this.show()
      return
    }

    // Otherwise, hide it
    // Being defensive - hiding should always be the default
    this.hide()
  }

  /**
   * Show the password input value in plain text
   */
  show() {
    this.setType('text')
  }

  /**
   * Hide the password input value
   */
  hide() {
    this.setType('password')
  }

  /**
   * Set the password input type
   *
   * @param {'text' | 'password'} type - Input type
   */
  setType(type) {
    if (type === this.$input.type) {
      return
    }

    // Update input type
    this.$input.setAttribute('type', type)

    const isHidden = type === 'password'
    const prefixButton = isHidden ? 'show' : 'hide'
    const prefixStatus = isHidden ? 'passwordHidden' : 'passwordShown'

    // Update button text
    this.$showHideButton.innerText = this.i18n.t(`${prefixButton}Password`)

    // Update button aria-label
    this.$showHideButton.setAttribute(
      'aria-label',
      this.i18n.t(`${prefixButton}PasswordAriaLabel`)
    )

    // Update status change text
    this.$screenReaderStatusMessage.innerText = this.i18n.t(
      `${prefixStatus}Announcement`
    )
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-password-input'

  /**
   * Password input default config
   *
   * @see {@link PasswordInputConfig}
   * @constant
   * @type {PasswordInputConfig}
   */
  static defaults = Object.freeze({
    screenReaderStatusMessageClass: 'nhsuk-password-input__sr-status',
    i18n: {
      showPassword: 'Show',
      hidePassword: 'Hide',
      showPasswordAriaLabel: 'Show password',
      hidePasswordAriaLabel: 'Hide password',
      passwordShownAnnouncement: 'Your password is visible',
      passwordHiddenAnnouncement: 'Your password is hidden'
    }
  })

  /**
   * Password input config schema
   *
   * @constant
   * @satisfies {Schema<PasswordInputConfig>}
   */
  static schema = Object.freeze({
    properties: {
      screenReaderStatusMessageClass: { type: 'string' },
      i18n: { type: 'object' }
    }
  })
}

/**
 * Initialise password input component
 *
 * @deprecated Use {@link createAll | `createAll(PasswordInput, options)`} instead.
 * @param {InitOptions & Partial<PasswordInputConfig>} [options]
 */
export function initPasswordInputs(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $passwordInputs = $scope?.querySelectorAll(
    `[data-module="${PasswordInput.moduleName}"]`
  )

  $passwordInputs?.forEach(($root) => {
    new PasswordInput($root, options)
  })
}

/**
 * Password input config
 *
 * @typedef {object} PasswordInputConfig
 * @property {string} screenReaderStatusMessageClass - Screen reader status message class
 * @property {PasswordInputTranslations} [i18n=PasswordInput.defaults.i18n] - Password input translations
 */

/**
 * Password input translations
 *
 * @see {@link PasswordInput.defaults.i18n}
 * @typedef {object} PasswordInputTranslations
 *
 * Messages displayed to the user indicating the state of the show/hide toggle.
 * @property {string} [showPassword] - Visible text of the button when the
 *   password is currently hidden. Plain text only.
 * @property {string} [hidePassword] - Visible text of the button when the
 *   password is currently visible. Plain text only.
 * @property {string} [showPasswordAriaLabel] - aria-label of the button when
 *   the password is currently hidden. Plain text only.
 * @property {string} [hidePasswordAriaLabel] - aria-label of the button when
 *   the password is currently visible. Plain text only.
 * @property {string} [passwordShownAnnouncement] - Screen reader
 *   announcement to make when the password has just become visible.
 *   Plain text only.
 * @property {string} [passwordHiddenAnnouncement] - Screen reader
 *   announcement to make when the password has just been hidden.
 *   Plain text only.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
