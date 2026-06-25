/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      text: 'What is your full name?',
      size: 'l'
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'text': {
    context: {
      text: 'What is your full name?',
      size: 'l'
    },
    variants: [
      {
        description: 'with size S',
        context: {
          size: 's'
        }
      },
      {
        description: 'with size M',
        context: {
          size: 'm'
        }
      },
      {
        description: 'with size L',
        context: {
          size: 'l'
        }
      },
      {
        description: 'with size XL',
        context: {
          size: 'xl'
        }
      }
    ],
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size class': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-heading-l'
    }
  },
  'size class overriding size param': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-heading-l',
      size: 's'
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
