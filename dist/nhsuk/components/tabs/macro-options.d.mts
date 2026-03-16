export const name: "Tabs";
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
    }
    namespace idPrefix {
        let type_1: "string";
        export { type_1 as type };
        let required_1: false;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
    }
    namespace title {
        let type_2: "string";
        export { type_2 as type };
        let required_2: false;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
    }
    namespace items {
        let type_3: "array";
        export { type_3 as type };
        let required_3: true;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        export namespace params {
            export namespace id_1 {
                let type_4: "string";
                export { type_4 as type };
                let required_4: true;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
            }
            export { id_1 as id };
            export namespace label {
                let type_5: "string";
                export { type_5 as type };
                let required_5: true;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
            }
            export namespace attributes {
                let type_6: "object";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
            }
            export namespace panel {
                let type_7: "object";
                export { type_7 as type };
                let required_7: true;
                export { required_7 as required };
                let description_7: string;
                export { description_7 as description };
                export namespace params_1 {
                    export namespace text {
                        let type_8: "string";
                        export { type_8 as type };
                        let required_8: true;
                        export { required_8 as required };
                        let description_8: string;
                        export { description_8 as description };
                    }
                    export namespace html {
                        let type_9: "string";
                        export { type_9 as type };
                        let required_9: true;
                        export { required_9 as required };
                        let description_9: string;
                        export { description_9 as description };
                    }
                    export namespace attributes_1 {
                        let type_10: "object";
                        export { type_10 as type };
                        let required_10: false;
                        export { required_10 as required };
                        let description_10: string;
                        export { description_10 as description };
                    }
                    export { attributes_1 as attributes };
                }
                export { params_1 as params };
            }
        }
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map