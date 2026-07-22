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
 * @param {FocusElement} $target - HTML element
 * @param {SetFocusOptions<FocusElement>} [options] - Focus options
 */
export function setFocus($target, options = {}) {
  const isFocusable =
    $target.matches('button, input, select, textarea, a[href]') ||
    $target.matches('[tabindex]:not([tabindex="-1"])')

  if (!isFocusable) {
    $target.setAttribute('tabindex', '-1')
  }

  /**
   * Handle element focus
   */
  function onFocus() {
    $target.removeEventListener('focus', onFocus)
    $target.addEventListener('blur', onBlur)
  }

  /**
   * Handle element blur
   */
  function onBlur() {
    $target.removeEventListener('blur', onBlur)

    if (options.onBlur) {
      options.onBlur.call($target)
    }

    if (!isFocusable) {
      $target.removeAttribute('tabindex')
    }
  }

  // Add listener to reset element on blur, after focus
  $target.addEventListener('focus', onFocus)

  // Focus element
  if (options.onBeforeFocus) {
    options.onBeforeFocus.call($target)
  }

  $target.focus()
}

/**
 * @template {Element} [FocusElement=HTMLElement]
 * @typedef {object} SetFocusOptions
 * @property {function(this: FocusElement): void} [onBeforeFocus] - Callback before focus
 * @property {function(this: FocusElement): void} [onBlur] - Callback on blur
 */
