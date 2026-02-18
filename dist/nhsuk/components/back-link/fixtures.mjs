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
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-back-link'
    }
  },
  'reverse': {
    context: {
      text: 'Back',
      href: '#',
      classes: 'nhsuk-back-link--reverse'
    },
    options: {
      layout: 'background-blue'
    },
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
};

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

export { examples };
//# sourceMappingURL=fixtures.mjs.map
