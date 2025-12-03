export const name = 'Panel'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the panel.'
  },
  titleText: {
    type: 'string',
    required: true,
    description:
      'If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description:
      'If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.'
  },
  titleSize: {
    type: 'string',
    required: false,
    description: 'Size of the title – `"s"`, `"m"`, `"l"` or `"xl"`.'
  },
  titleClasses: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to the heading tag. Separate each class with a space.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Heading level, from `1` to `6`. Defaults to `1`.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block.'
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Optional additional classes to add to the hint `div` tag. Separate each class with a space.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'Any extra HTML attributes (for example data attributes) to add to the input component.'
  }
}

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
