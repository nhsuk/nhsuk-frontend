/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs, options)`} instead.
 * @param {InitOptions & Partial<TabsConfig>} [options]
 */
export function initTabs(options?: InitOptions & Partial<TabsConfig>): void;
/**
 * Tabs component
 *
 * @augments {ConfigurableComponent<TabsConfig>}
 */
export class Tabs extends ConfigurableComponent<TabsConfig, HTMLElement> {
    /**
     * Tabs default config
     *
     * @see {@link TabsConfig}
     * @constant
     * @type {TabsConfig}
     */
    static defaults: TabsConfig;
    /**
     * Tabs config schema
     *
     * @constant
     * @satisfies {Schema<TabsConfig>}
     */
    static schema: Readonly<{
        properties: {
            panelClass: {
                type: "string";
            };
            listClass: {
                type: "string";
            };
            listItemClass: {
                type: "string";
            };
            tabClass: {
                type: "string";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<TabsConfig>} [config] - Tabs config
     */
    constructor($root: Element | null, config?: Partial<TabsConfig>);
    changingHash: boolean;
    /**
     * @type {string | undefined}
     * @deprecated Use {@link Tabs.panelClass} instead.
     */
    jsHiddenClass: string | undefined;
    /**
     * @type {MediaQueryList | null}
     */
    mql: MediaQueryList | null;
    $tabs: NodeListOf<HTMLAnchorElement>;
    boundTabClick: (event: MouseEvent) => void;
    boundTabKeydown: (event: KeyboardEvent) => void;
    boundOnHashChange: () => void;
    $tabList: HTMLUListElement;
    $tabListItems: NodeListOf<HTMLLIElement>;
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
     *
     * @returns {void} Returns void when prevented
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
     * @returns {HTMLAnchorElement | null} Tab link
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
     * @returns {void} Returns void
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
     * - Press right arrow for next tab
     * - Press left arrow for previous tab
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
     * @returns {Element | null} Tab panel
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
     *
     * @returns {HTMLAnchorElement | null} Tab link
     */
    getCurrentTab(): HTMLAnchorElement | null;
}
/**
 * Tabs config
 */
export type TabsConfig = {
    /**
     * - Tabs panel class
     */
    panelClass: string;
    /**
     * - Tabs list class
     */
    listClass: string;
    /**
     * - Tabs list item class
     */
    listItemClass: string;
    /**
     * - Tabs link class
     */
    tabClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=tabs.d.mts.map