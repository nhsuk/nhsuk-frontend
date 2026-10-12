export const name: "Pagination";
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
    export namespace items {
        let type_1: "array";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
        export namespace params {
            namespace number {
                let type_2: "string";
                export { type_2 as type };
                let required_2: false;
                export { required_2 as required };
                let description_2: string;
                export { description_2 as description };
                let released_2: string;
                export { released_2 as released };
            }
            namespace visuallyHiddenText {
                let type_3: "string";
                export { type_3 as type };
                let required_3: false;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
                let released_3: string;
                export { released_3 as released };
                export let deprecated: string;
            }
            namespace ariaLabel {
                let type_4: "string";
                export { type_4 as type };
                let required_4: false;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            namespace href {
                let type_5: "string";
                export { type_5 as type };
                let required_5: true;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            namespace current {
                let type_6: "boolean";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            namespace ellipsis {
                let type_7: "boolean";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
            namespace attributes {
                let type_8: "object";
                export { type_8 as type };
                let required_8: false;
                export { required_8 as required };
                let description_8: string;
                export { description_8 as description };
                let released_8: string;
                export { released_8 as released };
            }
        }
    }
    export namespace previous {
        let type_9: "object";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
        let released_9: string;
        export { released_9 as released };
        export namespace params_1 {
            export namespace text {
                let type_10: "string";
                export { type_10 as type };
                let required_10: false;
                export { required_10 as required };
                let description_10: string;
                export { description_10 as description };
                let released_10: string;
                export { released_10 as released };
            }
            export namespace html {
                let type_11: "string";
                export { type_11 as type };
                let required_11: false;
                export { required_11 as required };
                let description_11: string;
                export { description_11 as description };
                let released_11: string;
                export { released_11 as released };
            }
            export namespace labelText {
                let type_12: "string";
                export { type_12 as type };
                let required_12: false;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
                let released_12: string;
                export { released_12 as released };
                let deprecated_1: string;
                export { deprecated_1 as deprecated };
            }
            export namespace label {
                let type_13: "object";
                export { type_13 as type };
                let required_13: false;
                export { required_13 as required };
                let description_13: string;
                export { description_13 as description };
                let released_13: string;
                export { released_13 as released };
                export namespace params_2 {
                    export namespace text_1 {
                        let type_14: "string";
                        export { type_14 as type };
                        let required_14: true;
                        export { required_14 as required };
                        let description_14: string;
                        export { description_14 as description };
                        let released_14: string;
                        export { released_14 as released };
                    }
                    export { text_1 as text };
                    export namespace html_1 {
                        let type_15: "string";
                        export { type_15 as type };
                        let required_15: true;
                        export { required_15 as required };
                        let description_15: string;
                        export { description_15 as description };
                        let released_15: string;
                        export { released_15 as released };
                    }
                    export { html_1 as html };
                }
                export { params_2 as params };
            }
            export namespace href_1 {
                let type_16: "string";
                export { type_16 as type };
                let required_16: true;
                export { required_16 as required };
                let description_16: string;
                export { description_16 as description };
                let released_16: string;
                export { released_16 as released };
            }
            export { href_1 as href };
            export namespace attributes_1 {
                let type_17: "object";
                export { type_17 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
                let released_17: string;
                export { released_17 as released };
            }
            export { attributes_1 as attributes };
        }
        export { params_1 as params };
    }
    export namespace previousUrl {
        let type_18: "string";
        export { type_18 as type };
        let required_18: false;
        export { required_18 as required };
        let description_18: string;
        export { description_18 as description };
        let released_18: string;
        export { released_18 as released };
        let deprecated_2: string;
        export { deprecated_2 as deprecated };
    }
    export namespace previousPage {
        let type_19: "string";
        export { type_19 as type };
        let required_19: false;
        export { required_19 as required };
        let description_19: string;
        export { description_19 as description };
        let released_19: string;
        export { released_19 as released };
        let deprecated_3: string;
        export { deprecated_3 as deprecated };
    }
    export namespace next {
        let type_20: "object";
        export { type_20 as type };
        let required_20: false;
        export { required_20 as required };
        let description_20: string;
        export { description_20 as description };
        let released_20: string;
        export { released_20 as released };
        export namespace params_3 {
            export namespace text_2 {
                let type_21: "string";
                export { type_21 as type };
                let required_21: false;
                export { required_21 as required };
                let description_21: string;
                export { description_21 as description };
                let released_21: string;
                export { released_21 as released };
            }
            export { text_2 as text };
            export namespace html_2 {
                let type_22: "string";
                export { type_22 as type };
                let required_22: false;
                export { required_22 as required };
                let description_22: string;
                export { description_22 as description };
                let released_22: string;
                export { released_22 as released };
            }
            export { html_2 as html };
            export namespace labelText_1 {
                let type_23: "string";
                export { type_23 as type };
                let required_23: false;
                export { required_23 as required };
                let description_23: string;
                export { description_23 as description };
                let released_23: string;
                export { released_23 as released };
                let deprecated_4: string;
                export { deprecated_4 as deprecated };
            }
            export { labelText_1 as labelText };
            export namespace label_1 {
                let type_24: "object";
                export { type_24 as type };
                let required_24: false;
                export { required_24 as required };
                let description_24: string;
                export { description_24 as description };
                let released_24: string;
                export { released_24 as released };
                export namespace params_4 {
                    export namespace text_3 {
                        let type_25: "string";
                        export { type_25 as type };
                        let required_25: true;
                        export { required_25 as required };
                        let description_25: string;
                        export { description_25 as description };
                        let released_25: string;
                        export { released_25 as released };
                    }
                    export { text_3 as text };
                    export namespace html_3 {
                        let type_26: "string";
                        export { type_26 as type };
                        let required_26: true;
                        export { required_26 as required };
                        let description_26: string;
                        export { description_26 as description };
                        let released_26: string;
                        export { released_26 as released };
                    }
                    export { html_3 as html };
                }
                export { params_4 as params };
            }
            export { label_1 as label };
            export namespace href_2 {
                let type_27: "string";
                export { type_27 as type };
                let required_27: true;
                export { required_27 as required };
                let description_27: string;
                export { description_27 as description };
                let released_27: string;
                export { released_27 as released };
            }
            export { href_2 as href };
            export namespace attributes_2 {
                let type_28: "object";
                export { type_28 as type };
                let required_28: false;
                export { required_28 as required };
                let description_28: string;
                export { description_28 as description };
                let released_28: string;
                export { released_28 as released };
            }
            export { attributes_2 as attributes };
        }
        export { params_3 as params };
    }
    export namespace nextUrl {
        let type_29: "string";
        export { type_29 as type };
        let required_29: false;
        export { required_29 as required };
        let description_29: string;
        export { description_29 as description };
        let released_29: string;
        export { released_29 as released };
        let deprecated_5: string;
        export { deprecated_5 as deprecated };
    }
    export namespace nextPage {
        let type_30: "string";
        export { type_30 as type };
        let required_30: false;
        export { required_30 as required };
        let description_30: string;
        export { description_30 as description };
        let released_30: string;
        export { released_30 as released };
        let deprecated_6: string;
        export { deprecated_6 as deprecated };
    }
    export namespace landmarkLabel {
        let type_31: "string";
        export { type_31 as type };
        let required_31: false;
        export { required_31 as required };
        let description_31: string;
        export { description_31 as description };
        let released_31: string;
        export { released_31 as released };
        let deprecated_7: string;
        export { deprecated_7 as deprecated };
    }
    export namespace ariaLabel_1 {
        let type_32: "string";
        export { type_32 as type };
        let required_32: false;
        export { required_32 as required };
        let description_32: string;
        export { description_32 as description };
        let released_32: string;
        export { released_32 as released };
    }
    export { ariaLabel_1 as ariaLabel };
    export namespace classes {
        let type_33: "string";
        export { type_33 as type };
        let required_33: false;
        export { required_33 as required };
        let description_33: string;
        export { description_33 as description };
        let released_33: string;
        export { released_33 as released };
    }
    export namespace attributes_3 {
        let type_34: "object";
        export { type_34 as type };
        let required_34: false;
        export { required_34 as required };
        let description_34: string;
        export { description_34 as description };
        let released_34: string;
        export { released_34 as released };
    }
    export { attributes_3 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map