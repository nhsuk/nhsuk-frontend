/**
 * Initialise password input component
 *
 * @deprecated Use {@link createAll | `createAll(PasswordInput, options)`} instead.
 * @param {InitOptions & Partial<PasswordInputConfig>} [options]
 */
export function initPasswordInputs(options?: InitOptions & Partial<PasswordInputConfig>): void;
/**
 * Password input component
 *
 * @augments {ConfigurableComponent<PasswordInputConfig>}
 */
export class PasswordInput extends ConfigurableComponent<PasswordInputConfig, HTMLElement> {
    /**
     * Password input default config
     *
     * @see {@link PasswordInputConfig}
     * @constant
     * @type {PasswordInputConfig}
     */
    static defaults: PasswordInputConfig;
    /**
     * Password input config schema
     *
     * @constant
     * @satisfies {Schema<PasswordInputConfig>}
     */
    static schema: Readonly<{
        properties: {
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
     * @param {Partial<PasswordInputConfig>} [config] - Password input config
     */
    constructor($root: Element | null, config?: Partial<PasswordInputConfig>);
    $input: HTMLInputElement;
    $showHideButton: HTMLButtonElement;
    i18n: I18n;
    $screenReaderStatusMessage: HTMLDivElement;
    /**
     * Toggle the visibility of the password input
     *
     * @param {MouseEvent} event - Click event
     */
    toggle(event: MouseEvent): void;
    /**
     * Show the password input value in plain text
     */
    show(): void;
    /**
     * Hide the password input value
     */
    hide(): void;
    /**
     * Set the password input type
     *
     * @param {'text' | 'password'} type - Input type
     */
    setType(type: "text" | "password"): void;
}
/**
 * Password input config
 */
export type PasswordInputConfig = {
    /**
     * - Screen reader status message class
     */
    screenReaderStatusMessageClass: string;
    /**
     * - Password input translations
     */
    i18n?: PasswordInputTranslations | undefined;
};
/**
 * Messages displayed to the user indicating the state of the show/hide toggle.
 */
export type PasswordInputTranslations = {
    /**
     * - Visible text of the button when the
     * password is currently hidden. Plain text only.
     */
    showPassword?: string | undefined;
    /**
     * - Visible text of the button when the
     * password is currently visible. Plain text only.
     */
    hidePassword?: string | undefined;
    /**
     * - aria-label of the button when
     * the password is currently hidden. Plain text only.
     */
    showPasswordAriaLabel?: string | undefined;
    /**
     * - aria-label of the button when
     * the password is currently visible. Plain text only.
     */
    hidePasswordAriaLabel?: string | undefined;
    /**
     * - Screen reader
     * announcement to make when the password has just become visible.
     * Plain text only.
     */
    passwordShownAnnouncement?: string | undefined;
    /**
     * - Screen reader
     * announcement to make when the password has just been hidden.
     * Plain text only.
     */
    passwordHiddenAnnouncement?: string | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
//# sourceMappingURL=password-input.d.mts.map