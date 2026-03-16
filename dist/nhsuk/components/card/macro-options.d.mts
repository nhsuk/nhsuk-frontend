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
    }
    export namespace heading {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
    }
    export namespace headingHtml {
        let type_2: "string";
        export { type_2 as type };
        let required_2: true;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
    }
    export namespace headingClasses {
        let type_3: "string";
        export { type_3 as type };
        let required_3: false;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
    }
    export namespace headingSize {
        let type_4: "string";
        export { type_4 as type };
        let required_4: false;
        export { required_4 as required };
        let description_4: string;
        export { description_4 as description };
    }
    export namespace headingLevel {
        let type_5: "integer";
        export { type_5 as type };
        let required_5: false;
        export { required_5 as required };
        let description_5: string;
        export { description_5 as description };
    }
    export namespace headingId {
        let type_6: "string";
        export { type_6 as type };
        let required_6: false;
        export { required_6 as required };
        let description_6: string;
        export { description_6 as description };
    }
    export namespace headingVisuallyHiddenText {
        let type_7: "string";
        export { type_7 as type };
        let required_7: false;
        export { required_7 as required };
        let description_7: string;
        export { description_7 as description };
    }
    export namespace href {
        let type_8: "string";
        export { type_8 as type };
        let required_8: false;
        export { required_8 as required };
        let description_8: string;
        export { description_8 as description };
    }
    export namespace clickable {
        let type_9: "boolean";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
    }
    export namespace type_10 {
        let type_11: "string";
        export { type_11 as type };
        let required_10: false;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
    }
    export { type_10 as type };
    export namespace feature {
        let type_12: "boolean";
        export { type_12 as type };
        let required_11: false;
        export { required_11 as required };
        let description_11: string;
        export { description_11 as description };
    }
    export namespace primary {
        let type_13: "boolean";
        export { type_13 as type };
        let required_12: false;
        export { required_12 as required };
        let description_12: string;
        export { description_12 as description };
    }
    export namespace secondary {
        let type_14: "boolean";
        export { type_14 as type };
        let required_13: false;
        export { required_13 as required };
        let description_13: string;
        export { description_13 as description };
    }
    export namespace warning {
        let type_15: "boolean";
        export { type_15 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
    }
    export namespace image {
        let type_16: "object";
        export { type_16 as type };
        let required_15: false;
        export { required_15 as required };
        let description_15: string;
        export { description_15 as description };
        export namespace params {
            namespace src {
                let type_17: "string";
                export { type_17 as type };
                let required_16: true;
                export { required_16 as required };
                let description_16: string;
                export { description_16 as description };
            }
            namespace alt {
                let type_18: "string";
                export { type_18 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
            }
            namespace html {
                let type_19: "string";
                export { type_19 as type };
                let required_18: false;
                export { required_18 as required };
                let description_18: string;
                export { description_18 as description };
            }
        }
    }
    export namespace description_19 {
        let type_20: "string";
        export { type_20 as type };
        let required_19: false;
        export { required_19 as required };
        let description_20: string;
        export { description_20 as description };
    }
    export { description_19 as description };
    export namespace descriptionHtml {
        let type_21: "string";
        export { type_21 as type };
        let required_20: false;
        export { required_20 as required };
        let description_21: string;
        export { description_21 as description };
    }
    export namespace actions {
        let type_22: "object";
        export { type_22 as type };
        let required_21: false;
        export { required_21 as required };
        let description_22: string;
        export { description_22 as description };
        export namespace params_1 {
            export namespace items {
                let type_23: "array";
                export { type_23 as type };
                let required_22: false;
                export { required_22 as required };
                let description_23: string;
                export { description_23 as description };
                export namespace params_2 {
                    export namespace href_1 {
                        let type_24: "string";
                        export { type_24 as type };
                        let required_23: true;
                        export { required_23 as required };
                        let description_24: string;
                        export { description_24 as description };
                    }
                    export { href_1 as href };
                    export namespace text {
                        let type_25: "string";
                        export { type_25 as type };
                        let required_24: true;
                        export { required_24 as required };
                        let description_25: string;
                        export { description_25 as description };
                    }
                    export namespace html_1 {
                        let type_26: "string";
                        export { type_26 as type };
                        let required_25: true;
                        export { required_25 as required };
                        let description_26: string;
                        export { description_26 as description };
                    }
                    export { html_1 as html };
                    export namespace visuallyHiddenText {
                        let type_27: "string";
                        export { type_27 as type };
                        let required_26: false;
                        export { required_26 as required };
                        let description_27: string;
                        export { description_27 as description };
                    }
                    export namespace classes {
                        let type_28: "string";
                        export { type_28 as type };
                        let required_27: false;
                        export { required_27 as required };
                        let description_28: string;
                        export { description_28 as description };
                    }
                    export namespace attributes {
                        let type_29: "object";
                        export { type_29 as type };
                        let required_28: false;
                        export { required_28 as required };
                        let description_29: string;
                        export { description_29 as description };
                    }
                }
                export { params_2 as params };
            }
            export namespace classes_1 {
                let type_30: "string";
                export { type_30 as type };
                let required_29: false;
                export { required_29 as required };
                let description_30: string;
                export { description_30 as description };
            }
            export { classes_1 as classes };
        }
        export { params_1 as params };
    }
    export namespace caller {
        let type_31: "nunjucks-block";
        export { type_31 as type };
        let required_30: false;
        export { required_30 as required };
        let description_31: string;
        export { description_31 as description };
    }
    export namespace classes_2 {
        let type_32: "string";
        export { type_32 as type };
        let required_31: false;
        export { required_31 as required };
        let description_32: string;
        export { description_32 as description };
    }
    export { classes_2 as classes };
    export namespace attributes_1 {
        let type_33: "object";
        export { type_33 as type };
        let required_32: false;
        export { required_32 as required };
        let description_33: string;
        export { description_33 as description };
    }
    export { attributes_1 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map