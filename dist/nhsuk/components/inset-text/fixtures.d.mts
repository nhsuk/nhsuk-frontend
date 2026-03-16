/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples: Record<keyof typeof fixtures, MacroExample>;
declare namespace fixtures {
    namespace _default {
        let callBlock: string;
        let screenshot: true;
    }
    export { _default as default };
}
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map