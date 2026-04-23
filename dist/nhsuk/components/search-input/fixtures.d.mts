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
            label: {
                text: string;
                classes: string;
            };
            placeholder: string;
            name: string;
            inputmode: string;
            width: number;
        };
    };
    large: {
        context: {
            label: {
                text: string;
                classes: string;
            };
            placeholder: string;
            name: string;
            width: number;
            large: boolean;
            inputmode: string;
        };
    };
    'large with search button': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            button: {
                variant: string;
            };
            placeholder: string;
            name: string;
            width: number;
            large: boolean;
            inputmode: string;
        };
    };
    reverse: {
        context: {
            label: {
                text: string;
                classes: string;
            };
            placeholder: string;
            name: string;
            variant: string;
            width: number;
            inputmode: string;
        };
        options: {
            layout: string;
        };
    };
    'with hint': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            hint: {
                text: string;
            };
            placeholder: string;
            id: string;
            name: string;
            width: number;
            inputmode: string;
        };
    };
    'with search button': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            button: {
                variant: string;
            };
            placeholder: string;
            name: string;
            width: number;
            inputmode: string;
        };
    };
    'with secondary button': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            button: {
                variant: string;
            };
            placeholder: string;
            name: string;
            width: number;
            inputmode: string;
        };
    };
    'with secondary button, solid background': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            button: {
                variant: string;
            };
            placeholder: string;
            name: string;
            width: number;
            inputmode: string;
        };
        options: {
            layout: string;
        };
    };
    'without button': {
        context: {
            label: {
                text: string;
                classes: string;
            };
            button: boolean;
            placeholder: string;
            name: string;
            width: number;
            inputmode: string;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map