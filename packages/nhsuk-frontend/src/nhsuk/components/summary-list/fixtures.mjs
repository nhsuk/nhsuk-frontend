import { outdent } from "outdent"

import { components } from "#lib"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        },
        {
          key: {
            text: "Contact information"
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
            text: "Contact details"
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
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with actions": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          },
          actions: {
            items: [
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "name"
              }
            ]
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        }
      ]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with actions as buttons": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          },
          actions: {
            items: [
              {
                type: "submit",
                text: "Change",
                visuallyHiddenText: "name"
              }
            ]
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              {
                type: "submit",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                type: "submit",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                type: "submit",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        }
      ]
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with multiple actions": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new contact details"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        },
        {
          key: {
            text: "Medicines"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new medicine"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "medicines"
              }
            ]
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with multiple actions as buttons": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              {
                type: "submit",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                type: "submit",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                type: "submit",
                text: "Add",
                visuallyHiddenText: "new contact details"
              },
              {
                type: "submit",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        },
        {
          key: {
            text: "Medicines"
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
                type: "submit",
                text: "Add",
                visuallyHiddenText: "new medicine"
              },
              {
                type: "submit",
                text: "Change",
                visuallyHiddenText: "medicines"
              }
            ]
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with multiple actions (empty items)": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              false,
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new contact details"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        },
        {
          key: {
            text: "Medicines"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new medicine"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "medicines"
              }
            ]
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "with item widths": {
    context: {
      rows: [
        {
          key: {
            text: "Name",
            width: "one-half"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth",
            width: "one-half"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "without border": {
    context: {
      border: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        },
        {
          key: {
            text: "Contact information"
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
            text: "Contact details"
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
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "without last row border": {
    context: {
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        },
        {
          key: {
            text: "Contact information"
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
            text: "Contact details"
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
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "without specific row border": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        },
        {
          key: {
            text: "Contact information"
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
          border: false,
          key: {
            text: "Contact details"
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
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "as a card": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card with multiple actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "l"
        },
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          },
          actions: {
            items: [
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact information"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact information"
              }
            ]
          }
        },
        {
          key: {
            text: "Contact details"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new contact details"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "contact details"
              }
            ]
          }
        },
        {
          key: {
            text: "Medicines"
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
                href: "#/add",
                text: "Add",
                visuallyHiddenText: "new medicine"
              },
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "medicines"
              }
            ]
          }
        }
      ]
    },
    options: {
      width: "full"
    }
  },
  "as a card with action": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card with action as a button": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        actions: {
          items: [
            {
              type: "submit",
              text: "Delete"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card with actions as buttons": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        actions: {
          items: [
            {
              type: "submit",
              text: "Delete"
            },
            {
              type: "submit",
              text: "Withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (secondary) with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        variant: "secondary",
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (feature) with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        variant: "feature",
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (feature) with custom HTML": {
    context: {
      card: {
        heading: {
          text: "Your read",
          size: "m"
        },
        variant: "feature"
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Opinion"
          },
          value: {
            html: outdent`
              <p class="nhsuk-u-margin-bottom-3">
                ${components.render("tag", {
                  context: {
                    text: "Recall for assessment",
                    colour: "red"
                  }
                })}
              </p>
            `
          },
          actions: {
            items: [
              {
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "opinion"
              }
            ]
          }
        },
        {
          key: {
            text: "Detailed opinion"
          },
          value: {
            html: outdent`
              <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-one-half">
                  <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                    Right breast
                  </p>
                  <p class="nhsuk-u-margin-bottom-3">
                    ${components.render("tag", {
                      context: {
                        text: "Abnormal",
                        colour: "red"
                      }
                    })}
                  </p>
                </div>

                <div class="nhsuk-grid-column-one-half">
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "detailed opinion"
              }
            ]
          }
        },
        {
          key: {
            text: "Annotations"
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
                href: "#/change",
                text: "Change",
                visuallyHiddenText: "annotations"
              }
            ]
          }
        }
      ]
    },
    options: {
      width: "full"
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "as a card (clickable) without actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager",
          size: "m"
        },
        href: "#/card-clickable",
        clickable: true
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (type non-urgent) with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager"
        },
        variant: "non-urgent",
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (type urgent) with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager"
        },
        variant: "urgent",
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "as a card (type emergency) with actions": {
    context: {
      card: {
        heading: {
          text: "Regional Manager"
        },
        variant: "emergency",
        actions: {
          items: [
            {
              text: "Delete",
              href: "#/delete"
            },
            {
              text: "Withdraw",
              href: "#/withdraw"
            }
          ]
        }
      },
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    }
  },
  "example person: Karen Francis": {
    context: {
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    },
    options: {
      hidden: true
    }
  },
  "example person: Karen Francis (no border)": {
    context: {
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Karen Francis"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "15 March 1984"
          }
        }
      ]
    },
    options: {
      hidden: true
    }
  },
  "example person: Sarah Philips (no border)": {
    context: {
      lastRowBorder: false,
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Sarah Philips"
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "5 January 1978"
          }
        }
      ]
    },
    options: {
      hidden: true
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
