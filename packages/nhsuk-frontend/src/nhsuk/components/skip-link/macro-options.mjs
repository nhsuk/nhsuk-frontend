export const name = 'Skip link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the skip link.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the skip link. If `html` is provided, the `text` option will be ignored. Defaults to `"Skip to main content"`.'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The value of the skip link\'s `href` attribute. Defaults to `"#maincontent"`.'
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
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
