import { components } from '@nhsuk/frontend-lib'

export const name = 'Skip link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  text: {
    type: 'string',
    required: false,
    description:
      'Text to use within the skip link component. Defaults to `"Skip to main content"` if you do not provide a value.'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The value of the skip link\'s `href` attribute. Defaults to `"#maincontent"` if you do not provide a value.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the skip link.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the skip link.'
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
      href: '#maincontent',
      text: 'Skip to main content'
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
