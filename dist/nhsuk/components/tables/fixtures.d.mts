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
        compact: boolean;
        striped?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        striped: boolean;
        compact?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        compact: boolean;
        striped: boolean;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        variant: string;
        compact?: undefined;
        striped?: undefined;
    };
    options: {
        layout: string;
    };
} | {
    description: string;
    context: {
        compact: boolean;
        variant: string;
        striped?: undefined;
    };
    options: {
        layout: string;
    };
} | {
    description: string;
    context: {
        striped: boolean;
        variant: string;
        compact?: undefined;
    };
    options: {
        layout: string;
    };
} | {
    description: string;
    context: {
        compact: boolean;
        striped: boolean;
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
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
            rows: (({
                text: string;
                classes: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
                classes?: undefined;
            })[] | ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[])[];
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
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
                text: string;
                html?: undefined;
            } | {
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
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
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
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    sortable: {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                sort: string;
                classes?: undefined;
            } | {
                text: string;
                sort: boolean;
                classes?: undefined;
            } | {
                text: string;
                classes: string;
                sort?: undefined;
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
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
    'sortable responsive': {
        context: {
            caption: string;
            responsive: boolean;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                sort: string;
                classes?: undefined;
            } | {
                text: string;
                sort: boolean;
                classes?: undefined;
            } | {
                text: string;
                classes: string;
                sort?: undefined;
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
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
    'sortable server-side': {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                href: string;
                text: string;
                sort: string;
                classes?: undefined;
            } | {
                href: string;
                text: string;
                sort: boolean;
                classes?: undefined;
            } | {
                text: string;
                classes: string;
                href?: undefined;
                sort?: undefined;
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
                compact: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                compact?: undefined;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                variant: string;
                striped?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                striped: boolean;
                variant: string;
                compact?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    'sortable with numeric data': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                format?: undefined;
                sort?: undefined;
                sortNext?: undefined;
            } | {
                text: string;
                format: string;
                sort: boolean;
                sortNext: string;
            })[];
            rows: (({
                text: string;
                classes: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
                classes?: undefined;
            })[] | ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[])[];
        };
    };
    'sortable with numeric data and sort values': {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                sort: string;
                format?: undefined;
                sortNext?: undefined;
            } | {
                text: string;
                format: string;
                sort: boolean;
                sortNext: string;
            })[];
            rows: (({
                text: string;
                sortValue: string;
                classes: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
                sortValue: string;
                classes?: undefined;
            })[] | ({
                text: string;
                sortValue: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
                sortValue: string;
            })[])[];
        };
    };
    'sortable with sort values': {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                sort: string;
                sortNext?: undefined;
            } | {
                text: string;
                sort: boolean;
                sortNext?: undefined;
            } | {
                text: string;
                sort: boolean;
                sortNext: string;
            })[];
            rows: {
                text: string;
                sortValue: string;
            }[][];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map