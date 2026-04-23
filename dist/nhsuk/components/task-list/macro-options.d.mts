export const name: "Task list";
/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params: Record<keyof typeof options, MacroParam>;
declare namespace options {
    namespace id {
        let type: "string";
        let required: false;
        let description: string;
        let released: string;
    }
    namespace classes {
        let type_1: "string";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    namespace attributes {
        let type_2: "object";
        export { type_2 as type };
        let required_2: false;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        let released_2: string;
        export { released_2 as released };
    }
    namespace idPrefix {
        let type_3: "string";
        export { type_3 as type };
        let required_3: false;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        let released_3: string;
        export { released_3 as released };
    }
    namespace items {
        let type_4: "array";
        export { type_4 as type };
        let required_4: true;
        export { required_4 as required };
        let description_4: string;
        export { description_4 as description };
        let released_4: string;
        export { released_4 as released };
        export namespace params {
            export namespace title {
                let type_5: "object";
                export { type_5 as type };
                let required_5: true;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
                export namespace params_1 {
                    export namespace text {
                        let type_6: "string";
                        export { type_6 as type };
                        let required_6: true;
                        export { required_6 as required };
                        let description_6: string;
                        export { description_6 as description };
                        let released_6: string;
                        export { released_6 as released };
                    }
                    export namespace html {
                        let type_7: "string";
                        export { type_7 as type };
                        let required_7: true;
                        export { required_7 as required };
                        let description_7: string;
                        export { description_7 as description };
                        let released_7: string;
                        export { released_7 as released };
                    }
                    export namespace classes_1 {
                        let type_8: "string";
                        export { type_8 as type };
                        let required_8: false;
                        export { required_8 as required };
                        let description_8: string;
                        export { description_8 as description };
                        let released_8: string;
                        export { released_8 as released };
                    }
                    export { classes_1 as classes };
                }
                export { params_1 as params };
            }
            export namespace hint {
                let type_9: "object";
                export { type_9 as type };
                let required_9: false;
                export { required_9 as required };
                let description_9: string;
                export { description_9 as description };
                let released_9: string;
                export { released_9 as released };
                export namespace params_2 {
                    export namespace text_1 {
                        let type_10: "string";
                        export { type_10 as type };
                        let required_10: true;
                        export { required_10 as required };
                        let description_10: string;
                        export { description_10 as description };
                        let released_10: string;
                        export { released_10 as released };
                    }
                    export { text_1 as text };
                    export namespace html_1 {
                        let type_11: "string";
                        export { type_11 as type };
                        let required_11: true;
                        export { required_11 as required };
                        let description_11: string;
                        export { description_11 as description };
                        let released_11: string;
                        export { released_11 as released };
                    }
                    export { html_1 as html };
                }
                export { params_2 as params };
            }
            export namespace status {
                let type_12: "object";
                export { type_12 as type };
                let required_12: true;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
                let released_12: string;
                export { released_12 as released };
                export namespace params_3 {
                    export namespace tag {
                        let type_13: "object";
                        export { type_13 as type };
                        let required_13: false;
                        export { required_13 as required };
                        let description_13: string;
                        export { description_13 as description };
                        let released_13: string;
                        export { released_13 as released };
                    }
                    export namespace text_2 {
                        let type_14: "string";
                        export { type_14 as type };
                        let required_14: false;
                        export { required_14 as required };
                        let description_14: string;
                        export { description_14 as description };
                        let released_14: string;
                        export { released_14 as released };
                    }
                    export { text_2 as text };
                    export namespace html_2 {
                        let type_15: "string";
                        export { type_15 as type };
                        let required_15: false;
                        export { required_15 as required };
                        let description_15: string;
                        export { description_15 as description };
                        let released_15: string;
                        export { released_15 as released };
                    }
                    export { html_2 as html };
                    export namespace classes_2 {
                        let type_16: "string";
                        export { type_16 as type };
                        let required_16: false;
                        export { required_16 as required };
                        let description_16: string;
                        export { description_16 as description };
                        let released_16: string;
                        export { released_16 as released };
                    }
                    export { classes_2 as classes };
                }
                export { params_3 as params };
            }
            export namespace href {
                let type_17: "string";
                export { type_17 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
                let released_17: string;
                export { released_17 as released };
            }
            export namespace classes_3 {
                let type_18: "string";
                export { type_18 as type };
                let required_18: false;
                export { required_18 as required };
                let description_18: string;
                export { description_18 as description };
                let released_18: string;
                export { released_18 as released };
            }
            export { classes_3 as classes };
        }
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map