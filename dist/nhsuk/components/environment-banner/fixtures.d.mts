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
        options: {
            width: false;
        };
        variants: ({
            context: {
                tag: string;
                colour?: undefined;
                name?: undefined;
            };
            options: {
                layout: string;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                tag: string;
                colour: string;
                name?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                tag: string;
                name: string;
                colour: string;
            };
            options?: undefined;
        })[];
    };
    "with HTML": {
        context: {
            tag: {
                text: string;
                colour: string;
            };
            html: string;
        };
        options: {
            layout: string;
            width: false;
        };
    };
    "with HTML via call block": {
        context: {
            tag: {
                text: string;
                colour: string;
            };
        };
        callBlock: string;
        options: {
            layout: string;
            width: false;
        };
    };
    "without tag": {
        context: {
            tag: boolean;
        };
        options: {
            layout: string;
            width: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map