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
            placeholder: string;
            hint: {
                html: string;
            };
            name: string;
            width: number;
        };
    };
    disabled: {
        context: {
            label: {
                heading: string;
                size: string;
            };
            placeholder: string;
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
            placeholder: string;
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
                heading: string;
                size: string;
            };
            name: string;
            large: boolean;
            width: number;
        };
        screenshot: true;
    };
    "large with brand button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                variant: string;
            };
            name: string;
            large: boolean;
            width: number;
        };
    };
    "with alternative icon": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                icon: string;
            };
            name: string;
            width: number;
        };
    };
    "with hint": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: {
                html: string;
            };
            id: string;
            name: string;
            width: number;
        };
        screenshot: true;
    };
    "with hint and value": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: {
                html: string;
            };
            name: string;
            value: string;
            width: number;
        };
        screenshot: true;
    };
    "with error only": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            errorMessage: boolean;
            name: string;
            value: string;
            width: number;
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
            name: string;
            value: string;
            width: number;
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
            name: string;
            value: string;
            width: number;
        };
    };
    "with error message and hint": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: {
                html: string;
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
    "with error message, without heading": {
        context: {
            label: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            name: string;
            value: string;
            width: number;
        };
    };
    "with error message and hint, without heading": {
        context: {
            label: {
                text: string;
            };
            hint: {
                html: string;
            };
            errorMessage: {
                text: string;
            };
            name: string;
            value: string;
            width: number;
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
                icon: string;
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
                icon: string;
                variant: string;
            };
        };
    };
    "with hidden label": {
        context: {
            label: {
                text: string;
                classes: string;
            };
            name: string;
            width: number;
        };
    };
    "with brand button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    "with brand button text": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    "with brand button text only": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with secondary button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                variant: string;
            };
            name: string;
            width: number;
        };
        screenshot: true;
    };
    "with secondary button text": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: {
                text: string;
                variant: string;
            };
            name: string;
            width: number;
        };
    };
    "with secondary button text only": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "without button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            button: boolean;
            name: string;
            width: number;
        };
    };
    "without heading": {
        context: {
            label: string;
            name: string;
            width: number;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map