import { outdent } from 'outdent'

export const name = 'Notification banner'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the notification banner.',
    released: '10.0.0'
  },
  title: {
    type: 'object',
    required: false,
    description: outdent`
      The title that displays in the notification banner:
      - if you do not set \`variant\`, \`title.text\` defaults to \`"Important"\`
      - if you set \`variant\` to \`"success"\`, \`title.text\` defaults to \`"Success"\`
      - if you set \`title.text\` or \`title.html\`, the defaults are ignored
    `,
    alias: 'heading',
    released: '10.6.0',
    isComponent: true,
    params: {
      id: {
        type: 'string',
        required: false,
        description: 'The ID of the title.',
        released: '10.6.0'
      },
      text: {
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text for the title. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      html: {
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML for the title. If `html` is provided, the `text` option will be ignored.',
        released: '10.6.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the title.',
        released: '10.6.0'
      },
      headingLevel: {
        type: 'integer',
        required: false,
        description: 'Optional alias for the title heading `level` option.',
        released: '10.6.1'
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level for the title. Defaults to `2`.',
        released: '10.6.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the title.',
        released: '10.6.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the title.',
        released: '10.6.0'
      }
    }
  },
  titleId: {
    type: 'string',
    required: false,
    description: 'Replaced by the `title.id` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  titleText: {
    type: 'string',
    required: false,
    description: 'Replaced by the `title.text` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description: 'Replaced by the `title.html` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  titleHeadingLevel: {
    type: 'integer',
    required: false,
    description: 'Replaced by the `title.level` option.',
    released: '10.0.0',
    deprecated: '10.6.0'
  },
  heading: {
    type: 'object',
    required: false,
    description: 'Heading to be used within the notification banner.',
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
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description: 'A visually hidden suffix added to the heading.',
        released: '10.6.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'If set, the heading will become a link.',
        released: '10.6.0'
      },
      caption: {
        type: 'object',
        required: false,
        description: 'Optional caption for the heading.',
        released: '10.6.0',
        isComponent: true
      },
      level: {
        type: 'integer',
        required: false,
        description: 'Optional heading level for the heading. Defaults to `3`.',
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
      },
      element: {
        type: 'string',
        required: false,
        description:
          'HTML element for the heading – for example, `"p"`. Defaults to the `level` option prefixed with `"h"`.',
        released: '10.6.0'
      }
    }
  },
  text: {
    type: 'string',
    required: true,
    description:
      'The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored.',
    released: '10.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored.',
    released: '10.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire notification banner component in a `call` block.',
    released: '10.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of notification banner. You can use only `"success"` or empty values with this option. If you set `variant` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `variant`, the notification banner sets `role` to `"region"`.',
    released: '10.4.0'
  },
  role: {
    type: 'string',
    required: false,
    description:
      'Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `variant` to `"success"`, `role` defaults to `"alert"`.',
    released: '10.0.0'
  },
  disableAutoFocus: {
    type: 'boolean',
    required: false,
    description:
      'If you set `variant` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes that you want to add to the notification banner.',
    released: '10.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'The HTML attributes that you want to add to the notification banner, for example, data attributes.',
    released: '10.0.0'
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
