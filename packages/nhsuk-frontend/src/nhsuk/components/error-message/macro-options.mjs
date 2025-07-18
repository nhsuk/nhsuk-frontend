import { components } from '@nhsuk/frontend-lib'

export const name = 'Error message'

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
      'If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` argument will be ignored.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'Id attribute to add to the error message span tag.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the error message span tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the error message span tag.'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'A visually hidden prefix used before the error message. Defaults to `"Error"`.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      text: 'Error message about full name goes here'
    },
    screenshot: {
      viewports: ['tablet']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
