import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Back link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  text: {
    type: 'string',
    required: false,
    description:
      'Text to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. Defaults to `"Back"`.'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the link href attribute.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.'
  },
  element: {
    type: 'string',
    required: false,
    description:
      'HTML element for the back link component – `"button"` or `"a"`. If not provided, defaults to `"a"`.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
