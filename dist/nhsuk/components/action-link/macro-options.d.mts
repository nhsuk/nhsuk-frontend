export const name: "Action link";
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
    namespace text {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
        let released_1: string;
        export { released_1 as released };
    }
    namespace html {
        let type_2: "string";
        export { type_2 as type };
        let required_2: true;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
        let released_2: string;
        export { released_2 as released };
    }
    namespace href {
        let type_3: "string";
        export { type_3 as type };
        let required_3: true;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
        let released_3: string;
        export { released_3 as released };
    }
    namespace openInNewWindow {
        let type_4: "boolean";
        export { type_4 as type };
        let required_4: false;
        export { required_4 as required };
        let description_4: string;
        export { description_4 as description };
        let released_4: string;
        export { released_4 as released };
    }
    namespace variant {
        let type_5: "string";
        export { type_5 as type };
        let required_5: false;
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
    namespace attributes {
        let type_7: "object";
        export { type_7 as type };
        let required_7: false;
        export { required_7 as required };
        let description_7: string;
        export { description_7 as description };
        let released_7: string;
        export { released_7 as released };
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map