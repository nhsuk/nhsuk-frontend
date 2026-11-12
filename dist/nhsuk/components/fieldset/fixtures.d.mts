/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples: Record<keyof typeof fixtures, MacroExample>;
/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
declare const fixtures: {
    default: {
        context: {
            legend: {
                heading: string;
                size: string;
            };
        };
        screenshot: true;
    };
    "with HTML": {
        context: {
            legend: {
                caption: string;
                heading: string;
                size: string;
            };
            html: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with HTML via call block": {
        context: {
            legend: {
                caption: string;
                heading: string;
                size: string;
            };
        };
        callBlock: string;
    };
    "without legend heading": {
        context: {
            legend: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map