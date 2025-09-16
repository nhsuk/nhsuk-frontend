/**
 * Initialise character count component
 *
 * @deprecated Use {@link createAll | `createAll(CharacterCount)`} instead.
 * @param {InitOptions} [options]
 */
export function initCharacterCounts(options?: InitOptions): void;
/**
 * Character count component
 *
 * Tracks the number of characters or words in the `.nhsuk-js-character-count`
 * `<textarea>` inside the element. Displays a message with the remaining number
 * of characters/words available, or the number of characters/words in excess.
 *
 * You can configure the message to only appear after a certain percentage
 * of the available characters/words has been entered.
 *
 * @augments ConfigurableComponent<CharacterCountConfig>
 */
export class CharacterCount extends ConfigurableComponent<CharacterCountConfig, HTMLElement> {
    /**
     * Character count default config
     *
     * @see {@link CharacterCountConfig}
     * @constant
     * @type {CharacterCountConfig}
     */
    static defaults: CharacterCountConfig;
    /**
     * Character count config schema
     *
     * @constant
     * @satisfies {Schema<CharacterCountConfig>}
     */
    static schema: Readonly<{
        properties: {
            maxwords: {
                type: "number";
            };
            maxlength: {
                type: "number";
            };
            threshold: {
                type: "number";
            };
        };
        anyOf: ({
            required: "maxwords"[];
            errorMessage: string;
        } | {
            required: "maxlength"[];
            errorMessage: string;
        })[];
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Record<string, never>} [config] - Not yet supported. Character count config
     */
    constructor($root: Element | null, config?: Record<string, never>);
    /**
     * @type {number | null}
     */
    lastInputTimestamp: number | null;
    lastInputValue: string;
    /**
     * @type {number | null}
     */
    valueChecker: number | null;
    maxLength: number;
    $textarea: HTMLInputElement | HTMLTextAreaElement;
    $errorMessage: Element | null;
    $screenReaderCountMessage: HTMLDivElement;
    $visibleCountMessage: HTMLDivElement;
    /**
     * Count the number of characters (or words, if `config.maxwords` is set)
     * in the given text
     *
     * @param {string} text - The text to count the characters of
     * @returns {number} the number of characters (or words) in the text
     */
    count(text: string): number;
    /**
     * Bind change events
     *
     * Set up event listeners on the $textarea so that the count messages update
     * when the user types.
     */
    bindChangeEvents(): void;
    /**
     * Update count message if textarea value has changed
     */
    checkIfValueChanged(): void;
    /**
     * Update count message
     *
     * Helper function to update both the visible and screen reader-specific
     * counters simultaneously (e.g. on init)
     */
    updateCountMessage(): void;
    /**
     * Update visible count message
     */
    updateVisibleCountMessage(): void;
    /**
     * Update screen reader count message
     */
    updateScreenReaderCountMessage(): void;
    /**
     * Get count message
     *
     * @returns {string} Status message
     */
    formattedUpdateMessage(): string;
    /**
     * Check if count is over threshold
     *
     * Checks whether the value is over the configured threshold for the input.
     * If there is no configured threshold, it is set to 0 and this function will
     * always return true.
     *
     * @returns {boolean} true if the current count is over the config.threshold
     *   (or no threshold is set)
     */
    isOverThreshold(): boolean;
    /**
     * Handle key up event
     *
     * Update the visible character counter and keep track of when the last update
     * happened for each keypress
     */
    handleKeyUp(): void;
    /**
     * Handle focus event
     *
     * Speech recognition software such as Dragon NaturallySpeaking will modify
     * the fields by directly changing its `value`. These changes don't trigger
     * events in JavaScript, so we need to poll to handle when and if they occur.
     *
     * Once the keyup event hasn't been detected for at least 1000 ms (1s), check
     * if the textarea value has changed and update the count message if it has.
     *
     * This is so that the update triggered by the manual comparison doesn't
     * conflict with debounced KeyboardEvent updates.
     */
    handleFocus(): void;
    /**
     * Handle blur event
     *
     * Stop checking the textarea value once the textarea no longer has focus
     */
    handleBlur(): void;
}
/**
 * Character count config
 */
export type CharacterCountConfig = {
    /**
     * - The maximum number of characters.
     * If maxwords is provided, the maxlength option will be ignored.
     */
    maxlength?: number | undefined;
    /**
     * - The maximum number of words. If maxwords is
     * provided, the maxlength option will be ignored.
     */
    maxwords?: number | undefined;
    /**
     * - The percentage value of the limit at
     * which point the count message is displayed. If this attribute is set, the
     * count message will be hidden by default.
     */
    threshold?: number | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=character-count.d.mts.map