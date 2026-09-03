export const name: "Summary list";
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
    export namespace border {
        let type_1: "boolean";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    export namespace lastRowBorder {
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
        let type_3: "array";
        export { type_3 as type };
        let required_3: true;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        let released_3: string;
        export { released_3 as released };
        export namespace params {
            export namespace id_1 {
                let type_4: "string";
                export { type_4 as type };
                let required_4: false;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            export { id_1 as id };
            export namespace classes {
                let type_5: "string";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            export namespace attributes {
                let type_6: "string";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            export namespace border_1 {
                let type_7: "boolean";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
            export { border_1 as border };
            export namespace key {
                let type_8: "object";
                export { type_8 as type };
                let required_8: true;
                export { required_8 as required };
                let description_8: string;
                export { description_8 as description };
                let released_8: string;
                export { released_8 as released };
                export namespace params_1 {
                    export namespace id_2 {
                        let type_9: "string";
                        export { type_9 as type };
                        let required_9: false;
                        export { required_9 as required };
                        let description_9: string;
                        export { description_9 as description };
                        let released_9: string;
                        export { released_9 as released };
                    }
                    export { id_2 as id };
                    export namespace text {
                        let type_10: "string";
                        export { type_10 as type };
                        let required_10: true;
                        export { required_10 as required };
                        let description_10: string;
                        export { description_10 as description };
                        let released_10: string;
                        export { released_10 as released };
                    }
                    export namespace html {
                        let type_11: "string";
                        export { type_11 as type };
                        let required_11: true;
                        export { required_11 as required };
                        let description_11: string;
                        export { description_11 as description };
                        let released_11: string;
                        export { released_11 as released };
                    }
                    export namespace width {
                        let type_12: "string";
                        export { type_12 as type };
                        let required_12: false;
                        export { required_12 as required };
                        let description_12: string;
                        export { description_12 as description };
                        let released_12: string;
                        export { released_12 as released };
                    }
                    export namespace classes_1 {
                        let type_13: "string";
                        export { type_13 as type };
                        let required_13: false;
                        export { required_13 as required };
                        let description_13: string;
                        export { description_13 as description };
                        let released_13: string;
                        export { released_13 as released };
                    }
                    export { classes_1 as classes };
                    export namespace attributes_1 {
                        let type_14: "string";
                        export { type_14 as type };
                        let required_14: false;
                        export { required_14 as required };
                        let description_14: string;
                        export { description_14 as description };
                        let released_14: string;
                        export { released_14 as released };
                    }
                    export { attributes_1 as attributes };
                }
                export { params_1 as params };
            }
            export namespace value {
                let type_15: "object";
                export { type_15 as type };
                let required_15: true;
                export { required_15 as required };
                let description_15: string;
                export { description_15 as description };
                let released_15: string;
                export { released_15 as released };
                export namespace params_2 {
                    export namespace id_3 {
                        let type_16: "string";
                        export { type_16 as type };
                        let required_16: false;
                        export { required_16 as required };
                        let description_16: string;
                        export { description_16 as description };
                        let released_16: string;
                        export { released_16 as released };
                    }
                    export { id_3 as id };
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
                    export namespace width_1 {
                        let type_19: "string";
                        export { type_19 as type };
                        let required_19: false;
                        export { required_19 as required };
                        let description_19: string;
                        export { description_19 as description };
                        let released_19: string;
                        export { released_19 as released };
                    }
                    export { width_1 as width };
                    export namespace classes_2 {
                        let type_20: "string";
                        export { type_20 as type };
                        let required_20: false;
                        export { required_20 as required };
                        let description_20: string;
                        export { description_20 as description };
                        let released_20: string;
                        export { released_20 as released };
                    }
                    export { classes_2 as classes };
                    export namespace attributes_2 {
                        let type_21: "string";
                        export { type_21 as type };
                        let required_21: false;
                        export { required_21 as required };
                        let description_21: string;
                        export { description_21 as description };
                        let released_21: string;
                        export { released_21 as released };
                    }
                    export { attributes_2 as attributes };
                }
                export { params_2 as params };
            }
            export namespace actions {
                let type_22: "object";
                export { type_22 as type };
                let required_22: false;
                export { required_22 as required };
                let description_22: string;
                export { description_22 as description };
                let released_22: string;
                export { released_22 as released };
                export namespace params_3 {
                    export namespace items {
                        let type_23: "array";
                        export { type_23 as type };
                        let required_23: false;
                        export { required_23 as required };
                        let description_23: string;
                        export { description_23 as description };
                        let released_23: string;
                        export { released_23 as released };
                        export namespace params_4 {
                            export namespace id_4 {
                                let type_24: "string";
                                export { type_24 as type };
                                let required_24: false;
                                export { required_24 as required };
                                let description_24: string;
                                export { description_24 as description };
                                let released_24: string;
                                export { released_24 as released };
                            }
                            export { id_4 as id };
                            export namespace text_2 {
                                let type_25: "string";
                                export { type_25 as type };
                                let required_25: true;
                                export { required_25 as required };
                                let description_25: string;
                                export { description_25 as description };
                                let released_25: string;
                                export { released_25 as released };
                            }
                            export { text_2 as text };
                            export namespace html_2 {
                                let type_26: "string";
                                export { type_26 as type };
                                let required_26: true;
                                export { required_26 as required };
                                let description_26: string;
                                export { description_26 as description };
                                let released_26: string;
                                export { released_26 as released };
                            }
                            export { html_2 as html };
                            export namespace visuallyHiddenText {
                                let type_27: "string";
                                export { type_27 as type };
                                let required_27: false;
                                export { required_27 as required };
                                let description_27: string;
                                export { description_27 as description };
                                let released_27: string;
                                export { released_27 as released };
                            }
                            export namespace name {
                                let type_28: "string";
                                export { type_28 as type };
                                let required_28: false;
                                export { required_28 as required };
                                let description_28: string;
                                export { description_28 as description };
                                let released_28: string;
                                export { released_28 as released };
                            }
                            export namespace type_29 {
                                let type_30: "string";
                                export { type_30 as type };
                                let required_29: false;
                                export { required_29 as required };
                                let description_29: string;
                                export { description_29 as description };
                                let released_29: string;
                                export { released_29 as released };
                            }
                            export { type_29 as type };
                            export namespace value_1 {
                                let type_31: "string";
                                export { type_31 as type };
                                let required_30: false;
                                export { required_30 as required };
                                let description_30: string;
                                export { description_30 as description };
                                let released_30: string;
                                export { released_30 as released };
                            }
                            export { value_1 as value };
                            export namespace href {
                                let type_32: "string";
                                export { type_32 as type };
                                let required_31: true;
                                export { required_31 as required };
                                let description_31: string;
                                export { description_31 as description };
                                let released_31: string;
                                export { released_31 as released };
                            }
                            export namespace classes_3 {
                                let type_33: "string";
                                export { type_33 as type };
                                let required_32: false;
                                export { required_32 as required };
                                let description_32: string;
                                export { description_32 as description };
                                let released_32: string;
                                export { released_32 as released };
                            }
                            export { classes_3 as classes };
                            export namespace attributes_3 {
                                let type_34: "object";
                                export { type_34 as type };
                                let required_33: false;
                                export { required_33 as required };
                                let description_33: string;
                                export { description_33 as description };
                                let released_33: string;
                                export { released_33 as released };
                            }
                            export { attributes_3 as attributes };
                        }
                        export { params_4 as params };
                    }
                    export namespace width_2 {
                        let type_35: "string";
                        export { type_35 as type };
                        let required_34: false;
                        export { required_34 as required };
                        let description_34: string;
                        export { description_34 as description };
                        let released_34: string;
                        export { released_34 as released };
                    }
                    export { width_2 as width };
                    export namespace classes_4 {
                        let type_36: "string";
                        export { type_36 as type };
                        let required_35: false;
                        export { required_35 as required };
                        let description_35: string;
                        export { description_35 as description };
                        let released_35: string;
                        export { released_35 as released };
                    }
                    export { classes_4 as classes };
                    export namespace attributes_4 {
                        let type_37: "string";
                        export { type_37 as type };
                        let required_36: false;
                        export { required_36 as required };
                        let description_36: string;
                        export { description_36 as description };
                        let released_36: string;
                        export { released_36 as released };
                    }
                    export { attributes_4 as attributes };
                }
                export { params_3 as params };
            }
        }
    }
    export namespace html_3 {
        let type_38: "string";
        export { type_38 as type };
        let required_37: false;
        export { required_37 as required };
        let description_37: string;
        export { description_37 as description };
        let released_37: string;
        export { released_37 as released };
    }
    export { html_3 as html };
    export namespace caller {
        let type_39: "nunjucks-block";
        export { type_39 as type };
        let required_38: false;
        export { required_38 as required };
        let description_38: string;
        export { description_38 as description };
        let released_38: string;
        export { released_38 as released };
    }
    export namespace card {
        let type_40: "object";
        export { type_40 as type };
        let required_39: false;
        export { required_39 as required };
        let description_39: string;
        export { description_39 as description };
        let released_39: string;
        export { released_39 as released };
        export let isComponent: true;
    }
    export namespace classes_5 {
        let type_41: "string";
        export { type_41 as type };
        let required_40: false;
        export { required_40 as required };
        let description_40: string;
        export { description_40 as description };
        let released_40: string;
        export { released_40 as released };
    }
    export { classes_5 as classes };
    export namespace attributes_5 {
        let type_42: "object";
        export { type_42 as type };
        let required_41: false;
        export { required_41 as required };
        let description_41: string;
        export { description_41 as description };
        let released_41: string;
        export { released_41 as released };
    }
    export { attributes_5 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map