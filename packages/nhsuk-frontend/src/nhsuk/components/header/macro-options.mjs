export const name = 'Header'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the header.',
    released: '10.0.0'
  },
  logo: {
    type: 'object',
    required: false,
    description: 'Object containing options for the logo.',
    released: '10.0.0',
    params: {
      href: {
        type: 'string',
        required: false,
        description:
          'The `href` of the link for the logo. If not set, and a `service.href` is set, or both are set to same value, then the logo and service name will be combined into a single link.',
        released: '10.0.0'
      },
      src: {
        type: 'string',
        required: false,
        description:
          'The path of the logo image, if you are not using the default NHS logo.',
        released: '10.0.0'
      },
      alt: {
        type: 'string',
        required: false,
        description: 'The alt text for the logo. Defaults to `"NHS"`.',
        released: '10.0.0'
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          'The `aria-label` for a linked logo. Defaults to `"NHS homepage"`.',
        released: '10.0.0'
      }
    }
  },
  service: {
    type: 'object',
    required: false,
    description: 'Object containing options for the service name.',
    released: '10.0.0',
    params: {
      text: {
        type: 'string',
        required: false,
        description: 'The text to use for the service name.',
        released: '10.0.0'
      },
      href: {
        type: 'string',
        required: false,
        description: 'The `href` of the link for the service name.',
        released: '10.0.0'
      }
    }
  },
  inline: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, positions the search box (or account links) inline with the NHS logo.',
    released: '10.4.0'
  },
  organisation: {
    type: 'object',
    required: false,
    description: 'Settings for header with organisational logo.',
    released: '10.0.0',
    params: {
      name: {
        type: 'string',
        required: false,
        description: 'Organisation name.',
        released: '10.0.0'
      },
      split: {
        type: 'string',
        required: false,
        description:
          'Longer organisation names can be split onto multiple lines.',
        released: '10.0.0'
      },
      descriptor: {
        type: 'string',
        required: false,
        description: 'Organisation descriptor.',
        released: '10.0.0'
      }
    }
  },
  navigation: {
    type: 'object',
    required: false,
    description: 'Object containing settings for the primary navigation.',
    released: '10.0.0',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of navigation links for use in the header.',
        released: '10.0.0',
        params: {
          href: {
            type: 'string',
            required: false,
            description: 'The href of a navigation item in the header.',
            released: '10.0.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text for the navigation item. If `html` is provided, the `text` argument will be ignored.',
            released: '10.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML for the navigation item. If `html` is provided, the `text` argument will be ignored.',
            released: '10.0.0'
          },
          current: {
            type: 'boolean',
            required: false,
            description:
              'Set to `true` if this links to the current page being shown.',
            released: '10.0.0'
          },
          active: {
            type: 'boolean',
            required: false,
            description:
              "Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page",
            released: '10.0.0'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the list item containing the link.',
            released: '10.0.0'
          },
          attributes: {
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the list item containing the link.',
            released: '10.0.0'
          }
        }
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          'The `aria-label` for the primary navigation. Defaults to `"Menu"`.',
        released: '10.0.0'
      },
      toggleMenuText: {
        type: 'string',
        required: false,
        description: 'Text for the toggle menu button. Defaults to `"More"`.',
        released: '10.1.0'
      },
      toggleMenuVisuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`.',
        released: '10.1.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the primary navigation.',
        released: '10.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the primary navigation.',
        released: '10.0.0'
      },
      justified: {
        type: 'boolean',
        required: false,
        description:
          'If set to `true`, use justified alignment where navigation items appeared evenly spaced out.',
        released: '10.4.0'
      },
      colour: {
        type: 'string',
        required: false,
        description:
          'Optional colour modifier for the primary navigation. You can use only `"white"` or empty values with this option.',
        released: '10.0.0'
      }
    }
  },
  search: {
    type: 'object',
    required: false,
    description: 'Object containing settings for a search box.',
    released: '10.0.0',
    params: {
      action: {
        type: 'string',
        required: false,
        description:
          'The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`.',
        released: '10.0.0'
      },
      method: {
        type: 'string',
        required: false,
        description: 'The search form `method` attribute. Defaults to `"get"`.',
        released: '10.3.0'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'The `name` attribute for the search field. Defaults to `"q"`.',
        released: '10.0.0'
      },
      placeholder: {
        type: 'string',
        required: false,
        description:
          'The placeholder text for the search field. Defaults to `"Search"`.',
        released: '10.0.0'
      },
      visuallyHiddenLabel: {
        type: 'string',
        required: false,
        description:
          'The label for the search field. Defaults to `"Search the NHS website"`.',
        released: '10.0.0'
      },
      visuallyHiddenButton: {
        type: 'string',
        required: false,
        description:
          'The label for the visually hidden button. Defaults to `"Search"`.',
        released: '10.0.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the search element.',
        released: '10.3.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the search element.',
        released: '10.3.0'
      }
    }
  },
  account: {
    type: 'object',
    required: false,
    description:
      'Object containing settings for the account section of the header.',
    released: '10.0.0',
    params: {
      items: {
        type: 'array',
        required: false,
        description: 'Array of account items for use in the header.',
        released: '10.0.0',
        params: {
          href: {
            type: 'string',
            required: false,
            description: 'The href of an account item in the header.',
            released: '10.0.0'
          },
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text for the account item. If `html` is provided, the `text` argument will be ignored.',
            released: '10.0.0'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML for the account item. If `html` is provided, the `text` argument will be ignored.',
            released: '10.0.0'
          },
          icon: {
            type: 'boolean',
            required: false,
            description:
              'Whether to include the account icon for the account item. Defaults to `false`.',
            released: '10.0.0'
          },
          action: {
            type: 'string',
            required: false,
            description:
              'If set, the item will become a button wrapped in a form with the action given. Useful for log out buttons.',
            released: '10.0.0'
          },
          method: {
            type: 'string',
            required: false,
            description:
              'The value to use for the `method` of the form if `action` is set. Defaults to `"post"`.',
            released: '10.0.0'
          },
          classes: {
            type: 'string',
            required: false,
            description:
              'Classes to add to the list item containing the account item.',
            released: '10.0.0'
          }
        }
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          'The `aria-label` for the account navigation. Defaults to `"Account"`.',
        released: '10.0.0'
      },
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the account navigation.',
        released: '10.0.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the account navigation.',
        released: '10.0.0'
      }
    }
  },
  baseUrl: {
    type: 'string',
    required: false,
    description: 'Base URL to prepend to the `logo.src` path.',
    released: '10.0.0'
  },
  containerClasses: {
    type: 'string',
    required: false,
    description:
      'Classes to add to the header container, useful if you want to make the header fixed width.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the header container.',
    released: '10.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the header container.',
    released: '10.0.0'
  },
  colour: {
    type: 'string',
    required: false,
    description:
      'Optional colour modifier for the header. You can use only `"white"` or empty values with this option.',
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
