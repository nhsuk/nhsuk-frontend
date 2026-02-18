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
    }
    export namespace items {
        let type_1: "array";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        export namespace params {
            namespace number {
                let type_2: "string";
                export { type_2 as type };
                let required_2: false;
                export { required_2 as required };
                let description_2: string;
                export { description_2 as description };
            }
            namespace visuallyHiddenText {
                let type_3: "string";
                export { type_3 as type };
                let required_3: false;
                export { required_3 as required };
                let description_3: string;
                export { description_3 as description };
            }
            namespace href {
                let type_4: "string";
                export { type_4 as type };
                let required_4: false;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
            }
            namespace current {
                let type_5: "boolean";
                export { type_5 as type };
                let required_5: false;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
            }
            namespace ellipsis {
                let type_6: "boolean";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
            }
            namespace attributes {
                let type_7: "object";
                export { type_7 as type };
                let required_7: false;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
            }
        }
    }
    export namespace previous {
        let type_8: "object";
        export { type_8 as type };
        let required_8: false;
        export { required_8 as required };
        let description_8: string;
        export { description_8 as description };
        export namespace params_1 {
            export namespace text {
                let type_9: "string";
                export { type_9 as type };
                let required_9: false;
                export { required_9 as required };
                let description_9: string;
                export { description_9 as description };
            }
            export namespace html {
                let type_10: "string";
                export { type_10 as type };
                let required_10: false;
                export { required_10 as required };
                let description_10: string;
                export { description_10 as description };
            }
            export namespace labelText {
                let type_11: "string";
                export { type_11 as type };
                let required_11: false;
                export { required_11 as required };
                let description_11: string;
                export { description_11 as description };
            }
            export namespace href_1 {
                let type_12: "string";
                export { type_12 as type };
                let required_12: true;
                export { required_12 as required };
                let description_12: string;
                export { description_12 as description };
            }
            export { href_1 as href };
            export namespace attributes_1 {
                let type_13: "object";
                export { type_13 as type };
                let required_13: false;
                export { required_13 as required };
                let description_13: string;
                export { description_13 as description };
            }
            export { attributes_1 as attributes };
        }
        export { params_1 as params };
    }
    export namespace next {
        let type_14: "object";
        export { type_14 as type };
        let required_14: false;
        export { required_14 as required };
        let description_14: string;
        export { description_14 as description };
        export namespace params_2 {
            export namespace text_1 {
                let type_15: "string";
                export { type_15 as type };
                let required_15: false;
                export { required_15 as required };
                let description_15: string;
                export { description_15 as description };
            }
            export { text_1 as text };
            export namespace html_1 {
                let type_16: "string";
                export { type_16 as type };
                let required_16: false;
                export { required_16 as required };
                let description_16: string;
                export { description_16 as description };
            }
            export { html_1 as html };
            export namespace labelText_1 {
                let type_17: "string";
                export { type_17 as type };
                let required_17: false;
                export { required_17 as required };
                let description_17: string;
                export { description_17 as description };
            }
            export { labelText_1 as labelText };
            export namespace href_2 {
                let type_18: "string";
                export { type_18 as type };
                let required_18: true;
                export { required_18 as required };
                let description_18: string;
                export { description_18 as description };
            }
            export { href_2 as href };
            export namespace attributes_2 {
                let type_19: "object";
                export { type_19 as type };
                let required_19: false;
                export { required_19 as required };
                let description_19: string;
                export { description_19 as description };
            }
            export { attributes_2 as attributes };
        }
        export { params_2 as params };
    }
    export namespace landmarkLabel {
        let type_20: "string";
        export { type_20 as type };
        let required_20: false;
        export { required_20 as required };
        let description_20: string;
        export { description_20 as description };
    }
    export namespace classes {
        let type_21: "string";
        export { type_21 as type };
        let required_21: false;
        export { required_21 as required };
        let description_21: string;
        export { description_21 as description };
    }
    export namespace attributes_3 {
        let type_22: "object";
        export { type_22 as type };
        let required_22: false;
        export { required_22 as required };
        let description_22: string;
        export { description_22 as description };
    }
    export { attributes_3 as attributes };
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map