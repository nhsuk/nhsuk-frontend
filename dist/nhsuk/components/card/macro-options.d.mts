export const name: "Card";
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
    export namespace heading {
        let type_1: "object";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
        export let isComponent: true;
        export namespace params {
            export namespace id_1 {
                let type_2: "string";
                export { type_2 as type };
                let required_2: false;
                export { required_2 as required };
                let description_2: string;
                export { description_2 as description };
                let released_2: string;
                export { released_2 as released };
            }
            export { id_1 as id };
            export namespace text {
                let type_3: "string";
                export { type_3 as type };
                let required_3: true;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
                let released_3: string;
                export { released_3 as released };
            }
            export namespace html {
                let type_4: "string";
                export { type_4 as type };
                let required_4: true;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            export namespace visuallyHiddenText {
                let type_5: "string";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            export namespace size {
                let type_6: "string";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            export namespace level {
                let type_7: "integer";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
            export namespace classes {
                let type_8: "string";
                export { type_8 as type };
                let required_8: false;
                export { required_8 as required };
                let description_8: string;
                export { description_8 as description };
                let released_8: string;
                export { released_8 as released };
            }
            export namespace attributes {
                let type_9: "object";
                export { type_9 as type };
                let required_9: false;
                export { required_9 as required };
                let description_9: string;
                export { description_9 as description };
                let released_9: string;
                export { released_9 as released };
            }
        }
    }
    export namespace headingHtml {
        let type_10: "string";
        export { type_10 as type };
        let required_10: true;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
        let released_10: string;
        export { released_10 as released };
        export let deprecated: string;
    }
    export namespace headingClasses {
        let type_11: "string";
        export { type_11 as type };
        let required_11: false;
        export { required_11 as required };
        let description_11: string;
        export { description_11 as description };
        let released_11: string;
        export { released_11 as released };
        let deprecated_1: string;
        export { deprecated_1 as deprecated };
    }
    export namespace headingSize {
        let type_12: "string";
        export { type_12 as type };
        let required_12: false;
        export { required_12 as required };
        let description_12: string;
        export { description_12 as description };
        let released_12: string;
        export { released_12 as released };
        let deprecated_2: string;
        export { deprecated_2 as deprecated };
    }
    export namespace headingLevel {
        let type_13: "integer";
        export { type_13 as type };
        let required_13: false;
        export { required_13 as required };
        let description_13: string;
        export { description_13 as description };
        let released_13: string;
        export { released_13 as released };
        let deprecated_3: string;
        export { deprecated_3 as deprecated };
    }
    export namespace headingId {
        let type_14: "string";
        export { type_14 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
        let released_14: string;
        export { released_14 as released };
        let deprecated_4: string;
        export { deprecated_4 as deprecated };
    }
    export namespace headingVisuallyHiddenText {
        let type_15: "string";
        export { type_15 as type };
        let required_15: false;
        export { required_15 as required };
        let description_15: string;
        export { description_15 as description };
        let released_15: string;
        export { released_15 as released };
        let deprecated_5: string;
        export { deprecated_5 as deprecated };
    }
    export namespace href {
        let type_16: "string";
        export { type_16 as type };
        let required_16: false;
        export { required_16 as required };
        let description_16: string;
        export { description_16 as description };
        let released_16: string;
        export { released_16 as released };
    }
    export namespace clickable {
        let type_17: "boolean";
        export { type_17 as type };
        let required_17: false;
        export { required_17 as required };
        let description_17: string;
        export { description_17 as description };
        let released_17: string;
        export { released_17 as released };
    }
    export namespace variant {
        let type_18: "string";
        export { type_18 as type };
        let required_18: false;
        export { required_18 as required };
        let description_18: string;
        export { description_18 as description };
        let released_18: string;
        export { released_18 as released };
    }
    export namespace type_19 {
        let type_20: "string";
        export { type_20 as type };
        let required_19: false;
        export { required_19 as required };
        let description_19: string;
        export { description_19 as description };
        let released_19: string;
        export { released_19 as released };
        let deprecated_6: string;
        export { deprecated_6 as deprecated };
    }
    export { type_19 as type };
    export namespace feature {
        let type_21: "boolean";
        export { type_21 as type };
        let required_20: false;
        export { required_20 as required };
        let description_20: string;
        export { description_20 as description };
        let released_20: string;
        export { released_20 as released };
        let deprecated_7: string;
        export { deprecated_7 as deprecated };
    }
    export namespace primary {
        let type_22: "boolean";
        export { type_22 as type };
        let required_21: false;
        export { required_21 as required };
        let description_21: string;
        export { description_21 as description };
        let released_21: string;
        export { released_21 as released };
        let deprecated_8: string;
        export { deprecated_8 as deprecated };
    }
    export namespace secondary {
        let type_23: "boolean";
        export { type_23 as type };
        let required_22: false;
        export { required_22 as required };
        let description_22: string;
        export { description_22 as description };
        let released_22: string;
        export { released_22 as released };
        let deprecated_9: string;
        export { deprecated_9 as deprecated };
    }
    export namespace warning {
        let type_24: "boolean";
        export { type_24 as type };
        let required_23: false;
        export { required_23 as required };
        let description_23: string;
        export { description_23 as description };
        let released_23: string;
        export { released_23 as released };
        let deprecated_10: string;
        export { deprecated_10 as deprecated };
    }
    export namespace imgURL {
        let type_25: "string";
        export { type_25 as type };
        let required_24: false;
        export { required_24 as required };
        let description_24: string;
        export { description_24 as description };
        let released_24: string;
        export { released_24 as released };
        let deprecated_11: string;
        export { deprecated_11 as deprecated };
    }
    export namespace imgALT {
        let type_26: "string";
        export { type_26 as type };
        let required_25: false;
        export { required_25 as required };
        let description_25: string;
        export { description_25 as description };
        let released_25: string;
        export { released_25 as released };
        let deprecated_12: string;
        export { deprecated_12 as deprecated };
    }
    export namespace image {
        let type_27: "object";
        export { type_27 as type };
        let required_26: false;
        export { required_26 as required };
        let description_26: string;
        export { description_26 as description };
        let released_26: string;
        export { released_26 as released };
        export namespace params_1 {
            export namespace src {
                let type_28: "string";
                export { type_28 as type };
                let required_27: true;
                export { required_27 as required };
                let description_27: string;
                export { description_27 as description };
                let released_27: string;
                export { released_27 as released };
            }
            export namespace alt {
                let type_29: "string";
                export { type_29 as type };
                let required_28: false;
                export { required_28 as required };
                let description_28: string;
                export { description_28 as description };
                let released_28: string;
                export { released_28 as released };
            }
            export namespace html_1 {
                let type_30: "string";
                export { type_30 as type };
                let required_29: false;
                export { required_29 as required };
                let description_29: string;
                export { description_29 as description };
                let released_29: string;
                export { released_29 as released };
            }
            export { html_1 as html };
        }
        export { params_1 as params };
    }
    export namespace description_30 {
        let type_31: "object";
        export { type_31 as type };
        let required_30: false;
        export { required_30 as required };
        let description_31: string;
        export { description_31 as description };
        let released_30: string;
        export { released_30 as released };
        export namespace params_2 {
            export namespace text_1 {
                let type_32: "string";
                export { type_32 as type };
                let required_31: true;
                export { required_31 as required };
                let description_32: string;
                export { description_32 as description };
                let released_31: string;
                export { released_31 as released };
            }
            export { text_1 as text };
            export namespace html_2 {
                let type_33: "string";
                export { type_33 as type };
                let required_32: true;
                export { required_32 as required };
                let description_33: string;
                export { description_33 as description };
                let released_32: string;
                export { released_32 as released };
            }
            export { html_2 as html };
            export namespace classes_1 {
                let type_34: "string";
                export { type_34 as type };
                let required_33: false;
                export { required_33 as required };
                let description_34: string;
                export { description_34 as description };
                let released_33: string;
                export { released_33 as released };
            }
            export { classes_1 as classes };
            export namespace attributes_1 {
                let type_35: "object";
                export { type_35 as type };
                let required_34: false;
                export { required_34 as required };
                let description_35: string;
                export { description_35 as description };
                let released_34: string;
                export { released_34 as released };
            }
            export { attributes_1 as attributes };
        }
        export { params_2 as params };
    }
    export { description_30 as description };
    export namespace descriptionHtml {
        let type_36: "string";
        export { type_36 as type };
        let required_35: false;
        export { required_35 as required };
        let description_36: string;
        export { description_36 as description };
        let released_35: string;
        export { released_35 as released };
        let deprecated_13: string;
        export { deprecated_13 as deprecated };
    }
    export namespace actions {
        let type_37: "object";
        export { type_37 as type };
        let required_36: false;
        export { required_36 as required };
        let description_37: string;
        export { description_37 as description };
        let released_36: string;
        export { released_36 as released };
        export namespace params_3 {
            export namespace items {
                let type_38: "array";
                export { type_38 as type };
                let required_37: false;
                export { required_37 as required };
                let description_38: string;
                export { description_38 as description };
                let released_37: string;
                export { released_37 as released };
                export namespace params_4 {
                    export namespace id_2 {
                        let type_39: "string";
                        export { type_39 as type };
                        let required_38: false;
                        export { required_38 as required };
                        let description_39: string;
                        export { description_39 as description };
                        let released_38: string;
                        export { released_38 as released };
                    }
                    export { id_2 as id };
                    export namespace text_2 {
                        let type_40: "string";
                        export { type_40 as type };
                        let required_39: true;
                        export { required_39 as required };
                        let description_40: string;
                        export { description_40 as description };
                        let released_39: string;
                        export { released_39 as released };
                    }
                    export { text_2 as text };
                    export namespace html_3 {
                        let type_41: "string";
                        export { type_41 as type };
                        let required_40: true;
                        export { required_40 as required };
                        let description_41: string;
                        export { description_41 as description };
                        let released_40: string;
                        export { released_40 as released };
                    }
                    export { html_3 as html };
                    export namespace visuallyHiddenText_1 {
                        let type_42: "string";
                        export { type_42 as type };
                        let required_41: false;
                        export { required_41 as required };
                        let description_42: string;
                        export { description_42 as description };
                        let released_41: string;
                        export { released_41 as released };
                    }
                    export { visuallyHiddenText_1 as visuallyHiddenText };
                    export namespace name {
                        let type_43: "string";
                        export { type_43 as type };
                        let required_42: false;
                        export { required_42 as required };
                        let description_43: string;
                        export { description_43 as description };
                        let released_42: string;
                        export { released_42 as released };
                    }
                    export namespace type_44 {
                        let type_45: "string";
                        export { type_45 as type };
                        let required_43: false;
                        export { required_43 as required };
                        let description_44: string;
                        export { description_44 as description };
                        let released_43: string;
                        export { released_43 as released };
                    }
                    export { type_44 as type };
                    export namespace value {
                        let type_46: "string";
                        export { type_46 as type };
                        let required_44: false;
                        export { required_44 as required };
                        let description_45: string;
                        export { description_45 as description };
                        let released_44: string;
                        export { released_44 as released };
                    }
                    export namespace href_1 {
                        let type_47: "string";
                        export { type_47 as type };
                        let required_45: true;
                        export { required_45 as required };
                        let description_46: string;
                        export { description_46 as description };
                        let released_45: string;
                        export { released_45 as released };
                    }
                    export { href_1 as href };
                    export namespace classes_2 {
                        let type_48: "string";
                        export { type_48 as type };
                        let required_46: false;
                        export { required_46 as required };
                        let description_47: string;
                        export { description_47 as description };
                        let released_46: string;
                        export { released_46 as released };
                    }
                    export { classes_2 as classes };
                    export namespace attributes_2 {
                        let type_49: "object";
                        export { type_49 as type };
                        let required_47: false;
                        export { required_47 as required };
                        let description_48: string;
                        export { description_48 as description };
                        let released_47: string;
                        export { released_47 as released };
                    }
                    export { attributes_2 as attributes };
                }
                export { params_4 as params };
            }
            export namespace classes_3 {
                let type_50: "string";
                export { type_50 as type };
                let required_48: false;
                export { required_48 as required };
                let description_49: string;
                export { description_49 as description };
                let released_48: string;
                export { released_48 as released };
            }
            export { classes_3 as classes };
        }
        export { params_3 as params };
    }
    export namespace caller {
        let type_51: "nunjucks-block";
        export { type_51 as type };
        let required_49: false;
        export { required_49 as required };
        let description_50: string;
        export { description_50 as description };
        let released_49: string;
        export { released_49 as released };
    }
    export namespace classes_4 {
        let type_52: "string";
        export { type_52 as type };
        let required_50: false;
        export { required_50 as required };
        let description_51: string;
        export { description_51 as description };
        let released_50: string;
        export { released_50 as released };
    }
    export { classes_4 as classes };
    export namespace attributes_3 {
        let type_53: "object";
        export { type_53 as type };
        let required_51: false;
        export { required_51 as required };
        let description_52: string;
        export { description_52 as description };
        let released_51: string;
        export { released_51 as released };
    }
    export { attributes_3 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map