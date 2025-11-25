/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      text: 'Find your nearest A&E',
      href: '#'
    },
    screenshot: true
  },
  reverse: {
    context: {
      classes: 'nhsuk-action-link--reverse',
      text: 'Find your nearest A&E',
      href: '#'
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-action-link'
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
