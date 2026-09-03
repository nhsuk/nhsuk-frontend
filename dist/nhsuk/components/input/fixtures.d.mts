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
        screenshot: true;
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
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: true;
    };
    "with button": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
            formGroup: {
                afterInput: {
                    html: string;
                };
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
    };
    "with button and error message": {
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
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
            formGroup: {
                afterInput: {
                    html: string;
                };
            };
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
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
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
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
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
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
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
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
    };
    "with error message, without heading": {
        context: {
            label: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
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
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
    };
    width: {
        context: {
            name: string;
            id: string;
        };
        variants: {
            description: string;
            context: {
                label: {
                    text: string;
                };
                width: number;
            };
        }[];
    };
    "width class": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            classes: string;
        };
    };
    "width class overriding width option": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            classes: string;
            width: number;
        };
    };
    label: {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
        variants: ({
            description: string;
            context: {
                label: {
                    size: string;
                    id?: undefined;
                };
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                label: {
                    id: string;
                    size?: undefined;
                };
            };
            options: {
                hidden: true;
            };
        })[];
    };
    "without heading": {
        context: {
            label: string;
            id: string;
            name: string;
            width: number;
            code: boolean;
            inputmode: string;
            spellcheck: boolean;
        };
    };
    "with code input styling": {
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
            code: boolean;
            value: string;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: true;
    };
    "with prefix": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            prefix: {
                text: string;
            };
            width: number;
        };
        screenshot: true;
    };
    "with prefix HTML": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            prefix: {
                html: string;
            };
            width: number;
        };
    };
    "with prefix as string": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            prefix: string;
            width: number;
        };
    };
    "with suffix": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            suffix: {
                text: string;
            };
            width: number;
        };
        screenshot: true;
    };
    "with suffix HTML": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            suffix: {
                html: string;
            };
            width: number;
        };
    };
    "with suffix as string": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            suffix: string;
            width: number;
        };
    };
    "with prefix and suffix": {
        context: {
            label: {
                heading: string;
            };
            id: string;
            name: string;
            prefix: {
                text: string;
            };
            suffix: {
                text: string;
            };
            width: number;
        };
        screenshot: true;
    };
    "with prefix and suffix and error message": {
        context: {
            label: {
                heading: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            prefix: {
                text: string;
            };
            suffix: {
                text: string;
            };
            width: number;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
        };
    };
    "with autocomplete attribute": {
        context: {
            label: {
                heading: string;
            };
            hint: {
                text: string;
            };
            id: string;
            name: string;
            autocomplete: string;
        };
        screenshot: true;
    };
    "example email address": {
        context: {
            label: {
                text: string;
            };
            name: string;
            classes: string;
            spellcheck: boolean;
        };
        options: {
            hidden: true;
        };
    };
    "example phone number": {
        context: {
            label: {
                text: string;
            };
            type: string;
            name: string;
            classes: string;
        };
        options: {
            hidden: true;
        };
    };
    "example phone number with error message": {
        context: {
            label: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            type: string;
            name: string;
            classes: string;
        };
        options: {
            hidden: true;
        };
    };
    "example mobile phone number": {
        context: {
            label: {
                text: string;
            };
            type: string;
            name: string;
            classes: string;
        };
        options: {
            hidden: true;
        };
    };
    "example address line 1": {
        context: {
            label: {
                text: string;
            };
            name: string;
            autocomplete: string;
        };
        options: {
            hidden: true;
        };
    };
    "example address line 2": {
        context: {
            label: {
                text: string;
            };
            name: string;
            autocomplete: string;
        };
        options: {
            hidden: true;
        };
    };
    "example address town or city": {
        context: {
            label: {
                text: string;
            };
            name: string;
            autocomplete: string;
            classes: string;
        };
        options: {
            hidden: true;
        };
    };
    "example address postcode": {
        context: {
            label: {
                text: string;
            };
            name: string;
            autocomplete: string;
            width: number;
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map