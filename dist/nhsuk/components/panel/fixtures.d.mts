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
            text: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with HTML": {
        context: {
            heading: {
                text: string;
            };
            html: string;
        };
    };
    "with HTML via call block": {
        context: {
            heading: {
                text: string;
            };
        };
        callBlock: string;
    };
    interruption: {
        context: {
            heading: {
                text: string;
                size: string;
            };
            variant: string;
            html: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "interruption for confirmation to cancel": {
        context: {
            heading: {
                text: string;
                size: string;
            };
            variant: string;
            html: string;
        };
    };
    "interruption for confirmation to continue": {
        context: {
            heading: {
                text: string;
                size: string;
            };
            variant: string;
            html: string;
        };
    };
    title: {
        context: {
            heading: {
                text: string;
                size: string;
            };
            text: string;
        };
        variants: {
            description: string;
            context: {
                heading: {
                    size: string;
                };
            };
        }[];
    };
    "with title classes and heading level": {
        context: {
            heading: {
                text: string;
                level: number;
                classes: string;
            };
            text: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map