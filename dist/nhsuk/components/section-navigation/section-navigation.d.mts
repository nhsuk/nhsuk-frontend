/**
 * Section navigation component
 */
export class SectionNavigation extends Component<HTMLElement> {
    /**
     * Automatically toggles the `--horizontal` or `--vertical` modifier classes
     * based on the horizontal space available, unless already set.
     *
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    /** @type {HTMLElement | null} */
    $list: HTMLElement | null;
    /** @type {MediaQueryList | null} */
    mobileMediaQuery: MediaQueryList | null;
    /** @type {ResizeObserver | null} */
    resizeObserver: ResizeObserver | null;
    /** @type {number | null} */
    updateTimer: number | null;
    /** @type {FrameRequestCallback} */
    handleUpdate: FrameRequestCallback;
    /** @type {() => void} */
    handleResize: () => void;
    /**
     * Handle resize events (throttled via requestAnimationFrame)
     */
    onResize(): void;
    /**
     * Measure whether all navigation items fit in a single horizontal row
     * and toggle the `--horizontal` / `--vertical` modifier classes accordingly.
     */
    updateLayout(): void;
}
import { Component } from '../../component.mjs';
//# sourceMappingURL=section-navigation.d.mts.map