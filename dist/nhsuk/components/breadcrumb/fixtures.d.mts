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
            items: {
                href: string;
                text: string;
            }[];
        };
        screenshot: true;
    };
    reverse: {
        context: {
            classes: string;
            items: {
                href: string;
                text: string;
            }[];
        };
        options: {
            layout: string;
        };
        screenshot: true;
    };
    'with back link as a button': {
        context: {
            items: {
                href: string;
                text: string;
            }[];
            backLink: {
                element: string;
            };
        };
    };
    'with back link custom text': {
        context: {
            items: {
                href: string;
                text: string;
            }[];
            backLink: {
                text: string;
                href: string;
            };
        };
    };
    attributes: {
        context: {
            id: string;
            items: ({
                href: string;
                text: string;
                attributes: {
                    lang: string;
                };
                classes?: undefined;
            } | {
                href: string;
                text: string;
                classes: string;
                attributes: {
                    lang: string;
                };
            })[];
            backLink: {
                id: string;
                attributes: {
                    lang: string;
                };
            };
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map