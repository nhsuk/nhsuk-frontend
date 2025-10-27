import { components } from '@nhsuk/frontend-lib'

export const name = 'Button'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the button.'
  },
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
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      text: 'Save and continue'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'default, small': {
    context: {
      text: 'Save and continue',
      classes: 'nhsuk-button--small'
    }
  },
  'disabled': {
    context: {
      text: 'Disabled button',
      disabled: true
    },
    screenshot: true
  },
  'disabled, small': {
    context: {
      text: 'Disabled button',
      classes: 'nhsuk-button--small',
      disabled: true
    }
  },
  'as a link': {
    context: {
      text: 'Link button',
      href: '#'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'as a link, small': {
    context: {
      text: 'Link button',
      classes: 'nhsuk-button--small',
      href: '#'
    }
  },
  'login': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'login, small': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login nhsuk-button--small'
    }
  },
  'login disabled': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login',
      disabled: true
    },
    screenshot: true
  },
  'login disabled, small': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login nhsuk-button--small',
      disabled: true
    }
  },
  'login as a link': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login',
      href: '#'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'login as a link, small': {
    context: {
      text: 'Continue',
      classes: 'nhsuk-button--login nhsuk-button--small',
      href: '#'
    }
  },
  'with double click prevented': {
    context: {
      text: 'Save and continue',
      preventDoubleClick: true
    }
  },
  'with double click not prevented': {
    context: {
      text: 'Save and continue',
      preventDoubleClick: false
    }
  },
  'reverse': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse'
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'reverse, small': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse nhsuk-button--small'
    },
    options: {
      layout: 'background-blue'
    }
  },
  'reverse disabled': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse',
      disabled: true
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: true
  },
  'reverse disabled, small': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse nhsuk-button--small',
      disabled: true
    },
    options: {
      layout: 'background-blue'
    }
  },
  'reverse as a link': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse',
      href: '#'
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'reverse as a link, small': {
    context: {
      text: 'Log out',
      classes: 'nhsuk-button--reverse nhsuk-button--small',
      href: '#'
    },
    options: {
      layout: 'background-blue'
    }
  },
  'secondary': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'secondary, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary nhsuk-button--small'
    }
  },
  'secondary disabled': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary',
      disabled: true
    },
    screenshot: true
  },
  'secondary disabled, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary nhsuk-button--small',
      disabled: true
    }
  },
  'secondary as a link': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary',
      href: '#'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'secondary as a link, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary nhsuk-button--small',
      href: '#'
    }
  },
  'secondary, solid background': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid'
    },
    options: {
      layout: 'background-grey'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'secondary, solid background, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid nhsuk-button--small'
    },
    options: {
      layout: 'background-grey'
    }
  },
  'secondary, solid background disabled': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid',
      disabled: true
    },
    options: {
      layout: 'background-grey'
    },
    screenshot: true
  },
  'secondary, solid background disabled, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid nhsuk-button--small',
      disabled: true
    },
    options: {
      layout: 'background-grey'
    }
  },
  'secondary, solid background as a link': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid',
      href: '#'
    },
    options: {
      layout: 'background-grey'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'secondary, solid background as a link, small': {
    context: {
      text: 'Find my location',
      classes: 'nhsuk-button--secondary-solid nhsuk-button--small',
      href: '#'
    },
    options: {
      layout: 'background-grey'
    }
  },
  'warning': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'warning, small': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning nhsuk-button--small'
    }
  },
  'warning disabled': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning',
      disabled: true
    },
    screenshot: true
  },
  'warning disabled, small': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning nhsuk-button--small',
      disabled: true
    }
  },
  'warning as a link': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning',
      href: '#'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'warning as a link, small': {
    context: {
      text: 'Yes, delete this vaccine',
      classes: 'nhsuk-button--warning nhsuk-button--small',
      href: '#'
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
