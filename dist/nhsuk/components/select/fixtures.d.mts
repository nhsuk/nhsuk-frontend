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
                isPageHeading: boolean;
            };
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        screenshot: true;
    };
    'with divider': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            name: string;
            items: ({
                value: string;
                text: string;
                divider?: undefined;
            } | {
                divider: boolean;
                value?: undefined;
                text?: undefined;
            })[];
        };
    };
    'with disabled item': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            items: ({
                value: string;
                text: string;
                disabled?: undefined;
            } | {
                value: string;
                text: string;
                disabled: boolean;
            })[];
        };
    };
    'with hint': {
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
            items: {
                value: string;
                text: string;
            }[];
        };
        screenshot: true;
    };
    'with button': {
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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
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
    label: {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
        };
    };
    'with error message': {
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
            items: {
                value: string;
                text: string;
            }[];
        };
    };
    'with hint and error': {
        context: {
            label: {
                text: string;
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
            items: {
                value: string;
                text: string;
            }[];
        };
        screenshot: {
            states: "focus"[];
            selector: string;
        };
    };
    'with selected value': {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            value: string;
            items: {
                value: string;
                text: string;
            }[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map