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
        small: boolean;
        variant?: undefined;
    };
    options?: undefined;
} | {
    description: string;
    context: {
        variant: string;
        small?: undefined;
    };
    options: {
        layout: string;
    };
} | {
    description: string;
    context: {
        small: boolean;
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
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: true;
    };
    horizontal: {
        context: {
            direction: string;
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "horizontal with badge": {
        context: {
            direction: string;
            items: ({
                href: string;
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current?: undefined;
            } | {
                text: string;
                badge: {
                    text: string;
                    visuallyHiddenText: string;
                };
                current: boolean;
                href?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: true;
    };
    vertical: {
        context: {
            direction: string;
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "vertical with badge": {
        context: {
            direction: string;
            items: ({
                href: string;
                text: string;
                current?: undefined;
                badge?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
                badge?: undefined;
            } | {
                href: string;
                text: string;
                badge: {
                    text: string;
                };
                current?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with ARIA label": {
        context: {
            ariaLabel: string;
            items: ({
                text: string;
                current: boolean;
                href?: undefined;
            } | {
                href: string;
                text: string;
                current?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
    };
    "with custom html": {
        context: {
            items: ({
                href: string;
                html: string;
                current?: undefined;
            } | {
                html: string;
                current: boolean;
                href?: undefined;
            })[];
        };
        options: {
            width: "full";
        };
        variants: {
            description: string;
            context: {
                direction: string;
            };
        }[];
    };
    "with active item": {
        context: {
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with current item": {
        context: {
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                text: string;
                current: boolean;
                href?: undefined;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with current (linked) item": {
        context: {
            items: ({
                href: string;
                text: string;
                current?: undefined;
            } | {
                href: string;
                text: string;
                current: boolean;
            })[];
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
                small: boolean;
                variant?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
                small?: undefined;
            };
            options: {
                layout: string;
            };
        } | {
            description: string;
            context: {
                small: boolean;
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: true;
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map