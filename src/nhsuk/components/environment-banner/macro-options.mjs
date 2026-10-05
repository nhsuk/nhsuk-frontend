export const name = 'Environment banner'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the environment banner.',
    released: '10.7.0'
  },
  text: {
    type: 'string',
    required: false,
    description:
      'If `html` is set, this is not required. Text to use within the environment banner. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  html: {
    type: 'string',
    required: false,
    description:
      'If `text` is set, this is not required. HTML to use within the environment banner. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire environment banner component in a `call` block.',
    released: '10.7.0'
  },
  name: {
    type: 'object',
    required: false,
    description: 'Environment name.',
    released: '10.7.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the environment name. If `html` is provided, the `text` option will be ignored.',
        released: '10.7.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the environment name. If `html` is provided, the `text` option will be ignored.',
        released: '10.7.0'
      }
    }
  },
  tag: {
    type: 'object',
    required: false,
    description: 'Environment tag. If set to `false`, remove the tag.',
    released: '10.7.0',
    isComponent: true
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the environment banner container, useful if you want to make the environment banner fixed width.',
    released: '10.7.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the environment banner.',
    released: '10.7.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the environment banner.',
    released: '10.7.0'
  },
  colour: {
    type: 'string',
    required: false,
    description:
      'Optional colour modifier for the tag – `"white"`, `"blue"`, `"purple"`, `"red"`, `"orange"` or `"yellow"`.',
    released: '10.7.0'
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
