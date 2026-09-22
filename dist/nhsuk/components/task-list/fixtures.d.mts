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
                heading: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
                hint?: undefined;
            } | {
                heading: {
                    text: string;
                };
                hint: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
            } | {
                heading: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
                hint?: undefined;
            } | {
                heading: {
                    text: string;
                };
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
                href?: undefined;
                hint?: undefined;
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with deprecated titles": {
        context: {
            idPrefix: string;
            items: ({
                title: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
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
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
            } | {
                title: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
                hint?: undefined;
            } | {
                title: {
                    text: string;
                };
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
                href?: undefined;
                hint?: undefined;
            })[];
        };
    };
    "with deprecated status classes": {
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
                        colour: string;
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
                        colour: string;
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
    };
    "with headings and hints as strings": {
        context: {
            idPrefix: string;
            items: ({
                heading: string;
                href: string;
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
                hint?: undefined;
            } | {
                heading: string;
                hint: string;
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
            } | {
                heading: string;
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
                hint?: undefined;
            } | {
                heading: string;
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
                href?: undefined;
                hint?: undefined;
            })[];
        };
    };
    "with headings and status text as strings": {
        context: {
            idPrefix: string;
            items: {
                heading: string;
                href: string;
                status: string;
            }[];
        };
    };
    "with empty items": {
        context: {
            idPrefix: string;
            items: (boolean | {
                heading: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        border: boolean;
                        colour: boolean;
                        classes: string;
                    };
                };
            } | {
                heading: {
                    text: string;
                };
                href: string;
                status: {
                    tag: {
                        text: string;
                        colour: string;
                        border?: undefined;
                        classes?: undefined;
                    };
                };
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map