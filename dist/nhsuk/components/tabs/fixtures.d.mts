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
            items: {
                label: string;
                panel: {
                    html: string;
                };
            }[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with anchor in panel": {
        context: {
            idPrefix: string;
            items: {
                label: string;
                panel: {
                    html: string;
                };
            }[];
        };
    };
    "with id attribute": {
        context: {
            id: string;
            items: {
                label: string;
                panel: {
                    html: string;
                };
            }[];
        };
        options: {
            width: "full";
        };
    };
    "with id attribute on panels": {
        context: {
            items: {
                label: string;
                id: string;
                panel: {
                    html: string;
                };
            }[];
        };
        options: {
            width: "full";
        };
    };
    "with visually hidden text": {
        context: {
            idPrefix: string;
            visuallyHiddenText: string;
            items: {
                label: string;
                panel: {
                    html: string;
                };
            }[];
        };
        options: {
            width: "full";
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map