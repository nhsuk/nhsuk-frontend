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
        screenshot: true;
    };
    text: {
        context: {
            text: string;
            size: string;
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
    "with size class": {
        context: {
            text: string;
            classes: string;
            isPageHeading: boolean;
        };
    };
    "with size class overriding size param": {
        context: {
            text: string;
            classes: string;
            size: string;
            isPageHeading: boolean;
        };
    };
    "with HTML": {
        context: {
            text: string;
            size: string;
            isPageHeading: boolean;
        };
    };
    "with HTML via call block": {
        context: {
            size: string;
            isPageHeading: boolean;
        };
        callBlock: string;
    };
    "without page heading": {
        context: {
            text: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map