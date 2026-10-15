export const name = 'Visually hidden'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the visually hidden component.',
    released: '10.7.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the visually hidden component. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the visually hidden component. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire visually hidden component in a `call` block.',
    released: '10.7.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the visually hidden component.',
    released: '10.7.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the visually hidden component.',
    released: '10.7.0'
  },
  element: {
    type: 'string',
    required: false,
    description:
      'HTML element for the visually hidden component – for example, `"span"`, `"p"`, `"h2"` or `"h3"`. Defaults to `"span"`.',
    released: '10.7.0'
  },
  slots: {
    type: 'object',
    required: false,
    description:
      'Specified points for injecting custom content relative to the visually hidden component.',
    released: '10.7.0',
    params: {
      before: {
        type: 'object',
        required: false,
        description:
          'Custom content injected before the visually hidden component.',
        released: '10.7.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Custom text injected before the visually hidden component.',
            released: '10.7.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'Custom HTML injected before the visually hidden component.',
            released: '10.7.0'
          }
        }
      },
      start: {
        type: 'object',
        required: false,
        description:
          'Custom content injected at the start, within the visually hidden component.',
        released: '10.7.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Custom text injected at the start, within the visually hidden component.',
            released: '10.7.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'Custom HTML injected at the start, within the visually hidden component.',
            released: '10.7.0'
          }
        }
      },
      end: {
        type: 'object',
        required: false,
        description:
          'Custom content injected at the end, within the visually hidden component.',
        released: '10.7.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Custom text injected at the end, within the visually hidden component.',
            released: '10.7.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'Custom HTML injected at the end, within the visually hidden component.',
            released: '10.7.0'
          }
        }
      },
      after: {
        type: 'object',
        required: false,
        description:
          'Custom content injected after the visually hidden component.',
        released: '10.7.0',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'Custom text injected after the visually hidden component.',
            released: '10.7.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'Custom HTML injected after the visually hidden component.',
            released: '10.7.0'
          }
        }
      }
    }
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
