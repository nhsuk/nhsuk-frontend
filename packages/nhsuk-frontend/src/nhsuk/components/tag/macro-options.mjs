import { components } from '@nhsuk/frontend-lib'

export const name = 'Tag'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the tag.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.'
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
      text: 'Active'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'white': {
    context: {
      text: 'In progress',
      classes: 'nhsuk-tag--white'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'grey': {
    context: {
      text: 'Inactive',
      classes: 'nhsuk-tag--grey'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'green': {
    context: {
      text: 'New',
      classes: 'nhsuk-tag--green'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'aqua-green': {
    context: {
      text: 'Active',
      classes: 'nhsuk-tag--aqua-green'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'blue': {
    context: {
      text: 'Pending',
      classes: 'nhsuk-tag--blue'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'purple': {
    context: {
      text: 'Received',
      classes: 'nhsuk-tag--purple'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'pink': {
    context: {
      text: 'Sent',
      classes: 'nhsuk-tag--pink'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'red': {
    context: {
      text: 'Rejected',
      classes: 'nhsuk-tag--red'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'orange': {
    context: {
      text: 'Declined',
      classes: 'nhsuk-tag--orange'
    },
    screenshot: {
      viewports: ['mobile']
    }
  },
  'yellow': {
    context: {
      text: 'Delayed',
      classes: 'nhsuk-tag--yellow'
    },
    screenshot: {
      viewports: ['mobile']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
