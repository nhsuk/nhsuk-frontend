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
            text: string;
            size: string;
            isPageHeading: boolean;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    text: {
        context: {
            text: string;
            isPageHeading: boolean;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'size class': {
        context: {
            text: string;
            classes: string;
            isPageHeading: boolean;
        };
    };
    'size class overriding size param': {
        context: {
            text: string;
            classes: string;
            size: string;
            isPageHeading: boolean;
        };
    };
    'without page heading': {
        context: {
            text: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map