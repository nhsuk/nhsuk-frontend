/**
 * Initialise character count component
 *
 * @deprecated Use {@link createAll | `createAll(CharacterCount, options)`} instead.
 * @param {InitOptions & CharacterCountConfig} [options]
 */
export function initCharacterCounts(options?: InitOptions & CharacterCountConfig): void;
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
            i18n: {
                type: "object";
            };
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
     * @param {CharacterCountConfig} [config] - Character count config
     */
    constructor($root: Element | null, config?: CharacterCountConfig);
    /**
     * @type {number | null}
     */
    lastInputTimestamp: number | null;
    lastInputValue: string;
    /**
     * @type {number | null}
     */
    valueChecker: number | null;
    i18n: I18n;
    maxLength: number;
    $textarea: HTMLInputElement | HTMLTextAreaElement;
    $errorMessage: Element | null;
    $screenReaderCountMessage: HTMLDivElement;
    $visibleCountMessage: HTMLDivElement;
    /**
     * Character count config override
     *
     * To ensure data-attributes take complete precedence, even if they change
     * the type of count, we need to reset the `maxlength` and `maxwords` from
     * the JavaScript config.
     *
     * @param {Partial<CharacterCountConfig>} datasetConfig - Config specified by dataset
     * @returns {Partial<CharacterCountConfig>} Config to override by dataset
     */
    configOverride(datasetConfig: Partial<CharacterCountConfig>): Partial<CharacterCountConfig>;
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
     * Formats the message shown to users according to what's counted
     * and how many remain
     *
     * @param {number} remainingNumber - The number of words/characaters remaining
     * @param {string} countType - "words" or "characters"
     * @returns {string} Status message
     */
    formatCountMessage(remainingNumber: number, countType: string): string;
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
    /**
     * - Character count translations
     */
    i18n?: CharacterCountTranslations | undefined;
};
/**
 * Messages shown to users as they type. It provides feedback on how many words
 * or characters they have remaining or if they are over the limit. This also
 * includes a message used as an accessible description for the textarea.
 */
export type CharacterCountTranslations = {
    /**
     * - Message displayed
     * when the number of characters is under the configured maximum, `maxlength`.
     * This message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining characters. This is a pluralised list of messages.
     */
    charactersUnderLimit?: TranslationPluralForms | undefined;
    /**
     * - Message displayed when the number of
     * characters reaches the configured maximum, `maxlength`. This message is
     * displayed visually and through assistive technologies.
     */
    charactersAtLimit?: string | undefined;
    /**
     * - Message displayed
     * when the number of characters is over the configured maximum, `maxlength`.
     * This message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining characters. This is a pluralised list of messages.
     */
    charactersOverLimit?: TranslationPluralForms | undefined;
    /**
     * - Message displayed when
     * the number of words is under the configured maximum, `maxlength`. This
     * message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining words. This is a pluralised list of messages.
     */
    wordsUnderLimit?: TranslationPluralForms | undefined;
    /**
     * - Message displayed when the number of
     * words reaches the configured maximum, `maxlength`. This message is
     * displayed visually and through assistive technologies.
     */
    wordsAtLimit?: string | undefined;
    /**
     * - Message displayed when
     * the number of words is over the configured maximum, `maxlength`. This
     * message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining words. This is a pluralised list of messages.
     */
    wordsOverLimit?: TranslationPluralForms | undefined;
    /**
     * - Message made
     * available to assistive technologies, if none is already present in the
     * HTML, to describe that the component accepts only a limited amount of
     * content. It is visible on the page when JavaScript is unavailable. The
     * component will replace the `%{count}` placeholder with the value of the
     * `maxlength` or `maxwords` parameter.
     */
    textareaDescription?: TranslationPluralForms | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
import type { TranslationPluralForms } from '../../i18n.mjs';
//# sourceMappingURL=character-count.d.mts.map