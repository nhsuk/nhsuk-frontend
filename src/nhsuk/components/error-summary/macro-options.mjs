export const name = 'Error summary'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the error summary.',
    released: '10.0.0'
  },
  heading: {
    type: 'object',
    required: true,
    description: 'Heading of the error summary component.',
    released: '10.6.0',
    isComponent: true,
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the heading.',
        released: '10.6.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the heading. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the heading.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the heading.',
        released: '10.6.0'
      }
    }
  },
  titleText: {
    type: 'string',
    required: true,
    description: 'Replaced by the `heading.text` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  titleHtml: {
    type: 'string',
    required: true,
    description: 'Replaced by the `heading.html` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  description: {
    type: 'object',
    required: false,
    description: 'Description of the errors.',
    released: '10.6.0',
    params: {
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use for the description of the errors. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use for the description of the errors. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the error summary body.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the error summary body.',
        released: '10.6.0'
      }
    }
  },
  descriptionText: {
    type: 'string',
    required: false,
    description: 'Replaced by the `description.text` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description: 'Replaced by the `description.html` option.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire error summary component in a `call` block.',
    released: '9.5.0'
  },
  errorList: {
    type: 'array',
    required: false,
    description: 'A list of errors to include in the error summary.',
    released: '1.0.0',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'The error `href` attribute. If set, the error will become a link.',
        released: '1.0.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored.',
        released: '1.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the error link.',
        released: '1.0.0'
      }
    }
  },
  disableAutoFocus: {
    type: 'boolean',
    required: false,
    description:
      'Prevent moving focus to the error summary when the page loads.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the error-summary container.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the error-summary container.',
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
