export const name = 'Tag'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the tag.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.'
  },
  colour: {
    type: 'string',
    required: false,
    description:
      'Optional colour modifier for the tag – `"white"`, `"grey"`, `"green"`, `"aqua-green"`, `"blue"`, `"purple"`, `"pink"`, `"red"`, `"orange"` or `"yellow"`.'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove border from the tag.'
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
