/**
 * Initialise checkboxes component
 *
 * @deprecated Use {@link createAll | `createAll(Checkboxes)`} instead.
 * @param {InitOptions} [options]
 */
export function initCheckboxes(options?: InitOptions): void;
/**
 * Checkboxes component
 *
 * Conditionally show content when a checkbox button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 */
export class Checkboxes extends Component<HTMLElement> {
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    $inputs: NodeListOf<HTMLInputElement>;
    /**
     * Sync the conditional reveal states for all checkboxes in this component.
     */
    syncAllConditionalReveals(): void;
    /**
     * Sync conditional reveal with the input state
     *
     * Synchronise the visibility of the conditional reveal, and its accessible
     * state, with the input's checked state.
     *
     * @param {HTMLInputElement} $input - Checkbox input
     */
    syncConditionalRevealWithInputState($input: HTMLInputElement): void;
    /**
     * Uncheck other checkboxes
     *
     * Find any other checkbox inputs with the checkbox group value, and uncheck them.
     * This is useful for when a “None of these" checkbox is checked.
     *
     * @param {HTMLInputElement} $input - Checkbox input
     */
    unCheckAllInputsExcept($input: HTMLInputElement): void;
    /**
     * Uncheck exclusive inputs
     *
     * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
     * and uncheck them. This helps prevent someone checking both a regular checkbox and a
     * "None of these" checkbox in the same fieldset.
     *
     * @param {HTMLInputElement} $input - Checkbox input
     */
    unCheckExclusiveInputs($input: HTMLInputElement): void;
    /**
     * Set input state, optionally for matching exclusive group only
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {boolean} checked - Checkbox checked state
     * @param {string} [exclusiveGroup] - Set state for matching exclusive group only (optional)
     */
    setInputState($input: HTMLInputElement, checked: boolean, exclusiveGroup?: string): void;
    /**
     * Toggle classes and attributes
     *
     * @param {MouseEvent} event - Click event
     */
    handleClick(event: MouseEvent): void;
}
import type { InitOptions } from '../../index.mjs';
import { Component } from '../../component.mjs';
//# sourceMappingURL=checkboxes.d.mts.map