/**
 * Toggle a boolean attribute on a HTML element
 *
 * @param {HTMLElement} element
 * @param {string} attr
 */
const toggleAttribute = (element, attr) => {
  // Return without error if element or attr are missing
  if (!element || !attr) return
  // Toggle attribute value. Treat no existing attr same as when set to false
  const value = element.getAttribute(attr) === 'true' ? 'false' : 'true'
  element.setAttribute(attr, value)
}

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {HTMLElement} input - input element
 * @param {string} className - class to toggle
 */
const toggleConditionalInput = (input, className) => {
  // Return without error if input or class are missing
  if (!input || !className) return
  // If the input has conditional content it had a data-aria-controls attribute
  const conditionalId = input.getAttribute('aria-controls')
  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    const conditionalElement = document.getElementById(conditionalId)
    if (conditionalElement) {
      if (input.checked) {
        conditionalElement.classList.remove(className)
        input.setAttribute('aria-expanded', 'true')
      } else {
        conditionalElement.classList.add(className)
        input.setAttribute('aria-expanded', 'false')
      }
    }
  }
}

/**
 * Used to generate a unique string, allows multiple instances of the component
 * without them conflicting with each other.
 * https://stackoverflow.com/a/8809472
 *
 * Original code taken from GDS (Government Digital Service)
 * {@link https://github.com/alphagov/govuk-frontend}
 */
function generateUniqueID() {
  let d = new Date().getTime()
  if (
    typeof window.performance !== 'undefined' &&
    typeof window.performance.now === 'function'
  ) {
    d += window.performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

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
 * @param {object} [options] - Handler options
 * @param {function(this: FocusElement): void} [options.onBeforeFocus] - Callback before focus
 * @param {function(this: FocusElement): void} [options.onBlur] - Callback on blur
 */
function setFocus($element, options = {}) {
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

module.exports = {
  toggleAttribute,
  toggleConditionalInput,
  generateUniqueID,
  setFocus
}
