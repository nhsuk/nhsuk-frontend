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
            summaryText: string;
        };
        callBlock: string;
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    open: {
        context: {
            summaryText: string;
            open: boolean;
        };
        callBlock: string;
    };
    expander: {
        context: {
            summaryText: string;
            classes: string;
        };
        callBlock: string;
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    'expander open': {
        context: {
            summaryText: string;
            classes: string;
            open: boolean;
        };
        callBlock: string;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map