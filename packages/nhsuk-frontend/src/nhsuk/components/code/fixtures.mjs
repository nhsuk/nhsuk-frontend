/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  default: {
    context: {
      text: `<p>This is a code block.</p>`,
      language: 'html'
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
