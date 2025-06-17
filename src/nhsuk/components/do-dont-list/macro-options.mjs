import { components } from '@nhsuk/frontend-lib'

export const name = "Do and Don't lists"

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  title: {
    type: 'string',
    required: true,
    description: "Title to be displayed on the do and don't list component."
  },
  type: {
    type: 'string',
    required: true,
    description: "Type of do and don't list component – `'cross'` or `'tick'`."
  },
  items: {
    type: 'array',
    required: true,
    description: "Array of do and don't items objects.",
    params: {
      item: {
        type: 'string',
        required: true,
        description: "Text to use within each do and don't item label."
      }
    }
  },
  hidePrefix: {
    type: 'boolean',
    required: false,
    description:
      "If set to true when type is `'cross'`, then removes the default `'do not'` text prefix to each item."
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description:
      'Optional heading level for the title heading. Defaults to `3`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: "Classes to add to the do and don't list container."
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      "HTML attributes (for example data attributes) to add to the do and don't list container."
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
