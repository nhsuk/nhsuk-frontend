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
            text: string;
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with image': {
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
    'with image, content': {
        context: {
            heading: string;
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
    'with html content': {
        context: {
            heading: string;
            headingSize: string;
            headingClasses: string;
            html: string;
        };
        options: {
            width: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map