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
            items: ({
                href: string;
                text: string;
                current: boolean;
            } | {
                href: string;
                text: string;
                current?: undefined;
            })[];
        };
        screenshot: true;
    };
    'with empty items': {
        context: {
            items: (boolean | {
                href: string;
                text: string;
                current: boolean;
            } | {
                href: string;
                text: string;
                current?: undefined;
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map