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
    },
    options: {
      hidden: true
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
    },
    options: {
      hidden: true
    }
  },
  "(don't) with hidden prefix": {
    context: {
      title: "Don't",
      type: 'cross',
      hidePrefix: true,
      items: [
        {
          item: 'avoid bursting a blister yourself'
        },
        {
          item: "certainly don't peel the skin off a burst blister"
        },
        {
          item: 'absolutely do not pick at the edges of the remaining skin'
        },
        {
          item: "please don't wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
