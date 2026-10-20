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
            description?: undefined;
        } | {
            description: string;
            context: {
                tag: string;
                colour: string;
                name?: undefined;
            };
        } | {
            description: string;
            context: {
                tag: string;
                name: string;
                colour: string;
            };
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
            width: false;
        };
    };
    "without tag": {
        context: {
            tag: boolean;
        };
        options: {
            width: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map