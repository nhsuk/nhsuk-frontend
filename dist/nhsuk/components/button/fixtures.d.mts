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
    "default, small": {
        context: {
            text: string;
            small: boolean;
        };
    };
    disabled: {
        context: {
            text: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    "disabled, small": {
        context: {
            text: string;
            disabled: boolean;
            small: boolean;
        };
    };
    "as a link": {
        context: {
            text: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "as a link, small": {
        context: {
            text: string;
            small: boolean;
            href: string;
        };
    };
    "as a link opens in a new tab": {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
        };
    };
    'as a link opens in a new tab (with "target" attribute)': {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
            attributes: {
                target: string;
            };
        };
    };
    'as a link opens in a new tab (with "rel" attribute)': {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
            attributes: {
                rel: string;
            };
        };
    };
    'as a link opens in a new tab (with "target" and "rel" attributes)': {
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
    "with custom class": {
        context: {
            text: string;
            className: string;
        };
    };
    "with small class": {
        context: {
            text: string;
            classes: string;
        };
    };
    "with small class overriding small option": {
        context: {
            text: string;
            classes: string;
            small: boolean;
        };
    };
    "without class": {
        context: {
            text: string;
            className: boolean;
        };
    };
    "with icon": {
        context: {
            text: string;
            icon: string;
        };
    };
    "with icon, small": {
        context: {
            text: string;
            icon: string;
            small: boolean;
        };
    };
    "with icon only": {
        context: {
            ariaLabel: string;
            icon: string;
        };
    };
    "with icon only, small": {
        context: {
            ariaLabel: string;
            icon: string;
            small: boolean;
        };
    };
    "with icon HTML": {
        context: {
            text: string;
            icon: {
                html: string;
            };
        };
    };
    "with icon HTML, small": {
        context: {
            text: string;
            icon: {
                html: string;
            };
            small: boolean;
        };
    };
    "with icon HTML only": {
        context: {
            ariaLabel: string;
            icon: {
                html: string;
            };
        };
    };
    "with icon HTML only, small": {
        context: {
            ariaLabel: string;
            icon: {
                html: string;
            };
            small: boolean;
        };
    };
    "with icon at start": {
        context: {
            text: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "with icon at start and visually hidden text": {
        context: {
            text: string;
            visuallyHiddenText: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "with icon at start and visually hidden text, small": {
        context: {
            text: string;
            visuallyHiddenText: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "with icon at start, small": {
        context: {
            text: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "with icon at end": {
        context: {
            text: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "with icon at end, small": {
        context: {
            text: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "with double click prevented": {
        context: {
            text: string;
            preventDoubleClick: boolean;
        };
    };
    "with double click not prevented": {
        context: {
            text: string;
            preventDoubleClick: boolean;
        };
    };
    "with visually hidden text": {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
    };
    login: {
        context: {
            text: string;
            variant: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "login, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
    };
    "login disabled": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    "login disabled, small": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
            small: boolean;
        };
    };
    "login as a link": {
        context: {
            text: string;
            variant: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "login as a link, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
            href: string;
        };
    };
    "login with icon at start": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "login with icon at start, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "login with icon at end": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "login with icon at end, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "login class overriding variant option": {
        context: {
            text: string;
            variant: string;
            classes: string;
        };
    };
    reverse: {
        context: {
            text: string;
            variant: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "reverse, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "reverse disabled": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
        screenshot: true;
    };
    "reverse disabled, small": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "reverse as a link": {
        context: {
            text: string;
            variant: string;
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
    "reverse as a link, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
            href: string;
        };
        options: {
            layout: string;
        };
    };
    "reverse with icon at start": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
        options: {
            layout: string;
        };
    };
    "reverse with icon at start, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "reverse with icon at end": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
        options: {
            layout: string;
        };
    };
    "reverse with icon at end, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "reverse class overriding variant option": {
        context: {
            text: string;
            variant: string;
            classes: string;
        };
        options: {
            layout: string;
        };
    };
    secondary: {
        context: {
            text: string;
            variant: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "secondary, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
    };
    "secondary disabled": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    "secondary disabled, small": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
            small: boolean;
        };
    };
    "secondary as a link": {
        context: {
            text: string;
            variant: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "secondary as a link, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
            href: string;
        };
    };
    "secondary with icon at start": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "secondary with icon at start, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "secondary with icon at end": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "secondary with icon at end, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "secondary class overriding variant option": {
        context: {
            text: string;
            variant: string;
            classes: string;
        };
    };
    "secondary, solid background": {
        context: {
            text: string;
            variant: string;
        };
        options: {
            layout: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "secondary, solid background, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background disabled": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
        };
        options: {
            layout: string;
        };
        screenshot: true;
    };
    "secondary, solid background disabled, small": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background as a link": {
        context: {
            text: string;
            variant: string;
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
    "secondary, solid background as a link, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
            href: string;
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background with icon at start": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background with icon at start, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background with icon at end": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background with icon at end, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
        options: {
            layout: string;
        };
    };
    "secondary, solid background class overriding variant option": {
        context: {
            text: string;
            variant: string;
            classes: string;
        };
        options: {
            layout: string;
        };
    };
    warning: {
        context: {
            text: string;
            variant: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "warning, small": {
        context: {
            text: string;
            small: boolean;
            variant: string;
        };
    };
    "warning disabled": {
        context: {
            text: string;
            variant: string;
            disabled: boolean;
        };
        screenshot: true;
    };
    "warning disabled, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
            disabled: boolean;
        };
    };
    "warning as a link": {
        context: {
            text: string;
            variant: string;
            href: string;
        };
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "warning as a link, small": {
        context: {
            text: string;
            small: boolean;
            variant: string;
            href: string;
        };
    };
    "warning with icon at start": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "warning with icon at start, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "warning with icon at end": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
        };
    };
    "warning with icon at end, small": {
        context: {
            text: string;
            variant: string;
            icon: {
                name: string;
                placement: string;
            };
            small: boolean;
        };
    };
    "warning class overriding variant option": {
        context: {
            text: string;
            variant: string;
            classes: string;
        };
    };
    "example reverse search button, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            hidden: true;
        };
    };
    "example reverse save button, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            hidden: true;
        };
    };
    "example secondary search button, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            hidden: true;
        };
    };
    "example secondary save button, small": {
        context: {
            text: string;
            variant: string;
            small: boolean;
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map