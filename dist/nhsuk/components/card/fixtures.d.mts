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
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    heading: {
        context: {
            heading: {
                text: string;
            };
        };
        callBlock: string;
        variants: ({
            description: string;
            context: {
                heading: {
                    size: string;
                    id?: undefined;
                };
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                heading: {
                    id: string;
                    size?: undefined;
                };
            };
            options: {
                hidden: true;
            };
        })[];
    };
    "basic without heading": {
        context: {
            description: string;
        };
    };
    "basic with heading link": {
        context: {
            href: string;
            heading: {
                text: string;
                size: string;
                level: number;
            };
            description: string;
        };
    };
    "basic with custom HTML": {
        context: {
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "basic with custom HTML and heading as string": {
        context: {
            heading: string;
        };
        callBlock: string;
    };
    "basic with summary list": {
        context: {
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    "basic with summary lists": {
        context: {
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    "basic with summary list and button": {
        context: {
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    "basic with summary list and action": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and action as a button": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: {
                    type: string;
                    text: string;
                }[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and actions": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and actions array": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                text: string;
                href: string;
            }[];
        };
        callBlock: string;
    };
    "basic with summary list and actions as buttons": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: {
                    type: string;
                    text: string;
                }[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and actions, without heading": {
        context: {
            actions: {
                items: {
                    text: string;
                    visuallyHiddenText: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and actions (empty items)": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: (boolean | {
                    text: string;
                    href: string;
                })[];
            };
        };
        callBlock: string;
    };
    "basic with summary list and heading link": {
        context: {
            href: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "secondary without heading": {
        context: {
            variant: string;
            description: {
                text: string;
            };
        };
    };
    "secondary with heading link": {
        context: {
            href: string;
            variant: string;
            heading: {
                text: string;
                size: string;
                level: number;
            };
            description: {
                text: string;
            };
        };
    };
    "secondary with custom HTML": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "secondary with summary list": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "secondary with summary lists": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "secondary with summary list and button": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "secondary with summary list and actions": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    "secondary with summary list and actions, without heading": {
        context: {
            variant: string;
            actions: {
                items: {
                    text: string;
                    visuallyHiddenText: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    "secondary with summary list and actions (empty items)": {
        context: {
            variant: string;
            heading: {
                text: string;
                level: number;
            };
            actions: {
                items: (boolean | {
                    text: string;
                    href: string;
                })[];
            };
        };
        callBlock: string;
    };
    "secondary with summary list and heading link": {
        context: {
            href: string;
            variant: string;
            heading: {
                text: string;
                level: number;
            };
        };
        callBlock: string;
    };
    "non-urgent (blue)": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            variant: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "urgent (red)": {
        context: {
            heading: string;
            variant: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "emergency (red and black)": {
        context: {
            heading: string;
            variant: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "emergency (red and black) with action link": {
        context: {
            heading: string;
            variant: string;
        };
        callBlock: string;
    };
    "primary (with chevron)": {
        context: {
            href: string;
            heading: {
                text: string;
                size: string;
            };
            variant: string;
            clickable: boolean;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "primary (with chevron and description)": {
        context: {
            href: string;
            heading: {
                text: string;
                size: string;
            };
            description: string;
            clickable: boolean;
            variant: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    clickable: {
        context: {
            href: string;
            heading: {
                text: string;
                size: string;
            };
            description: string;
            clickable: boolean;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    secondary: {
        context: {
            href: string;
            heading: {
                text: string;
                size: string;
            };
            description: string;
            clickable: boolean;
            variant: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "secondary non-clickable with custom description": {
        context: {
            href: string;
            variant: string;
            heading: {
                text: string;
                classes: string;
            };
            description: {
                html: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    feature: {
        context: {
            variant: string;
            heading: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "feature with A to Z content": {
        context: {
            heading: {
                text: string;
                id: string;
                size: string;
            };
            variant: string;
            description: {
                html: string;
            };
        };
    };
    "feature with summary list": {
        context: {
            heading: string;
            variant: string;
        };
        callBlock: string;
    };
    "feature with nested card and summary list": {
        context: {
            heading: string;
            variant: string;
        };
        callBlock: string;
    };
    warning: {
        context: {
            heading: string;
            description: string;
            variant: string;
        };
    };
    "warning with actions": {
        context: {
            heading: string;
            description: string;
            variant: string;
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
    };
    "with image": {
        context: {
            image: {
                src: string;
            };
            href: string;
            heading: {
                text: string;
                size: string;
            };
            description: string;
            clickable: boolean;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "with image and caption": {
        context: {
            image: {
                html: string;
            };
            href: string;
            heading: {
                text: string;
                size: string;
            };
            description: string;
            clickable: boolean;
        };
    };
    "with image and custom HTML": {
        context: {
            image: {
                src: string;
            };
            href: string;
            clickable: boolean;
            heading: {
                text: string;
                html: string;
                size: string;
            };
            description: string;
        };
        options: {
            width: "one-half";
        };
    };
    "top task": {
        context: {
            href: string;
            clickable: boolean;
            heading: {
                text: string;
                size: string;
                level: number;
            };
        };
        options: {
            width: "one-third";
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map