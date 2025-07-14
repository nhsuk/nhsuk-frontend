import { formatErrorMessage } from '../common/index.mjs'

/**
 * NHS.UK frontend error
 *
 * A base class for `Error`s thrown by NHS.UK frontend.
 *
 * It is meant to be extended into specific types of errors
 * to be thrown by our code.
 *
 * @example
 * ```js
 * class MissingRootError extends NHSUKFrontendError {
 *   // Setting an explicit name is important as extending the class will not
 *   // set a new `name` on the subclass. The `name` property is important
 *   // to ensure intelligible error names even if the class name gets
 *   // mangled by a minifier
 *   name = "MissingRootError"
 * }
 * ```
 * @abstract
 */
export class NHSUKFrontendError extends Error {
  name = 'NHSUKFrontendError'
}

/**
 * Indicates that NHS.UK frontend is not supported
 */
export class SupportError extends NHSUKFrontendError {
  name = 'SupportError'

  /**
   * Checks if NHS.UK frontend is supported on this page
   *
   * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
   */
  constructor($scope = document.body) {
    const supportMessage =
      'noModule' in HTMLScriptElement.prototype
        ? 'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet'
        : 'NHS.UK frontend is not supported in this browser'

    super(
      $scope
        ? supportMessage
        : 'NHS.UK frontend initialised without `<script type="module">`'
    )
  }
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
export class ElementError extends NHSUKFrontendError {
  name = 'ElementError'

  /**
   * @param {ElementErrorOptions} options - Element error options
   */
  constructor(options) {
    const { component, identifier, element, expectedType } = options

    let message = identifier

    // Append reason
    message += element
      ? ` is not of type ${expectedType ?? 'HTMLElement'}`
      : ' not found'

    super(formatErrorMessage(component, message))
  }
}

/**
 * Element error options
 *
 * @typedef {object} ElementErrorOptions
 * @property {Element | null} [element] - The element in error
 * @property {ComponentConstructor} component - Component throwing the error
 * @property {string} identifier - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
 * @property {string} [expectedType] - The type that was expected for the identifier
 */

/**
 * @import { ComponentConstructor } from '../component.mjs'
 */
