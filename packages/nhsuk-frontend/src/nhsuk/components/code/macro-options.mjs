export const name = 'Code'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the code component.',
    released: '10.4.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text for the code element. If `html` is provided, the `text` option will be ignored.',
    released: '10.4.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML for the code element. If `html` is provided, the `text` option will be ignored.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the code container.',
    released: '10.4.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the code container.',
    released: '10.4.0'
  },
  copyButtonClassList: {
    type: 'array',
    required: false,
    description:
      'Classes to add to the button. Default is `["nhsuk-button--secondary", "nhsuk-button--small"]`.',
    released: '10.4.0'
  },
  copyButtonText: {
    type: 'string',
    required: false,
    description:
      'Button text before the code is copied to clipboard. Defaults to `"Copy code"`.',
    released: '10.4.0'
  },
  copiedButtonText: {
    type: 'string',
    required: false,
    description:
      'Button text when the code is copied to clipboard. Defaults to `"Code copied"`.',
    released: '10.4.0'
  },
  copiedAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when the code is copied to clipboard. Defaults to `"Code copied to clipboard"`.',
    released: '10.4.0'
  },
  button: {
    type: 'object',
    required: false,
    description: 'Optional object allowing customisation of the copy button.',
    released: '10.4.0',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the button.',
        released: '10.4.0'
      }
    }
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of code. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  background: {
    type: 'string',
    required: false,
    description:
      'Optional background colour for the code element – `"body"` or `"template"`.',
    released: '10.4.0'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove border from the code container.',
    released: '10.4.0'
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
