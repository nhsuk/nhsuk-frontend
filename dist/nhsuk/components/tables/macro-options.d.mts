export const name: "Tables";
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
    namespace rows {
        let type_1: "array";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
        export namespace params {
            namespace text {
                let type_2: "string";
                export { type_2 as type };
                let required_2: true;
                export { required_2 as required };
                let description_2: string;
                export { description_2 as description };
                let released_2: string;
                export { released_2 as released };
            }
            namespace html {
                let type_3: "string";
                export { type_3 as type };
                let required_3: true;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
                let released_3: string;
                export { released_3 as released };
            }
            namespace header {
                let type_4: "string";
                export { type_4 as type };
                let required_4: false;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            namespace format {
                let type_5: "string";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            namespace colspan {
                let type_6: "integer";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
            namespace rowspan {
                let type_7: "integer";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                let released_7: string;
                export { released_7 as released };
            }
        }
    }
    namespace head {
        let type_8: "array";
        export { type_8 as type };
        let required_8: false;
        export { required_8 as required };
        let description_8: string;
        export { description_8 as description };
        let released_8: string;
        export { released_8 as released };
        export namespace params_1 {
            export namespace text_1 {
                let type_9: "string";
                export { type_9 as type };
                let required_9: false;
                export { required_9 as required };
                let description_9: string;
                export { description_9 as description };
                let released_9: string;
                export { released_9 as released };
            }
            export { text_1 as text };
            export namespace html_1 {
                let type_10: "string";
                export { type_10 as type };
                let required_10: false;
                export { required_10 as required };
                let description_10: string;
                export { description_10 as description };
                let released_10: string;
                export { released_10 as released };
            }
            export { html_1 as html };
            export namespace format_1 {
                let type_11: "string";
                export { type_11 as type };
                let required_11: false;
                export { required_11 as required };
                let description_11: string;
                export { description_11 as description };
                let released_11: string;
                export { released_11 as released };
            }
            export { format_1 as format };
            export namespace colspan_1 {
                let type_12: "integer";
                export { type_12 as type };
                let required_12: false;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
                let released_12: string;
                export { released_12 as released };
            }
            export { colspan_1 as colspan };
            export namespace rowspan_1 {
                let type_13: "integer";
                export { type_13 as type };
                let required_13: false;
                export { required_13 as required };
                let description_13: string;
                export { description_13 as description };
                let released_13: string;
                export { released_13 as released };
            }
            export { rowspan_1 as rowspan };
        }
        export { params_1 as params };
    }
    namespace caption {
        let type_14: "string";
        export { type_14 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
        let released_14: string;
        export { released_14 as released };
    }
    namespace captionClasses {
        let type_15: "string";
        export { type_15 as type };
        let required_15: false;
        export { required_15 as required };
        let description_15: string;
        export { description_15 as description };
        let released_15: string;
        export { released_15 as released };
    }
    namespace captionSize {
        let type_16: "string";
        export { type_16 as type };
        let required_16: false;
        export { required_16 as required };
        let description_16: string;
        export { description_16 as description };
        let released_16: string;
        export { released_16 as released };
    }
    namespace firstCellIsHeader {
        let type_17: "boolean";
        export { type_17 as type };
        let required_17: false;
        export { required_17 as required };
        let description_17: string;
        export { description_17 as description };
        let released_17: string;
        export { released_17 as released };
    }
    namespace responsive {
        let type_18: "boolean";
        export { type_18 as type };
        let required_18: false;
        export { required_18 as required };
        let description_18: string;
        export { description_18 as description };
        let released_18: string;
        export { released_18 as released };
    }
    namespace variant {
        let type_19: "string";
        export { type_19 as type };
        let required_19: false;
        export { required_19 as required };
        let description_19: string;
        export { description_19 as description };
        let released_19: string;
        export { released_19 as released };
    }
    namespace card {
        let type_20: "object";
        export { type_20 as type };
        let required_20: false;
        export { required_20 as required };
        let description_20: string;
        export { description_20 as description };
        let released_20: string;
        export { released_20 as released };
        export let isComponent: true;
    }
    namespace panel {
        let type_21: "boolean";
        export { type_21 as type };
        let required_21: false;
        export { required_21 as required };
        let description_21: string;
        export { description_21 as description };
        let released_21: string;
        export { released_21 as released };
        export let deprecated: string;
    }
    namespace panelClasses {
        let type_22: "string";
        export { type_22 as type };
        let required_22: false;
        export { required_22 as required };
        let description_22: string;
        export { description_22 as description };
        let released_22: string;
        export { released_22 as released };
        let deprecated_1: string;
        export { deprecated_1 as deprecated };
    }
    namespace heading {
        let type_23: "string";
        export { type_23 as type };
        let required_23: false;
        export { required_23 as required };
        let description_23: string;
        export { description_23 as description };
        let released_23: string;
        export { released_23 as released };
        let deprecated_2: string;
        export { deprecated_2 as deprecated };
    }
    namespace headingLevel {
        let type_24: "integer";
        export { type_24 as type };
        let required_24: false;
        export { required_24 as required };
        let description_24: string;
        export { description_24 as description };
        let released_24: string;
        export { released_24 as released };
        let deprecated_3: string;
        export { deprecated_3 as deprecated };
    }
    namespace classes {
        let type_25: "string";
        export { type_25 as type };
        let required_25: false;
        export { required_25 as required };
        let description_25: string;
        export { description_25 as description };
        let released_25: string;
        export { released_25 as released };
    }
    namespace tableClasses {
        let type_26: "string";
        export { type_26 as type };
        let required_26: false;
        export { required_26 as required };
        let description_26: string;
        export { description_26 as description };
        let released_26: string;
        export { released_26 as released };
        let deprecated_4: string;
        export { deprecated_4 as deprecated };
    }
    namespace attributes {
        let type_27: "object";
        export { type_27 as type };
        let required_27: false;
        export { required_27 as required };
        let description_27: string;
        export { description_27 as description };
        let released_27: string;
        export { released_27 as released };
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map