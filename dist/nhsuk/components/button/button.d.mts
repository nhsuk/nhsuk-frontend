/**
 * Initialise button component
 *
 * @deprecated Use {@link createAll | `createAll(Button, options)`} instead.
 * @param {InitOptions & ButtonConfig} [options]
 */
export function initButtons(options?: InitOptions & ButtonConfig): void;
/**
 * Button component
 *
 * @augments ConfigurableComponent<ButtonConfig>
 */
export class Button extends ConfigurableComponent<ButtonConfig, HTMLElement> {
    /**
     * Button default config
     *
     * @see {@link ButtonConfig}
     * @constant
     * @type {ButtonConfig}
     */
    static defaults: ButtonConfig;
    /**
     * Button config schema
     *
     * @constant
     * @satisfies {Schema<ButtonConfig>}
     */
    static schema: Readonly<{
        properties: {
            preventDoubleClick: {
                type: "boolean";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {ButtonConfig} [config] - Button config
     */
    constructor($root: Element | null, config?: ButtonConfig);
    /**
     * @type {number | null}
     */
    debounceFormSubmitTimer: number | null;
    /**
     * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
     *
     * Created since some Assistive Technologies (for example some Screenreaders)
     * will tell a user to press space on a 'button', so this functionality needs to be shimmed
     * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
     *
     * @param {KeyboardEvent} event - Keydown event
     */
    handleKeyDown(event: KeyboardEvent): void;
    /**
     * Debounce double-clicks
     *
     * If the click quickly succeeds a previous click then nothing will happen.
     * This stops people accidentally causing multiple form submissions by
     * double clicking buttons.
     *
     * @param {MouseEvent} event - Mouse click event
     * @returns {undefined | false} Returns undefined, or false when debounced
     */
    debounce(event: MouseEvent): undefined | false;
}
/**
 * Button config
 */
export type ButtonConfig = {
    /**
     * - Prevent accidental double
     * clicks on submit buttons from submitting forms multiple times.
     */
    preventDoubleClick?: boolean | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=button.d.mts.map