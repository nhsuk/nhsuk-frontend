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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
        };
        screenshot: true;
    };
    "disabled option": {
        context: {
            label: {
                heading: string;
                size: string;
            };
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
    "with divider": {
        context: {
            label: {
                heading: string;
                size: string;
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
            items: {
                value: string;
                text: string;
            }[];
        };
        screenshot: true;
    };
    "with button": {
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
    "with button and error message": {
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
                heading: string;
                size: string;
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
    "without heading": {
        context: {
            label: string;
            id: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
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
            items: {
                value: string;
                text: string;
            }[];
        };
    };
    "with selected value": {
        context: {
            label: {
                heading: string;
                size: string;
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