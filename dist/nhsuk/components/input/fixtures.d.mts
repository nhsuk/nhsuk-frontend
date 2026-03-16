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
            width: number;
            code: boolean;
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
            width: number;
            code: boolean;
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
    'width class': {
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
    'width class overriding width param': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
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
                text: string;
                size: string;
                isPageHeading: boolean;
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
    'without page heading': {
        context: {
            label: {
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
            width: number;
            code: boolean;
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
            width: number;
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
            width: number;
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
            width: number;
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
            width: number;
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
            width: number;
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
            width: number;
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
            width: number;
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
            width: number;
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