/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: {
    description: string;
    context: {
        size: string;
    };
}[];
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
            text: string;
            size: string;
        };
        screenshot: {
            viewports: "tablet"[];
        };
    };
    text: {
        context: {
            text: string;
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'text and caption': {
        context: {
            text: string;
            caption: string;
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
    };
    'text and caption "before"': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'text and caption "before" as a heading': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
                element: string;
            };
            size: string;
        };
    };
    'text and caption "after"': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'text and caption "after" as a paragraph': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
                element: string;
            };
            size: string;
        };
    };
    'text and caption "start"': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'text and caption "end"': {
        context: {
            text: string;
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        variants: {
            description: string;
            context: {
                size: string;
            };
        }[];
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'size class': {
        context: {
            text: string;
            classes: string;
        };
    };
    'size class overriding size param': {
        context: {
            text: string;
            classes: string;
            size: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map