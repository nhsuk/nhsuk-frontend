/**
 * Initialise skip link component
 *
 * @param {object} [options]
 * @param {Element | Document | null} [options.scope] - Scope of the document to search within
 */
export function initSkipLinks(options?: {
    scope?: Element | Document | null | undefined;
}): void;
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
     * @param {Element | null} [$root] - HTML element to use for component
     */
    constructor($root?: Element | null);
}
import { Component } from '../../component.mjs';
//# sourceMappingURL=skip-link.d.mts.map