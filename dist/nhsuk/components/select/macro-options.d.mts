export const name: "Select";
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
    }
    export namespace name {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
    }
    export namespace items {
        let type_2: "array";
        export { type_2 as type };
        let required_2: true;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        export namespace params {
            namespace value {
                let type_3: "string";
                export { type_3 as type };
                let required_3: false;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
            }
            namespace text {
                let type_4: "string";
                export { type_4 as type };
                let required_4: true;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
            }
            namespace divider {
                let type_5: "boolean";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
            }
            namespace selected {
                let type_6: "boolean";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
            }
            namespace disabled {
                let type_7: "boolean";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
            }
            namespace attributes {
                let type_8: "object";
                export { type_8 as type };
                let required_8: false;
                export { required_8 as required };
                let description_8: string;
                export { description_8 as description };
            }
        }
    }
    export namespace value_1 {
        let type_9: "string";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
    }
    export { value_1 as value };
    export namespace disabled_1 {
        let type_10: "boolean";
        export { type_10 as type };
        let required_10: false;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
    }
    export { disabled_1 as disabled };
    export namespace describedBy {
        let type_11: "string";
        export { type_11 as type };
        let required_11: false;
        export { required_11 as required };
        let description_11: string;
        export { description_11 as description };
    }
    export namespace label {
        let type_12: "object";
        export { type_12 as type };
        let required_12: true;
        export { required_12 as required };
        let description_12: string;
        export { description_12 as description };
        export let isComponent: true;
    }
    export namespace hint {
        let type_13: "object";
        export { type_13 as type };
        let required_13: false;
        export { required_13 as required };
        let description_13: string;
        export { description_13 as description };
        let isComponent_1: true;
        export { isComponent_1 as isComponent };
    }
    export namespace errorMessage {
        let type_14: "object";
        export { type_14 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
        let isComponent_2: true;
        export { isComponent_2 as isComponent };
    }
    export namespace formGroup {
        let type_15: "object";
        export { type_15 as type };
        let required_15: false;
        export { required_15 as required };
        let description_15: string;
        export { description_15 as description };
        export namespace params_1 {
            export namespace classes {
                let type_16: "string";
                export { type_16 as type };
                let required_16: false;
                export { required_16 as required };
                let description_16: string;
                export { description_16 as description };
            }
            export namespace attributes_1 {
                let type_17: "object";
                export { type_17 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
            }
            export { attributes_1 as attributes };
            export namespace beforeInput {
                let type_18: "object";
                export { type_18 as type };
                let required_18: false;
                export { required_18 as required };
                let description_18: string;
                export { description_18 as description };
                export namespace params_2 {
                    export namespace text_1 {
                        let type_19: "string";
                        export { type_19 as type };
                        let required_19: true;
                        export { required_19 as required };
                        let description_19: string;
                        export { description_19 as description };
                    }
                    export { text_1 as text };
                    export namespace html {
                        let type_20: "string";
                        export { type_20 as type };
                        let required_20: true;
                        export { required_20 as required };
                        let description_20: string;
                        export { description_20 as description };
                    }
                }
                export { params_2 as params };
            }
            export namespace afterInput {
                let type_21: "object";
                export { type_21 as type };
                let required_21: false;
                export { required_21 as required };
                let description_21: string;
                export { description_21 as description };
                export namespace params_3 {
                    export namespace text_2 {
                        let type_22: "string";
                        export { type_22 as type };
                        let required_22: true;
                        export { required_22 as required };
                        let description_22: string;
                        export { description_22 as description };
                    }
                    export { text_2 as text };
                    export namespace html_1 {
                        let type_23: "string";
                        export { type_23 as type };
                        let required_23: true;
                        export { required_23 as required };
                        let description_23: string;
                        export { description_23 as description };
                    }
                    export { html_1 as html };
                }
                export { params_3 as params };
            }
        }
        export { params_1 as params };
    }
    export namespace classes_1 {
        let type_24: "string";
        export { type_24 as type };
        let required_24: false;
        export { required_24 as required };
        let description_24: string;
        export { description_24 as description };
    }
    export { classes_1 as classes };
    export namespace inputWrapper {
        let type_25: "object";
        export { type_25 as type };
        let required_25: false;
        export { required_25 as required };
        let description_25: string;
        export { description_25 as description };
        export namespace params_4 {
            export namespace classes_2 {
                let type_26: "string";
                export { type_26 as type };
                let required_26: false;
                export { required_26 as required };
                let description_26: string;
                export { description_26 as description };
            }
            export { classes_2 as classes };
            export namespace attributes_2 {
                let type_27: "object";
                export { type_27 as type };
                let required_27: false;
                export { required_27 as required };
                let description_27: string;
                export { description_27 as description };
            }
            export { attributes_2 as attributes };
        }
        export { params_4 as params };
    }
    export namespace attributes_3 {
        let type_28: "object";
        export { type_28 as type };
        let required_28: false;
        export { required_28 as required };
        let description_28: string;
        export { description_28 as description };
    }
    export { attributes_3 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map