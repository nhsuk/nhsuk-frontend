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
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with multiple actions': {
        context: {
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions?: undefined;
            } | {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            })[];
        };
        options: {
            width: "full";
        };
    };
    'with multiple actions (empty items)': {
        context: {
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions?: undefined;
            } | {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions: {
                    items: (boolean | {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    })[];
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                actions: {
                    items: (boolean | {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    })[];
                };
            })[];
        };
        options: {
            width: "full";
        };
    };
    'without actions': {
        context: {
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'without border': {
        context: {
            classes: string;
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'without row border': {
        context: {
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                classes?: undefined;
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
            })[];
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'as a card': {
        context: {
            card: {
                heading: string;
                headingSize: string;
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card with multiple actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                classes?: undefined;
                actions?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            })[];
        };
        options: {
            width: "full";
        };
    };
    'as a card with actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (secondary) with actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                secondary: boolean;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (feature) with actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                feature: boolean;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (feature) with custom HTML': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                feature: boolean;
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    html: string;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    html: string;
                };
                actions: {
                    items: {
                        href: string;
                        text: string;
                        visuallyHiddenText: string;
                    }[];
                };
            })[];
        };
        options: {
            width: "full";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'as a card (clickable) without actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                href: string;
                clickable: boolean;
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (type non-urgent) with actions': {
        context: {
            card: {
                heading: string;
                type: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (type urgent) with actions': {
        context: {
            card: {
                heading: string;
                type: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
    'as a card (type emergency) with actions': {
        context: {
            card: {
                heading: string;
                type: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
                classes?: undefined;
            } | {
                classes: string;
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            })[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map