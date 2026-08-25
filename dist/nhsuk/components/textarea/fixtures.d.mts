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
            hint: {
                text: string;
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
            hint: {
                text: string;
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
                text: string;
            };
            id: string;
            name: string;
        };
    };
    label: {
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
            hint: string;
            id: string;
            name: string;
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
        screenshot: {
            states: "focus"[];
            selector: string;
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
                text: string;
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
                text: string;
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
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map