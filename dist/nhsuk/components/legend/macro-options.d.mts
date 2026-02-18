export const name: "Legend";
/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params: Record<keyof typeof options, MacroParam>;
declare namespace options {
    namespace text {
        let type: "string";
        let required: true;
        let description: string;
    }
    namespace html {
        let type_1: "string";
        export { type_1 as type };
        let required_1: true;
        export { required_1 as required };
        let description_1: string;
        export { description_1 as description };
    }
    namespace caller {
        let type_2: "nunjucks-block";
        export { type_2 as type };
        let required_2: false;
        export { required_2 as required };
        let description_2: string;
        export { description_2 as description };
    }
    namespace classes {
        let type_3: "string";
        export { type_3 as type };
        let required_3: false;
        export { required_3 as required };
        let description_3: string;
        export { description_3 as description };
    }
    namespace isPageHeading {
        let type_4: "boolean";
        export { type_4 as type };
        let required_4: false;
        export { required_4 as required };
        let description_4: string;
        export { description_4 as description };
    }
    namespace size {
        let type_5: "string";
        export { type_5 as type };
        let required_5: false;
        export { required_5 as required };
        let description_5: string;
        export { description_5 as description };
    }
}
import type { MacroParam } from '#lib';
export {};
//# sourceMappingURL=macro-options.d.mts.map