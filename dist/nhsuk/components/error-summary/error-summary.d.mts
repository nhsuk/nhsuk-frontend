/**
 * Initialise error summary component
 *
 * @deprecated Use {@link createAll | `createAll(ErrorSummary, options)`} instead.
 * @param {InitOptions & ErrorSummaryConfig} [options]
 */
export function initErrorSummary(options?: InitOptions & ErrorSummaryConfig): void;
/**
 * Error summary component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 *
 * @augments ConfigurableComponent<ErrorSummaryConfig>
 */
export class ErrorSummary extends ConfigurableComponent<ErrorSummaryConfig, HTMLElement> {
    /**
     * Error summary default config
     *
     * @see {@link ErrorSummaryConfig}
     * @constant
     * @type {ErrorSummaryConfig}
     */
    static defaults: ErrorSummaryConfig;
    /**
     * Error summary config schema
     *
     * @constant
     * @satisfies {Schema<ErrorSummaryConfig>}
     */
    static schema: Readonly<{
        properties: {
            focusOnPageLoad: {
                type: "boolean";
            };
            disableAutoFocus: {
                type: "boolean";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {ErrorSummaryConfig} [config] - Error summary config
     */
    constructor($root: Element | null, config?: ErrorSummaryConfig);
    /**
     * Error summary config override
     *
     * @param {Partial<ErrorSummaryConfig>} _datasetConfig - Config specified by dataset
     * @returns {Partial<ErrorSummaryConfig>} Config to override by dataset
     */
    configOverride(_datasetConfig: Partial<ErrorSummaryConfig>): Partial<ErrorSummaryConfig>;
    /**
     * Get associated legend or label
     *
     * Returns the first element that exists from this list:
     *
     * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
     *   as the top of it is no more than half a viewport height away from the
     *   bottom of the input
     * - The first `<label>` that is associated with the input using for="inputId"
     * - The closest parent `<label>`
     *
     * @param {Element} $input - The input
     * @returns {Element | null} Associated legend or label, or null if no
     *   associated legend or label can be found
     */
    getAssociatedLegendOrLabel($input: Element): Element | null;
    /**
     * Focus the target element
     *
     * By default, the browser will scroll the target into view. Because our
     * labels or legends appear above the input, this means the user will be
     * presented with an input without any context, as the label or legend will be
     * off the top of the screen.
     *
     * Manually handling the click event, scrolling the question into view and
     * then focussing the element solves this.
     *
     * This also results in the label and/or legend being announced correctly in
     * NVDA (as tested in 2018.3.2) - without this only the field type is
     * announced (e.g. "Edit, has autocomplete").
     *
     * @param {EventTarget} $target - Event target
     * @returns {boolean} True if the target was able to be focussed
     */
    focusTarget($target: EventTarget): boolean;
    /**
     * Click event handler
     *
     * @param {MouseEvent} event - Click event
     */
    handleClick(event: MouseEvent): void;
}
/**
 * Error summary config
 */
export type ErrorSummaryConfig = {
    /**
     * - Deprecated. Use `disableAutoFocus` instead.
     */
    focusOnPageLoad?: boolean | undefined;
    /**
     * - If set to `true` the error
     * summary will not be focussed when the page loads.
     */
    disableAutoFocus?: boolean | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=error-summary.d.mts.map