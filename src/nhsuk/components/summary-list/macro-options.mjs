import { outdent } from 'outdent'

export const name = 'Summary list'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the summary list.'
  },
  rows: {
    type: 'array',
    required: true,
    description: 'The rows within the summary list component.',
    params: {
      classes: {
        type: 'string',
        required: false,
        description: 'Classes to add to the row `div`.'
      },
      key: {
        type: 'object',
        required: true,
        description:
          'The reference content (key) for each row item in the summary list component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the key wrapper.'
          }
        }
      },
      value: {
        type: 'object',
        required: true,
        description:
          'The value for each row item in the summary list component.',
        params: {
          text: {
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored.'
          },
          html: {
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored.'
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the value wrapper.'
          }
        }
      },
      actions: {
        type: 'object',
        required: false,
        description:
          'The action link content for each row item in the summary list component.',
        params: {
          items: {
            type: 'array',
            required: false,
            description:
              'The action link items within the row item of the summary list component.',
            params: {
              href: {
                type: 'string',
                required: true,
                description:
                  "The value of the link's `href` attribute for an action item."
              },
              text: {
                type: 'string',
                required: true,
                description:
                  'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.'
              },
              html: {
                type: 'string',
                required: true,
                description:
                  'If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored.'
              },
              visuallyHiddenText: {
                type: 'string',
                required: false,
                description:
                  'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.'
              },
              classes: {
                type: 'string',
                required: false,
                description: 'Classes to add to the action item.'
              },
              attributes: {
                type: 'object',
                required: false,
                description:
                  'HTML attributes (for example data attributes) to add to the action item.'
              }
            }
          },
          classes: {
            type: 'string',
            required: false,
            description: 'Classes to add to the actions wrapper.'
          }
        }
      }
    }
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the container.'
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
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'name'
              }
            ]
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'date of birth'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact information'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact details'
              }
            ]
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with multiple actions': {
    context: {
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'date of birth'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact information'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Add',
                visuallyHiddenText: 'new contact details'
              },
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact details'
              }
            ]
          }
        },
        {
          key: {
            text: 'Medicines'
          },
          value: {
            html: outdent`
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Add',
                visuallyHiddenText: 'new medicine'
              },
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'medicines'
              }
            ]
          }
        }
      ]
    },
    options: {
      width: 'full'
    }
  },
  'with multiple actions (empty items)': {
    context: {
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          },
          actions: {
            items: [
              false,
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'date of birth'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          },
          actions: {
            items: [
              false,
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact information'
              }
            ]
          }
        },
        {
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Add',
                visuallyHiddenText: 'new contact details'
              },
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'contact details'
              }
            ]
          }
        },
        {
          key: {
            text: 'Medicines'
          },
          value: {
            html: outdent`
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            `
          },
          actions: {
            items: [
              {
                href: '#',
                text: 'Add',
                visuallyHiddenText: 'new medicine'
              },
              {
                href: '#',
                text: 'Change',
                visuallyHiddenText: 'medicines'
              }
            ]
          }
        }
      ]
    },
    options: {
      width: 'full'
    }
  },
  'without actions': {
    context: {
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          }
        },
        {
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without border': {
    context: {
      classes: 'nhsuk-summary-list--no-border',
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          }
        },
        {
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without row border': {
    context: {
      rows: [
        {
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        },
        {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        },
        {
          key: {
            text: 'Contact information'
          },
          value: {
            html: outdent`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `
          }
        },
        {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Contact details'
          },
          value: {
            html: outdent`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `
          }
        }
      ]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
