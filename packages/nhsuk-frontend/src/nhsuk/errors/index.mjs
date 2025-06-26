import { formatErrorMessage } from '../common.mjs'

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
 * Indicates that a component has received an illegal configuration
 */
export class ConfigError extends NHSUKFrontendError {
  name = 'ConfigError'
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
export class ElementError extends NHSUKFrontendError {
  name = 'ElementError'

  /**
   * @internal
   * @overload
   * @param {string} message - Element error message
   */

  /**
   * @internal
   * @overload
   * @param {ElementErrorOptions} options - Element error options
   */

  /**
   * @internal
   * @param {string | ElementErrorOptions} messageOrOptions - Element error message or options
   */
  constructor(messageOrOptions) {
    let message = typeof messageOrOptions === 'string' ? messageOrOptions : ''

    // Build message from options
    if (typeof messageOrOptions === 'object') {
      const { component, identifier, element, expectedType } = messageOrOptions

      message = identifier

      // Append reason
      message += element
        ? ` is not of type ${expectedType ?? 'HTMLElement'}`
        : ' not found'

      message = formatErrorMessage(component, message)
    }

    super(message)
  }
}

/**
 * Indicates that a component is already initialised
 */
export class InitError extends NHSUKFrontendError {
  name = 'InitError'

  /**
   * @internal
   * @param {ComponentWithModuleName | string} componentOrMessage - name of the component module
   */
  constructor(componentOrMessage) {
    const message =
      typeof componentOrMessage === 'string'
        ? componentOrMessage
        : formatErrorMessage(
            componentOrMessage,
            `Root element (\`$root\`) already initialised`
          )

    super(message)
  }
}

/**
 * Element error options
 *
 * @internal
 * @typedef {object} ElementErrorOptions
 * @property {string} identifier - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
 * @property {Element | null} [element] - The element in error
 * @property {string} [expectedType] - The type that was expected for the identifier
 * @property {ComponentWithModuleName} component - Component throwing the error
 */

/**
 * @import { ComponentWithModuleName } from '../common.mjs'
 */
