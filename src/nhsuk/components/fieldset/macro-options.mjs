export const name = 'Fieldset'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the fieldset.',
    released: '10.0.0'
  },
  describedBy: {
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.',
    released: '1.0.0'
  },
  legend: {
    type: 'object',
    required: false,
    description: 'The legend for the fieldset component.',
    released: '1.0.0',
    isComponent: true
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.',
    released: '1.0.0'
  },
  role: {
    type: 'string',
    required: false,
    description: 'Optional ARIA `role` attribute.',
    released: '10.1.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the fieldset container.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: false,
    description: 'HTML to use within the fieldset element.',
    released: '10.1.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.',
    released: '1.0.0'
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
