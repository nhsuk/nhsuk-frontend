/**
 * Initialise scroll component
 *
 * @deprecated Use {@link createAll | `createAll(Scroll, options)`} instead.
 * @param {InitOptions & Partial<ScrollConfig>} [options]
 */
export function initScroll(options?: InitOptions & Partial<ScrollConfig>): void;
/**
 * Scroll component
 *
 * @augments {ConfigurableComponent<ScrollConfig>}
 */
export class Scroll extends ConfigurableComponent<ScrollConfig, HTMLElement> {
    /**
     * Checks if the elements scrollable width or height is greater than the
     * width or height the element is being rendered at.
     *
     * @param {Element} $element - The element to check
     * @returns {boolean} - Returns `true` if the given element is overflowing
     *   in either dimension, otherwise returns `false`
     */
    static isOverflowing($element: Element): boolean;
    /**
     * Scroll default config
     *
     * @see {@link ScrollConfig}
     * @constant
     * @type {ScrollConfig}
     */
    static defaults: ScrollConfig;
    /**
     * Scroll config schema
     *
     * @constant
     * @satisfies {Schema<ScrollConfig>}
     */
    static schema: Readonly<{
        properties: {
            contentClass: {
                type: "string";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<ScrollConfig>} [config] - Scroll config
     */
    constructor($root: Element | null, config?: Partial<ScrollConfig>);
    $content: HTMLElement;
    setup(): void;
    handleUpdate: (() => void) | undefined;
    resizeObserver: ResizeObserver | undefined;
    update(): void;
}
/**
 * Scroll config
 */
export type ScrollConfig = {
    /**
     * - Scroll content class
     */
    contentClass: string;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=scroll.d.mts.map