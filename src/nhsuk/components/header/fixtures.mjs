/**
 * Nunjucks macro option variants
 *
 @satisfies {MacroExample[]}
 */
export const variants = [
  {
    description: 'blue'
  },
  {
    description: 'white',
    context: {
      classes: 'nhsuk-header--white'
    }
  }
]

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
  'linked logo': {
    context: {
      logo: {
        href: '#'
      }
    },
    options: {
      width: false,
      variants
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'unlinked logo': {
    options: {
      width: false,
      variants
    }
  },
  'with account (logged in)': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['mobile', 'desktop']
    }
  },
  'with account (logged out)': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['mobile', 'desktop']
    }
  },
  'with navigation': {
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
      width: false,
      variants
    }
  },
  'with navigation (empty items)': {
    context: {
      logo: {
        href: '#'
      },
      account: {
        items: [
          {
            href: '#',
            text: 'Account',
            icon: true
          },
          false,
          false,
          false,
          {
            action: '#',
            text: 'Log out'
          }
        ]
      },
      navigation: {
        items: [
          {
            text: 'Home',
            href: '/'
          },
          false,
          false,
          false,
          {
            text: 'Reports',
            href: '/'
          }
        ]
      }
    },
    options: {
      width: false,
      variants
    }
  },
  'with navigation (justified)': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with navigation (overflow)': {
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
      width: false,
      variants
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
  'with navigation (overflow, white)': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with search': {
    context: {
      search: true
    },
    options: {
      width: false,
      variants
    },
    screenshot: {
      states: ['focus'],
      selector: '.nhsuk-header__search-input',
      viewports: ['desktop']
    }
  },
  'with service name': {
    context: {
      logo: {
        href: '#'
      },
      service: {
        text: 'Find your NHS number'
      }
    },
    options: {
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with service name (linked)': {
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
      width: false,
      variants
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
  'with service name (linked with logo)': {
    context: {
      service: {
        text: 'Prototype kit',
        href: '#'
      }
    },
    options: {
      width: false,
      variants
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'with service name (linked and long), search': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with service name, search, account (logged in, complex), navigation': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with service name, search, account, navigation': {
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
      width: false,
      variants
    }
  },
  'with organisation name': {
    context: {
      logo: {
        href: '#'
      },
      organisation: {
        name: 'Business Services Authority'
      }
    },
    options: {
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with organisation name (and descriptor)': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'with organisation name (split with descriptor)': {
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
      width: false,
      variants
    },
    screenshot: {
      states: ['hover', 'focus'],
      selector: '.nhsuk-header__service-logo',
      viewports: ['desktop']
    }
  },
  'with organisation name (split with descriptor), search': {
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
      width: false,
      variants
    },
    screenshot: {
      viewports: ['desktop']
    }
  },
  'white linked logo, ARIA label': {
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
  'white linked logo, custom': {
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
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
