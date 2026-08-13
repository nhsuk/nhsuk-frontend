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
            heading: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "with multiple errors": {
        context: {
            heading: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with multiple errors (empty items)": {
        context: {
            heading: {
                text: string;
            };
            errorList: (boolean | {
                text: string;
                href: string;
            })[];
        };
    };
    "with title HTML": {
        context: {
            heading: {
                html: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with description": {
        context: {
            heading: {
                text: string;
            };
            description: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
        screenshot: true;
    };
    "with description HTML": {
        context: {
            heading: {
                text: string;
            };
            description: {
                html: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with description via call block": {
        context: {
            heading: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
        };
        callBlock: string;
    };
    "with description only": {
        context: {
            heading: {
                text: string;
            };
            description: {
                text: string;
            };
        };
    };
    "without error link": {
        context: {
            heading: {
                text: string;
            };
            errorList: {
                text: string;
            }[];
        };
    };
    "without error link (mixed)": {
        context: {
            heading: {
                text: string;
            };
            errorList: ({
                text: string;
                href?: undefined;
            } | {
                text: string;
                href: string;
            })[];
        };
    };
    "auto-focus disabled": {
        context: {
            heading: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
            disableAutoFocus: boolean;
        };
        options: {
            hidden: true;
        };
    };
    "auto-focus explicitly enabled": {
        context: {
            heading: {
                text: string;
            };
            errorList: {
                text: string;
                href: string;
            }[];
            disableAutoFocus: boolean;
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map