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
            hint: {
                text: string;
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
    'with pre-checked values': {
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
            values: string[];
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
    'with hints on items': {
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
                hint: {
                    text: string;
                };
            } | {
                value: string;
                text: string;
                hint?: undefined;
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
    'without fieldset': {
        context: {
            fieldset: null;
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
    'with disabled item': {
        context: {
            fieldset: null;
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
            viewports: "mobile"[];
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
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
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
    legend: {
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
            values: string[];
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
    'with "none of the above" option': {
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
                exclusive?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
                exclusive?: undefined;
            } | {
                value: string;
                text: string;
                exclusive: boolean;
                divider?: undefined;
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
    'with "none of the above" option, conditional content': {
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
                conditional: {
                    html: string;
                };
                divider?: undefined;
                exclusive?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
                conditional?: undefined;
                exclusive?: undefined;
            } | {
                value: string;
                text: string;
                exclusive: boolean;
                conditional?: undefined;
                divider?: undefined;
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
    'with "none of the above" option (named group)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            idPrefix: string;
            name: string;
            items: ({
                value: string;
                text: string;
                exclusiveGroup: string;
                divider?: undefined;
                exclusive?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
                exclusiveGroup?: undefined;
                exclusive?: undefined;
            } | {
                value: string;
                text: string;
                exclusive: boolean;
                exclusiveGroup: string;
                divider?: undefined;
            })[];
        };
        options: {
            hidden: true;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with "none of the above" option (named group, unique)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            idPrefix: string;
            items: ({
                name: string;
                value: string;
                text: string;
                exclusiveGroup: string;
                divider?: undefined;
                exclusive?: undefined;
            } | {
                divider: string;
                name?: undefined;
                value?: undefined;
                text?: undefined;
                exclusiveGroup?: undefined;
                exclusive?: undefined;
            } | {
                name: string;
                value: string;
                text: string;
                exclusive: boolean;
                exclusiveGroup: string;
                divider?: undefined;
            })[];
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map