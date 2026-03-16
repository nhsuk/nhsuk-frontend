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
    'colour class': {
        context: {
            text: string;
            classes: string;
        };
    };
    'colour class overriding colour param': {
        context: {
            text: string;
            colour: string;
            classes: string;
        };
    };
    'without border': {
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
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map