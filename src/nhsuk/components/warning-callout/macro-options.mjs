export const name = 'Warning callout'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the warning callout.',
    released: '10.0.0'
  },
  heading: {
    type: 'string',
    required: true,
    description: 'Heading to be used on the warning callout.',
    released: '1.0.0'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `3`.',
    released: '1.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text content to be used within the warning callout.',
    released: '9.5.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'HTML content to be used within the warning callout.',
    released: '9.5.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire warning callout component in a `call` block.',
    released: '9.5.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the warning callout.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the warning callout.',
    released: '1.0.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'A visually hidden prefix used before the heading. Defaults to `"Important"`.',
    released: '10.1.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
