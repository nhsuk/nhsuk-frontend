import { components } from '@nhsuk/frontend-lib'

export const name = 'Fieldset'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  legend: {
    type: 'object',
    required: false,
    description: 'Options for the legend',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` argument will be ignored.'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` argument will be ignored.'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the legend.'
      },
      isPageHeading: {
        type: 'boolean',
        required: false,
        description: 'Whether the legend also acts as the heading for the page.'
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the fieldset container.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.'
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
