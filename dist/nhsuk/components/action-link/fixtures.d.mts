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
        namespace screenshot {
            let states: ("focus" | "hover" | "active")[];
            let selector: string;
        }
    }
    export { _default as default };
    export namespace reverse {
        export namespace context_1 {
            let text_1: string;
            export { text_1 as text };
            export let variant: string;
            let href_1: string;
            export { href_1 as href };
        }
        export { context_1 as context };
        export namespace options {
            let layout: string;
        }
        export namespace screenshot_1 {
            let states_1: ("focus" | "hover" | "active")[];
            export { states_1 as states };
            let selector_1: string;
            export { selector_1 as selector };
        }
        export { screenshot_1 as screenshot };
    }
}
import type { MacroExample } from '#lib';
export {};
//# sourceMappingURL=fixtures.d.mts.map