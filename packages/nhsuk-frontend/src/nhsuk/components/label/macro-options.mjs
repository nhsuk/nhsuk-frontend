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
      'If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored.'
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
    description: 'Whether the label also acts as the heading for the page.'
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the label tag. Separate each class with a space.'
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
      classes: 'nhsuk-label--l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'size XL': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--xl',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size L': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--l',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size M': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--m',
      isPageHeading: true
    },
    screenshot: {
      viewports: ['tablet']
    }
  },
  'size S': {
    context: {
      text: 'What is your full name?',
      classes: 'nhsuk-label--s',
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
