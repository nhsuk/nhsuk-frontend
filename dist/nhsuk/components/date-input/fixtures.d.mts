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
            id: string;
            disabled: boolean;
        };
        screenshot: true;
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
            id: string;
            disabled: boolean;
            year: {
                disabled: boolean;
            };
        };
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
            id: string;
            year: {
                disabled: boolean;
            };
        };
    };
    'disabled input (using items)': {
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
            items: ({
                name: string;
                width: number;
                disabled?: undefined;
            } | {
                name: string;
                width: number;
                disabled: boolean;
            })[];
        };
    };
    'with translations': {
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
            day: {
                label: {
                    text: string;
                };
            };
            month: {
                label: {
                    text: string;
                };
            };
            year: {
                label: {
                    text: string;
                };
            };
        };
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
            year: boolean;
        };
    };
    'day and month (using items)': {
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
                width: number;
            }[];
        };
    };
    'day and month (with empty item)': {
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
                width: number;
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
            day: boolean;
        };
    };
    'month and year (using items)': {
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
                width: number;
            }[];
        };
    };
    'month and year (with empty item)': {
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
                width: number;
            })[];
        };
    };
    'month and year with fields': {
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
            day: boolean;
            month: {
                value: string;
            };
            year: {
                value: string;
            };
        };
    };
    'month and year with fields overriding values': {
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
            day: boolean;
            month: {
                value: string;
            };
            year: {
                value: string;
            };
            values: {
                month: string;
                year: string;
            };
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
            day: boolean;
            values: {
                month: string;
                year: string;
            };
        };
    };
    legend: {
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
            day: {
                autocomplete: string;
            };
            month: {
                autocomplete: string;
            };
            year: {
                autocomplete: string;
            };
        };
    };
    'with autocomplete values (using items)': {
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
                width: number;
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
            id: string;
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
            id: string;
        };
        screenshot: true;
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
            id: string;
            day: {
                error: boolean;
            };
            month: {
                error: boolean;
            };
            year: {
                error: boolean;
            };
        };
    };
    'with errors only (using items)': {
        context: {
            fieldset: {
                legend: {
                    text: string;
                    size: string;
                    isPageHeading: boolean;
                };
            };
            id: string;
            items: {
                name: string;
                width: number;
                error: boolean;
            }[];
        };
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
            day: {
                error: boolean;
            };
            month: {
                value: string;
            };
            year: {
                value: string;
            };
        };
    };
    'with error on day input (using items)': {
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
                width: number;
                error: boolean;
                value?: undefined;
            } | {
                name: string;
                value: string;
                width: number;
                error?: undefined;
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
                width: number;
                value: string;
                error?: undefined;
            } | {
                name: string;
                width: number;
                error: boolean;
                value?: undefined;
            })[];
        };
    };
    'with error on month input (using items)': {
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
            day: {
                value: string;
            };
            month: {
                error: boolean;
            };
            year: {
                value: string;
            };
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
            day: {
                value: string;
            };
            month: {
                value: string;
            };
            year: {
                error: boolean;
            };
        };
    };
    'with error on year input (using items)': {
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
                width: number;
                value: string;
                error?: undefined;
            } | {
                name: string;
                width: number;
                error: boolean;
                value?: undefined;
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map