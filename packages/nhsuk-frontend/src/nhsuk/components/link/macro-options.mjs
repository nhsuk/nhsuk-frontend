export const name = 'Link'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the link.',
    released: '10.7.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the link. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the link. If `html` is provided, the `text` option will be ignored.',
    released: '10.7.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire content component in a `call` block.',
    released: '10.7.0'
  },
  visuallyHidden: {
    type: 'object',
    required: true,
    description:
      'Can be used to add visually hidden content to the content component.',
    released: '10.7.0',
    isComponent: true
  },
  name: {
    type: 'string',
    required: false,
    description:
      'Name for the link as a button. If `href` is provided, this has no effect.',
    released: '10.7.0'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'Link as a button `value` attribute. If `href` is provided, this has no effect.',
    released: '10.7.0'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of link as a button – `"button"` or `"submit"`.',
    released: '10.7.0'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The link `href` attribute. If set, the link will use an `<a>` tag automatically unless `type` is provided.',
    released: '10.7.0'
  },
  openInNewTab: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the link will open in a new tab. If `type` is set, this has no effect.',
    released: '10.7.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of link. You can use only `"reverse"` or empty values with this option.',
    released: '10.7.0'
  },
  moduleName: {
    type: 'string',
    required: false,
    description: 'Optional JavaScript module name to use for the link.',
    released: '10.7.0'
  },
  className: {
    type: 'string',
    required: false,
    description:
      'Alternative class to use for the link. Defaults to `"nhsuk-link"`.',
    released: '10.7.0'
  },
  classes: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the link. If `type`, `href` or `element` are not not provided, this has no effect.',
    released: '10.7.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the link. If `type`, `href` or `element` are not not provided, this has no effect.',
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
