import { components } from '@nhsuk/frontend-lib'

export const name = 'Header'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the header.'
  },
  logo: {
    type: 'object',
    required: false,
    description: 'Object containing options for the logo',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'The `href` of the link for the logo. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link.'
      },
      src: {
        type: 'string',
        required: false,
        description:
          'The path of the logo image, if you are not using the default NHS logo.'
      },
      alt: {
        type: 'string',
        required: false,
        description: "The alt text for the logo. Defaults to `'NHS'`"
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          "The `aria-label` for a linked logo. Defaults to `'NHS homepage'`"
      }
    }
  },
  service: {
    type: 'object',
    required: false,
    description: 'Object containing options for the service name.',
    params: {
      text: {
        type: 'string',
        required: false,
        description: 'The text to use for the service name.'
      },
      href: {
        type: 'string',
        required: false,
        description: 'The `href` of the link for the service name.'
      }
    }
  },
  organisation: {
    type: 'object',
    required: false,
    description: 'Settings for header with organisational logo.',
    params: {
      name: {
        type: 'string',
        required: false,
        description: 'Organisation name.'
      },
      split: {
        type: 'string',
        required: false,
        description:
          'Longer organisation names can be split onto multiple lines.'
      },
      descriptor: {
        type: 'string',
        required: false,
        description: 'Organisation descriptor.'
      }
    }
  },
  navigation: {
    type: 'object',
    required: false,
    description: 'Object containing settings for the primary navigation.',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of navigation links for use in the header.',
        params: {
          href: {
            type: 'string',
            required: true,
            description: 'The href of a navigation item in the header.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` argument will be ignored.'
          },
          current: {
            type: 'boolean',
            required: false,
            description:
              'Set to true if this links to the current page being shown.'
          },
          active: {
            type: 'boolean',
            required: false,
            description:
              "Set to true if the current page is within this section, but the link doesn't necessarily link to the current page"
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the list item containing the link.'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the list item containing the link.'
          }
        }
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          "The `aria-label` for the primary navigation. Defaults to `'Menu'`"
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the primary navigation.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the primary navigation.'
      }
    }
  },
  search: {
    type: 'object',
    required: false,
    description: 'Object containing settings for a search box',
    params: {
      action: {
        type: 'string',
        required: false,
        description:
          "The search action endpoint. Defaults to `'https://www.nhs.uk/search'`"
      },
      name: {
        type: 'string',
        required: false,
        description: "The name for the search field. Defaults to `'q'`"
      },
      placeholder: {
        type: 'string',
        required: false,
        description:
          "The placeholder text for the search field. Defaults to `'Search'`"
      },
      visuallyHiddenLabel: {
        type: 'string',
        required: false,
        description:
          "The label for the search field. Defaults to `'Search the NHS website'`"
      },
      visuallyHiddenButton: {
        type: 'string',
        required: false,
        description:
          "The label for the visually hidden button. Defaults to `'Search'`"
      }
    }
  },
  account: {
    type: 'object',
    required: false,
    description:
      'Object containing settings for the account section of the header.',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of account items for use in the header.',
        params: {
          href: {
            type: 'string',
            required: false,
            description: 'The href of an account item in the header.'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` argument will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` argument will be ignored.'
          },
          icon: {
            type: 'boolean',
            required: false,
            description:
              'Whether to include the account icon for the account item. Defaults to `false`.'
          },
          action: {
            type: 'string',
            required: false,
            description:
              'If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons.'
          },
          method: {
            type: 'string',
            required: false,
            description:
              "The value to use for the `method` of the form if `action` is set. Defaults to `'post'`"
          }
        }
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          "The `aria-label` for the account navigation. Defaults to `'Account'`"
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the account navigation.'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the account navigation.'
      }
    }
  },
  baseUrl: {
    type: 'string',
    required: false,
    description: 'Base URL to prepend to the `logo.src` path.'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the header container, useful if you want to make the header fixed width.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the header container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the header container.'
  }
}

/**
 * Nunjucks macro option examples
 *
 @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      logo: {
        href: '#'
      },
      service: {
        text: 'Digital service manual',
        href: '#'
      },
      search: {
        placeholder: 'Search',
        visuallyHiddenLabel: 'Search the NHS digital service manual'
      },
      navigation: {
        items: [
          {
            text: 'NHS service standard',
            href: '#'
          },
          {
            text: 'Design system',
            href: '#'
          },
          {
            text: 'Content guide',
            href: '#'
          },
          {
            text: 'Accessibility',
            href: '#'
          },
          {
            text: 'Community and contribution',
            href: '#'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },

  /**
   * Blue header examples
   */
  'blue': {
    context: {},
    options: {
      width: false
    }
  },
  'blue (linked logo)': {
    context: {
      logo: {
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'blue with account (logged in)': {
    context: {
      account: {
        items: [
          {
            href: '#',
            text: 'florence.nightingale@nhs.net',
            icon: true
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'desktop']
    }
  },
  'blue with account (logged out)': {
    context: {
      account: {
        items: [
          {
            href: '#',
            text: 'Log in'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'desktop']
    }
  },
  'blue with navigation': {
    context: {
      logo: {
        href: '#'
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          }
        ]
      }
    },
    options: {
      width: false
    }
  },
  'blue with navigation (justified)': {
    context: {
      logo: {
        href: '#'
      },
      navigation: {
        classes: 'nhsuk-header__navigation--justified',
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with navigation (overflow)': {
    context: {
      logo: {
        href: '#'
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          },
          {
            href: '#',
            text: 'Another item #1'
          },
          {
            href: '#',
            text: 'Another item #2'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      name: 'menu',
      states: ['click'],
      selector: '#toggle-menu',
      viewports: [
        'mobile',
        'tablet',
        'desktop',
        'large-desktop',
        'xlarge-desktop'
      ]
    }
  },
  'blue with navigation (overflow, white)': {
    context: {
      logo: {
        href: '#'
      },
      navigation: {
        classes: 'nhsuk-header__navigation--white',
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          },
          {
            href: '#',
            text: 'Another item #1'
          },
          {
            href: '#',
            text: 'Another item #2'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with search': {
    context: {
      search: true
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-header__search-input',
      viewports: ['desktop']
    }
  },
  'blue with service name': {
    context: {
      logo: {
        href: '#'
      },
      service: {
        text: 'Find your NHS number'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with service name (linked)': {
    context: {
      logo: {
        href: '#nhs'
      },
      service: {
        text: 'Find your NHS number',
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: [
      {
        name: 'name',
        states: ['hover', 'focus'],
        selector: '.nhsuk-header__service-name',
        viewports: ['desktop']
      },
      {
        name: 'logo',
        states: ['hover', 'focus'],
        selector: '.nhsuk-header__service-logo',
        viewports: ['desktop']
      }
    ]
  },
  'blue with service name (linked with logo)': {
    context: {
      service: {
        text: 'Prototype kit',
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'blue with service name (linked and long), search': {
    context: {
      logo: {
        href: '#nhs'
      },
      service: {
        text: 'This a really long service name to fully test wrapping',
        href: '#'
      },
      search: true
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with service name, search, account (logged in, complex), navigation': {
    context: {
      service: {
        href: '#',
        text: 'Manage patients'
      },
      search: {
        placeholder: 'Name or NHS number',
        visuallyHiddenLabel: 'Search patients by name or NHS number'
      },
      account: {
        items: [
          {
            href: '#',
            text: 'Florence Nightingale',
            icon: true
          },
          {
            text: 'Regional Manager, Hull and East Yorkshire Hospitals NHS Trust'
          },
          {
            href: '#',
            text: 'Change role'
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Home'
          },
          {
            href: '#',
            text: 'Create user'
          },
          {
            href: '#',
            text: 'Find user'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'blue with service name, search, account, navigation': {
    context: {
      service: {
        text: 'Search patient directory',
        href: '#'
      },
      search: {
        placeholder: 'Name or NHS number',
        visuallyHiddenLabel: 'Search patients by name or NHS number'
      },
      account: {
        items: [
          {
            text: 'Florence Nightingale',
            icon: true
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Home'
          },
          {
            href: '#',
            text: 'Patient list'
          },
          {
            href: '#',
            text: 'Advanced search'
          },
          {
            href: '#',
            text: 'Help guides'
          }
        ]
      }
    },
    options: {
      width: false
    }
  },
  'blue with organisation name': {
    context: {
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Business Services Authority'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with organisation name (and descriptor)': {
    context: {
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'blue with organisation name (split with descriptor)': {
    context: {
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'blue with organisation name (split with descriptor), search': {
    context: {
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      },
      search: {
        visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },

  /**
   * White header examples
   */
  'white': {
    context: {
      classes: 'nhsuk-header--white'
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white (linked logo)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'white (linked logo, ARIA label)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        ariaLabel: 'NHS white homepage',
        href: '#'
      }
    },
    options: {
      hidden: true,
      width: false
    }
  },
  'white (linked logo, custom)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#',
        src: '/nhsuk-frontend/assets/example-logo.svg',
        alt: 'Great Ormond Street Hospital for Children, NHS Foundation Trust'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'white with account (logged in)': {
    context: {
      classes: 'nhsuk-header--white',
      account: {
        items: [
          {
            href: '#',
            text: 'florence.nightingale@nhs.net',
            icon: true
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with account (logged out)': {
    context: {
      classes: 'nhsuk-header--white',
      account: {
        items: [
          {
            href: '#',
            text: 'Log in'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with navigation': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with navigation (justified)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      navigation: {
        classes: 'nhsuk-header__navigation--justified',
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with navigation (overflow)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          },
          {
            href: '#',
            text: 'Another item #1'
          },
          {
            href: '#',
            text: 'Another item #2'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with navigation (overflow, white)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      navigation: {
        classes: 'nhsuk-header__navigation--white',
        items: [
          {
            href: '#',
            text: 'Health A to Z'
          },
          {
            href: '#',
            text: 'Live Well'
          },
          {
            href: '#',
            text: 'Mental health'
          },
          {
            href: '#',
            text: 'Care and support'
          },
          {
            href: '#',
            text: 'Pregnancy',
            active: true
          },
          {
            href: '#',
            text: 'NHS services'
          },
          {
            href: '#',
            text: 'Another item #1'
          },
          {
            href: '#',
            text: 'Another item #2'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with search': {
    context: {
      classes: 'nhsuk-header--white',
      search: true
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-header__search-input',
      viewports: ['desktop']
    }
  },
  'white with service name': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      service: {
        text: 'Find your NHS number'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with service name (linked)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#nhs'
      },
      service: {
        text: 'Find your NHS number',
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: [
      {
        name: 'name',
        states: ['hover', 'focus'],
        selector: '.nhsuk-header__service-name',
        viewports: ['desktop']
      },
      {
        name: 'logo',
        states: ['hover', 'focus'],
        selector: '.nhsuk-header__service-logo',
        viewports: ['desktop']
      }
    ]
  },
  'white with service name (linked with logo)': {
    context: {
      classes: 'nhsuk-header--white',
      service: {
        text: 'Prototype kit',
        href: '#'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'white with service name (linked and long), search': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#nhs'
      },
      service: {
        text: 'This a really long service name to fully test wrapping',
        href: '#'
      },
      search: true
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with service name, search, account (logged in, complex), navigation': {
    context: {
      classes: 'nhsuk-header--white',
      service: {
        href: '#',
        text: 'Manage patients'
      },
      search: {
        placeholder: 'Name or NHS number',
        visuallyHiddenLabel: 'Search patients by name or NHS number'
      },
      account: {
        items: [
          {
            href: '#',
            text: 'Florence Nightingale',
            icon: true
          },
          {
            text: 'Regional Manager, Hull and East Yorkshire Hospitals NHS Trust'
          },
          {
            href: '#',
            text: 'Change role'
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Home'
          },
          {
            href: '#',
            text: 'Create user'
          },
          {
            href: '#',
            text: 'Find user'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with service name, search, account, navigation': {
    context: {
      classes: 'nhsuk-header--white',
      service: {
        text: 'Search patient directory',
        href: '#'
      },
      search: {
        placeholder: 'Name or NHS number',
        visuallyHiddenLabel: 'Search patients by name or NHS number'
      },
      account: {
        items: [
          {
            text: 'Florence Nightingale',
            icon: true
          },
          {
            action: '#',
            text: 'Log out'
          }
        ]
      },
      navigation: {
        items: [
          {
            href: '#',
            text: 'Home'
          },
          {
            href: '#',
            text: 'Patient list'
          },
          {
            href: '#',
            text: 'Advanced search'
          },
          {
            href: '#',
            text: 'Help guides'
          }
        ]
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with organisation name': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Business Services Authority'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white with organisation name (and descriptor)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    },
    options: {
      width: false
    }
  },
  'white with organisation name (split with descriptor)': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'white with organisation name (split with descriptor), search': {
    context: {
      classes: 'nhsuk-header--white',
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      },
      search: {
        visuallyHiddenLabel: 'Search the Anytown Anyplace Anywhere website'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['desktop']
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
