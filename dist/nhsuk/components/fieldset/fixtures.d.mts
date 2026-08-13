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
                text: string;
                size: string;
                isPageHeading: boolean;
            };
        };
        screenshot: true;
    };
    "with HTML": {
        context: {
            legend: {
                text: string;
                size: string;
                isPageHeading: boolean;
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
                text: string;
                size: string;
                isPageHeading: boolean;
            };
        };
        callBlock: string;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map