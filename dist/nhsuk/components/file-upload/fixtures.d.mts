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
            id: string;
            name: string;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
    };
    disabled: {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            disabled: boolean;
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
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
        };
    };
    "with error message and hint": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
        };
        screenshot: {
            viewports: ("mobile" | "tablet" | "watch" | "desktop")[];
        };
    };
    "with error message and hint as strings": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            hint: string;
            errorMessage: string;
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
        };
    };
    "with error message and hint, without heading": {
        context: {
            label: {
                text: string;
            };
            id: string;
            name: string;
            hint: {
                text: string;
            };
            errorMessage: {
                text: string;
            };
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
    button: {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
        };
        variants: {
            description: string;
            context: {
                chooseFilesButtonClassList: string[];
            };
        }[];
    };
    "without heading": {
        context: {
            label: string;
            id: string;
            name: string;
        };
    };
    "with multiple": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            multiple: boolean;
            chooseFilesButtonText: string;
            dropInstructionText: string;
            noFileChosenText: string;
        };
    };
    "with translations": {
        context: {
            label: {
                heading: string;
                size: string;
            };
            id: string;
            name: string;
            multiple: boolean;
            chooseFilesButtonText: string;
            dropInstructionText: string;
            noFileChosenText: string;
            multipleFilesChosenText: {
                other: string;
                one: string;
            };
            enteredDropZoneText: string;
            leftDropZoneText: string;
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
        };
    };
};
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map