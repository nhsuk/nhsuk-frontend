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
    disabled: {
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
            disabled: boolean;
        };
        screenshot: true;
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
    'with error message and hint': {
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
    'with value': {
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
                size: string;
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
    'with maxwords': {
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
    };
    "with count type 'length'": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
        };
    };
    "with count type 'characters'": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
        };
    };
    "with count type 'characters' and error message": {
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
            countType: string;
            maxlength: number;
            value: string;
        };
    };
    "with count type 'characters' and value": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
            value: string;
        };
    };
    "with count type 'characters' and threshold": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            value: string;
            maxlength: number;
            threshold: number;
        };
    };
    "with count type 'words'": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
        };
        screenshot: {
            viewports: "tablet"[];
        };
    };
    "with count type 'words' and error message": {
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
            countType: string;
            maxlength: number;
            value: string;
        };
    };
    "with count type 'words' and threshold": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            value: string;
            maxlength: number;
            threshold: number;
        };
    };
    "with count type 'words' and value": {
        context: {
            label: {
                text: string;
                size: string;
                isPageHeading: boolean;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
            value: string;
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
        options: {
            hidden: true;
            throwOnError: false;
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
        options: {
            hidden: true;
            throwOnError: false;
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
            throwOnError: false;
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map