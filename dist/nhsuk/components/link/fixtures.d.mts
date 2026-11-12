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
            text: string;
            href: string;
        };
    };
    current: {
        context: {
            text: string;
            href: string;
            current: boolean;
        };
    };
    'current "page"': {
        context: {
            text: string;
            href: string;
            current: string;
        };
    };
    "opens in a new tab": {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
        };
    };
    'opens in a new tab (with "target" attribute)': {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
            attributes: {
                target: string;
            };
        };
    };
    'opens in a new tab (with "rel" attribute)': {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
            attributes: {
                rel: string;
            };
        };
    };
    'opens in a new tab (with "target" and "rel" attributes)': {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
            attributes: {
                target: string;
                rel: string;
            };
        };
    };
    "with ARIA label": {
        context: {
            text: string;
            href: string;
            ariaLabel: string;
        };
    };
    "with text escaping": {
        context: {
            text: string;
            href: string;
        };
    };
    "with HTML": {
        context: {
            html: string;
            href: string;
        };
    };
    "with HTML via call block": {
        context: {
            href: string;
        };
        callBlock: string;
    };
    "with visually hidden array of text": {
        context: {
            text: string;
            href: string;
            visuallyHidden: string[];
        };
    };
    "with visually hidden text": {
        context: {
            text: string;
            href: string;
            visuallyHidden: string;
        };
    };
    "with visually hidden text (alias)": {
        context: {
            text: string;
            href: string;
            visuallyHiddenText: string;
        };
    };
    'with visually hidden text "start"': {
        context: {
            text: string;
            href: string;
            visuallyHidden: {
                text: string;
                placement: string;
                slots: {
                    end: string;
                };
            };
        };
    };
    'with visually hidden text "end"': {
        context: {
            text: string;
            href: string;
            visuallyHidden: {
                text: string;
                placement: string;
                slots: {
                    start: string;
                };
            };
        };
    };
    "with visually hidden text escaping": {
        context: {
            text: string;
            href: string;
            visuallyHidden: {
                text: string;
                slots: {
                    start: string;
                };
            };
        };
    };
    "with visually hidden HTML": {
        context: {
            text: string;
            href: string;
            visuallyHidden: {
                html: string;
                slots: {
                    start: string;
                };
            };
        };
    };
    "with content slots": {
        context: {
            text: string;
            href: string;
            slots: {
                before: {
                    html: string;
                };
                start: {
                    html: string;
                };
                end: {
                    html: string;
                };
                after: {
                    html: string;
                };
            };
        };
    };
    "with custom class": {
        context: {
            text: string;
            href: string;
            className: string;
        };
    };
    "with reverse class": {
        context: {
            text: string;
            href: string;
            classes: string;
        };
        options: {
            layout: string;
        };
    };
    "with reverse class overriding reverse variant": {
        context: {
            text: string;
            href: string;
            classes: string;
            variant: string;
        };
        options: {
            layout: string;
        };
    };
    "without class": {
        context: {
            text: string;
            href: string;
            className: boolean;
        };
    };
    reverse: {
        context: {
            text: string;
            href: string;
            variant: string;
        };
        options: {
            layout: string;
        };
    };
    "as a button": {
        context: {
            text: string;
            type: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map