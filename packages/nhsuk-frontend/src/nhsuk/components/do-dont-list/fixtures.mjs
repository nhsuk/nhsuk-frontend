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
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
