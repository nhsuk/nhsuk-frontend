/**
 * Move focus to element
 *
 * Sets tabindex to -1 to make the element programmatically focusable,
 * but removes it on blur as the element doesn't need to be focused again.
 *
 * Original code taken from GDS (Government Digital Service)
 * {@link https://github.com/alphagov/govuk-frontend}
 *
 * @template {HTMLElement} FocusElement
 * @param {FocusElement} $element - HTML element
 * @param {SetFocusOptions<FocusElement>} [options] - Focus options
 */
export function setFocus($element, options = {}) {
  const isFocusable = $element.getAttribute('tabindex')

  if (!isFocusable) {
    $element.setAttribute('tabindex', '-1')
  }

  /**
   * Handle element focus
   */
  function onFocus() {
    $element.removeEventListener('focus', onFocus)
    $element.addEventListener('blur', onBlur)
  }

  /**
   * Handle element blur
   */
  function onBlur() {
    $element.removeEventListener('blur', onBlur)

    if (options.onBlur) {
      options.onBlur.call($element)
    }

    if (!isFocusable) {
      $element.removeAttribute('tabindex')
    }
  }

  // Add listener to reset element on blur, after focus
  $element.addEventListener('focus', onFocus)

  // Focus element
  if (options.onBeforeFocus) {
    options.onBeforeFocus.call($element)
  }

  $element.focus()
}

/**
 * @template {Element} [FocusElement=HTMLElement]
 * @typedef {object} SetFocusOptions
 * @property {function(this: FocusElement): void} [onBeforeFocus] - Callback before focus
 * @property {function(this: FocusElement): void} [onBlur] - Callback on blur
 */
