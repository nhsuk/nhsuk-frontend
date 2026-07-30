/**
 * Initialise checkboxes component
 *
 * @deprecated Use {@link createAll | `createAll(Checkboxes, options)`} instead.
 * @param {InitOptions & Partial<CheckboxesConfig>} [options]
 */
export function initCheckboxes(options?: InitOptions & Partial<CheckboxesConfig>): void;
/**
 * Checkboxes component
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/checkboxes/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<CheckboxesConfig>}
 */
export class Checkboxes extends ConfigurableComponent<CheckboxesConfig, HTMLElement> {
    /**
     * Radios default config
     *
     * @see {@link CheckboxesConfig}
     * @constant
     * @type {CheckboxesConfig}
     */
    static defaults: CheckboxesConfig;
    /**
     * Checkboxes config schema
     *
     * @constant
     * @satisfies {Schema<CheckboxesConfig>}
     */
    static schema: Readonly<{
        properties: {
            conditionalClass: {
                type: "string";
            };
        };
    }>;
    /**
     * Checkboxes can be associated with a 'conditionally revealed' content block
     * – for example, a checkbox for 'Phone' could reveal an additional form field
     * for the user to enter their phone number.
     *
     * These associations are made using a `data-aria-controls` attribute, which
     * is promoted to an aria-controls attribute during initialisation.
     *
     * We also need to restore the state of any conditional reveals on the page
     * (for example if the user has navigated back), and set up event handlers to
     * keep the reveal in sync with the checkbox state.
     *
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<CheckboxesConfig>} [config] - Checkboxes config
     */
    constructor($root: Element | null, config?: Partial<CheckboxesConfig>);
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
     * This is useful when a "none" checkbox option is checked.
     *
     * @param {HTMLInputElement} $behaviourInput - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    unCheckAllInputsExcept($behaviourInput: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): void;
    /**
     * Uncheck exclusive inputs
     *
     * @deprecated Use {@link unCheckInputs | `unCheckInputs($input, 'exclusive')`} instead.
     * @param {HTMLInputElement} $input - Checkbox input
     */
    unCheckExclusiveInputs($input: HTMLInputElement): void;
    /**
     * Uncheck inputs
     *
     * Find any checkbox inputs with the same checkbox group value and behaviour
     * and uncheck them. This helps prevent checking both a regular checkbox and
     * a "none" option at the same time
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    unCheckInputs($input: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): void;
    /**
     * Check other checkboxes
     *
     * Find any other checkbox inputs with the checkbox group value, and check them.
     * This is useful for when an "all" checkbox option is checked.
     *
     * @param {HTMLInputElement} $behaviourInput - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    checkAllInputsExcept($behaviourInput: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): void;
    /**
     * Check inputs
     *
     * Find any checkbox inputs with the same checkbox group value and behaviour
     * and check them. This helps prevent "all" options being left unchecked when
     * all regular checkboxes are checked
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    checkInputs($input: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): void;
    /**
     * Get checkbox group
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    getGroup($input: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): string | undefined;
    /**
     * Get checkbox group selector
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    getGroupSelector($input: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): string;
    /**
     * Get checkbox group inputs
     *
     * @param {HTMLInputElement} $behaviourInput - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    getGroupInputs($behaviourInput: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): HTMLInputElement[];
    /**
     * Get checkbox behaviour inputs
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {'exclusive' | 'inclusive'} [behaviour] - Checkbox behaviour
     */
    getBehaviourInputs($input: HTMLInputElement, behaviour?: "exclusive" | "inclusive"): HTMLInputElement[];
    /**
     * Set input state, optionally for matching group only
     *
     * @param {HTMLInputElement} $input - Checkbox input
     * @param {boolean} checked - Checkbox checked state
     * @param {string} [behaviourGroup] - Set state for matching behaviour group only (optional)
     */
    setInputState($input: HTMLInputElement, checked: boolean, behaviourGroup?: string): void;
    /**
     * Toggle classes and attributes
     *
     * @param {MouseEvent} event - Click event
     */
    handleClick(event: MouseEvent): void;
}
/**
 * Checkboxes config
 */
export type CheckboxesConfig = {
    /**
     * - Conditionally revealed content class
     */
    conditionalClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=checkboxes.d.mts.map