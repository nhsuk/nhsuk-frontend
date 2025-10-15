/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs)`} instead.
 * @param {InitOptions} [options]
 */
export function initTabs(options?: InitOptions): void;
/**
 * Tabs component
 */
export class Tabs extends Component<HTMLElement> {
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    jsHiddenClass: string;
    changingHash: boolean;
    /**
     * @type {MediaQueryList | null}
     */
    mql: MediaQueryList | null;
    $tabs: NodeListOf<HTMLAnchorElement>;
    boundTabClick: (event: MouseEvent) => void;
    boundTabKeydown: (event: KeyboardEvent) => void;
    boundOnHashChange: () => void;
    $tabList: Element;
    $tabListItems: NodeListOf<Element>;
    /**
     * Setup viewport resize check
     */
    setupResponsiveChecks(): void;
    /**
     * Setup or teardown handler for viewport resize check
     */
    checkMode(): void;
    /**
     * Setup tab component
     */
    setup(): void;
    /**
     * Teardown tab component
     */
    teardown(): void;
    /**
     * Handle hashchange event
     */
    onHashChange(): void;
    /**
     * Hide panel for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    hideTab($tab: HTMLAnchorElement): void;
    /**
     * Show panel for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    showTab($tab: HTMLAnchorElement): void;
    /**
     * Get tab link by hash
     *
     * @param {string} hash - Hash fragment including #
     */
    getTab(hash: string): HTMLAnchorElement | null;
    /**
     * Set tab link and panel attributes
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    setAttributes($tab: HTMLAnchorElement): void;
    /**
     * Unset tab link and panel attributes
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    unsetAttributes($tab: HTMLAnchorElement): void;
    /**
     * Handle tab link clicks
     *
     * @param {MouseEvent} event - Mouse click event
     */
    onTabClick(event: MouseEvent): void;
    /**
     * Update browser URL hash fragment for tab
     *
     * - Allows back/forward to navigate tabs
     * - Avoids page jump when hash changes
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    createHistoryEntry($tab: HTMLAnchorElement): void;
    /**
     * Handle tab keydown event
     *
     * - Press right/down arrow for next tab
     * - Press left/up arrow for previous tab
     *
     * @param {KeyboardEvent} event - Keydown event
     */
    onTabKeydown(event: KeyboardEvent): void;
    /**
     * Activate next tab
     */
    activateNextTab(): void;
    /**
     * Activate previous tab
     */
    activatePreviousTab(): void;
    /**
     * Get tab panel for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    getPanel($tab: HTMLAnchorElement): Element | null;
    /**
     * Show tab panel for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    showPanel($tab: HTMLAnchorElement): void;
    /**
     * Hide tab panel for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    hidePanel($tab: HTMLAnchorElement): void;
    /**
     * Unset 'selected' state for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    unhighlightTab($tab: HTMLAnchorElement): void;
    /**
     * Set 'selected' state for tab link
     *
     * @param {HTMLAnchorElement} $tab - Tab link
     */
    highlightTab($tab: HTMLAnchorElement): void;
    /**
     * Get current tab link
     */
    getCurrentTab(): HTMLAnchorElement | null;
}
import type { InitOptions } from '../../index.mjs';
import { Component } from '../../component.mjs';
//# sourceMappingURL=tabs.d.mts.map