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
    "with heading as string": {
        context: {
            heading: string;
            text: string;
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
    heading: {
        context: {
            heading: {
                text: string;
                size: string;
            };
            text: string;
        };
        variants: ({
            description: string;
            context: {
                heading: {
                    size: string;
                    id?: undefined;
                };
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                heading: {
                    id: string;
                    size?: undefined;
                };
            };
            options: {
                hidden: true;
            };
        })[];
    };
    "with heading classes": {
        context: {
            heading: {
                text: string;
                classes: string;
            };
            text: string;
        };
    };
    "with heading level 1": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            text: string;
        };
    };
    "with heading level 2": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            text: string;
        };
    };
    "with heading level 3": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            text: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map