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

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
