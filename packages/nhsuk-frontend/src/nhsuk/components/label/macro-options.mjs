export const name = 'Label'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the label.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire label component in a `call` block.'
  },
  for: {
    type: 'string',
    required: false,
    description:
      'The value of the `for` attribute, the ID of the input the label is associated with.'
  },
  isPageHeading: {
    type: 'boolean',
    required: false,
    description: 'Whether the label also acts as the heading for the page.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the label tag.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the label tag.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
