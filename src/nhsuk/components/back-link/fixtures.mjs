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
      text: 'Back',
      href: '#'
    },
    variants,
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-back-link'
    }
  },
  'as a button': {
    context: {
      text: 'Back',
      element: 'button'
    },
    variants,
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-back-link'
    }
  },
  'with visually hidden text': {
    context: {
      visuallyHiddenText: 'Back to',
      text: 'Search results',
      href: '#'
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
