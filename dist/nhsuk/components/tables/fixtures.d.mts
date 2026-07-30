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
        responsive?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        striped: boolean;
        compact?: undefined;
        responsive?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        compact: boolean;
        striped: boolean;
        responsive?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        responsive: boolean;
        compact?: undefined;
        striped?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        compact: boolean;
        responsive: boolean;
        striped?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        responsive: boolean;
        striped: boolean;
        compact?: undefined;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        compact: boolean;
        responsive: boolean;
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
        responsive?: undefined;
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
        responsive?: undefined;
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
        responsive?: undefined;
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
        responsive?: undefined;
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with column widths": {
        context: {
            caption: string;
            captionSize: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                width: string;
            } | {
                text: string;
                width?: undefined;
            })[];
            rows: ({
                html: string;
                text?: undefined;
            } | {
                text: string;
                html?: undefined;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with custom HTML": {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
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
    "with first cell as header": {
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
    "with empty items": {
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
    "with missing data": {
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
    "with numeric format": {
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
                classes: string;
            } | {
                text: string;
                classes?: undefined;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with numeric format and missing data": {
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
                classes: string;
                format?: undefined;
            } | {
                text: string;
                classes?: undefined;
                format?: undefined;
            } | {
                text: string;
                format: string;
                classes: string;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with numeric format (full width, past day)": {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "full";
        };
    };
    "with numeric format (full width, past week)": {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "full";
        };
    };
    "with numeric format (full width, past month)": {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "full";
        };
    };
    "with numeric format (full width, past year)": {
        context: {
            caption: string;
            head: ({
                text: string;
                format?: undefined;
            } | {
                text: string;
                format: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "full";
        };
    };
    "with word breaks": {
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
    "as a card": {
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "as a card (feature)": {
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "sortable server-side": {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                href: string;
                sort: string;
                width: string;
                visuallyHiddenText?: undefined;
            } | {
                text: string;
                href: string;
                sort: boolean;
                width?: undefined;
                visuallyHiddenText?: undefined;
            } | {
                visuallyHiddenText: string;
                text?: undefined;
                href?: undefined;
                sort?: undefined;
                width?: undefined;
            })[];
            rows: ({
                text: string;
                href?: undefined;
                visuallyHiddenText?: undefined;
            } | {
                href: string;
                text: string;
                visuallyHiddenText: string;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "sortable with numeric format": {
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
            rows: ({
                text: string;
                classes: string;
            } | {
                text: string;
                classes?: undefined;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "sortable with numeric format and missing data": {
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
            rows: ({
                text: string;
                classes: string;
                format?: undefined;
            } | {
                text: string;
                classes?: undefined;
                format?: undefined;
            } | {
                text: string;
                format: string;
                classes: string;
            })[][];
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
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                striped: boolean;
                compact?: undefined;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                striped: boolean;
                responsive?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                compact?: undefined;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
                striped?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                responsive: boolean;
                striped: boolean;
                compact?: undefined;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                compact: boolean;
                responsive: boolean;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
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
                responsive?: undefined;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "sortable with numeric format and sort values": {
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
            rows: ({
                text: string;
                sortValue: string;
                classes: string;
            } | {
                text: string;
                sortValue: string;
                classes?: undefined;
            })[][];
        };
    };
    "sortable with sort values": {
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