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
            placeholder: string;
            hint: {
                text: string;
            };
            name: string;
            width: number;
        };
    };
    disabled: {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            placeholder: string;
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
            placeholder: string;
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
            placeholder: string;
            name: string;
            button: {
                disabled: boolean;
            };
        };
    };
    large: {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            name: string;
            large: boolean;
            width: number;
        };
        screenshot: true;
    };
    'large with brand button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                variant: string;
            };
            name: string;
            large: boolean;
            width: number;
        };
    };
    'with alternative icon': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                icon: string;
            };
            name: string;
            width: number;
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
            width: number;
        };
        screenshot: true;
    };
    'with hint and value': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            name: string;
            value: string;
            width: number;
        };
        screenshot: true;
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
            name: string;
            value: string;
            width: number;
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
            name: string;
            value: string;
            width: number;
        };
        screenshot: true;
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
                icon: string;
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
                icon: string;
                variant: string;
            };
        };
    };
    'with hidden label': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            name: string;
            width: number;
        };
    };
    'with brand button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    'with brand button text': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    'with brand button text only': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                icon: boolean;
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    'with secondary button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                variant: string;
            };
            name: string;
            width: number;
        };
        screenshot: true;
    };
    'with secondary button text': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    'with secondary button text only': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: {
                icon: boolean;
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    'without button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            button: boolean;
            name: string;
            width: number;
        };
    };
    'without page heading': {
        context: {
            label: {
                text: string;
            };
            name: string;
            width: number;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map