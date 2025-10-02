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
     * Character config schema
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
    $textarea: HTMLInputElement | HTMLTextAreaElement;
    $errorMessage: Element | null;
    $screenReaderCountMessage: HTMLDivElement;
    $visibleCountMessage: HTMLDivElement;
    maxLength: number;
    /**
     * Counts characters or words in text
     *
     * @param {string} text
     */
    count(text: string): number;
    /**
     * Bind input propertychange to the elements and update based on the change
     */
    bindChangeEvents(): void;
    /**
     * Speech recognition software such as Dragon NaturallySpeaking will modify the
     * fields by directly changing its `value`. These changes don't trigger events
     * in JavaScript, so we need to poll to handle when and if they occur
     */
    checkIfValueChanged(): void;
    /**
     * Helper function to update both the visible and screen reader-specific
     * counters simultaneously (e.g. on init)
     */
    updateCountMessage(): void;
    /**
     * Update visible counter
     */
    updateVisibleCountMessage(): void;
    /**
     * Update screen reader-specific counter
     */
    updateScreenReaderCountMessage(): void;
    /**
     * Format update message
     */
    formattedUpdateMessage(): string;
    /**
     * Check if count is over threshold
     *
     * Checks whether the value is over the configured threshold for the input.
     * If there is no configured threshold, it is set to 0 and this function will
     * always return true
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