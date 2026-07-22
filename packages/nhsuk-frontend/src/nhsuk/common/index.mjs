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

  const $target = document.getElementById(targetId)
  if (!$target) {
    return
  }

  $input.setAttribute('aria-expanded', $input.checked.toString())
  $target.classList.toggle(className, !$input.checked)
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
 * Check for an object
 *
 * @template {Partial<Record<keyof ObjectType, unknown>>} ObjectType
 * @param {unknown | ObjectType} option - Option to check
 * @returns {option is ObjectType} Whether the option is an object
 */
export function isObject(option) {
  return !!option && typeof option === 'object' && !Array.isArray(option)
}

/**
 * Check for valid scope
 *
 * @template {Element | Document} ScopeType
 * @param {unknown | ScopeType} $scope - Scope of the document to search within
 * @returns {$scope is ScopeType} Whether the scope can be queried
 */
export function isScope($scope) {
  return !!$scope && ($scope instanceof Element || $scope instanceof Document)
}

/**
 * Format error message
 *
 * @param {CompatibleClass} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
export function formatErrorMessage(Component, message) {
  return `${Component.moduleName}: ${message}`
}

export * from './closest-attribute-value.mjs'
export * from './nhsuk-frontend-version.mjs'
export * from './set-focus.mjs'

/**
 * @import { CompatibleClass } from '../component.mjs'
 */
