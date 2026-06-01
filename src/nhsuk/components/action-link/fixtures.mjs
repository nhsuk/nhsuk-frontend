/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: 'reverse',
    context: {
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      text: 'Find your nearest A&E',
      href: '#'
    },
    variants,
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-action-link'
    }
  },
  'as a button': {
    context: {
      text: 'Find your nearest A&E',
      element: 'button'
    },
    variants,
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-action-link'
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
