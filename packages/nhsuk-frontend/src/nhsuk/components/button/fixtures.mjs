/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
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
      small: true
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
      disabled: true,
      small: true
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
      small: true,
      href: '#'
    }
  },
  'login': {
    context: {
      text: 'Continue',
      variant: 'login'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'login, small': {
    context: {
      text: 'Continue',
      variant: 'login',
      small: true
    }
  },
  'login disabled': {
    context: {
      text: 'Continue',
      variant: 'login',
      disabled: true
    },
    screenshot: true
  },
  'login disabled, small': {
    context: {
      text: 'Continue',
      variant: 'login',
      small: true,
      disabled: true
    }
  },
  'login as a link': {
    context: {
      text: 'Continue',
      variant: 'login',
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
      variant: 'login',
      small: true,
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
      variant: 'reverse'
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
      variant: 'reverse',
      small: true
    },
    options: {
      layout: 'background-blue'
    }
  },
  'reverse disabled': {
    context: {
      text: 'Log out',
      disabled: true,
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: true
  },
  'reverse disabled, small': {
    context: {
      text: 'Log out',
      disabled: true,
      variant: 'reverse',
      small: true
    },
    options: {
      layout: 'background-blue'
    }
  },
  'reverse as a link': {
    context: {
      text: 'Log out',
      variant: 'reverse',
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
      variant: 'reverse',
      small: true,
      href: '#'
    },
    options: {
      layout: 'background-blue'
    }
  },
  'secondary': {
    context: {
      text: 'Find my location',
      variant: 'secondary'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'secondary, small': {
    context: {
      text: 'Find my location',
      variant: 'secondary',
      small: true
    }
  },
  'secondary disabled': {
    context: {
      text: 'Find my location',
      variant: 'secondary',
      disabled: true
    },
    screenshot: true
  },
  'secondary disabled, small': {
    context: {
      text: 'Find my location',
      variant: 'secondary',
      disabled: true,
      small: true
    }
  },
  'secondary as a link': {
    context: {
      text: 'Find my location',
      variant: 'secondary',
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
      variant: 'secondary',
      small: true,
      href: '#'
    }
  },
  'secondary, solid background': {
    context: {
      text: 'Find my location',
      variant: 'secondary-solid'
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
      variant: 'secondary-solid',
      small: true
    },
    options: {
      layout: 'background-grey'
    }
  },
  'secondary, solid background disabled': {
    context: {
      text: 'Find my location',
      variant: 'secondary-solid',
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
      variant: 'secondary-solid',
      disabled: true,
      small: true
    },
    options: {
      layout: 'background-grey'
    }
  },
  'secondary, solid background as a link': {
    context: {
      text: 'Find my location',
      variant: 'secondary-solid',
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
      variant: 'secondary-solid',
      small: true,
      href: '#'
    },
    options: {
      layout: 'background-grey'
    }
  },
  'warning': {
    context: {
      text: 'Yes, delete this vaccine',
      variant: 'warning'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-button'
    }
  },
  'warning, small': {
    context: {
      text: 'Yes, delete this vaccine',
      small: true,
      variant: 'warning'
    }
  },
  'warning disabled': {
    context: {
      text: 'Yes, delete this vaccine',
      variant: 'warning',
      disabled: true
    },
    screenshot: true
  },
  'warning disabled, small': {
    context: {
      text: 'Yes, delete this vaccine',
      small: true,
      variant: 'warning',
      disabled: true
    }
  },
  'warning as a link': {
    context: {
      text: 'Yes, delete this vaccine',
      variant: 'warning',
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
      small: true,
      variant: 'warning',
      href: '#'
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
