/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples: {
    default: {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
    };
    'text label': {
        context: {
            text: string;
        };
    };
    'zero count': {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
    };
};
//# sourceMappingURL=fixtures.d.mts.map