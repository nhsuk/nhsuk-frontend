/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
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
]

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
    variants,
    screenshot: {
      viewports: ['tablet']
    }
  },
  'text and caption': {
    context: {
      text: 'What is your home address?',
      caption: 'About you',
      size: 'l'
    },
    variants
  },
  'text and caption "before"': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'before'
      },
      size: 'l'
    },
    variants,
    screenshot: {
      viewports: ['tablet']
    }
  },
  'text and caption "before" as a heading': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'before',
        element: 'h2'
      },
      size: 'l'
    }
  },
  'text and caption "after"': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'after'
      },
      size: 'l'
    },
    variants,
    screenshot: {
      viewports: ['tablet']
    }
  },
  'text and caption "after" as a paragraph': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'after',
        element: 'p'
      },
      size: 'l'
    }
  },
  'text and caption "start"': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'start'
      },
      size: 'l'
    },
    variants,
    screenshot: {
      viewports: ['tablet']
    }
  },
  'text and caption "end"': {
    context: {
      text: 'What is your home address?',
      caption: {
        text: 'About you',
        placement: 'end'
      },
      size: 'l'
    },
    variants,
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
