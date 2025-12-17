/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink, options)`} instead.
 * @param {InitOptions & Partial<SkipLinkConfig>} [options]
 */
export function initSkipLinks(options?: InitOptions & Partial<SkipLinkConfig>): void;
/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when selected so the next focusable element is not at the jumped to area.
 *
 * @augments {ConfigurableComponent<SkipLinkConfig, HTMLAnchorElement>}
 */
export class SkipLink extends ConfigurableComponent<SkipLinkConfig, HTMLAnchorElement> {
    static elementType: {
        new (): HTMLAnchorElement;
        prototype: HTMLAnchorElement;
    };
    /**
     * Skip link default config
     *
     * @see {@link SkipLinkConfig}
     * @constant
     * @type {SkipLinkConfig}
     */
    static defaults: SkipLinkConfig;
    /**
     * Skip link config schema
     *
     * @constant
     * @satisfies {Schema<SkipLinkConfig>}
     */
    static schema: Readonly<{
        properties: {
            focusedElementClass: {
                type: "string";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<SkipLinkConfig>} [config] - Skip link config
     */
    constructor($root: Element | null, config?: Partial<SkipLinkConfig>);
}
/**
 * Skip link config
 */
export type SkipLinkConfig = {
    /**
     * - Focused element class
     */
    focusedElementClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=skip-link.d.mts.map