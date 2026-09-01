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
            heading: string;
            size: string;
        };
        screenshot: true;
    };
    text: {
        context: {
            heading: string;
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
            heading: string;
            classes: string;
        };
    };
    "size class overriding size option": {
        context: {
            heading: string;
            classes: string;
            size: string;
        };
    };
    "with HTML": {
        context: {
            html: string;
            heading: boolean;
            size: string;
        };
    };
    "with HTML via call block": {
        context: {
            heading: boolean;
            size: string;
        };
        callBlock: string;
    };
    "with HTML via call block, without heading": {
        context: {
            size: string;
        };
        callBlock: string;
    };
    "with heading level 1": {
        context: {
            text: string;
            size: string;
            heading: {
                level: number;
            };
        };
    };
    "with heading level 2": {
        context: {
            text: string;
            size: string;
            heading: {
                level: number;
            };
        };
    };
    "with heading level 3": {
        context: {
            text: string;
            size: string;
            heading: {
                level: number;
            };
        };
    };
    "with heading options only": {
        context: {
            heading: {
                text: string;
                level: number;
                size: string;
            };
        };
    };
    "without heading": {
        context: {
            text: string;
        };
    };
    "with deprecated page heading": {
        context: {
            text: string;
            size: string;
            isPageHeading: boolean;
        };
    };
    "with deprecated page heading overriding heading": {
        context: {
            heading: {
                text: string;
                level: number;
                size: string;
            };
            isPageHeading: boolean;
        };
    };
    "with id attribute": {
        context: {
            id: string;
            heading: string;
            size: string;
        };
    };
    "with id attribute on heading": {
        context: {
            heading: {
                text: string;
                id: string;
            };
            size: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map