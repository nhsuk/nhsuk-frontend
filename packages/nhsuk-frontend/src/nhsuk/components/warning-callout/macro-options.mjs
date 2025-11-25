export const name = 'Warning callout'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the warning callout.'
  },
  heading: {
    type: 'string',
    required: true,
    description: 'Heading to be used on the warning callout.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `3`.'
  },
  text: {
    type: 'string',
    required: true,
    description: 'Text content to be used within the warning callout.'
  },
  html: {
    type: 'string',
    required: true,
    description: 'HTML content to be used within the warning callout.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire warning callout component in a `call` block.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the warning callout.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the warning callout.'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description:
      'A visually hidden prefix used before the heading. Defaults to `"Important"`.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
