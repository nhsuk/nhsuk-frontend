import { components } from '@nhsuk/frontend-lib'

export const name = 'Action link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the action link.'
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text to use within the action link component.'
  },
  href: {
    type: 'string',
    required: true,
    description: 'The value of the link href attribute.'
  },
  openInNewWindow: {
    type: 'boolean',
    required: false,
    description: 'If set to true, then the link will open in a new window.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the anchor tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  default: {
    context: {
      text: 'Find your nearest A&E',
      href: '#'
    },
    screenshot: true
  },
  reverse: {
    context: {
      classes: 'nhsuk-action-link--reverse',
      text: 'Find your nearest A&E',
      href: '#'
    },
    options: {
      isReverse: true
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-action-link'
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
