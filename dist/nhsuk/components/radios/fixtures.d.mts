/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    description?: undefined;
    context?: undefined;
} | {
    description: string;
    context: {
        small: boolean;
        fieldset: {
            legend: {
                size: string;
            };
        };
    };
})[];
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
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    disabled: {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            disabled: boolean;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "disabled input": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
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
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "disabled with enabled input": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            disabled: boolean;
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
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with hint": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    inline: {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            inline: boolean;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    legend: {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description: string;
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        id?: undefined;
                    };
                };
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                fieldset: {
                    legend: {
                        id: string;
                        size?: undefined;
                    };
                };
            };
            options: {
                hidden: true;
            };
        })[];
    };
    "without heading": {
        context: {
            fieldset: {
                legend: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
    };
    "with pre-checked value": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            value: string;
            items: object[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with divider": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                html: string;
            };
            idPrefix: string;
            name: string;
            items: ({
                value: string;
                text: string;
                divider?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
            })[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with hints on items": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
                hint: {
                    text: string;
                };
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "without fieldset": {
        context: {
            fieldset: null;
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with error only": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            errorMessage: boolean;
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
    };
    "with error message": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            errorMessage: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with error message and hint": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with error message and hint as strings": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: string;
            errorMessage: string;
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with error message, without heading": {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: null;
                };
            };
            errorMessage: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with error message and hint, without heading": {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: null;
                };
            };
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with long text": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with conditional content": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: object[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with conditional content, special characters": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: object[];
        };
        options: {
            hidden: true;
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with conditional content, error message": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: object[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
    };
    "with conditional content, error message (nested)": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            value: string;
            items: object[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
        } | {
            description: string;
            context: {
                small: boolean;
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        })[];
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with nested conditional radios": {
        context: {
            fieldset: {
                legend: {
                    heading: string;
                    size: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            items: ({
                value: string;
                text: string;
                conditional?: undefined;
            } | {
                value: string;
                text: string;
                conditional: {
                    html: string;
                };
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map