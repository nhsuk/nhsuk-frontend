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
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with anchor in panel": {
        context: {
            items: {
                label: string;
                id: string;
                panel: {
                    html: string;
                };
            }[];
        };
    };
    "with visually hidden text": {
        context: {
            visuallyHiddenText: string;
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
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map