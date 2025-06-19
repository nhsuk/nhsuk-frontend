import { components } from '@nhsuk/frontend-lib'

export const name = 'Tag'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
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
 * @satisfies {MacroExample[]}
 */
export const examples = [
  {
    name: 'default',
    options: {
      text: 'Active'
    }
  },
  {
    name: 'white',
    options: {
      text: 'In progress',
      classes: 'nhsuk-tag--white'
    }
  },
  {
    name: 'grey',
    options: {
      text: 'Inactive',
      classes: 'nhsuk-tag--grey'
    }
  },
  {
    name: 'green',
    options: {
      text: 'New',
      classes: 'nhsuk-tag--green'
    }
  },
  {
    name: 'aqua-green',
    options: {
      text: 'Active',
      classes: 'nhsuk-tag--aqua-green'
    }
  },
  {
    name: 'blue',
    options: {
      text: 'Pending',
      classes: 'nhsuk-tag--blue'
    }
  },
  {
    name: 'purple',
    options: {
      text: 'Received',
      classes: 'nhsuk-tag--purple'
    }
  },
  {
    name: 'pink',
    options: {
      text: 'Sent',
      classes: 'nhsuk-tag--pink'
    }
  },
  {
    name: 'red',
    options: {
      text: 'Rejected',
      classes: 'nhsuk-tag--red'
    }
  },
  {
    name: 'orange',
    options: {
      text: 'Declined',
      classes: 'nhsuk-tag--orange'
    }
  },
  {
    name: 'yellow',
    options: {
      text: 'Delayed',
      classes: 'nhsuk-tag--yellow'
    }
  }
]

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
