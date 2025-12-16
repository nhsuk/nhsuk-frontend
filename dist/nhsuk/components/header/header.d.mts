/**
 * Initialise header component
 *
 * @deprecated Use {@link createAll | `createAll(Header, options)`} instead.
 * @param {InitOptions & Partial<HeaderConfig>} [options]
 */
export function initHeader(options?: InitOptions & Partial<HeaderConfig>): void;
/**
 * Header component
 *
 * @augments {ConfigurableComponent<HeaderConfig>}
 */
export class Header extends ConfigurableComponent<HeaderConfig, HTMLElement> {
    /**
     * Tabs default config
     *
     * @see {@link HeaderConfig}
     * @constant
     * @type {HeaderConfig}
     */
    static defaults: HeaderConfig;
    /**
     * Tabs config schema
     *
     * @constant
     * @satisfies {Schema<HeaderConfig>}
     */
    static schema: Readonly<{
        properties: {
            navigationClass: {
                type: "string";
            };
            navigationListClass: {
                type: "string";
            };
            navigationItemClass: {
                type: "string";
            };
            menuClass: {
                type: "string";
            };
            menuToggleClass: {
                type: "string";
            };
            menuListClass: {
                type: "string";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<HeaderConfig>} [config] - Header config
     */
    constructor($root: Element | null, config?: Partial<HeaderConfig>);
    /** @type {HTMLElement | null} */
    $navigation: HTMLElement | null;
    /** @type {HTMLElement | null} */
    $navigationList: HTMLElement | null;
    /** @type {NodeListOf<HTMLElement> | null} */
    $navigationItems: NodeListOf<HTMLElement> | null;
    /** @type {HTMLElement | null} */
    $menu: HTMLElement | null;
    /** @type {HTMLButtonElement | null} */
    $menuToggle: HTMLButtonElement | null;
    /** @type {HTMLElement | null} */
    $menuList: HTMLElement | null;
    width: number;
    /**
     * @type {{ element: HTMLElement, right: number }[]}
     */
    breakpoints: {
        element: HTMLElement;
        right: number;
    }[];
    /**
     * @type {number | null}
     */
    updateNavigationTimer: number | null;
    menuIsEnabled: boolean;
    menuIsOpen: boolean;
    handleEscapeKey: (event: KeyboardEvent) => void;
    handleUpdateNavigation: () => void;
    handleToggleMenu: () => void;
    /**
     * Reset navigation
     *
     * Calculate available space by summing the width of each navigation item
     */
    resetNavigation(): void;
    /**
     * Add the breakpoints with default positions
     */
    setupNavigation(): void;
    /**
     * Add the menu to the DOM
     */
    setupMenu(): void;
    /**
     * Enable the menu
     */
    enableMenu(): void;
    /**
     * Disable the menu
     */
    disableMenu(): void;
    /**
     * Close the menu
     *
     * Closes the menu and updates accessibility state.
     *
     * Removes the bottom border from the navigation
     */
    closeMenu(): void;
    /**
     * Escape key handler
     *
     * This function is called when the user
     * presses the escape key to close the menu.
     *
     * @param {KeyboardEvent} event - Key press event
     */
    onEscapeKey(event: KeyboardEvent): void;
    /**
     * Open the menu
     *
     * Opens the menu and updates accessibility state.
     *
     * The menu is absolutely positioned, so it adds a border
     * to the bottom of the navigation to prevent it from overlapping
     *
     * Adds event listeners for the close button,
     */
    openMenu(): void;
    /**
     * Handle menu button click
     *
     * Toggles the menu between open and closed
     */
    toggleMenu(): void;
    /**
     * Update navigation for the available space
     *
     * Moves all items that overflow the available space into the menu
     */
    updateNavigation(): void;
}
/**
 * Header config
 */
export type HeaderConfig = {
    /**
     * - Navigation class
     */
    navigationClass: string;
    /**
     * - Navigation list class
     */
    navigationListClass: string;
    /**
     * - Navigation item class
     */
    navigationItemClass: string;
    /**
     * - Menu class
     */
    menuClass: string;
    /**
     * - Menu toggle button class
     */
    menuToggleClass: string;
    /**
     * - Menu list class
     */
    menuListClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=header.d.mts.map