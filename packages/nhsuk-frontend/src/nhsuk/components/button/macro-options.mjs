import { components } from '@nhsuk/frontend-lib'

export const name = 'Button'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  element: {
    type: 'string',
    required: false,
    description:
      'HTML element for the button component – `"input"`, `"button"` or `"a"`. In most cases you will not need to set this as it will be configured automatically if `href` is provided.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML for the button or link. If `html` is provided, the `text` argument will be ignored and `element` will be automatically set to `"button"` unless `href` is also set, or it has already been defined. This argument has no effect if `element` is set to `"input"`.'
  },
  name: {
    type: 'string',
    required: false,
    description:
      'Name for the `input` or `button`. This has no effect on `a` elements.'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Type of `input` or `button` – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect on `a` elements.'
  },
  value: {
    type: 'string',
    required: false,
    description:
      'Value for the `button` tag. This has no effect on `a` or `input` elements.'
  },
  disabled: {
    type: 'boolean',
    required: false,
    description:
      'Whether the button should be disabled. For button and input elements, `disabled` and `aria-disabled` attributes will be set automatically.'
  },
  href: {
    type: 'string',
    required: false,
    description:
      'The URL that the button should link to. If this is set, `element` will be automatically set to `"a"` if it has not already been defined.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the button component.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the button component.'
  },
  preventDoubleClick: {
    type: 'boolean',
    required: false,
    description:
      'Prevent accidental double clicks on submit buttons from submitting forms multiple times.'
  }
}

/**
 * Nunjucks macro option examples
 *
 * @satisfies {MacroExample[]}
 */
export const examples = [
  {
    name: 'default',
    options: {
      text: 'Save and continue'
    }
  },
  {
    name: 'disabled',
    options: {
      text: 'Disabled button',
      disabled: true
    }
  },
  {
    name: 'as a link',
    options: {
      text: 'Link button',
      href: '#'
    }
  },
  {
    name: 'login',
    options: {
      text: 'Continue',
      classes: 'nhsuk-button--login'
    }
  },
  {
    name: 'login disabled',
    options: {
      text: 'Continue',
      classes: 'nhsuk-button--login',
      disabled: true
    }
  },
  {
    name: 'login as a link',
    options: {
      text: 'Continue',
      classes: 'nhsuk-button--login',
      href: '#'
    }
  },
  {
    name: 'with double click prevented',
    options: {
      text: 'Save and continue',
      preventDoubleClick: true
    }
  },
  {
    name: 'reverse',
    layout: 'layouts/example-background-blue.njk',
    options: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse'
    }
  },
  {
    name: 'reverse disabled',
    layout: 'layouts/example-background-blue.njk',
    options: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse',
      disabled: true
    }
  },
  {
    name: 'reverse as a link',
    layout: 'layouts/example-background-blue.njk',
    options: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse',
      href: '#'
    }
  },
  {
    name: 'secondary',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary'
    }
  },
  {
    name: 'secondary disabled',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary',
      disabled: true
    }
  },
  {
    name: 'secondary as a link',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary',
      href: '#'
    }
  },
  {
    name: 'secondary – solid background',
    layout: 'layouts/example-background-grey.njk',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid'
    }
  },
  {
    name: 'secondary disabled – solid background',
    layout: 'layouts/example-background-grey.njk',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid',
      disabled: true
    }
  },
  {
    name: 'secondary as a link – solid background',
    layout: 'layouts/example-background-grey.njk',
    options: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid',
      href: '#'
    }
  },
  {
    name: 'warning',
    options: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning'
    }
  },
  {
    name: 'warning disabled',
    options: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning',
      disabled: true
    }
  },
  {
    name: 'warning as a link',
    options: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning',
      href: '#'
    }
  }
]

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
