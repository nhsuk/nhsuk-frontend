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
            src: string;
            caption: {
                text: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    width: {
        context: {
            src: string;
            alt: string;
        };
        variants: {
            description: string;
            context: {
                width: string;
            };
        }[];
    };
    "with srcset": {
        context: {
            src: string;
            sizes: string;
            srcset: string;
            caption: string;
        };
    };
    "with srcset and alt text": {
        context: {
            src: string;
            sizes: string;
            srcset: string;
            alt: string;
            caption: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "without caption": {
        context: {
            src: string;
            alt: string;
        };
    };
    "without background": {
        context: {
            background: boolean;
            src: string;
            caption: string;
        };
    };
    "without border": {
        context: {
            border: boolean;
            src: string;
            caption: string;
        };
        options: {
            layout: string;
        };
    };
    "without background, border or caption": {
        context: {
            background: boolean;
            border: boolean;
            src: string;
            alt: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with custom HTML": {
        context: {
            caption: string;
        };
        callBlock: string;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map