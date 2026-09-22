export const name: "Warning callout";
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
            export namespace level {
                let type_6: "integer";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            export namespace classes {
                let type_7: "string";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
            export namespace attributes {
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
    export namespace headingLevel {
        let type_9: "integer";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
        let released_9: string;
        export { released_9 as released };
        export let deprecated: string;
    }
    export namespace headingClasses {
        let type_10: "string";
        export { type_10 as type };
        let required_10: false;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
        let released_10: string;
        export { released_10 as released };
        let deprecated_1: string;
        export { deprecated_1 as deprecated };
    }
    export namespace text_1 {
        let type_11: "string";
        export { type_11 as type };
        let required_11: true;
        export { required_11 as required };
        let description_11: string;
        export { description_11 as description };
        let released_11: string;
        export { released_11 as released };
    }
    export { text_1 as text };
    export namespace html_1 {
        let type_12: "string";
        export { type_12 as type };
        let required_12: true;
        export { required_12 as required };
        let description_12: string;
        export { description_12 as description };
        let released_12: string;
        export { released_12 as released };
    }
    export { html_1 as html };
    export namespace actions {
        let type_13: "object";
        export { type_13 as type };
        let required_13: false;
        export { required_13 as required };
        let description_13: string;
        export { description_13 as description };
        let released_13: string;
        export { released_13 as released };
        export namespace params_1 {
            export namespace items {
                let type_14: "array";
                export { type_14 as type };
                let required_14: false;
                export { required_14 as required };
                let description_14: string;
                export { description_14 as description };
                let released_14: string;
                export { released_14 as released };
                export namespace params_2 {
                    export namespace id_2 {
                        let type_15: "string";
                        export { type_15 as type };
                        let required_15: false;
                        export { required_15 as required };
                        let description_15: string;
                        export { description_15 as description };
                        let released_15: string;
                        export { released_15 as released };
                    }
                    export { id_2 as id };
                    export namespace text_2 {
                        let type_16: "string";
                        export { type_16 as type };
                        let required_16: true;
                        export { required_16 as required };
                        let description_16: string;
                        export { description_16 as description };
                        let released_16: string;
                        export { released_16 as released };
                    }
                    export { text_2 as text };
                    export namespace html_2 {
                        let type_17: "string";
                        export { type_17 as type };
                        let required_17: true;
                        export { required_17 as required };
                        let description_17: string;
                        export { description_17 as description };
                        let released_17: string;
                        export { released_17 as released };
                    }
                    export { html_2 as html };
                    export namespace visuallyHiddenText_1 {
                        let type_18: "string";
                        export { type_18 as type };
                        let required_18: false;
                        export { required_18 as required };
                        let description_18: string;
                        export { description_18 as description };
                        let released_18: string;
                        export { released_18 as released };
                    }
                    export { visuallyHiddenText_1 as visuallyHiddenText };
                    export namespace name {
                        let type_19: "string";
                        export { type_19 as type };
                        let required_19: false;
                        export { required_19 as required };
                        let description_19: string;
                        export { description_19 as description };
                        let released_19: string;
                        export { released_19 as released };
                    }
                    export namespace type_20 {
                        let type_21: "string";
                        export { type_21 as type };
                        let required_20: false;
                        export { required_20 as required };
                        let description_20: string;
                        export { description_20 as description };
                        let released_20: string;
                        export { released_20 as released };
                    }
                    export { type_20 as type };
                    export namespace value {
                        let type_22: "string";
                        export { type_22 as type };
                        let required_21: false;
                        export { required_21 as required };
                        let description_21: string;
                        export { description_21 as description };
                        let released_21: string;
                        export { released_21 as released };
                    }
                    export namespace href {
                        let type_23: "string";
                        export { type_23 as type };
                        let required_22: true;
                        export { required_22 as required };
                        let description_22: string;
                        export { description_22 as description };
                        let released_22: string;
                        export { released_22 as released };
                    }
                    export namespace classes_1 {
                        let type_24: "string";
                        export { type_24 as type };
                        let required_23: false;
                        export { required_23 as required };
                        let description_23: string;
                        export { description_23 as description };
                        let released_23: string;
                        export { released_23 as released };
                    }
                    export { classes_1 as classes };
                    export namespace attributes_1 {
                        let type_25: "object";
                        export { type_25 as type };
                        let required_24: false;
                        export { required_24 as required };
                        let description_24: string;
                        export { description_24 as description };
                        let released_24: string;
                        export { released_24 as released };
                    }
                    export { attributes_1 as attributes };
                }
                export { params_2 as params };
            }
            export namespace classes_2 {
                let type_26: "string";
                export { type_26 as type };
                let required_25: false;
                export { required_25 as required };
                let description_25: string;
                export { description_25 as description };
                let released_25: string;
                export { released_25 as released };
            }
            export { classes_2 as classes };
        }
        export { params_1 as params };
    }
    export namespace caller {
        let type_27: "nunjucks-block";
        export { type_27 as type };
        let required_26: false;
        export { required_26 as required };
        let description_26: string;
        export { description_26 as description };
        let released_26: string;
        export { released_26 as released };
    }
    export namespace classes_3 {
        let type_28: "string";
        export { type_28 as type };
        let required_27: false;
        export { required_27 as required };
        let description_27: string;
        export { description_27 as description };
        let released_27: string;
        export { released_27 as released };
    }
    export { classes_3 as classes };
    export namespace attributes_2 {
        let type_29: "object";
        export { type_29 as type };
        let required_28: false;
        export { required_28 as required };
        let description_28: string;
        export { description_28 as description };
        let released_28: string;
        export { released_28 as released };
    }
    export { attributes_2 as attributes };
    export namespace visuallyHiddenText_2 {
        let type_30: "string";
        export { type_30 as type };
        let required_29: false;
        export { required_29 as required };
        let description_29: string;
        export { description_29 as description };
        let released_29: string;
        export { released_29 as released };
    }
    export { visuallyHiddenText_2 as visuallyHiddenText };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map