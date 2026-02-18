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
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
        };
    };
    'with hint': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            id: string;
            name: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
    };
    'with error message': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
        };
    };
    'with hint and error': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
    };
    'without page heading': {
        context: {
            label: {
                text: string;
            };
            id: string;
            name: string;
        };
    };
    'with width class': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            classes: string;
        };
    };
    'with autocomplete attribute': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            autocomplete: string;
        };
    };
    'with translations': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            showPasswordText: string;
            hidePasswordText: string;
            showPasswordAriaLabelText: string;
            hidePasswordAriaLabelText: string;
            passwordShownAnnouncementText: string;
            passwordHiddenAnnouncementText: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map