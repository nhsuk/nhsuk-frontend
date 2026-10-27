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
        options: {
            layout: string;
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    heading: {
        context: {
            heading: {
                text: string;
            };
            text: string;
        };
        options: {
            layout: string;
            width: false;
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
    "with heading as string": {
        context: {
            heading: string;
            text: string;
        };
        options: {
            layout: string;
            width: false;
        };
    };
    "with heading and caption": {
        context: {
            heading: {
                text: string;
                caption: string;
            };
        };
        options: {
            layout: string;
            width: false;
        };
    };
    "with heading only": {
        context: {
            heading: {
                text: string;
            };
        };
        options: {
            layout: string;
            width: false;
        };
    };
    "with image": {
        context: {
            image: {
                src: string;
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    "with image, content": {
        context: {
            heading: {
                text: string;
            };
            text: string;
            image: {
                src: string;
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    "with image, content and caption": {
        context: {
            heading: {
                text: string;
                size: string;
                caption: {
                    text: string;
                    size: string;
                };
            };
            width: string;
            image: {
                src: string;
            };
        };
        options: {
            width: false;
        };
    };
    "without border": {
        context: {
            heading: {
                text: string;
            };
            text: string;
            border: boolean;
        };
        options: {
            width: false;
        };
    };
    "product page": {
        context: {
            content: ({
                heading: {
                    text: string;
                    size: string;
                };
                html: string;
                image?: undefined;
            } | {
                image: {
                    src: string;
                    background: boolean;
                    border: boolean;
                };
                heading?: undefined;
                html?: undefined;
            })[];
        };
        options: {
            layout: string;
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    "product page with heading as string": {
        context: {
            content: ({
                heading: string;
                html: string;
                image?: undefined;
            } | {
                image: {
                    src: string;
                    background: boolean;
                    border: boolean;
                };
                heading?: undefined;
                html?: undefined;
            })[];
        };
        options: {
            layout: string;
            width: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map