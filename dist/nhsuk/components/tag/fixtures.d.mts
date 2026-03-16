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
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    white: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    grey: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    green: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    'aqua-green': {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    blue: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    purple: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    pink: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    red: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    orange: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    yellow: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map