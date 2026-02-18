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
            meta: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with copyright text only': {
        context: {};
        options: {
            width: false;
        };
    };
    'with custom copyright text': {
        context: {
            copyright: {
                text: string;
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with meta (links only)': {
        context: {
            meta: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with meta (links and text)': {
        context: {
            copyright: {
                text: string;
            };
            meta: {
                text: string;
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with meta (links and HTML)': {
        context: {
            copyright: {
                text: string;
            };
            meta: {
                html: string;
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
    };
    'with single navigation group': {
        context: {
            navigation: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with single navigation group (empty items)': {
        context: {
            navigation: {
                items: (boolean | {
                    href: string;
                    text: string;
                })[];
            };
        };
        options: {
            width: false;
        };
    };
    'with multiple navigation groups': {
        context: {
            copyright: {
                text: string;
            };
            navigation: {
                items: {
                    href: string;
                    text: string;
                }[];
            }[];
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with multiple navigation groups and custom HTML': {
        context: {
            copyright: {
                text: string;
            };
            columns: number;
            navigation: ({
                width: string;
                items: {
                    href: string;
                    text: string;
                }[];
                html?: undefined;
            } | {
                width: string;
                html: string;
                items?: undefined;
            })[];
        };
        options: {
            width: false;
        };
    };
    'with multiple titled navigation groups': {
        context: {
            navigation: {
                title: string;
                items: {
                    href: string;
                    text: string;
                }[];
            }[];
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with meta and navigation': {
        context: {
            copyright: {
                text: string;
            };
            navigation: {
                items: {
                    href: string;
                    text: string;
                }[];
            }[];
            meta: {
                html: string;
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map