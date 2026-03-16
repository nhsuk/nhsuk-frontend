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
            idPrefix: string;
            items: ({
                title: {
                    text: string;
                };
                href: string;
                status: {
                    text: string;
                    classes: string;
                    tag?: undefined;
                };
                hint?: undefined;
            } | {
                title: {
                    text: string;
                };
                hint: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        classes: string;
                    };
                    text?: undefined;
                    classes?: undefined;
                };
            } | {
                title: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        classes: string;
                    };
                    text?: undefined;
                    classes?: undefined;
                };
                hint?: undefined;
            } | {
                title: {
                    text: string;
                };
                status: {
                    text: string;
                    classes: string;
                    tag?: undefined;
                };
                href?: undefined;
                hint?: undefined;
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with empty items': {
        context: {
            idPrefix: string;
            items: (boolean | {
                title: {
                    text: string;
                };
                href: string;
                status: {
                    text: string;
                    classes: string;
                    tag?: undefined;
                };
            } | {
                title: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        classes: string;
                    };
                    text?: undefined;
                    classes?: undefined;
                };
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map