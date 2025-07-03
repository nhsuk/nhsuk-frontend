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
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
export class ElementError extends NHSUKFrontendError {
  name = 'ElementError'

  /**
   * @param {ElementErrorOptions} options - Element error options
   */
  constructor(options) {
    const { component, identifier, element, expectedType } = options

    // Add prefix and identifier
    let message = `${component.name}: ${identifier}`

    // Append reason
    message += element
      ? ` is not of type ${expectedType ?? 'HTMLElement'}`
      : ' not found'

    super(message)
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
