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
            href: string;
            text: string;
        };
    };
    'without hash fragment': {
        context: {
            href: string;
            text: string;
        };
        options: {
            hidden: true;
            throwOnError: false;
        };
    };
    'without link target': {
        context: {
            href: string;
            text: string;
        };
        options: {
            hidden: true;
            throwOnError: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map