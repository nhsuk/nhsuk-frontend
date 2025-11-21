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
          text: 'cover blisters with a soft plaster or padded dressing'
        },
        {
          text: 'wash your hands before touching a burst blister'
        },
        {
          text: 'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  '(do) with empty items': {
    context: {
      title: 'Do',
      type: 'tick',
      items: [
        {
          text: 'cover blisters with a soft plaster or padded dressing'
        },
        {
          text: 'wash your hands before touching a burst blister'
        },
        false
      ]
    }
  },
  '(do) with deprecated parameters': {
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
    }
  },
  '(do) with custom prefix': {
    context: {
      title: 'Do',
      type: 'tick',
      prefixText: 'always',
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
    }
  },
  "(don't)": {
    context: {
      title: "Don't",
      type: 'cross',
      items: [
        {
          text: 'burst a blister yourself'
        },
        {
          text: 'peel the skin off a burst blister'
        },
        {
          text: 'pick at the edges of the remaining skin'
        },
        {
          text: 'wear the shoes or use the equipment that caused your blister until it heals'
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  "(don't) with empty items": {
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
        false
      ]
    }
  },
  "(don't) with deprecated parameters": {
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
    }
  },
  "(don't) with custom prefix": {
    context: {
      title: 'Never',
      type: 'cross',
      prefixText: 'never',
      items: [
        {
          text: 'burst a blister yourself'
        },
        {
          text: 'peel the skin off a burst blister'
        },
        {
          text: 'pick at the edges of the remaining skin'
        },
        {
          text: 'wear the shoes or use the equipment that caused your blister until it heals'
        }
      ]
    }
  },
  "(don't) with hidden prefix": {
    context: {
      title: "Don't",
      type: 'cross',
      hidePrefix: true,
      items: [
        {
          text: 'avoid bursting a blister yourself'
        },
        {
          text: "certainly don't peel the skin off a burst blister"
        },
        {
          text: 'absolutely do not pick at the edges of the remaining skin'
        },
        {
          text: "please don't wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    }
  }
}

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
