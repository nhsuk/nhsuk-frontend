import { components } from '@nhsuk/frontend-lib'

export const name = 'Label'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
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
    required: true,
    description:
      'The value of the for attribute, the id of the input the label is associated with.'
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
      text: 'NHS number'
    }
  },
  'with bold text': {
    context: {
      classes: 'nhsuk-label--s',
      text: 'NHS number'
    }
  },
  'as page heading': {
    context: {
      text: 'NHS number',
      classes: 'nhsuk-label--xl',
      isPageHeading: true
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
