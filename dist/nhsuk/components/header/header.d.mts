/**
 * Initialise header component
 *
 * @deprecated Use {@link createAll | `createAll(Header)`} instead.
 * @param {InitOptions} [options]
 */
export function initHeader(options?: InitOptions): void;
/**
 * Header component
 */
export class Header extends Component<HTMLElement> {
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
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
import type { InitOptions } from '../../index.mjs';
import { Component } from '../../component.mjs';
//# sourceMappingURL=header.d.mts.map