/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios, options)`} instead.
 * @param {InitOptions & Partial<RadiosConfig>} [options]
 */
export function initRadios(options?: InitOptions & Partial<RadiosConfig>): void;
/**
 * Radios component
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<RadiosConfig>}
 */
export class Radios extends ConfigurableComponent<RadiosConfig, HTMLElement> {
    /**
     * Radios default config
     *
     * @see {@link RadiosConfig}
     * @constant
     * @type {RadiosConfig}
     */
    static defaults: RadiosConfig;
    /**
     * Radios config schema
     *
     * @constant
     * @satisfies {Schema<RadiosConfig>}
     */
    static schema: Readonly<{
        properties: {
            conditionalClass: {
                type: "string";
            };
        };
    }>;
    /**
     * Radios can be associated with a 'conditionally revealed' content block –
     * for example, a radio for 'Phone' could reveal an additional form field for
     * the user to enter their phone number.
     *
     * These associations are made using a `data-aria-controls` attribute, which
     * is promoted to an aria-controls attribute during initialisation.
     *
     * We also need to restore the state of any conditional reveals on the page
     * (for example if the user has navigated back), and set up event handlers to
     * keep the reveal in sync with the radio state.
     *
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<RadiosConfig>} [config] - Radios config
     */
    constructor($root: Element | null, config?: Partial<RadiosConfig>);
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
/**
 * Radios config
 */
export type RadiosConfig = {
    /**
     * - Conditionally revealed content class
     */
    conditionalClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=radios.d.mts.map