/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    context: {
        fieldset: {
            legend: {
                size: string;
                isPageHeading: boolean;
            };
        };
        classes?: undefined;
    };
    description?: undefined;
} | {
    description: string;
    context: {
        classes: string;
        fieldset: {
            legend: {
                size: string;
                isPageHeading: boolean;
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
                    text: string;
                };
            };
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with hint': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                };
            };
            hint: {
                html: string;
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    inline: {
        context: {
            classes: string;
            fieldset: {
                legend: {
                    text: string;
                };
            };
            idPrefix: string;
            name: string;
            value: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
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
                };
            };
            idPrefix: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: {
            description: string;
            context: {
                fieldset: {
                    legend: {
                        size: string;
                    };
                };
            };
        }[];
    };
    'without page heading': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    isPageHeading: boolean;
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with pre-checked value': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            value: string;
            items: {
                value: string;
                text: string;
                conditional: {
                    html: string;
                };
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with divider': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                };
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with hints on items': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'without fieldset': {
        context: {
            fieldset: null;
            id: string;
            name: string;
            items: {
                value: string;
                text: string;
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with disabled item': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
                disabled: boolean;
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with error message': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with hint and error': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
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
    'with long text': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with conditional content': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
                conditional: {
                    html: string;
                };
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with conditional content, special characters': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
                conditional: {
                    html: string;
                };
            }[];
        };
        options: {
            hidden: true;
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with conditional content, error message': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
                conditional: {
                    html: string;
                };
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
    'with conditional content, error message (nested)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            value: string;
            items: {
                value: string;
                text: string;
                conditional: {
                    html: string;
                };
            }[];
        };
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
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
    'with nested conditional radios': {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
        variants: ({
            context: {
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
                classes?: undefined;
            };
            description?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
                fieldset: {
                    legend: {
                        size: string;
                        isPageHeading: boolean;
                    };
                };
            };
        })[];
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map