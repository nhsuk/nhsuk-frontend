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
            id: string;
        };
        screenshot: true;
    };
    'with values': {
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
            id: string;
            values: {
                day: string;
                month: string;
                year: string;
            };
        };
    };
    'day and month': {
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
            id: string;
            items: {
                name: string;
                classes: string;
            }[];
        };
    };
    'day and month (empty item)': {
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
            id: string;
            items: (boolean | {
                name: string;
                classes: string;
            })[];
        };
    };
    'month and year': {
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
            id: string;
            items: {
                name: string;
                classes: string;
            }[];
        };
    };
    'month and year (empty item)': {
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
            id: string;
            items: (boolean | {
                name: string;
                classes: string;
            })[];
        };
    };
    'month and year with values': {
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
            id: string;
            values: {
                month: string;
                year: string;
            };
            items: {
                name: string;
                classes: string;
            }[];
        };
    };
    legend: {
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
            id: string;
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
                };
            };
            hint: {
                text: string;
            };
            id: string;
        };
    };
    'with autocomplete values': {
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
            id: string;
            items: {
                name: string;
                classes: string;
                autocomplete: string;
            }[];
        };
    };
    'with custom name prefix': {
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
            id: string;
            namePrefix: string;
        };
    };
    'with errors only': {
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
            id: string;
            items: {
                name: string;
                classes: string;
            }[];
        };
    };
    'with errors and hint': {
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
            id: string;
            items: {
                name: string;
                classes: string;
            }[];
        };
        screenshot: true;
    };
    'with error on day input': {
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
            id: string;
            items: ({
                name: string;
                classes: string;
                value?: undefined;
            } | {
                name: string;
                value: string;
                classes: string;
            })[];
        };
    };
    'with error on month input': {
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
            id: string;
            items: ({
                name: string;
                classes: string;
                value: string;
            } | {
                name: string;
                classes: string;
                value?: undefined;
            })[];
        };
    };
    'with error on year input': {
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
            id: string;
            items: ({
                name: string;
                classes: string;
                value: string;
            } | {
                name: string;
                classes: string;
                value?: undefined;
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map