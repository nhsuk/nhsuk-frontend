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
    'with actions': {
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
    'with actions as buttons': {
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
                        element: string;
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
                        element: string;
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
    'with multiple actions as buttons': {
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
                        element: string;
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
                        element: string;
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
    'without border': {
        context: {
            border: boolean;
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
    'without last row border': {
        context: {
            lastRowBorder: boolean;
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
    'without specific row border': {
        context: {
            rows: ({
                key: {
                    text: string;
                };
                value: {
                    text: string;
                    html?: undefined;
                };
                border?: undefined;
            } | {
                key: {
                    text: string;
                };
                value: {
                    html: string;
                    text?: undefined;
                };
                border?: undefined;
            } | {
                border: boolean;
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
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
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
            lastRowBorder: boolean;
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
    'as a card with action': {
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
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card with action as a button': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                actions: {
                    items: {
                        element: string;
                        text: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
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
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card with actions as buttons': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                actions: {
                    items: {
                        element: string;
                        text: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (secondary) with actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                variant: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (feature) with actions': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                variant: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (feature) with custom HTML': {
        context: {
            card: {
                heading: string;
                headingSize: string;
                variant: string;
            };
            lastRowBorder: boolean;
            rows: {
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
            }[];
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
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (type non-urgent) with actions': {
        context: {
            card: {
                heading: string;
                variant: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (type urgent) with actions': {
        context: {
            card: {
                heading: string;
                variant: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'as a card (type emergency) with actions': {
        context: {
            card: {
                heading: string;
                variant: string;
                actions: {
                    items: {
                        text: string;
                        href: string;
                    }[];
                };
            };
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
    };
    'example person: Karen Francis': {
        context: {
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
        options: {
            hidden: true;
        };
    };
    'example person: Karen Francis (no border)': {
        context: {
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
        options: {
            hidden: true;
        };
    };
    'example person: Sarah Philips (no border)': {
        context: {
            lastRowBorder: boolean;
            rows: {
                key: {
                    text: string;
                };
                value: {
                    text: string;
                };
            }[];
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map