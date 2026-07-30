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
            titleText: string;
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
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with multiple errors (empty items)": {
        context: {
            titleText: string;
            errorList: (boolean | {
                text: string;
                href: string;
            })[];
        };
    };
    "with title HTML": {
        context: {
            titleHtml: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with description": {
        context: {
            titleText: string;
            descriptionText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
        screenshot: true;
    };
    "with description HTML": {
        context: {
            titleText: string;
            descriptionHtml: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
    };
    "with description via call block": {
        context: {
            titleText: string;
            errorList: {
                text: string;
                href: string;
            }[];
        };
        callBlock: string;
    };
    "with description only": {
        context: {
            titleText: string;
            descriptionText: string;
        };
    };
    "without error link": {
        context: {
            titleText: string;
            errorList: {
                text: string;
            }[];
        };
    };
    "without error link (mixed)": {
        context: {
            titleText: string;
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
            titleText: string;
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
            titleText: string;
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