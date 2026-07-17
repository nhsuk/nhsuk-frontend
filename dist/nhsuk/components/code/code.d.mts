/**
 * Initialise code component
 *
 * @deprecated Use {@link createAll | `createAll(Code, options)`} instead.
 * @param {InitOptions & Partial<CodeConfig>} [options]
 */
export function initCode(options?: InitOptions & Partial<CodeConfig>): void;
/**
 * Code component
 *
 * @augments {ConfigurableComponent<CodeConfig>}
 */
export class Code extends ConfigurableComponent<CodeConfig, HTMLElement> {
    /**
     * Checks if the elements scrollable width or height is greater than the
     * width or height the element is being rendered at.
     *
     * @param {Element} $element - The element to check
     * @returns {boolean} - Returns `true` if the given element is overflowing
     *   in either dimension, otherwise returns `false`
     */
    static isOverflowing($element: Element): boolean;
    /**
     * Password input default config
     *
     * @see {@link CodeConfig}
     * @constant
     * @type {CodeConfig}
     */
    static defaults: CodeConfig;
    /**
     * Code config schema
     *
     * @constant
     * @satisfies {Schema<CodeConfig>}
     */
    static schema: Readonly<{
        properties: {
            containerClass: {
                type: "string";
            };
            contentClass: {
                type: "string";
            };
            screenReaderStatusMessageClass: {
                type: "string";
            };
            i18n: {
                type: "object";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<CodeConfig>} [config] - Code config
     */
    constructor($root: Element | null, config?: Partial<CodeConfig>);
    /** @type {HTMLButtonElement | null} */
    $button: HTMLButtonElement | null;
    /** @type {HTMLElement | null} */
    $screenReaderStatusMessage: HTMLElement | null;
    /** @type {number | null} */
    resetTimeoutId: number | null;
    i18n: I18n;
    $container: HTMLPreElement;
    $content: HTMLElement;
    handleEnableFocus: () => void;
    resizeObserver: ResizeObserver | undefined;
    /**
     * Set up copy button
     */
    setupButton(): void;
    /**
     * Enable copy button
     */
    enableButton(): void;
    /**
     * Enable container focus
     */
    enableFocus(): void;
    /**
     * Copy the code
     */
    copy(): void;
    /**
     * Copy to clipboard success
     */
    copied(): void;
    /**
     * Copy to clipboard reset
     *
     * @param {number} [timeout] - Button text reset timeout
     */
    reset(timeout?: number): void;
}
/**
 * Code config
 */
export type CodeConfig = {
    /**
     * - Code container class for `<pre>` element
     */
    containerClass: string;
    /**
     * - Code content class for `<code>` element
     */
    contentClass: string;
    /**
     * - Screen reader status message class
     */
    screenReaderStatusMessageClass: string;
    /**
     * - Code translations
     */
    i18n?: CodeTranslations | undefined;
};
/**
 * Messages displayed to the user indicating the state of the copy button.
 */
export type CodeTranslations = {
    /**
     * - Button text before the code is copied to clipboard
     */
    copyButton?: string | undefined;
    /**
     * - Button text after the code is copied to clipboard
     */
    copiedButton?: string | undefined;
    /**
     * - Screen reader announcement to
     * make when the code has just been copied.
     */
    copiedAnnouncement?: string | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
//# sourceMappingURL=code.d.mts.map