/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink)`} instead.
 * @param {InitOptions} [options]
 */
export function initSkipLinks(options?: InitOptions): void;
/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 *
 * @augments Component<HTMLAnchorElement>
 */
export class SkipLink extends Component<HTMLAnchorElement> {
    static elementType: {
        new (): HTMLAnchorElement;
        prototype: HTMLAnchorElement;
    };
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
}
import type { InitOptions } from '../../index.mjs';
import { Component } from '../../component.mjs';
//# sourceMappingURL=skip-link.d.mts.map