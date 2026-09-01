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
            text: string;
        };
    };
    open: {
        context: {
            summary: {
                text: string;
            };
            text: string;
            open: boolean;
        };
    };
    "closed explicitly": {
        context: {
            summary: {
                text: string;
            };
            text: string;
            open: boolean;
        };
    };
    "with HTML": {
        context: {
            summary: {
                text: string;
            };
            html: string;
        };
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    "with HTML via call block": {
        context: {
            summary: {
                text: string;
            };
        };
        callBlock: string;
    };
    "with summary HTML": {
        context: {
            summary: {
                html: string;
            };
            text: string;
        };
    };
    "with summary as string": {
        context: {
            summary: string;
            text: string;
        };
    };
    expander: {
        context: {
            summary: {
                text: string;
            };
            text: string;
            classes: string;
        };
    };
    "expander open": {
        context: {
            summary: {
                text: string;
            };
            text: string;
            classes: string;
            open: boolean;
        };
    };
    "expander closed explicitly": {
        context: {
            summary: {
                text: string;
            };
            text: string;
            classes: string;
            open: boolean;
        };
    };
    "expander with HTML": {
        context: {
            summary: {
                text: string;
            };
            html: string;
            classes: string;
        };
        screenshot: {
            states: "click"[];
            selector: string;
        };
    };
    "expander with HTML via call block": {
        context: {
            summary: {
                text: string;
            };
            classes: string;
        };
        callBlock: string;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map