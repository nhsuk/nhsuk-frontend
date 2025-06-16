import { getComponentMacroOptions } from '@nhsuk/frontend-lib/components.mjs'

export const name = 'Hero'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  heading: {
    type: 'string',
    required: true,
    description: 'Text heading of the hero.'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to heading. Separate each class with a space.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the heading. Defaults to `1`.'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'If `html` is set, this is not required. Text to use within the hero. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'If `text` is set, this is not required. Text to use within the hero. If `text` is provided, the `html` option will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire hero component in a `call` block.'
  },
  imageURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the hero.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the hero.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the hero.'
  }
}

export const options = getComponentMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
