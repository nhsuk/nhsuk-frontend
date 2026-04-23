export const name: "Images";
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
    export namespace src {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    export namespace alt {
        let type_2: "string";
        export { type_2 as type };
        let required_2: true;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        let released_2: string;
        export { released_2 as released };
    }
    export namespace caption {
        let type_3: "object";
        export { type_3 as type };
        let required_3: false;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        let released_3: string;
        export { released_3 as released };
        export namespace params {
            namespace text {
                let type_4: "string";
                export { type_4 as type };
                let required_4: true;
                export { required_4 as required };
                let description_4: string;
                export { description_4 as description };
                let released_4: string;
                export { released_4 as released };
            }
            namespace html {
                let type_5: "string";
                export { type_5 as type };
                let required_5: true;
                export { required_5 as required };
                let description_5: string;
                export { description_5 as description };
                let released_5: string;
                export { released_5 as released };
            }
            namespace classes {
                let type_6: "string";
                export { type_6 as type };
                let required_6: false;
                export { required_6 as required };
                let description_6: string;
                export { description_6 as description };
                let released_6: string;
                export { released_6 as released };
            }
        }
    }
    export namespace sizes {
        let type_7: "string";
        export { type_7 as type };
        let required_7: false;
        export { required_7 as required };
        let description_7: string;
        export { description_7 as description };
        let released_7: string;
        export { released_7 as released };
    }
    export namespace srcset {
        let type_8: "string";
        export { type_8 as type };
        let required_8: false;
        export { required_8 as required };
        let description_8: string;
        export { description_8 as description };
        let released_8: string;
        export { released_8 as released };
    }
    export namespace classes_1 {
        let type_9: "string";
        export { type_9 as type };
        let required_9: false;
        export { required_9 as required };
        let description_9: string;
        export { description_9 as description };
        let released_9: string;
        export { released_9 as released };
    }
    export { classes_1 as classes };
    export namespace attributes {
        let type_10: "object";
        export { type_10 as type };
        let required_10: false;
        export { required_10 as required };
        let description_10: string;
        export { description_10 as description };
        let released_10: string;
        export { released_10 as released };
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map