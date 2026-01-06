import { outdent } from 'outdent'

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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new contact details'
              },
              {
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new medicine'
              },
              {
                href: '#/change',
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new contact details'
              },
              {
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new medicine'
              },
              {
                href: '#/change',
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
  },
  'as a card': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm'
      },
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
        }
      ]
    }
  },
  'as a card with multiple actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
                href: '#/change',
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
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new contact details'
              },
              {
                href: '#/change',
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
                href: '#/add',
                text: 'Add',
                visuallyHiddenText: 'new medicine'
              },
              {
                href: '#/change',
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
  'as a card with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (secondary) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        secondary: true,
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (feature) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        feature: true,
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (clickable) without actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        href: '#/card-clickable',
        clickable: true
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (type non-urgent) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'non-urgent',
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (type urgent) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'urgent',
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }
      ]
    }
  },
  'as a card (type emergency) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'emergency',
        actions: {
          items: [
            {
              text: 'Delete',
              href: '#/delete'
            },
            {
              text: 'Withdraw',
              href: '#/withdraw'
            }
          ]
        }
      },
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
        }
      ]
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
