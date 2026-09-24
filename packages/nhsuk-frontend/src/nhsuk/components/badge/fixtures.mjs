/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: "reverse",
    context: {
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  "default": {
    context: {
      text: "2",
      visuallyHiddenText: "Count"
    },
    variants,
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "count": {
    context: {
      text: "2",
      visuallyHiddenText: "Count"
    },
    variants: [
      {
        description: "with zero",
        context: {
          text: "0"
        }
      },
      {
        description: "with single digit",
        context: {
          text: "1"
        }
      },
      {
        description: "with double digit",
        context: {
          text: "12"
        }
      },
      {
        description: "with triple digit",
        context: {
          text: "123"
        }
      }
    ],
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "with number": {
    context: {
      text: 0
    }
  },
  "with text": {
    context: {
      text: "New"
    },
    variants,
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "with text escaping": {
    context: {
      text: "A&E"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E"
    }
  },
  "with HTML via call block": {
    callBlock: "A&amp;E"
  },
  "with visually hidden text": {
    context: {
      text: "12",
      visuallyHiddenText: "Count"
    }
  },
  "with visually hidden options": {
    context: {
      text: "New",
      visuallyHidden: {
        text: "feature",
        placement: "end"
      }
    }
  }
}

/**
 * @import { MacroExample } from '#lib'
 */
