/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      text: 'Do not include personal information like your name, date of birth or NHS number'
    },
    screenshot: {
      viewports: ['tablet']
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
