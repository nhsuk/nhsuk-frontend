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

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
