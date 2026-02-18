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
            previous: {
                labelText: string;
                href: string;
            };
            next: {
                labelText: string;
                href: string;
            };
        };
        options: {
            width: "full";
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with deprecated parameters': {
        context: {
            previousUrl: string;
            previousPage: string;
            nextUrl: string;
            nextPage: string;
        };
        options: {
            width: "full";
        };
    };
    'with only previous': {
        context: {
            previous: {
                labelText: string;
                href: string;
            };
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with only next': {
        context: {
            next: {
                labelText: string;
                href: string;
            };
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with translations': {
        context: {
            previous: {
                text: string;
                labelText: string;
                href: string;
            };
            next: {
                text: string;
                labelText: string;
                href: string;
            };
        };
        options: {
            width: "full";
        };
    };
    numbered: {
        context: {
            previous: {
                href: string;
            };
            next: {
                href: string;
            };
            items: ({
                number: number;
                href: string;
                current?: undefined;
            } | {
                number: number;
                href: string;
                current: boolean;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'numbered with many pages': {
        context: {
            previous: {
                href: string;
            };
            next: {
                href: string;
            };
            items: ({
                number: number;
                href: string;
                ellipsis?: undefined;
                current?: undefined;
            } | {
                ellipsis: boolean;
                number?: undefined;
                href?: undefined;
                current?: undefined;
            } | {
                number: number;
                href: string;
                current: boolean;
                ellipsis?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'numbered with many pages (empty items)': {
        context: {
            previous: {
                href: string;
            };
            next: {
                href: string;
            };
            items: (boolean | {
                number: number;
                href: string;
                ellipsis?: undefined;
                current?: undefined;
            } | {
                ellipsis: boolean;
                number?: undefined;
                href?: undefined;
                current?: undefined;
            } | {
                number: number;
                href: string;
                current: boolean;
                ellipsis?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
    };
    'numbered first page': {
        context: {
            next: {
                href: string;
            };
            items: ({
                number: number;
                href: string;
                current: boolean;
            } | {
                number: number;
                href: string;
                current?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'numbered last page': {
        context: {
            previous: {
                href: string;
            };
            items: ({
                number: number;
                href: string;
                current?: undefined;
            } | {
                number: number;
                href: string;
                current: boolean;
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'numbered with translations': {
        context: {
            previous: {
                text: string;
                href: string;
            };
            next: {
                text: string;
                href: string;
            };
            items: ({
                number: number;
                href: string;
                current?: undefined;
            } | {
                number: number;
                href: string;
                current: boolean;
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