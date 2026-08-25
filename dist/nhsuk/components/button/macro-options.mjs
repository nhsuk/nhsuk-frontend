const name = 'Button';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the button.',
    released: '10.0.0'
  },
  element: {
    type: 'string',
    required: false,
    description: 'HTML element for the button – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided.',
    released: '1.0.0',
    deprecated: '10.6.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'If `html` or `ariaLabel` is set, this is not required. Text for the button. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'If `text` or `ariaLabel` is set, this is not required. HTML for the button. If `html` is provided, the `text` option will be ignored.',
    released: '1.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire button component in a `call` block.',
    released: '10.4.0'
  },
  name: {
    type: 'string',
    required: false,
    description: 'Name for the button. If `href` is provided, this has no effect.',
    released: '1.0.0'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of button – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"` unless `href` is provided.',
    released: '1.0.0'
  },
  value: {
    type: 'string',
    required: false,
    description: 'The button `value` attribute. If `href` is provided, this has no effect.',
    released: '1.0.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description: 'Whether the button should be disabled. If `href` is provided, this has no effect.',
    released: '1.0.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The button `href` attribute. If set, the button will use an `<a>` tag automatically unless `type` is provided.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of button – `"brand"`, `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`.',
    released: '10.4.0'
  },
  small: {
    type: 'boolean',
    required: false,
    description: 'If set to `true`, smaller button size will be used.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the button.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the button.',
    released: '1.0.0'
  },
  ariaLabel: {
    type: 'string',
    required: false,
    description: 'Button text exposed to assistive technologies, like screen readers, when only an icon is used.',
    released: '10.5.0'
  },
  preventDoubleClick: {
    type: 'boolean',
    required: false,
    description: 'Prevent accidental double clicks on submit buttons from submitting forms multiple times.',
    released: '6.2.0'
  },
  icon: {
    type: 'object',
    required: false,
    description: 'Can be used to add an icon to the button.',
    released: '10.5.0',
    params: {
      name: {
        type: 'string',
        required: true,
        description: 'Icon name for the button – for example, `"search"`, `"arrow-right"`, `"plus"` or `"minus"`.',
        released: '10.5.0'
      },
      html: {
        type: 'string',
        required: true,
        description: 'HTML to use for the icon, as an alternative to the `name` option. If `html` is provided, the `name` option will be ignored.',
        released: '10.5.0'
      },
      placement: {
        type: 'string',
        required: true,
        description: 'Placement of the icon within the button – `"start"` or `"end"`.',
        released: '10.5.0'
      }
    }
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

export { name, params };
//# sourceMappingURL=macro-options.mjs.map
