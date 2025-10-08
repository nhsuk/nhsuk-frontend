import { components } from '@nhsuk/frontend-lib'

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
      'If set to true when type is `"cross"`, then removes the default `"do not"` text prefix to each item.'
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
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      title: 'Do',
      type: 'tick',
      items: [
        {
          item: 'cover blisters with a soft plaster or padded dressing'
        },
        {
          item: 'wash your hands before touching a burst blister'
        },
        {
          item: 'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  "don't": {
    context: {
      title: "Don't",
      type: 'cross',
      items: [
        {
          item: 'burst a blister yourself'
        },
        {
          item: 'peel the skin off a burst blister'
        },
        {
          item: 'pick at the edges of the remaining skin'
        },
        {
          item: 'wear the shoes or use the equipment that caused your blister until it heals'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
