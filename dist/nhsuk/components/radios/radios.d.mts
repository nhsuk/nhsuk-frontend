/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios)`} instead.
 * @param {InitOptions} [options]
 */
export function initRadios(options?: InitOptions): void;
/**
 * Radios component
 *
 * Conditionally show content when a radio button is checked
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 */
export class Radios extends Component<HTMLElement> {
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    $inputs: NodeListOf<HTMLInputElement>;
    /**
     * Sync the conditional reveal states for all radio buttons in this component.
     */
    syncAllConditionalReveals(): void;
    /**
     * Sync conditional reveal with the input state
     *
     * Synchronise the visibility of the conditional reveal, and its accessible
     * state, with the input's checked state.
     *
     * @param {HTMLInputElement} $input - Radio input
     */
    syncConditionalRevealWithInputState($input: HTMLInputElement): void;
    /**
     * Toggle classes and attributes
     *
     * @param {MouseEvent} event - Click event
     */
    handleClick(event: MouseEvent): void;
}
import type { InitOptions } from '../../index.mjs';
import { Component } from '../../component.mjs';
//# sourceMappingURL=radios.d.mts.map