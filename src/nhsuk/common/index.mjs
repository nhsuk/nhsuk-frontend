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
 * @param {Element | null} $input - input element
 * @param {string} className - class to toggle
 */
export function toggleConditionalInput($input, className) {
  if (!$input || !($input instanceof HTMLInputElement) || !className) {
    return
  }

  const targetId = $input.getAttribute('aria-controls')
  if (!targetId) {
    return
  }

  const target = document.getElementById(targetId)
  if (!target) {
    return
  }

  $input.setAttribute('aria-expanded', $input.checked.toString())
  target.classList.toggle(className, !$input.checked)
}

/**
 * Get NHS.UK frontend breakpoint value from CSS custom property
 *
 * @param {string} name - Breakpoint name
 */
export function getBreakpoint(name) {
  const property = `--nhsuk-breakpoint-${name}`

  // Get value from `<html>` with breakpoints on CSS :root
  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(property)

  return {
    property,
    value: value || undefined
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
 * Checks if component is already initialised
 *
 * @param {Element} $root - HTML element to be checked
 * @param {string} moduleName - name of component module
 * @returns {boolean} Whether component is already initialised
 */
export function isInitialised($root, moduleName) {
  return (
    $root instanceof HTMLElement &&
    $root.hasAttribute(`data-${moduleName}-init`)
  )
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

/**
 * Format error message
 *
 * @param {ComponentConstructor} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
export function formatErrorMessage(Component, message) {
  return `${Component.moduleName}: ${message}`
}

export * from './nhsuk-frontend-version.mjs'

/**
 * @import { ComponentConstructor } from '../component.mjs'
 */
