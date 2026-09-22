/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {Element | null} $input - input element
 * @param {string} className - class to toggle
 */
export function toggleConditionalInput($input: Element | null, className: string): void;
/**
 * Get NHS.UK frontend breakpoint value from CSS custom property
 *
 * @param {string} name - Breakpoint name
 */
export function getBreakpoint(name: string): {
    property: string;
    value: string | undefined;
};
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
export function setFocus<FocusElement extends HTMLElement>($element: FocusElement, options?: {
    onBeforeFocus?: ((this: FocusElement) => void) | undefined;
    onBlur?: ((this: FocusElement) => void) | undefined;
}): void;
/**
 * Checks if component is already initialised
 *
 * @param {Element} $root - HTML element to be checked
 * @param {string} moduleName - name of component module
 * @returns {boolean} Whether component is already initialised
 */
export function isInitialised($root: Element, moduleName: string): boolean;
/**
 * Checks if NHS.UK frontend is supported on this page
 *
 * Some browsers will load and run our JavaScript but NHS.UK frontend
 * won't be supported.
 *
 * @param {HTMLElement | null} [$scope] - (internal) `<body>` HTML element checked for browser support
 * @returns {boolean} Whether NHS.UK frontend is supported on this page
 */
export function isSupported($scope?: HTMLElement | null): boolean;
/**
 * Check for an object
 *
 * @template {Partial<Record<keyof ObjectType, unknown>>} ObjectType
 * @param {unknown | ObjectType} option - Option to check
 * @returns {option is ObjectType} Whether the option is an object
 */
export function isObject<ObjectType extends Partial<Record<keyof ObjectType, unknown>>>(option: unknown | ObjectType): option is ObjectType;
/**
 * Check for valid scope
 *
 * @template {Element | Document} ScopeType
 * @param {unknown | ScopeType} $scope - Scope of the document to search within
 * @returns {$scope is ScopeType} Whether the scope can be queried
 */
export function isScope<ScopeType extends Element | Document>($scope: unknown | ScopeType): $scope is ScopeType;
/**
 * Format error message
 *
 * @param {CompatibleClass} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
export function formatErrorMessage(Component: CompatibleClass, message: string): string;
export * from "./closest-attribute-value.mjs";
export * from "./nhsuk-frontend-version.mjs";
import type { CompatibleClass } from '../component.mjs';
//# sourceMappingURL=index.d.mts.map