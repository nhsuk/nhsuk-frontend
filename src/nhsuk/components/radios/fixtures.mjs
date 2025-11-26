import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

/**
 * Nunjucks macro option variants
 *
 @satisfies {MacroExample[]}
 */
export const variants = [
  {
    context: {
      fieldset: {
        legend: {
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      }
    }
  },
  {
    description: 'small',
    context: {
      classes: 'nhsuk-radios--small',
      fieldset: {
        legend: {
          classes: 'nhsuk-fieldset__legend--m',
          isPageHeading: true
        }
      }
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?'
        }
      },
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with hint': {
    context: {
      fieldset: {
        legend: {
          text: 'Do you know your NHS number?'
        }
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      idPrefix: 'with-hint',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes, I know my NHS number'
        },
        {
          value: 'no',
          text: 'No, I do not know my NHS number'
        },
        {
          value: 'not sure',
          text: "I'm not sure"
        }
      ]
    },
    options: {
      variants
    }
  },
  'inline': {
    context: {
      classes: 'nhsuk-radios--inline',
      fieldset: {
        legend: {
          text: 'Are you 18 or over?'
        }
      },
      idPrefix: 'inline',
      name: 'example',
      value: 'no',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'legend': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?'
        }
      },
      idPrefix: 'custom-size',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants: [
        {
          description: 'with size S',
          context: {
            fieldset: {
              legend: {
                classes: 'nhsuk-fieldset__legend--s'
              }
            }
          }
        },
        {
          description: 'with size M',
          context: {
            fieldset: {
              legend: {
                classes: 'nhsuk-fieldset__legend--m'
              }
            }
          }
        },
        {
          description: 'with size L',
          context: {
            fieldset: {
              legend: {
                classes: 'nhsuk-fieldset__legend--l'
              }
            }
          }
        },
        {
          description: 'with size XL',
          context: {
            fieldset: {
              legend: {
                classes: 'nhsuk-fieldset__legend--xl'
              }
            }
          }
        }
      ]
    }
  },
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'Are you 18 or over?',
          isPageHeading: false
        }
      },
      idPrefix: 'without-heading',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants
    }
  },
  'with divider': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to sign in?'
        }
      },
      idPrefix: 'with-divider',
      name: 'example',
      items: [
        {
          value: 'nhsuk-login',
          text: 'Use NHS login'
        },
        {
          value: 'government-verify',
          text: 'Use GOV.UK Verify'
        },
        {
          divider: 'or'
        },
        {
          value: 'create-account',
          text: 'Create an account'
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with hints on items': {
    context: {
      fieldset: {
        legend: {
          text: 'Do you have a mobile phone with signal?'
        }
      },
      idPrefix: 'with-hint-item',
      name: 'example',
      items: [
        {
          value: 'mobile',
          text: 'Yes, I have a mobile phone with signal',
          hint: {
            text: 'We will text you a 6 digit security code'
          }
        },
        {
          value: 'landline',
          text: 'No, I want to use my landline',
          hint: {
            text: 'We will call you to give you a 6 digit security code'
          }
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without fieldset': {
    context: {
      fieldset: null,
      id: 'without-fieldset',
      name: 'colours',
      items: [
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'green',
          text: 'Green'
        },
        {
          value: 'blue',
          text: 'Blue'
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with disabled item': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      idPrefix: 'with-disabled-item',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          disabled: true
        },
        {
          value: 'no',
          text: 'No',
          disabled: true
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      errorMessage: {
        text: 'Select yes if you have changed your name'
      },
      idPrefix: 'with-error-message',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants
    }
  },
  'with hint and error': {
    context: {
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently'
      },
      errorMessage: {
        text: 'Select yes if you have changed your name'
      },
      idPrefix: 'with-hint-error',
      name: 'example',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      states: ['focus'],
      selector: '#with-hint-error',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with long text': {
    context: {
      fieldset: {
        legend: {
          text: 'Venenatis Condimentum'
        }
      },
      idPrefix: 'with-long-text',
      name: 'example',
      items: [
        {
          value: 'nullam',
          text: outdent`
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
            at eget metus.
          `
        },
        {
          value: 'aenean',
          text: outdent`
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Cras mattis consectetur purus sit amet
            fermentum.
          `
        },
        {
          value: 'fusce',
          text: outdent`
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Etiam porta sem malesuada magna
            mollis euismod. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. Sed posuere consectetur est at lobortis.
          `
        }
      ]
    },
    options: {
      variants
    }
  },
  'with conditional content': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select 1 option'
      },
      idPrefix: 'conditional',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    },
    options: {
      variants
    }
  },
  'with conditional content, error message': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select 1 option'
      },
      errorMessage: {
        text: 'Select how you prefer to be contacted'
      },
      idPrefix: 'conditional',
      name: 'example',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    },
    options: {
      variants
    }
  },
  'with conditional content, error message (nested)': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select 1 option'
      },
      idPrefix: 'conditional',
      name: 'example',
      value: 'phone',
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Email address'
                },
                name: 'email',
                spellcheck: false,
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Phone number'
                },
                errorMessage: {
                  text: 'Enter your phone number'
                },
                name: 'phone',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html: components.render('input', {
              context: {
                label: {
                  text: 'Mobile phone number'
                },
                name: 'mobile',
                type: 'tel',
                classes: 'nhsuk-u-width-two-thirds'
              }
            })
          }
        }
      ]
    },
    options: {
      variants
    },
    screenshot: {
      states: ['focus'],
      selector: '#conditional-2',
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with nested conditional radios': {
    context: {
      fieldset: {
        legend: {
          text: 'How do you want to be contacted about this?'
        }
      },
      hint: {
        text: 'Select 1 option'
      },
      idPrefix: 'conditional-nested',
      name: 'example-outer',
      items: [
        {
          value: 'no-conditional',
          text: 'No conditional'
        },
        {
          value: 'nested',
          text: 'Nested conditional',
          conditional: {
            html: components.render('radios', {
              context: {
                fieldset: {
                  legend: {
                    text: 'How do you want to be contacted about this?',
                    classes: 'nhsuk-fieldset__legend--s'
                  }
                },
                hint: {
                  text: 'Select 1 option'
                },
                name: 'example-inner',
                items: [
                  {
                    value: 'email',
                    text: 'Email',
                    conditional: {
                      html: components.render('input', {
                        context: {
                          label: {
                            text: 'Email address'
                          },
                          name: 'email',
                          spellcheck: false,
                          classes: 'nhsuk-u-width-two-thirds'
                        }
                      })
                    }
                  },
                  {
                    value: 'phone',
                    text: 'Phone',
                    conditional: {
                      html: components.render('input', {
                        context: {
                          label: {
                            text: 'Phone number'
                          },
                          name: 'phone',
                          type: 'tel',
                          classes: 'nhsuk-u-width-two-thirds'
                        }
                      })
                    }
                  },
                  {
                    value: 'text',
                    text: 'Text message',
                    conditional: {
                      html: components.render('input', {
                        context: {
                          label: {
                            text: 'Mobile phone number'
                          },
                          name: 'mobile',
                          type: 'tel',
                          classes: 'nhsuk-u-width-two-thirds'
                        }
                      })
                    }
                  }
                ]
              }
            })
          }
        }
      ]
    },
    options: {
      variants
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
