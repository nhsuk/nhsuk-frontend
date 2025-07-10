/**
 * Get hash fragment from URL
 *
 * Extract the hash fragment (everything after the hash) from a URL,
 * but not including the hash symbol
 *
 * @param {string} url - URL
 * @returns {string | undefined} Fragment from URL, without the hash
 */
export function getFragmentFromUrl(url) {
  if (!url.includes('#')) {
    return undefined
  }

  return url.split('#').pop()
}

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {HTMLElement} input - input element
 * @param {string} className - class to toggle
 */
export function toggleConditionalInput(input, className) {
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
 * Checks if NHS.UK frontend is supported on this page
 *
 * Some browsers will load and run our JavaScript but NHS.UK frontend
 * won't be supported.
 *
 * @param {HTMLElement | null} [$scope] - (internal) `<body>` HTML element checked for browser support
 * @returns {boolean} Whether NHS.UK frontend is supported on this page
 */
export function isSupported($scope = document.body) {
  if (!$scope) {
    return false
  }

  return $scope.classList.contains('nhsuk-frontend-supported')
}
