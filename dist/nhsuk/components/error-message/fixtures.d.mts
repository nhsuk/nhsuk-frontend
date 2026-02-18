/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples: Record<keyof typeof fixtures, MacroExample>;
declare namespace fixtures {
    namespace _default {
        namespace context {
            let text: string;
        }
        namespace screenshot {
            let viewports: "tablet"[];
        }
    }
    export { _default as default };
}
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map