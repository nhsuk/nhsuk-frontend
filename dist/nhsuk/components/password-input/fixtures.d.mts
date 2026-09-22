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
                heading: string;
                size: string;
            };
            name: string;
        };
    };
    disabled: {
        context: {
            label: {
                heading: string;
                size: string;
            };
            name: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    "disabled with enabled button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            name: string;
            disabled: boolean;
            button: {
                disabled: boolean;
            };
        };
    };
    "disabled button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            name: string;
            button: {
                disabled: boolean;
            };
        };
    };
    "with button double click prevented": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            name: string;
            button: {
                preventDoubleClick: boolean;
            };
        };
    };
    "with button double click not prevented": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            name: string;
            button: {
                preventDoubleClick: boolean;
            };
        };
    };
    "with hint": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with error only": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            errorMessage: boolean;
            id: string;
            name: string;
        };
    };
    "with error message": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
        };
    };
    "with error message and hint": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with error message and hint as strings": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: string;
            errorMessage: string;
            id: string;
            name: string;
        };
    };
    "with error message, without heading": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
        };
    };
    "with error message and hint, without heading": {
        context: {
            label: {
                heading: string;
                size: string;
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
    };
    "with prefix": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with prefix and error message": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "without heading": {
        context: {
            label: string;
            id: string;
            name: string;
        };
    };
    "with width": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            width: number;
        };
    };
    "with autocomplete attribute": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            autocomplete: string;
        };
    };
    "with translations": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            showPasswordText: string;
            hidePasswordText: string;
            showPasswordAriaLabel: string;
            hidePasswordAriaLabel: string;
            passwordShownAnnouncementText: string;
            passwordHiddenAnnouncementText: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map