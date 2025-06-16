import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Action link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  text: {
    type: 'string',
    required: true,
    description: 'Text to use within the action link component.'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the link href attribute.'
  },
  openInNewWindow: {
    type: 'boolean',
    required: false,
    description: 'If set to true, then the link will open in a new window.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the anchor tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
