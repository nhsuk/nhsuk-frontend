export const name = 'Hint text'

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
      'If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.'
  },
  id: {
    type: 'string',
    required: false,
    description: 'The `id` attribute to add to the hint.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hint.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the hint.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
