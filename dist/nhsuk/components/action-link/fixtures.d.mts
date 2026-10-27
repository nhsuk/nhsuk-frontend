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
            text: string;
            href: string;
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
    "opens in a new tab": {
        context: {
            text: string;
            href: string;
            openInNewTab: boolean;
        };
    };
    "with HTML": {
        context: {
            html: string;
            href: string;
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
    };
    "with HTML via call block": {
        context: {
            href: string;
        };
        callBlock: string;
    };
    "as a button": {
        context: {
            text: string;
            type: string;
        };
        variants: ({
            description?: undefined;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                variant: string;
            };
            options: {
                layout: string;
            };
        })[];
        screenshot: {
            states: ("focus" | "hover" | "active")[];
            selector: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map