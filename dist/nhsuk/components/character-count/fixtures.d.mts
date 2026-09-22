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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
    "with hint": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: {
                text: string;
            };
            id: string;
            name: string;
            maxlength: number;
        };
    };
    "with error only": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            errorMessage: boolean;
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
    };
    "with error message": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with error message and hint": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with error message and hint as strings": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            hint: string;
            errorMessage: string;
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
    };
    "with error message, without heading": {
        context: {
            label: {
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
    };
    "with error message and hint, without heading": {
        context: {
            label: {
                text: string;
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
    };
    "with value": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            maxlength: number;
            value: string;
        };
    };
    "with custom rows": {
        context: {
            label: {
                heading: string;
                size: string;
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
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            maxlength: number;
        };
        variants: ({
            description: string;
            context: {
                label: {
                    size: string;
                    id?: undefined;
                };
            };
            options?: undefined;
        } | {
            description: string;
            context: {
                label: {
                    id: string;
                    size?: undefined;
                };
            };
            options: {
                hidden: true;
            };
        })[];
    };
    "without heading": {
        context: {
            label: string;
            id: string;
            name: string;
            maxlength: number;
        };
    };
    "with maxlength attribute": {
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
    "with count type 'length'": {
        context: {
            label: {
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
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
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            countType: string;
            maxlength: number;
            value: string;
        };
    };
    "with threshold": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "without maxlength": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "without maxlength or textarea description": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "with translations": {
        context: {
            label: {
                heading: string;
                size: string;
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
    "to configure in JavaScript": {
        context: {
            label: {
                heading: string;
                size: string;
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