'use strict';

var index = require('../common/index.js');

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
class NHSUKFrontendError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'NHSUKFrontendError';
  }
}

/**
 * Indicates that NHS.UK frontend is not supported
 */
class SupportError extends NHSUKFrontendError {
  /**
   * Checks if NHS.UK frontend is supported on this page
   *
   * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
   */
  constructor($scope = document.body) {
    const supportMessage = 'noModule' in HTMLScriptElement.prototype ? 'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet' : 'NHS.UK frontend is not supported in this browser';
    super($scope ? supportMessage : 'NHS.UK frontend initialised without `<script type="module">`');
    this.name = 'SupportError';
  }
}

/**
 * Indicates that a component has received an illegal configuration
 */
class ConfigError extends NHSUKFrontendError {
  constructor(...args) {
    super(...args);
    this.name = 'ConfigError';
  }
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
class ElementError extends NHSUKFrontendError {
  /**
   * @param {ElementErrorOptions} options - Element error options
   */
  constructor(options) {
    const {
      component,
      identifier,
      element,
      expectedType
    } = options;
    let message = identifier;

    // Append reason
    message += element ? ` is not of type ${expectedType != null ? expectedType : 'HTMLElement'}` : ' not found';

    // Prepend with module name (optional)
    if (component) {
      message = index.formatErrorMessage(component, message);
    }
    super(message);
    this.name = 'ElementError';
  }
}

/**
 * Indicates that a component is already initialised
 */
class InitError extends NHSUKFrontendError {
  /**
   * @param {CompatibleClass | string} componentOrMessage - Component or init error message
   */
  constructor(componentOrMessage) {
    const message = typeof componentOrMessage === 'string' ? componentOrMessage : index.formatErrorMessage(componentOrMessage, 'Root element (`$root`) already initialised');
    super(message);
    this.name = 'InitError';
  }
}

/**
 * Element error options
 *
 * @typedef {object} ElementErrorOptions
 * @property {Element | Document | null} [element] - The element in error (optional)
 * @property {CompatibleClass} [component] - Component throwing the error (optional)
 * @property {string} identifier - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
 * @property {string} [expectedType] - The type that was expected for the identifier
 */

/**
 * @import { CompatibleClass } from '../component.mjs'
 */

exports.ConfigError = ConfigError;
exports.ElementError = ElementError;
exports.InitError = InitError;
exports.NHSUKFrontendError = NHSUKFrontendError;
exports.SupportError = SupportError;
//# sourceMappingURL=index.js.map
