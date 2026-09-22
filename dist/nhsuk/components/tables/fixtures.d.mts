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
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
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
    "with tags": {
        context: {
            caption: string;
            firstCellIsHeader: boolean;
            head: string[];
            rows: (string | {
                html: string;
            })[][];
        };
    };
    "with first cell as header": {
        context: {
            firstCellIsHeader: boolean;
            lastRowBorder: boolean;
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
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            head: (boolean | {
                text: string;
            })[];
            rows: (boolean | (boolean | {
                text: string;
            })[])[];
        };
    };
    "with string items": {
        context: {
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            head: string[];
            rows: string[][];
        };
    };
    "with empty items and string items": {
        context: {
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            head: (string | boolean)[];
            rows: (boolean | (string | boolean)[])[];
        };
    };
    "with missing data": {
        context: {
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            head: ({
                text: string;
                visuallyHiddenText?: undefined;
            } | {
                visuallyHiddenText: string;
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
    "without border": {
        context: {
            caption: {
                text: string;
                classes: string;
            };
            border: boolean;
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
    "without last row border": {
        context: {
            caption: {
                text: string;
                classes: string;
            };
            lastRowBorder: boolean;
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
    "as a card": {
        context: {
            card: boolean;
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            lastRowBorder: boolean;
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
                heading: {
                    text: string;
                    size: string;
                };
                variant: string;
            };
            caption: {
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            lastRowBorder: boolean;
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
    scrolling: {
        context: {
            caption: {
                id: string;
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            scroll: boolean;
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
    "scrolling sortable": {
        context: {
            caption: {
                id: string;
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            scroll: boolean;
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
    "scrolling as a card": {
        context: {
            card: {
                heading: {
                    text: string;
                    size: string;
                };
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            caption: {
                id: string;
                text: string;
                size: string;
            };
            lastRowBorder: boolean;
            scroll: boolean;
            head: ({
                text: string;
                format?: undefined;
                align?: undefined;
            } | {
                text: string;
                format: string;
                align: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "one-half";
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
    "scrolling sortable as a card": {
        context: {
            card: {
                heading: {
                    text: string;
                    size: string;
                };
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            caption: {
                id: string;
                text: string;
                size: string;
            };
            lastRowBorder: boolean;
            scroll: boolean;
            head: ({
                text: string;
                format?: undefined;
                align?: undefined;
                sort?: undefined;
                sortNext?: undefined;
            } | {
                text: string;
                format: string;
                align: string;
                sort: boolean;
                sortNext: string;
            })[];
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "one-half";
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
    "scrolling (full width)": {
        context: {
            caption: {
                id: string;
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            scroll: boolean;
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
    "scrolling sortable (full width)": {
        context: {
            caption: {
                id: string;
                text: string;
                size: string;
            };
            firstCellIsHeader: boolean;
            scroll: boolean;
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
            rows: {
                text: string;
            }[][];
        };
        options: {
            width: "full";
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
                align?: undefined;
                classes?: undefined;
                visuallyHiddenText?: undefined;
            } | {
                text: string;
                href: string;
                sort: boolean;
                align: string;
                width: string;
                classes: string;
                visuallyHiddenText?: undefined;
            } | {
                visuallyHiddenText: string;
                text?: undefined;
                href?: undefined;
                sort?: undefined;
                width?: undefined;
                align?: undefined;
                classes?: undefined;
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
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
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
            caption: {
                text: string;
                size: string;
            };
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
    "sortable with string items": {
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
            rows: string[][];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map