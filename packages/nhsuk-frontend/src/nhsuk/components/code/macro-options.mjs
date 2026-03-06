export const name = 'Code'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the code component.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text for the code element. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML for the code element. If `html` is provided, the `text` option will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the code container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the code container.'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
