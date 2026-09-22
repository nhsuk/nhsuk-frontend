/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    description?: undefined;
    context?: undefined;
    options?: undefined;
} | {
    description: string;
    context: {
        variant: string;
    };
    options: {
        layout: string;
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
        context: {
            text: string;
        };
        options: {
            width: "full";
        };
    };
    "with HTML": {
        context: {
            html: string;
            labelledBy: string;
        };
        options: {
            width: "full";
        };
    };
    "with HTML via call block": {
        context: {
            labelledBy: string;
        };
        callBlock: string;
        options: {
            width: "full";
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map