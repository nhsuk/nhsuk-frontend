import { components } from '@nhsuk/frontend-lib'

export const name = 'Label'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the label.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire label component in a `call` block.'
  },
  for: {
    type: 'string',
    required: false,
    description:
      'The value of the `for` attribute, the ID of the input the label is associated with.'
  },
  isPageHeading: {
    type: 'boolean',
    required: false,
    description:
      'Whether the label also acts as the heading for the page. Defaults to `true` when `headingLevel` is provided.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description:
      'Optional label heading level. Defaults to `1` when `isPageHeading` is `true`.'
  },
  size: {
    type: 'string',
    required: false,
    description: 'Size of the label – `"s"`, `"m"`, `"l"` or `"xl"`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the label tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the label tag.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      text: 'What is your full name?',
      size: 'l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'heading level 1': {
    context: {
      legend: {
        text: 'What is your full name?',
        size: 'l',
        headingLevel: 1
      }
    }
  },
  'heading level 2': {
    context: {
      legend: {
        text: 'What is your full name?',
        size: 'm',
        headingLevel: 2
      }
    }
  },
  'size XL': {
    context: {
      text: 'What is your full name?',
      size: 'xl',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size L': {
    context: {
      text: 'What is your full name?',
      size: 'l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size M': {
    context: {
      text: 'What is your full name?',
      size: 'm',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size S': {
    context: {
      text: 'What is your full name?',
      size: 's',
      isPageHeading: true
    }
  },
  'size class': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      isPageHeading: true
    }
  },
  'size class overriding size param': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      size: 's',
      isPageHeading: true
    }
  },
  'without page heading': {
    context: {
      text: 'What is your full name?'
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
