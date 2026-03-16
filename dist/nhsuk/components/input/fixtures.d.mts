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
        screenshot: true;
    };
    'with hint': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                html: string;
            };
            id: string;
            name: string;
            classes: string;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: true;
    };
    'with button': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            classes: string;
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
    'with button and error message': {
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
            classes: string;
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
            classes: string;
            inputmode: string;
            spellcheck: boolean;
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
                html: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            classes: string;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
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
                classes: string;
            };
        }[];
    };
    label: {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            classes: string;
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
    'without page heading': {
        context: {
            label: {
                text: string;
            };
            id: string;
            name: string;
            classes: string;
            inputmode: string;
            spellcheck: boolean;
        };
    };
    'with code input styling': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                html: string;
            };
            id: string;
            name: string;
            classes: string;
            value: string;
            inputmode: string;
            spellcheck: boolean;
        };
        screenshot: true;
    };
    'with prefix': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            prefix: {
                text: string;
            };
            classes: string;
        };
        screenshot: true;
    };
    'with prefix HTML': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            prefix: {
                html: string;
            };
            classes: string;
        };
    };
    'with deprecated prefix string parameter': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            prefix: string;
            classes: string;
        };
    };
    'with suffix': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            suffix: {
                text: string;
            };
            classes: string;
        };
        screenshot: true;
    };
    'with suffix HTML': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            suffix: {
                html: string;
            };
            classes: string;
        };
    };
    'with deprecated suffix string parameter': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            suffix: string;
            classes: string;
        };
    };
    'with prefix and suffix': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            prefix: {
                text: string;
            };
            suffix: {
                text: string;
            };
            classes: string;
        };
        screenshot: true;
    };
    'with prefix and suffix and error': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
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
            classes: string;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
        };
    };
    'with autocomplete attribute': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
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
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map