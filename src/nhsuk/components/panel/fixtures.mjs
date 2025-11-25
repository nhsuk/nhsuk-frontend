/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      titleText: 'Booking complete',
      text: 'We have sent you a confirmation email'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
