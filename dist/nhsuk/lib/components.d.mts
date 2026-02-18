/**
 * Render component HTML
 *
 * @param {string} component - Component directory name
 * @param {MacroRenderOptions | MacroExample} [options] - Nunjucks macro render options
 * @returns HTML rendered by the component
 */
export function render(component: string, options?: nunjucks.MacroRenderOptions | MacroExample): string;
/**
 * Nunjucks macro option config
 */
export type MacroParam = {
    /**
     * - Option type
     */
    type: "array" | "boolean" | "integer" | "nunjucks-block" | "object" | "string";
    /**
     * - Option required
     */
    required: boolean;
    /**
     * - Option description
     */
    description: string;
    /**
     * - Option is another component
     */
    isComponent?: true | undefined;
    /**
     * - Nunjucks macro option params
     */
    params?: {
        [param: string]: MacroParam;
    } | undefined;
};
/**
 * Nunjucks macro screenshot
 */
export type MacroScreenshot = {
    /**
     * - Selector state (optional)
     */
    states?: MacroExampleState[] | undefined;
    /**
     * - Selector to apply state (optional)
     */
    selector?: string | undefined;
    /**
     * - Selector name (optional)
     */
    name?: string | undefined;
    /**
     * - Screenshot viewports (optional)
     */
    viewports?: ("mobile" | "tablet" | "watch" | "desktop" | "large-desktop" | "xlarge-desktop")[] | undefined;
};
/**
 * Nunjucks macro example
 */
export type MacroExample = {
    /**
     * - Example description (optional)
     */
    description?: string | undefined;
    /**
     * - Nunjucks context object (optional)
     */
    context?: {
        [param: string]: unknown;
    } | undefined;
    /**
     * - Nunjucks macro `caller()` content (optional)
     */
    callBlock?: string | undefined;
    /**
     * - Component name prefix (not available in Nunjucks macro examples)
     */
    prefix?: undefined;
    /**
     * - Review app example options (optional)
     */
    options?: MacroExampleOptions | undefined;
    /**
     * - Review app example variants (optional)
     */
    variants?: MacroExample[] | undefined;
    /**
     * - Screenshot and include in visual regression tests
     */
    screenshot?: boolean | MacroScreenshot | MacroScreenshot[] | undefined;
};
/**
 * Nunjucks macro example review app options
 */
export type MacroExampleOptions = {
    /**
     * - Hide example on component listing pages
     */
    hidden?: boolean | undefined;
    /**
     * - Nunjucks layout for component preview page
     */
    layout?: string | undefined;
    /**
     * - Component grid column width (or set `false` to remove width container)
     */
    width?: false | MacroExampleWidth | MacroExampleWidth[] | undefined;
    /**
     * - Whether to throw on error (optional)
     */
    throwOnError?: boolean | undefined;
};
/**
 * Nunjucks macro example state
 */
export type MacroExampleState = ("focus" | "hover" | "active" | "click");
/**
 * Nunjucks macro example column width
 */
export type MacroExampleWidth = ("one-quarter" | "one-quarter-from-mobile" | "one-quarter-from-desktop" | "one-third" | "one-third-from-mobile" | "one-third-from-desktop" | "one-half" | "one-half-from-mobile" | "one-half-from-desktop" | "two-thirds" | "two-thirds-from-mobile" | "two-thirds-from-desktop" | "three-quarters" | "three-quarters-from-mobile" | "three-quarters-from-desktop" | "full" | "full-from-mobile" | "full-from-desktop");
/**
 * Nunjucks macro example fixture
 * (used by the Design System website)
 */
export type MacroExampleFixture = Omit<Required<MacroExample>, "prefix" | "variants"> & {
    name: string;
    html: string;
};
/**
 * Nunjucks macro example fixtures
 * (used by the Design System website)
 */
export type MacroExampleFixtures = {
    /**
     * - Component friendly name
     */
    name: string;
    /**
     * - Component directory name
     */
    component: string;
    /**
     * - Nunjucks macro example fixtures
     */
    fixtures: MacroExampleFixture[];
};
/**
 * Nunjucks macro option
 * (used by the Design System website)
 */
export type MacroOption = Omit<MacroParam, "params"> & {
    name: string;
    params?: MacroOption[];
};
import * as nunjucks from './nunjucks.mjs';
//# sourceMappingURL=components.d.mts.map