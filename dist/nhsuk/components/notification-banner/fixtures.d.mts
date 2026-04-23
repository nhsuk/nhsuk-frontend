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
        screenshot: true;
    };
    'paragraph as html heading': {
        context: {
            html: string;
        };
    };
    'with text as html': {
        context: {
            html: string;
        };
    };
    'with success variant': {
        context: {
            variant: string;
            text: string;
        };
        screenshot: true;
    };
    'success with custom html': {
        context: {
            variant: string;
            html: string;
        };
    };
    'with a list': {
        context: {
            html: string;
        };
    };
    'with long heading': {
        context: {
            text: string;
        };
    };
    'with lots of content': {
        context: {
            html: string;
        };
    };
    'auto-focus disabled, with success variant': {
        context: {
            variant: string;
            disableAutoFocus: boolean;
            text: string;
        };
        options: {
            hidden: true;
        };
    };
    'auto-focus explicitly enabled, with success variant': {
        context: {
            variant: string;
            disableAutoFocus: boolean;
            text: string;
        };
        options: {
            hidden: true;
        };
    };
    'role=alert overridden to role=region, with success variant': {
        context: {
            variant: string;
            role: string;
            text: string;
        };
        options: {
            hidden: true;
        };
    };
    'custom tabindex': {
        context: {
            variant: string;
            text: string;
            attributes: {
                tabindex: number;
            };
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map