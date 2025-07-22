/**
 * Initialise button component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initButtons(options?: {
    scope?: Element | Document | null | undefined;
}): void;
/**
 * Button component
 */
export class Button extends Component<HTMLElement> {
    /**
     * @param {Element | null} [$root] - HTML element to use for component
     */
    constructor($root?: Element | null);
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
import { Component } from '../../component.mjs';
//# sourceMappingURL=button.d.mts.map