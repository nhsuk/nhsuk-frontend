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
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            name: string;
            maxlength: number;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
        };
    };
    'with hint': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
        };
    };
    'with error message': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
    };
    'with hint and error': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
        screenshot: {
            states: "focus"[];
            selector: string;
        };
    };
    'with default value': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
    };
    'with custom rows': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            maxlength: number;
            rows: number;
        };
    };
    label: {
        context: {
            label: {
                text: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            maxlength: number;
        };
        variants: {
            description: string;
            context: {
                label: {
                    size: string;
                };
            };
        }[];
    };
    'without page heading': {
        context: {
            label: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
        };
    };
    'with maxlength attribute': {
        context: {
            label: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
            attributes: {
                maxlength: number;
            };
        };
        options: {
            hidden: true;
        };
    };
    'with word count': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            maxwords: number;
        };
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'with threshold': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            value: string;
            maxlength: number;
            threshold: number;
        };
        screenshot: {
            viewports: "tablet"[];
        };
    };
    'with neither maxlength nor maxwords set': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            textareaDescriptionText: string;
            id: string;
            name: string;
            value: string;
            rows: number;
        };
    };
    'with neither maxlength, maxwords nor textarea description set': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            value: string;
            rows: number;
        };
    };
    'with translations': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            hint: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
            textareaDescriptionText: string;
            charactersUnderLimitText: {
                one: string;
                two: string;
                few: string;
                many: string;
                other: string;
            };
            charactersAtLimitText: string;
            charactersOverLimitText: {
                one: string;
                two: string;
                few: string;
                many: string;
                other: string;
            };
        };
    };
    'to configure in JavaScript': {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
        };
        options: {
            hidden: true;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map