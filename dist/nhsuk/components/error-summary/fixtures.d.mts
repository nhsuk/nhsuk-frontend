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
            titleText: string;
            descriptionText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
        screenshot: true;
    };
    'with multiple errors': {
        context: {
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    'with multiple errors (empty items)': {
        context: {
            titleText: string;
            errorList: (boolean | {
                text: string;
                href: string;
            })[];
        };
    };
    'without description': {
        context: {
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    'without error list': {
        context: {
            titleText: string;
            descriptionText: string;
        };
    };
    'auto-focus disabled': {
        context: {
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
            disableAutoFocus: boolean;
        };
        options: {
            hidden: true;
        };
    };
    'auto-focus explicitly enabled': {
        context: {
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
            disableAutoFocus: boolean;
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map