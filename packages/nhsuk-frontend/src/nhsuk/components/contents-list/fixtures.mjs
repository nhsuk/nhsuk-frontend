import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
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
  },
  'with nested lists': {
    context: {
      items: [
        {
          href: '#',
          text: 'Chapter 1'
        },
        {
          href: '#',
          html: outdent`
            Chapter 2
              <ol class="nhsuk-contents-list__list">
                <li class="nhsuk-contents-list__item">Section 2.1</li>
                <li class="nhsuk-contents-list__item">Section 2.2</li>
              </ol>
          `
        },
        {
          href: '#',
          text: 'Chapter 3'
        }
      ]
    },
    screenshot: true
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
