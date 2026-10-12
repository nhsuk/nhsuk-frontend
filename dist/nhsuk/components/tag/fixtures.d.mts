/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    context: {
        text: string;
        colour?: undefined;
    };
    description?: undefined;
} | {
    description: string;
    context: {
        text: string;
        colour: string;
    };
})[];
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
        variants: ({
            context: {
                text: string;
                colour?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                text: string;
                colour: string;
            };
        })[];
        screenshot: {
            viewports: "mobile"[];
        };
    };
    "colour class": {
        context: {
            text: string;
            classes: string;
        };
    };
    "colour class overriding colour option": {
        context: {
            text: string;
            colour: string;
            classes: string;
        };
    };
    "with text escaping": {
        context: {
            text: string;
            colour: string;
        };
    };
    "with HTML": {
        context: {
            html: string;
            colour: string;
        };
    };
    "with HTML via call block": {
        context: {
            colour: string;
        };
        callBlock: string;
    };
    "without border": {
        context: {
            border: boolean;
        };
        variants: ({
            context: {
                text: string;
                colour?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                text: string;
                colour: string;
            };
        })[];
        options: {
            layout: string;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
    "without colour": {
        context: {
            text: string;
            colour: boolean;
        };
        screenshot: {
            viewports: "mobile"[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map