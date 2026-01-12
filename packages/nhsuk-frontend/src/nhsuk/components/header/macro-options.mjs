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
    description: 'Object containing options for the logo.',
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
        description: 'The alt text for the logo. Defaults to `"NHS"`.'
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          'The `aria-label` for a linked logo. Defaults to `"NHS homepage"`.'
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
              'Set to `true` if this links to the current page being shown.'
          },
          active: {
            type: 'boolean',
            required: false,
            description:
              "Set to `true` if the current page is within this section, but the link doesn't necessarily link to the current page"
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
          'The `aria-label` for the primary navigation. Defaults to `"Menu"`.'
      },
      toggleMenuText: {
        type: 'string',
        required: false,
        description: 'Text for the toggle menu button. Defaults to `"More"`.'
      },
      toggleMenuVisuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'A visually hidden prefix used before the toggle menu button text. Defaults to `"Browse"`.'
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
    description: 'Object containing settings for a search box.',
    params: {
      action: {
        type: 'string',
        required: false,
        description:
          'The search form `action` attribute. Defaults to `"https://www.nhs.uk/search"`.'
      },
      name: {
        type: 'string',
        required: false,
        description:
          'The `name` attribute for the search field. Defaults to `"q"`.'
      },
      placeholder: {
        type: 'string',
        required: false,
        description:
          'The placeholder text for the search field. Defaults to `"Search"`.'
      },
      visuallyHiddenLabel: {
        type: 'string',
        required: false,
        description:
          'The label for the search field. Defaults to `"Search the NHS website"`.'
      },
      visuallyHiddenButton: {
        type: 'string',
        required: false,
        description:
          'The label for the visually hidden button. Defaults to `"Search"`.'
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
              'The value to use for the `method` of the form if `action` is set. Defaults to `"post"`.'
          },
          classes: {
            type: 'string',
            required: false,
            description:
              'Classes to add to the list item containing the account item.'
          }
        }
      },
      ariaLabel: {
        type: 'string',
        required: false,
        description:
          'The `aria-label` for the account navigation. Defaults to `"Account"`.'
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
 * @import { MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
