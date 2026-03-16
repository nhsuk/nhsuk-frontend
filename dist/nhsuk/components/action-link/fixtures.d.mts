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
            let href: string;
        }
        let screenshot: true;
    }
    export { _default as default };
    export namespace reverse {
        export namespace context_1 {
            export let classes: string;
            let text_1: string;
            export { text_1 as text };
            let href_1: string;
            export { href_1 as href };
        }
        export { context_1 as context };
        export namespace options {
            let layout: string;
        }
        export namespace screenshot_1 {
            let states: ("focus" | "hover" | "active")[];
            let selector: string;
        }
        export { screenshot_1 as screenshot };
    }
}
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map