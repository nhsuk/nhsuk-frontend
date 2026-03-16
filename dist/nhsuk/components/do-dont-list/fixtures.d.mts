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
            title: string;
            type: string;
            items: {
                text: string;
            }[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    '(do) with empty items': {
        context: {
            title: string;
            type: string;
            items: (boolean | {
                text: string;
            })[];
        };
    };
    '(do) with deprecated parameters': {
        context: {
            title: string;
            type: string;
            items: {
                item: string;
            }[];
        };
    };
    '(do) with custom prefix': {
        context: {
            title: string;
            type: string;
            prefixText: string;
            items: {
                item: string;
            }[];
        };
    };
    "(don't)": {
        context: {
            title: string;
            type: string;
            items: {
                text: string;
            }[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "(don't) with empty items": {
        context: {
            title: string;
            type: string;
            items: (boolean | {
                item: string;
            })[];
        };
    };
    "(don't) with deprecated parameters": {
        context: {
            title: string;
            type: string;
            items: {
                item: string;
            }[];
        };
    };
    "(don't) with custom prefix": {
        context: {
            title: string;
            type: string;
            prefixText: string;
            items: {
                text: string;
            }[];
        };
    };
    "(don't) with hidden prefix": {
        context: {
            title: string;
            type: string;
            hidePrefix: boolean;
            items: {
                text: string;
            }[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map