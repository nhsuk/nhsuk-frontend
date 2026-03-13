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
    description: 'The ID of the code component.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text for the code element. If `html` is provided, the `text` option will be ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML for the code element. If `html` is provided, the `text` option will be ignored.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the code container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the code container.'
  },
  copyButtonClassList: {
    type: 'array',
    required: false,
    description:
      'Classes to add to the button. Default is `["nhsuk-button--secondary", "nhsuk-button--small"]`.'
  },
  copyButtonText: {
    type: 'string',
    required: false,
    description:
      'Button text before the code is copied to clipboard. Defaults to `"Copy code"`.'
  },
  copiedButtonText: {
    type: 'string',
    required: false,
    description:
      'Button text when the code is copied to clipboard. Defaults to `"Code copied"`.'
  },
  copiedAnnouncementText: {
    type: 'string',
    required: false,
    description:
      'Announcement made to screen reader users when the code is copied to clipboard. Defaults to `"Code copied to clipboard"`.'
  },
  button: {
    type: 'object',
    required: false,
    description: 'Optional object allowing customisation of the copy button.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the button.'
      }
    }
  },
  background: {
    type: 'string',
    required: false,
    description:
      'Optional background colour for the code element – `"body"`, `"card"` or `"template"`. Defaults to `"card"`.'
  },
  border: {
    type: 'boolean',
    required: false,
    description: 'If set to `false`, remove border from the code container.'
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
