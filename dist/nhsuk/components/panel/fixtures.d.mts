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
            titleText: string;
            text: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    interruption: {
        context: {
            titleText: string;
            titleSize: string;
            classes: string;
            html: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'interruption for confirmation to cancel': {
        context: {
            titleText: string;
            titleSize: string;
            classes: string;
            html: string;
        };
    };
    'interruption for confirmation to continue': {
        context: {
            titleText: string;
            titleSize: string;
            classes: string;
            html: string;
        };
    };
    title: {
        context: {
            titleText: string;
            text: string;
        };
        variants: {
            description: string;
            context: {
                titleSize: string;
            };
        }[];
    };
    'with title classes and heading level': {
        context: {
            titleText: string;
            titleClasses: string;
            text: string;
            headingLevel: number;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map