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
}
/**
 * Indicates that NHS.UK frontend is not supported
 */
export class SupportError extends NHSUKFrontendError {
    /**
     * Checks if NHS.UK frontend is supported on this page
     *
     * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
     */
    constructor($scope?: HTMLElement | null);
}
/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
export class ElementError extends NHSUKFrontendError {
    /**
     * @param {ElementErrorOptions} options - Element error options
     */
    constructor(options: ElementErrorOptions);
}
/**
 * Indicates that a component is already initialised
 */
export class InitError extends NHSUKFrontendError {
    /**
     * @param {ComponentConstructor | string} componentOrMessage - Component or init error message
     */
    constructor(componentOrMessage: ComponentConstructor | string);
}
/**
 * Element error options
 */
export type ElementErrorOptions = {
    /**
     * - The element in error
     */
    element?: Element | null | undefined;
    /**
     * - Component throwing the error
     */
    component: ComponentConstructor;
    /**
     * - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
     */
    identifier: string;
    /**
     * - The type that was expected for the identifier
     */
    expectedType?: string | undefined;
};
import type { ComponentConstructor } from '../component.mjs';
//# sourceMappingURL=index.d.mts.map