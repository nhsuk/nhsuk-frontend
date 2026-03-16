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
    };
    button: {
        context: {
            text: string;
            button: boolean;
        };
        variants: ({
            description: string;
            context: {
                copyButtonClassList: string[];
                background?: undefined;
            };
            options?: undefined;
        } | {
            description: string;
            context?: undefined;
            options?: undefined;
        } | {
            description: string;
            context: {
                background: string;
                copyButtonClassList: string[];
            };
            options: {
                layout: string;
            };
        })[];
    };
    'without border': {
        context: {
            text: string;
            border: boolean;
        };
        options: {
            layout: string;
        };
    };
    'with custom HTML': {
        context: {
            html: string;
        };
    };
    'with custom HTML and button': {
        context: {
            html: string;
            button: boolean;
        };
    };
    'with custom HTML (escaped) and button': {
        context: {
            button: boolean;
        };
        callBlock: string;
    };
    'with scroll overflow': {
        context: {
            text: string;
        };
    };
    'with scroll overflow and button': {
        context: {
            text: string;
            button: boolean;
        };
    };
    'with translations': {
        context: {
            html: string;
            button: boolean;
            copyButtonText: string;
            copiedButtonText: string;
            copiedAnnouncementText: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map