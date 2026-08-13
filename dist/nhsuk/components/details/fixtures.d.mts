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
            summary: {
                text: string;
            };
        };
        callBlock: string;
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    open: {
        context: {
            summary: {
                text: string;
            };
            open: boolean;
        };
        callBlock: string;
    };
    expander: {
        context: {
            summary: {
                text: string;
            };
            classes: string;
        };
        callBlock: string;
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    "expander open": {
        context: {
            summary: {
                text: string;
            };
            classes: string;
            open: boolean;
        };
        callBlock: string;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map