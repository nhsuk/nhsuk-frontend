export const name = 'Button'

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
    description:
      'HTML element for the button component – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided.',
    released: '1.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`.',
    released: '1.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire button component in a `call` block.',
    released: '10.4.0'
  },
  name: {
    type: 'string',
    required: false,
    description:
      'Name for the `input` or `button`. This has no effect on `a` elements.',
    released: '1.0.0'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Type of `input` or `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements.',
    released: '1.0.0'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'The `value` attribute for the `button` tag. This has no effect on `a` or `input` elements.',
    released: '1.0.0'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'Whether the button should be disabled. For button and input elements, `disabled` and `aria-disabled` attributes will be set automatically.',
    released: '1.0.0'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The URL that the button should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description:
      'Optional variant of button – `"login"`, `"reverse"`, `"secondary"`, `"secondary-solid"` or `"warning"`.',
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
    description: 'Classes to add to the button component.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the button component.',
    released: '1.0.0'
  },
  preventDoubleClick: {
    type: 'boolean',
    required: false,
    description:
      'Prevent accidental double clicks on submit buttons from submitting forms multiple times.',
    released: '6.2.0'
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
