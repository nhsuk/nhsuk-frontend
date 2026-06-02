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
                current?: undefined;
            } | {
                href: string;
                text: string;
                current: boolean;
            })[];
        };
        options: {
            width: "full";
        };
    };
    'with badge': {
        context: {
            items: ({
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current?: undefined;
            } | {
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current: boolean;
            } | {
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText?: undefined;
                };
                current?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with html': {
        context: {
            items: ({
                href: string;
                html: string;
                current?: undefined;
            } | {
                href: string;
                html: string;
                current: boolean;
            })[];
        };
        options: {
            width: "full";
        };
    };
    reverse: {
        context: {
            classes: string;
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                href: string;
                text: string;
                current: boolean;
            })[];
        };
        options: {
            layout: string;
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'reverse with badge': {
        context: {
            classes: string;
            items: ({
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current?: undefined;
            } | {
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current: boolean;
            })[];
        };
        options: {
            layout: string;
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with custom label': {
        context: {
            label: string;
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
        options: {
            width: "full";
        };
    };
    vertical: {
        context: {
            vertical: boolean;
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                href: string;
                text: string;
                current: boolean;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with unlinked current item': {
        context: {
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map