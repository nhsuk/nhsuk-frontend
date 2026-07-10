/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    description?: undefined;
    context?: undefined;
    options?: undefined;
} | {
    description: string;
    context: {
        variant: string;
    };
    options: {
        layout: string;
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
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: {
                text: string;
            }[];
            rows: {
                text: string;
            }[][];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with empty items': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: (boolean | {
                text: string;
            })[];
            rows: (boolean | (boolean | {
                text: string;
            })[])[];
        };
    };
    'with missing data': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: {
                text: string;
            }[];
            rows: ({
                text: string;
                classes?: undefined;
            } | {
                text: string;
                classes: string;
            })[][];
        };
    };
    'with numeric data': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
    };
    'with numeric data (full width, past day)': {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
        options: {
            width: "full";
        };
    };
    'with numeric data (full width, past week)': {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
        options: {
            width: "full";
        };
    };
    'with numeric data (full width, past month)': {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
        options: {
            width: "full";
        };
    };
    'with numeric data (full width, past year)': {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
        options: {
            width: "full";
        };
    };
    'with numeric data, sortable': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                sortable: boolean;
                initialSortColumn: boolean;
                sortFirstDirection: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
                sortable: boolean;
                sortFirstDirection: string;
                initialSortColumn?: undefined;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
    };
    'with names and dates, sortable': {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                attributes: {
                    'aria-sort': string;
                };
                format?: undefined;
            } | {
                text: string;
                format: string;
                attributes?: undefined;
            })[];
            rows: ({
                text: string;
                html?: undefined;
                format?: undefined;
                attributes?: undefined;
            } | {
                html: string;
                format: string;
                text?: undefined;
                attributes?: undefined;
            } | {
                text: string;
                attributes: {
                    'data-sort-value': string;
                };
                html?: undefined;
                format?: undefined;
            })[][];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    'with names and times, sortable server-side': {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                href: string;
                sortable: boolean;
                initialSortColumn: boolean;
                sortFirstDirection: string;
            } | {
                href: string;
                text: string;
                sortable: boolean;
                initialSortColumn?: undefined;
                sortFirstDirection?: undefined;
            } | {
                text: string;
                href?: undefined;
                sortable?: undefined;
                initialSortColumn?: undefined;
                sortFirstDirection?: undefined;
            })[];
            rows: {
                text: string;
            }[][];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    responsive: {
        context: {
            caption: string;
            captionSize: string;
            responsive: boolean;
            firstCellIsHeader: boolean;
            head: {
                text: string;
                classes: string;
            }[];
            rows: {
                header: string;
                text: string;
            }[][];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'responsive and custom HTML': {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            responsive: boolean;
            head: {
                text: string;
            }[];
            rows: ({
                header: string;
                text: string;
                html?: undefined;
            } | {
                header: string;
                html: string;
                text?: undefined;
            })[][];
        };
    };
    'with word breaks': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                html?: undefined;
            } | {
                html: string;
                text?: undefined;
            })[];
            rows: ({
                text: string;
                classes: string;
                html?: undefined;
            } | {
                html: string;
                text?: undefined;
                classes?: undefined;
            })[][];
        };
    };
    'with first cell as header': {
        context: {
            firstCellIsHeader: boolean;
            head: {
                text: string;
            }[];
            rows: {
                text: string;
            }[][];
        };
    };
    'as a card': {
        context: {
            card: boolean;
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: {
                text: string;
            }[];
            rows: {
                text: string;
            }[][];
        };
    };
    'as a card (feature)': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                variant: string;
            };
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: {
                text: string;
            }[];
            rows: {
                text: string;
            }[][];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'as a card (feature) responsive': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                variant: string;
            };
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            responsive: boolean;
            head: {
                text: string;
            }[];
            rows: {
                header: string;
                text: string;
            }[][];
        };
    };
    'compact and responsive': {
        context: {
            caption: string;
            captionSize: string;
            compact: boolean;
            responsive: boolean;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                header: string;
                text: string;
                format?: undefined;
            } | {
                header: string;
                text: string;
                format: string;
            })[][];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    compact: {
        context: {
            caption: string;
            captionSize: string;
            compact: boolean;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[][];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map