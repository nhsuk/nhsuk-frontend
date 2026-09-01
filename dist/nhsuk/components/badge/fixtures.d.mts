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
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples: {
    default: {
        context: {
            text: string;
            visuallyHiddenText: string;
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
            viewports: "mobile"[];
        };
    };
    count: {
        context: {
            text: string;
            visuallyHiddenText: string;
        };
        variants: {
            description: string;
            context: {
                text: string;
            };
        }[];
        screenshot: {
            viewports: "mobile"[];
        };
    };
    "with text": {
        context: {
            text: string;
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
            viewports: "mobile"[];
        };
    };
    "with HTML": {
        context: {
            html: string;
        };
    };
    "with HTML via call block": {
        callBlock: string;
    };
};
//# sourceMappingURL=fixtures.d.mts.map