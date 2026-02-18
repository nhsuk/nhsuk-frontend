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
    'with empty items': {
        context: {
            caption: string;
            captionSize: string;
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
    'with responsive layout': {
        context: {
            caption: string;
            captionSize: string;
            responsive: boolean;
            head: {
                text: string;
                classes: string;
            }[];
            rows: {
                header: string;
                text: string;
            }[][];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with responsive layout and custom HTML': {
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
                feature: boolean;
            };
            caption: string;
            captionSize: string;
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
    'as a card (feature) with responsive layout': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                feature: boolean;
            };
            caption: string;
            captionSize: string;
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
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map