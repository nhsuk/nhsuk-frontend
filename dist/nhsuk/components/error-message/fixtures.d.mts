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
            viewports: "tablet"[];
        };
    };
    "with text escaping": {
        context: {
            text: string;
        };
    };
    "with HTML": {
        context: {
            html: string;
        };
    };
    "with HTML via call block": {
        callBlock: string;
    };
    "with translations": {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
    };
    "without visually hidden text": {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map