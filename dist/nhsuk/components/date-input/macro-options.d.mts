export const name: "Date input";
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
        let required: true;
        let description: string;
        let released: string;
    }
    export namespace namePrefix {
        let type_1: "string";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    export namespace items {
        let type_2: "array";
        export { type_2 as type };
        let required_2: false;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        let released_2: string;
        export { released_2 as released };
        export namespace params {
            export namespace id_1 {
                let type_3: "string";
                export { type_3 as type };
                let required_3: false;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
                let released_3: string;
                export { released_3 as released };
            }
            export { id_1 as id };
            export namespace name {
                let type_4: "string";
                export { type_4 as type };
                let required_4: true;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            export namespace label {
                let type_5: "string";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            export namespace error {
                let type_6: "boolean";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            export namespace width {
                let type_7: "integer";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
            export namespace inputmode {
                let type_8: "string";
                export { type_8 as type };
                let required_8: false;
                export { required_8 as required };
                let description_8: string;
                export { description_8 as description };
                let released_8: string;
                export { released_8 as released };
            }
            export namespace value {
                let type_9: "string";
                export { type_9 as type };
                let required_9: false;
                export { required_9 as required };
                let description_9: string;
                export { description_9 as description };
                let released_9: string;
                export { released_9 as released };
            }
            export namespace autocomplete {
                let type_10: "string";
                export { type_10 as type };
                let required_10: false;
                export { required_10 as required };
                let description_10: string;
                export { description_10 as description };
                let released_10: string;
                export { released_10 as released };
            }
            export namespace pattern {
                let type_11: "string";
                export { type_11 as type };
                let required_11: false;
                export { required_11 as required };
                let description_11: string;
                export { description_11 as description };
                let released_11: string;
                export { released_11 as released };
            }
            export namespace classes {
                let type_12: "string";
                export { type_12 as type };
                let required_12: false;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
                let released_12: string;
                export { released_12 as released };
            }
            export namespace attributes {
                let type_13: "object";
                export { type_13 as type };
                let required_13: false;
                export { required_13 as required };
                let description_13: string;
                export { description_13 as description };
                let released_13: string;
                export { released_13 as released };
            }
        }
    }
    export namespace hint {
        let type_14: "object";
        export { type_14 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
        let released_14: string;
        export { released_14 as released };
        export let isComponent: true;
    }
    export namespace errorMessage {
        let type_15: "object";
        export { type_15 as type };
        let required_15: false;
        export { required_15 as required };
        let description_15: string;
        export { description_15 as description };
        let released_15: string;
        export { released_15 as released };
        let isComponent_1: true;
        export { isComponent_1 as isComponent };
    }
    export namespace formGroup {
        let type_16: "object";
        export { type_16 as type };
        let required_16: false;
        export { required_16 as required };
        let description_16: string;
        export { description_16 as description };
        let released_16: string;
        export { released_16 as released };
        export namespace params_1 {
            export namespace classes_1 {
                let type_17: "string";
                export { type_17 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
                let released_17: string;
                export { released_17 as released };
            }
            export { classes_1 as classes };
            export namespace attributes_1 {
                let type_18: "object";
                export { type_18 as type };
                let required_18: false;
                export { required_18 as required };
                let description_18: string;
                export { description_18 as description };
                let released_18: string;
                export { released_18 as released };
            }
            export { attributes_1 as attributes };
            export namespace beforeInputs {
                let type_19: "object";
                export { type_19 as type };
                let required_19: false;
                export { required_19 as required };
                let description_19: string;
                export { description_19 as description };
                let released_19: string;
                export { released_19 as released };
                export namespace params_2 {
                    namespace text {
                        let type_20: "string";
                        export { type_20 as type };
                        let required_20: true;
                        export { required_20 as required };
                        let description_20: string;
                        export { description_20 as description };
                        let released_20: string;
                        export { released_20 as released };
                    }
                    namespace html {
                        let type_21: "string";
                        export { type_21 as type };
                        let required_21: true;
                        export { required_21 as required };
                        let description_21: string;
                        export { description_21 as description };
                        let released_21: string;
                        export { released_21 as released };
                    }
                }
                export { params_2 as params };
            }
            export namespace afterInputs {
                let type_22: "object";
                export { type_22 as type };
                let required_22: false;
                export { required_22 as required };
                let description_22: string;
                export { description_22 as description };
                let released_22: string;
                export { released_22 as released };
                export namespace params_3 {
                    export namespace text_1 {
                        let type_23: "string";
                        export { type_23 as type };
                        let required_23: true;
                        export { required_23 as required };
                        let description_23: string;
                        export { description_23 as description };
                        let released_23: string;
                        export { released_23 as released };
                    }
                    export { text_1 as text };
                    export namespace html_1 {
                        let type_24: "string";
                        export { type_24 as type };
                        let required_24: true;
                        export { required_24 as required };
                        let description_24: string;
                        export { description_24 as description };
                        let released_24: string;
                        export { released_24 as released };
                    }
                    export { html_1 as html };
                }
                export { params_3 as params };
            }
        }
        export { params_1 as params };
    }
    export namespace fieldset {
        let type_25: "object";
        export { type_25 as type };
        let required_25: false;
        export { required_25 as required };
        let description_25: string;
        export { description_25 as description };
        let released_25: string;
        export { released_25 as released };
        let isComponent_2: true;
        export { isComponent_2 as isComponent };
    }
    export namespace values {
        let type_26: "object";
        export { type_26 as type };
        let required_26: false;
        export { required_26 as required };
        let description_26: string;
        export { description_26 as description };
        let released_26: string;
        export { released_26 as released };
        export namespace params_4 {
            namespace day {
                let type_27: "string";
                export { type_27 as type };
                let required_27: false;
                export { required_27 as required };
                let description_27: string;
                export { description_27 as description };
                let released_27: string;
                export { released_27 as released };
            }
            namespace month {
                let type_28: "string";
                export { type_28 as type };
                let required_28: false;
                export { required_28 as required };
                let description_28: string;
                export { description_28 as description };
                let released_28: string;
                export { released_28 as released };
            }
            namespace year {
                let type_29: "string";
                export { type_29 as type };
                let required_29: false;
                export { required_29 as required };
                let description_29: string;
                export { description_29 as description };
                let released_29: string;
                export { released_29 as released };
            }
        }
        export { params_4 as params };
    }
    export namespace classes_2 {
        let type_30: "string";
        export { type_30 as type };
        let required_30: false;
        export { required_30 as required };
        let description_30: string;
        export { description_30 as description };
        let released_30: string;
        export { released_30 as released };
    }
    export { classes_2 as classes };
    export namespace attributes_2 {
        let type_31: "object";
        export { type_31 as type };
        let required_31: false;
        export { required_31 as required };
        let description_31: string;
        export { description_31 as description };
        let released_31: string;
        export { released_31 as released };
    }
    export { attributes_2 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map