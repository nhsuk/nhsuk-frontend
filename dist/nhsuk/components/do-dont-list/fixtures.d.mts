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
            heading: {
                text: string;
            };
            icon: string;
            items: {
                text: string;
            }[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with heading as string": {
        context: {
            heading: string;
            icon: string;
            items: {
                text: string;
            }[];
        };
    };
    "with heading level 1": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            icon: string;
            items: {
                text: string;
            }[];
        };
    };
    "with heading level 2": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            icon: string;
            items: {
                text: string;
            }[];
        };
    };
    "(do) with empty items": {
        context: {
            heading: {
                text: string;
            };
            icon: string;
            items: (boolean | {
                text: string;
            })[];
        };
    };
    "(do) with deprecated options": {
        context: {
            title: string;
            icon: string;
            items: {
                item: string;
            }[];
        };
    };
    "(do) with custom prefix": {
        context: {
            heading: {
                text: string;
            };
            icon: string;
            prefixText: string;
            items: {
                text: string;
            }[];
        };
    };
    "(don't)": {
        context: {
            heading: {
                text: string;
            };
            icon: string;
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
            heading: {
                text: string;
            };
            icon: string;
            items: (boolean | {
                text: string;
            })[];
        };
    };
    "(don't) with deprecated options": {
        context: {
            title: string;
            icon: string;
            items: {
                item: string;
            }[];
        };
    };
    "(don't) with custom prefix": {
        context: {
            heading: {
                text: string;
            };
            icon: string;
            prefixText: string;
            items: {
                text: string;
            }[];
        };
    };
    "(don't) with hidden prefix": {
        context: {
            heading: {
                text: string;
            };
            icon: string;
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