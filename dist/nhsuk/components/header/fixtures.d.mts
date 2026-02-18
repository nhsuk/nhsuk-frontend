/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants: ({
    description: string;
    context?: undefined;
} | {
    description: string;
    context: {
        classes: string;
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
            logo: {
                href: string;
            };
            service: {
                text: string;
                href: string;
            };
            search: {
                placeholder: string;
                visuallyHiddenLabel: string;
            };
            navigation: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'linked logo': {
        context: {
            logo: {
                href: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            states: ("focus" | "hover")[];
            selector: string;
            viewports: "desktop"[];
        };
    };
    'unlinked logo': {
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
    };
    'with account (logged in)': {
        context: {
            account: {
                items: ({
                    href: string;
                    text: string;
                    icon: boolean;
                    action?: undefined;
                } | {
                    action: string;
                    text: string;
                    href?: undefined;
                    icon?: undefined;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "desktop")[];
        };
    };
    'with account (logged out)': {
        context: {
            account: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "desktop")[];
        };
    };
    'with navigation': {
        context: {
            logo: {
                href: string;
            };
            navigation: {
                items: ({
                    href: string;
                    text: string;
                    active?: undefined;
                } | {
                    href: string;
                    text: string;
                    active: boolean;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
    };
    'with navigation (empty items)': {
        context: {
            logo: {
                href: string;
            };
            account: {
                items: (boolean | {
                    href: string;
                    text: string;
                    icon: boolean;
                    action?: undefined;
                } | {
                    action: string;
                    text: string;
                    href?: undefined;
                    icon?: undefined;
                })[];
            };
            navigation: {
                items: (boolean | {
                    text: string;
                    href: string;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
    };
    'with navigation (justified)': {
        context: {
            logo: {
                href: string;
            };
            navigation: {
                classes: string;
                items: ({
                    href: string;
                    text: string;
                    active?: undefined;
                } | {
                    href: string;
                    text: string;
                    active: boolean;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with navigation (overflow)': {
        context: {
            logo: {
                href: string;
            };
            navigation: {
                items: ({
                    href: string;
                    text: string;
                    active?: undefined;
                } | {
                    href: string;
                    text: string;
                    active: boolean;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            name: string;
            states: "click"[];
            selector: string;
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop" | "xlarge-desktop")[];
        };
    };
    'with navigation (overflow, white)': {
        context: {
            logo: {
                href: string;
            };
            navigation: {
                classes: string;
                items: ({
                    href: string;
                    text: string;
                    active?: undefined;
                } | {
                    href: string;
                    text: string;
                    active: boolean;
                })[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with search': {
        context: {
            search: boolean;
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: "desktop"[];
        };
    };
    'with service name': {
        context: {
            logo: {
                href: string;
            };
            service: {
                text: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with service name (linked)': {
        context: {
            logo: {
                href: string;
            };
            service: {
                text: string;
                href: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            name: string;
            states: ("focus" | "hover")[];
            selector: string;
            viewports: "desktop"[];
        }[];
    };
    'with service name (linked with logo)': {
        context: {
            service: {
                text: string;
                href: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            states: ("focus" | "hover")[];
            selector: string;
            viewports: "desktop"[];
        };
    };
    'with service name (linked and long), search': {
        context: {
            logo: {
                href: string;
            };
            service: {
                text: string;
                href: string;
            };
            search: boolean;
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with service name, search, account (logged in, complex), navigation': {
        context: {
            service: {
                href: string;
                text: string;
            };
            search: {
                placeholder: string;
                visuallyHiddenLabel: string;
            };
            account: {
                items: ({
                    href: string;
                    text: string;
                    icon: boolean;
                    action?: undefined;
                } | {
                    text: string;
                    href?: undefined;
                    icon?: undefined;
                    action?: undefined;
                } | {
                    href: string;
                    text: string;
                    icon?: undefined;
                    action?: undefined;
                } | {
                    action: string;
                    text: string;
                    href?: undefined;
                    icon?: undefined;
                })[];
            };
            navigation: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop" | "large-desktop")[];
        };
    };
    'with service name, search, account, navigation': {
        context: {
            service: {
                text: string;
                href: string;
            };
            search: {
                placeholder: string;
                visuallyHiddenLabel: string;
            };
            account: {
                items: ({
                    text: string;
                    icon: boolean;
                    action?: undefined;
                } | {
                    action: string;
                    text: string;
                    icon?: undefined;
                })[];
            };
            navigation: {
                items: {
                    href: string;
                    text: string;
                }[];
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
    };
    'with organisation name': {
        context: {
            logo: {
                href: string;
            };
            organisation: {
                name: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with organisation name (and descriptor)': {
        context: {
            logo: {
                href: string;
            };
            organisation: {
                name: string;
                descriptor: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'with organisation name (split with descriptor)': {
        context: {
            logo: {
                href: string;
            };
            organisation: {
                name: string;
                split: string;
                descriptor: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            states: ("focus" | "hover")[];
            selector: string;
            viewports: "desktop"[];
        };
    };
    'with organisation name (split with descriptor), search': {
        context: {
            logo: {
                href: string;
            };
            organisation: {
                name: string;
                split: string;
                descriptor: string;
            };
            search: {
                visuallyHiddenLabel: string;
            };
        };
        options: {
            width: false;
        };
        variants: ({
            description: string;
            context?: undefined;
        } | {
            description: string;
            context: {
                classes: string;
            };
        })[];
        screenshot: {
            viewports: "desktop"[];
        };
    };
    'white linked logo, ARIA label': {
        context: {
            classes: string;
            logo: {
                ariaLabel: string;
                href: string;
            };
        };
        options: {
            hidden: true;
            width: false;
        };
    };
    'white linked logo, custom': {
        context: {
            classes: string;
            logo: {
                href: string;
                src: string;
                alt: string;
            };
        };
        options: {
            width: false;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
            viewports: "desktop"[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map