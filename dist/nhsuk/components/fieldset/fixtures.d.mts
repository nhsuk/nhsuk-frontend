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
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    legend: {
        context: {
            legend: {
                text: string;
                isPageHeading: boolean;
            };
        };
        variants: {
            description: string;
            context: {
                legend: {
                    size: string;
                };
            };
        }[];
    };
    'with legend size class': {
        context: {
            legend: {
                text: string;
                classes: string;
                isPageHeading: boolean;
            };
        };
    };
    'with legend size class overriding size param': {
        context: {
            legend: {
                text: string;
                classes: string;
                size: string;
                isPageHeading: boolean;
            };
        };
    };
    'without page heading': {
        context: {
            legend: {
                text: string;
            };
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map