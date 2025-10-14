/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {Element | null} $input - input element
 * @param {string} className - class to toggle
 */
function toggleConditionalInput($input, className) {
  if (!$input || !($input instanceof HTMLInputElement) || !className) {
    return;
  }
  const targetId = $input.getAttribute('aria-controls');
  if (!targetId) {
    return;
  }
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }
  $input.setAttribute('aria-expanded', $input.checked.toString());
  target.classList.toggle(className, !$input.checked);
}

/**
 * Get NHS.UK frontend breakpoint value from CSS custom property
 *
 * @param {string} name - Breakpoint name
 */
function getBreakpoint(name) {
  const property = `--nhsuk-breakpoint-${name}`;

  // Get value from `<html>` with breakpoints on CSS :root
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(property);
  return {
    property,
    value: value || undefined
  };
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
  const isFocusable = $element.getAttribute('tabindex');
  if (!isFocusable) {
    $element.setAttribute('tabindex', '-1');
  }

  /**
   * Handle element focus
   */
  function onFocus() {
    $element.removeEventListener('focus', onFocus);
    $element.addEventListener('blur', onBlur);
  }

  /**
   * Handle element blur
   */
  function onBlur() {
    $element.removeEventListener('blur', onBlur);
    if (options.onBlur) {
      options.onBlur.call($element);
    }
    if (!isFocusable) {
      $element.removeAttribute('tabindex');
    }
  }

  // Add listener to reset element on blur, after focus
  $element.addEventListener('focus', onFocus);

  // Focus element
  if (options.onBeforeFocus) {
    options.onBeforeFocus.call($element);
  }
  $element.focus();
}

/**
 * Checks if component is already initialised
 *
 * @param {Element} $root - HTML element to be checked
 * @param {string} moduleName - name of component module
 * @returns {boolean} Whether component is already initialised
 */
function isInitialised($root, moduleName) {
  return $root instanceof HTMLElement && $root.hasAttribute(`data-${moduleName}-init`);
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
function isSupported($scope = document.body) {
  if (!$scope) {
    return false;
  }
  return $scope.classList.contains('nhsuk-frontend-supported');
}

/**
 * Check for an object
 *
 * @template {Partial<Record<keyof ObjectType, unknown>>} ObjectType
 * @param {unknown | ObjectType} option - Option to check
 * @returns {option is ObjectType} Whether the option is an object
 */
function isObject(option) {
  return !!option && typeof option === 'object' && !Array.isArray(option);
}

/**
 * Check for valid scope
 *
 * @template {Element | Document} ScopeType
 * @param {unknown | ScopeType} $scope - Scope of the document to search within
 * @returns {$scope is ScopeType} Whether the scope can be queried
 */
function isScope($scope) {
  return !!$scope && ($scope instanceof Element || $scope instanceof Document);
}

/**
 * Format error message
 *
 * @param {CompatibleClass} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
function formatErrorMessage(Component, message) {
  return `${Component.moduleName}: ${message}`;
}

/**
 * @import { CompatibleClass } from '../component.mjs'
 */

export { formatErrorMessage, getBreakpoint, isInitialised, isObject, isScope, isSupported, setFocus, toggleConditionalInput };
//# sourceMappingURL=index.mjs.map
