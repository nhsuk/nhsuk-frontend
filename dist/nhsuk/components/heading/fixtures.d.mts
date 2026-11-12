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
    "text escaping": {
        context: {
            text: string;
            size: string;
        };
    };
    "text and caption": {
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
    "size class": {
        context: {
            text: string;
            classes: string;
        };
    };
    "size class overriding size option": {
        context: {
            text: string;
            classes: string;
            size: string;
        };
    };
    "with HTML": {
        context: {
            html: string;
            size: string;
        };
    };
    "with HTML and caption": {
        context: {
            html: string;
            caption: string;
            size: string;
        };
    };
    "with HTML via call block": {
        context: {
            size: string;
        };
        callBlock: string;
    };
    'with HTML via call block and caption "start"': {
        context: {
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        callBlock: string;
    };
    'with HTML via call block and caption "end"': {
        context: {
            caption: {
                text: string;
                placement: string;
            };
            size: string;
        };
        callBlock: string;
    };
    "with link": {
        context: {
            text: string;
            href: string;
            size: string;
        };
    };
    "with link and caption": {
        context: {
            href: string;
            text: string;
            caption: string;
            size: string;
        };
    };
    "with link opens in a new tab": {
        context: {
            href: string;
            text: string;
            openInNewTab: boolean;
            size: string;
        };
    };
    "with visually hidden text": {
        context: {
            text: string;
            visuallyHiddenText: string;
            size: string;
        };
    };
    "with visually hidden text and caption": {
        context: {
            text: string;
            visuallyHiddenText: string;
            caption: string;
            size: string;
        };
    };
    "with custom class and size": {
        context: {
            text: string;
            className: string;
            size: string;
        };
    };
    "with custom class and size as modifier": {
        context: {
            text: string;
            className: string;
            classPrefix: string;
            size: string;
        };
    };
    "without class": {
        context: {
            text: string;
            className: boolean;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map