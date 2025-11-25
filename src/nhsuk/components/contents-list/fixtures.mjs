/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      items: [
        {
          href: '#',
          text: 'What is AMD?',
          current: true
        },
        {
          href: '#',
          text: 'Symptoms'
        },
        {
          href: '#',
          text: 'Getting diagnosed'
        },
        {
          href: '#',
          text: 'Treatments'
        },
        {
          href: '#',
          text: 'Living with AMD'
        }
      ]
    },
    screenshot: true
  },
  'with empty items': {
    context: {
      items: [
        {
          href: '#',
          text: 'What is AMD?',
          current: true
        },
        {
          href: '#',
          text: 'Symptoms'
        },
        false,
        {
          href: '#',
          text: 'Treatments'
        },
        false
      ]
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
