export const name: "Textarea";
/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params: Record<keyof typeof options, MacroParam>;
declare namespace options {
    export namespace id {
        let type: "string";
        let required: false;
        let description: string;
        let released: string;
    }
    export namespace name {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    export namespace spellcheck {
        let type_2: "boolean";
        export { type_2 as type };
        let required_2: false;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        let released_2: string;
        export { released_2 as released };
    }
    export namespace rows {
        let type_3: "string";
        export { type_3 as type };
        let required_3: false;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        let released_3: string;
        export { released_3 as released };
    }
    export namespace value {
        let type_4: "string";
        export { type_4 as type };
        let required_4: false;
        export { required_4 as required };
        let description_4: string;
        export { description_4 as description };
        let released_4: string;
        export { released_4 as released };
    }
    export namespace disabled {
        let type_5: "boolean";
        export { type_5 as type };
        let required_5: false;
        export { required_5 as required };
        let description_5: string;
        export { description_5 as description };
        let released_5: string;
        export { released_5 as released };
    }
    export namespace describedBy {
        let type_6: "string";
        export { type_6 as type };
        let required_6: false;
        export { required_6 as required };
        let description_6: string;
        export { description_6 as description };
        let released_6: string;
        export { released_6 as released };
    }
    export namespace label {
        let type_7: "object";
        export { type_7 as type };
        let required_7: true;
        export { required_7 as required };
        let description_7: string;
        export { description_7 as description };
        let released_7: string;
        export { released_7 as released };
        export let isComponent: true;
    }
    export namespace hint {
        let type_8: "object";
        export { type_8 as type };
        let required_8: false;
        export { required_8 as required };
        let description_8: string;
        export { description_8 as description };
        let released_8: string;
        export { released_8 as released };
        let isComponent_1: true;
        export { isComponent_1 as isComponent };
    }
    export namespace errorMessage {
        let type_9: "object";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
        let released_9: string;
        export { released_9 as released };
        let isComponent_2: true;
        export { isComponent_2 as isComponent };
    }
    export namespace formGroup {
        let type_10: "object";
        export { type_10 as type };
        let required_10: false;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
        let released_10: string;
        export { released_10 as released };
        export namespace params {
            namespace classes {
                let type_11: "string";
                export { type_11 as type };
                let required_11: false;
                export { required_11 as required };
                let description_11: string;
                export { description_11 as description };
                let released_11: string;
                export { released_11 as released };
            }
            namespace attributes {
                let type_12: "object";
                export { type_12 as type };
                let required_12: false;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
                let released_12: string;
                export { released_12 as released };
            }
            namespace beforeInput {
                let type_13: "object";
                export { type_13 as type };
                let required_13: false;
                export { required_13 as required };
                let description_13: string;
                export { description_13 as description };
                let released_13: string;
                export { released_13 as released };
                export namespace params_1 {
                    namespace text {
                        let type_14: "string";
                        export { type_14 as type };
                        let required_14: true;
                        export { required_14 as required };
                        let description_14: string;
                        export { description_14 as description };
                        let released_14: string;
                        export { released_14 as released };
                    }
                    namespace html {
                        let type_15: "string";
                        export { type_15 as type };
                        let required_15: true;
                        export { required_15 as required };
                        let description_15: string;
                        export { description_15 as description };
                        let released_15: string;
                        export { released_15 as released };
                    }
                }
                export { params_1 as params };
            }
            namespace afterInput {
                let type_16: "object";
                export { type_16 as type };
                let required_16: false;
                export { required_16 as required };
                let description_16: string;
                export { description_16 as description };
                let released_16: string;
                export { released_16 as released };
                export namespace params_2 {
                    export namespace text_1 {
                        let type_17: "string";
                        export { type_17 as type };
                        let required_17: true;
                        export { required_17 as required };
                        let description_17: string;
                        export { description_17 as description };
                        let released_17: string;
                        export { released_17 as released };
                    }
                    export { text_1 as text };
                    export namespace html_1 {
                        let type_18: "string";
                        export { type_18 as type };
                        let required_18: true;
                        export { required_18 as required };
                        let description_18: string;
                        export { description_18 as description };
                        let released_18: string;
                        export { released_18 as released };
                    }
                    export { html_1 as html };
                }
                export { params_2 as params };
            }
        }
    }
    export namespace classes_1 {
        let type_19: "string";
        export { type_19 as type };
        let required_19: false;
        export { required_19 as required };
        let description_19: string;
        export { description_19 as description };
        let released_19: string;
        export { released_19 as released };
    }
    export { classes_1 as classes };
    export namespace autocomplete {
        let type_20: "string";
        export { type_20 as type };
        let required_20: false;
        export { required_20 as required };
        let description_20: string;
        export { description_20 as description };
        let released_20: string;
        export { released_20 as released };
    }
    export namespace attributes_1 {
        let type_21: "object";
        export { type_21 as type };
        let required_21: false;
        export { required_21 as required };
        let description_21: string;
        export { description_21 as description };
        let released_21: string;
        export { released_21 as released };
    }
    export { attributes_1 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map