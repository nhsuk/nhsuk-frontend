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
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'default, small': {
        context: {
            text: string;
            classes: string;
        };
    };
    disabled: {
        context: {
            text: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    'disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
    };
    'as a link': {
        context: {
            text: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
    };
    login: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'login, small': {
        context: {
            text: string;
            classes: string;
        };
    };
    'login disabled': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    'login disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
    };
    'login as a link': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'login as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
    };
    'with double click prevented': {
        context: {
            text: string;
            preventDoubleClick: boolean;
        };
    };
    'with double click not prevented': {
        context: {
            text: string;
            preventDoubleClick: boolean;
        };
    };
    reverse: {
        context: {
            text: string;
            classes: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'reverse, small': {
        context: {
            text: string;
            classes: string;
        };
        options: {
            layout: string;
        };
    };
    'reverse disabled': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
        screenshot: true;
    };
    'reverse disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
    };
    'reverse as a link': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'reverse as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        options: {
            layout: string;
        };
    };
    secondary: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'secondary, small': {
        context: {
            text: string;
            classes: string;
        };
    };
    'secondary disabled': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    'secondary disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
    };
    'secondary as a link': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'secondary as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
    };
    'secondary, solid background': {
        context: {
            text: string;
            classes: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'secondary, solid background, small': {
        context: {
            text: string;
            classes: string;
        };
        options: {
            layout: string;
        };
    };
    'secondary, solid background disabled': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
        screenshot: true;
    };
    'secondary, solid background disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
    };
    'secondary, solid background as a link': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'secondary, solid background as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        options: {
            layout: string;
        };
    };
    warning: {
        context: {
            text: string;
            classes: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'warning, small': {
        context: {
            text: string;
            classes: string;
        };
    };
    'warning disabled': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    'warning disabled, small': {
        context: {
            text: string;
            classes: string;
            disabled: boolean;
        };
    };
    'warning as a link': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    'warning as a link, small': {
        context: {
            text: string;
            classes: string;
            href: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map