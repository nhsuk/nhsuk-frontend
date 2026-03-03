import { outdent } from 'outdent'

import { components } from '#lib'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
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
  'as a card with multiple actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'l',
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
          classes: 'nhsuk-summary-list__row--no-border',
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
  'as a card (feature) with custom HTML': {
    context: {
      card: {
        heading: 'Your read',
        headingSize: 'm',
        feature: true
      },
      rows: [
        {
          key: {
            text: 'Opinion'
          },
          value: {
            html: outdent`
              <p class="nhsuk-u-margin-bottom-3">
                ${components.render('tag', {
                  context: {
                    text: 'Recall for assessment',
                    classes: 'nhsuk-tag--red'
                  }
                })}
              </p>
            `
          },
          actions: {
            items: [
              {
                href: '#/change',
                text: 'Change',
                visuallyHiddenText: 'opinion'
              }
            ]
          }
        },
        {
          key: {
            text: 'Detailed opinion'
          },
          value: {
            html: outdent`
              <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-one-half-from-desktop">
                  <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                    Right breast
                  </p>
                  <p class="nhsuk-u-margin-bottom-3">
                    ${components.render('tag', {
                      context: {
                        text: 'Abnormal',
                        classes: 'nhsuk-tag--red'
                      }
                    })}
                  </p>
                </div>

                <div class="nhsuk-grid-column-one-half-from-desktop">
                  <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                    Left breast
                  </p>
                  <p class="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">
                    Not recorded
                  </p>
                </div>
              </div>
            `
          },
          actions: {
            items: [
              {
                href: '#/change',
                text: 'Change',
                visuallyHiddenText: 'detailed opinion'
              }
            ]
          }
        },
        {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Annotations'
          },
          value: {
            html: outdent`
              <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                Right breast
              </p>
              <p class="nhsuk-u-margin-bottom-0">
                Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)
              </p>
            `
          },
          actions: {
            items: [
              {
                href: '#/change',
                text: 'Change',
                visuallyHiddenText: 'annotations'
              }
            ]
          }
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
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
