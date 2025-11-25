export const name = "Do and Don't list"

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: "The ID of the do and don't list component."
  },
  title: {
    type: 'string',
    required: true,
    description: "Title to be displayed on the do and don't list component."
  },
  type: {
    type: 'string',
    required: true,
    description: 'Type of do and don\'t list component – `"cross"` or `"tick"`.'
  },
  items: {
    type: 'array',
    required: true,
    description: "Array of do and don't items objects.",
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          "If `html` is set, this is not required. Text to use within each do and don't item. If `html` is provided, the `text` option will be ignored."
      },
      html: {
        type: 'string',
        required: true,
        description:
          "If `text` is set, this is not required. HTML to use within each do and don't item. If `html` is provided, the `text` option will be ignored."
      }
    }
  },
  prefixText: {
    type: 'string',
    required: false,
    description:
      'Optional prefix text used before each do and don\'t item. Defaults to `"do not"` when `type` is `"cross"`.'
  },
  hidePrefix: {
    type: 'boolean',
    required: false,
    description:
      "If set to `true`, the optional `prefixText` will be removed from each do and don't item."
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

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
