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
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            hint: {
                text: string;
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
        screenshot: true;
    };
    'disabled input': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'disabled with enabled input': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            hint: {
                text: string;
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
    'with hint': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
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
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'with pre-checked values': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            values: string[];
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
    'with hints on items': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
                hint?: undefined;
            } | {
                value: string;
                text: string;
                hint: {
                    text: string;
                };
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
    'without fieldset': {
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
    };
    'with error message': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with error message and hint': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'with long text': {
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
    legend: {
        context: {
            fieldset: {
                legend: {
                    text: string;
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
    'with conditional content': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'with conditional content, special characters': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'with conditional content, error message': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
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
    'with conditional content, error message (nested)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            hint: {
                text: string;
            };
            idPrefix: string;
            name: string;
            values: string[];
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
    'with "all" option': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    classes: string;
                    isPageHeading: boolean;
                };
            };
            idPrefix: string;
            name: string;
            items: ({
                value: string;
                text: string;
                behaviour: string;
                divider?: undefined;
            } | {
                divider: string;
                behaviour: string;
                value?: undefined;
                text?: undefined;
            } | {
                value: string;
                text: string;
                behaviour?: undefined;
                divider?: undefined;
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
    'with "all" option (named group)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    classes: string;
                    isPageHeading: boolean;
                };
            };
            idPrefix: string;
            name: string;
            items: ({
                value: string;
                text: string;
                behaviour: string;
                behaviourGroup: string;
                divider?: undefined;
            } | {
                divider: string;
                behaviour: string;
                value?: undefined;
                text?: undefined;
                behaviourGroup?: undefined;
            } | {
                value: string;
                text: string;
                behaviourGroup: string;
                behaviour?: undefined;
                divider?: undefined;
            })[];
        };
        options: {
            hidden: true;
        };
    };
    'with "all" option (named group, unique)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    classes: string;
                    isPageHeading: boolean;
                };
            };
            idPrefix: string;
            items: ({
                name: string;
                value: string;
                text: string;
                behaviour: string;
                behaviourGroup: string;
                divider?: undefined;
            } | {
                divider: string;
                behaviour: string;
                name?: undefined;
                value?: undefined;
                text?: undefined;
                behaviourGroup?: undefined;
            } | {
                name: string;
                value: string;
                text: string;
                behaviourGroup: string;
                behaviour?: undefined;
                divider?: undefined;
            })[];
        };
        options: {
            hidden: true;
        };
    };
    'with "none" option': {
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
                divider?: undefined;
                behaviour?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
                behaviour?: undefined;
            } | {
                value: string;
                text: string;
                behaviour: string;
                divider?: undefined;
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
    'with "none" option, deprecated': {
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
    };
    'with "none" option, conditional content': {
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
    'with "none" option (named group)': {
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
                behaviour?: undefined;
            } | {
                divider: string;
                value?: undefined;
                text?: undefined;
                exclusiveGroup?: undefined;
                behaviour?: undefined;
            } | {
                value: string;
                text: string;
                behaviour: string;
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
    'with "none" option (named group, unique)': {
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
                name: string;
                value: string;
                text: string;
                exclusiveGroup: string;
                divider?: undefined;
                behaviour?: undefined;
            } | {
                divider: string;
                name?: undefined;
                value?: undefined;
                text?: undefined;
                exclusiveGroup?: undefined;
                behaviour?: undefined;
            } | {
                name: string;
                value: string;
                text: string;
                behaviour: string;
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