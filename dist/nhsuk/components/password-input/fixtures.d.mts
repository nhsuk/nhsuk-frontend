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
    disabled: {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    'disabled with enabled button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            disabled: boolean;
            button: {
                disabled: boolean;
            };
        };
    };
    'disabled button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            button: {
                disabled: boolean;
            };
        };
    };
    'with button double click prevented': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            button: {
                preventDoubleClick: boolean;
            };
        };
    };
    'with button double click not prevented': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            button: {
                preventDoubleClick: boolean;
            };
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
    'with error message and hint': {
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
    'with prefix': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            prefix: {
                text: string;
            };
            id: string;
            name: string;
            value: string;
            width: number;
            code: boolean;
            button: {
                variant: string;
            };
        };
    };
    'with prefix and error message': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            prefix: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            width: number;
            code: boolean;
            button: {
                variant: string;
            };
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
    'with width': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            width: number;
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