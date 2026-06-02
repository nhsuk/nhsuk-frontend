/**
 * Section navigation component
 *
 * Without JS, CSS defaults to a vertically stacked layout on mobile and a
 * horizontal wrapping layout from tablet upwards.
 * When JS is available, this component measures whether all navigation items
 * fit side-by-side. If they do, it preserves the horizontal layout; if not,
 * it adds the `--vertical` modifier class so CSS can keep the list stacked at
 * any breakpoint.
 *
 * The `--vertical` modifier opts out of this behaviour: the list stays
 * stacked at all breakpoints regardless.
 *
 * @augments {Component}
 */
export class SectionNavigation extends Component<HTMLElement> {
    /**
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