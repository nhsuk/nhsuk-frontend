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
                width: number;
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
            items: {
                name: string;
                width: number;
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
                width: number;
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
                width: number;
            }[];
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
                width: number;
                error: boolean;
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
                width: number;
                error: boolean;
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