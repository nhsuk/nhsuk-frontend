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
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'basic without heading': {
        context: {
            description: string;
        };
    };
    'basic with heading link': {
        context: {
            href: string;
            heading: string;
            headingSize: string;
            headingLevel: number;
            description: string;
        };
    };
    'basic with custom HTML': {
        context: {
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'basic with summary list': {
        context: {
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    'basic with summary lists': {
        context: {
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    'basic with summary list and button': {
        context: {
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet")[];
        };
    };
    'basic with summary list and actions': {
        context: {
            heading: string;
            headingLevel: number;
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    'basic with summary list and actions, without heading': {
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
    'basic with summary list and actions (empty items)': {
        context: {
            heading: string;
            headingLevel: number;
            actions: {
                items: (boolean | {
                    text: string;
                    href: string;
                })[];
            };
        };
        callBlock: string;
    };
    'basic with summary list and heading link': {
        context: {
            href: string;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'secondary without heading': {
        context: {
            secondary: boolean;
            description: string;
        };
    };
    'secondary with heading link': {
        context: {
            href: string;
            secondary: boolean;
            heading: string;
            headingSize: string;
            headingLevel: number;
            description: string;
        };
    };
    'secondary with custom HTML': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'secondary with summary list': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'secondary with summary lists': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'secondary with summary list and button': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'secondary with summary list and actions': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
        callBlock: string;
    };
    'secondary with summary list and actions, without heading': {
        context: {
            secondary: boolean;
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
    'secondary with summary list and actions (empty items)': {
        context: {
            secondary: boolean;
            heading: string;
            headingLevel: number;
            actions: {
                items: (boolean | {
                    text: string;
                    href: string;
                })[];
            };
        };
        callBlock: string;
    };
    'secondary with summary list and heading link': {
        context: {
            href: string;
            secondary: boolean;
            heading: string;
            headingLevel: number;
        };
        callBlock: string;
    };
    'non-urgent (blue)': {
        context: {
            heading: string;
            headingLevel: number;
            type: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'urgent (red)': {
        context: {
            heading: string;
            headingLevel: number;
            type: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'emergency (red and black)': {
        context: {
            heading: string;
            headingLevel: number;
            type: string;
        };
        callBlock: string;
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'emergency (red and black) with action link': {
        context: {
            heading: string;
            headingLevel: number;
            type: string;
        };
        callBlock: string;
    };
    'primary (with chevron)': {
        context: {
            href: string;
            primary: boolean;
            clickable: boolean;
            heading: string;
            headingSize: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'primary (with chevron and description)': {
        context: {
            href: string;
            primary: boolean;
            clickable: boolean;
            heading: string;
            headingSize: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    clickable: {
        context: {
            href: string;
            clickable: boolean;
            heading: string;
            headingSize: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    secondary: {
        context: {
            href: string;
            clickable: boolean;
            secondary: boolean;
            heading: string;
            headingSize: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'secondary non-clickable with custom description': {
        context: {
            href: string;
            secondary: boolean;
            heading: string;
            headingClasses: string;
            descriptionHtml: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    feature: {
        context: {
            feature: boolean;
            heading: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'feature with A to Z content': {
        context: {
            feature: boolean;
            heading: string;
            headingId: string;
            headingSize: string;
            descriptionHtml: string;
        };
    };
    'feature with summary list': {
        context: {
            feature: boolean;
            heading: string;
        };
        callBlock: string;
    };
    'feature with nested card and summary list': {
        context: {
            feature: boolean;
            heading: string;
        };
        callBlock: string;
    };
    warning: {
        context: {
            warning: boolean;
            heading: string;
            description: string;
        };
    };
    'warning with actions': {
        context: {
            warning: boolean;
            heading: string;
            description: string;
            actions: {
                items: {
                    text: string;
                    href: string;
                }[];
            };
        };
    };
    'with image': {
        context: {
            image: {
                src: string;
            };
            href: string;
            clickable: boolean;
            heading: string;
            headingSize: string;
            description: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "desktop")[];
        };
    };
    'with image and caption': {
        context: {
            image: {
                html: string;
            };
            href: string;
            clickable: boolean;
            heading: string;
            headingSize: string;
            description: string;
        };
    };
    'with image and custom HTML': {
        context: {
            image: {
                src: string;
            };
            href: string;
            clickable: boolean;
            heading: string;
            headingSize: string;
            headingHtml: string;
            description: string;
        };
        options: {
            width: "one-half";
        };
    };
    'top task': {
        context: {
            href: string;
            clickable: boolean;
            headingLevel: number;
            heading: string;
            headingSize: string;
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