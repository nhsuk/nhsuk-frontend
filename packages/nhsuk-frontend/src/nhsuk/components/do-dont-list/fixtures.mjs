/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      heading: {
        text: "Do"
      },
      icon: "tick",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        {
          text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with heading as string": {
    context: {
      heading: "Do",
      icon: "tick",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        {
          text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    }
  },
  "with heading level 1": {
    context: {
      heading: {
        text: "Do",
        level: 1
      },
      icon: "tick",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        {
          text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    }
  },
  "with heading level 2": {
    context: {
      heading: {
        text: "Do",
        level: 2
      },
      icon: "tick",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        {
          text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    }
  },
  "(do) with empty items": {
    context: {
      heading: {
        text: "Do"
      },
      icon: "tick",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        false
      ]
    }
  },
  "(do) with custom prefix": {
    context: {
      heading: {
        text: "Do"
      },
      icon: "tick",
      prefixText: "always",
      items: [
        {
          text: "cover blisters with a soft plaster or padded dressing"
        },
        {
          text: "wash your hands before touching a burst blister"
        },
        {
          text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    }
  },
  "(don't)": {
    context: {
      heading: {
        text: "Don't"
      },
      icon: "cross",
      items: [
        {
          text: "burst a blister yourself"
        },
        {
          text: "peel the skin off a burst blister"
        },
        {
          text: "pick at the edges of the remaining skin"
        },
        {
          text: "wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "(don't) with empty items": {
    context: {
      heading: {
        text: "Don't"
      },
      icon: "cross",
      items: [
        {
          text: "burst a blister yourself"
        },
        {
          text: "peel the skin off a burst blister"
        },
        {
          text: "pick at the edges of the remaining skin"
        },
        false
      ]
    }
  },
  "(don't) with custom prefix": {
    context: {
      heading: {
        text: "Never"
      },
      icon: "cross",
      prefixText: "never",
      items: [
        {
          text: "burst a blister yourself"
        },
        {
          text: "peel the skin off a burst blister"
        },
        {
          text: "pick at the edges of the remaining skin"
        },
        {
          text: "wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    }
  },
  "(don't) with hidden prefix": {
    context: {
      heading: {
        text: "Don't"
      },
      icon: "cross",
      hidePrefix: true,
      items: [
        {
          text: "avoid bursting a blister yourself"
        },
        {
          text: "certainly don't peel the skin off a burst blister"
        },
        {
          text: "absolutely do not pick at the edges of the remaining skin"
        },
        {
          text: "please don't wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
