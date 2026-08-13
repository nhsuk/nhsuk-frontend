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
                level: number;
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
                level: number;
            };
        };
        callBlock: string;
        variants: {
            description: string;
            context: {
                heading: {
                    size: string;
                };
            };
        }[];
    };
    "basic without heading": {
        context: {
            description: {
                text: string;
            };
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
            description: {
                text: string;
            };
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
    "emergency (red and black)": {
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
    "emergency (red and black) with action link": {
        context: {
            heading: {
                text: string;
                level: number;
            };
            variant: string;
        };
        callBlock: string;
    };
    "primary (with chevron)": {
        context: {
            href: string;
            variant: string;
            clickable: boolean;
            heading: {
                text: string;
                size: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "primary (with chevron and description)": {
        context: {
            href: string;
            variant: string;
            clickable: boolean;
            heading: {
                text: string;
                size: string;
            };
            description: {
                text: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    clickable: {
        context: {
            href: string;
            clickable: boolean;
            heading: {
                text: string;
                size: string;
            };
            description: {
                text: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    secondary: {
        context: {
            href: string;
            clickable: boolean;
            variant: string;
            heading: {
                text: string;
                size: string;
            };
            description: {
                text: string;
            };
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
            heading: {
                text: string;
            };
            description: {
                text: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    "feature with A to Z content": {
        context: {
            variant: string;
            heading: {
                text: string;
                id: string;
                size: string;
            };
            description: {
                html: string;
            };
        };
    };
    "feature with summary list": {
        context: {
            variant: string;
            heading: {
                text: string;
            };
        };
        callBlock: string;
    };
    "feature with nested card and summary list": {
        context: {
            variant: string;
            heading: {
                text: string;
            };
        };
        callBlock: string;
    };
    warning: {
        context: {
            variant: string;
            heading: {
                text: string;
            };
            description: {
                text: string;
            };
        };
    };
    "warning with actions": {
        context: {
            variant: string;
            heading: {
                text: string;
            };
            description: {
                text: string;
            };
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
            clickable: boolean;
            heading: {
                text: string;
                size: string;
            };
            description: {
                text: string;
            };
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
            clickable: boolean;
            heading: {
                text: string;
                size: string;
            };
            description: {
                text: string;
            };
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
            description: {
                text: string;
            };
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