'use strict';

var outdent = require('outdent');
var _lib = require('#lib');
var fixtures$1 = require('../input/fixtures.js');

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  // Regular variant
}, {
  description: "small",
  context: {
    small: true,
    fieldset: {
      legend: {
        size: "m"
      }
    }
  }
}];

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "disabled": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "disabled",
      name: "example",
      disabled: true,
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "disabled input": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "disabled-input",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message",
        disabled: true
      }]
    },
    variants
  },
  "disabled with enabled input": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "disabled-enabled-input",
      name: "example",
      disabled: true,
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message",
        disabled: false
      }]
    },
    variants
  },
  "with hint": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "with-hint",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants
  },
  "inline": {
    context: {
      fieldset: {
        legend: {
          heading: "Are you 18 or over?",
          size: "l"
        }
      },
      idPrefix: "inline",
      name: "example",
      inline: true,
      items: [{
        value: "yes",
        text: "Yes"
      }, {
        value: "no",
        text: "No"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "legend": {
    context: {
      fieldset: {
        legend: {
          text: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "custom-size",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants: [{
      description: "with size S",
      context: {
        fieldset: {
          legend: {
            size: "s"
          }
        }
      }
    }, {
      description: "with size M",
      context: {
        fieldset: {
          legend: {
            size: "m"
          }
        }
      }
    }, {
      description: "with size L",
      context: {
        fieldset: {
          legend: {
            size: "l"
          }
        }
      }
    }, {
      description: "with size XL",
      context: {
        fieldset: {
          legend: {
            size: "xl"
          }
        }
      }
    }, {
      description: "with id attribute on",
      context: {
        fieldset: {
          legend: {
            id: "custom-id"
          }
        }
      },
      options: {
        hidden: true
      }
    }]
  },
  "without heading": {
    context: {
      fieldset: {
        legend: "How do you want to be contacted about this?"
      },
      idPrefix: "without-heading",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    }
  },
  "with pre-checked value": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "conditional",
      name: "example",
      value: "email",
      items: getItems()
    },
    variants
  },
  "with divider": {
    context: {
      fieldset: {
        legend: {
          heading: "Do you know your NHS number?",
          size: "l"
        }
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      idPrefix: "with-divider",
      name: "example",
      items: [{
        value: "yes",
        text: "Yes, I know my NHS number"
      }, {
        value: "no",
        text: "No, I do not know my NHS number"
      }, {
        divider: "or"
      }, {
        value: "not sure",
        text: "I'm not sure"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with hints on items": {
    context: {
      fieldset: {
        legend: {
          heading: "Do you have a mobile phone with signal?",
          size: "l"
        }
      },
      idPrefix: "with-hint-item",
      name: "example",
      items: [{
        value: "mobile",
        text: "Yes, I have a mobile phone with signal",
        hint: {
          text: "We will text you a 6 digit security code"
        }
      }, {
        value: "landline",
        text: "No, I want to use my landline",
        hint: {
          text: "We will call you to give you a 6 digit security code"
        }
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "without fieldset": {
    context: {
      fieldset: null,
      idPrefix: "without-fieldset",
      name: "colours",
      items: [{
        value: "red",
        text: "Red"
      }, {
        value: "green",
        text: "Green"
      }, {
        value: "blue",
        text: "Blue"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with error only": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      errorMessage: true,
      idPrefix: "with-error-only",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    }
  },
  "with error message": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      errorMessage: {
        text: "Select how you want to be contacted"
      },
      idPrefix: "with-error-message",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants
  },
  "with error message and hint": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      errorMessage: {
        text: "Select how you want to be contacted"
      },
      idPrefix: "with-hint-error",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants,
    screenshot: {
      states: ["focus"],
      selector: "#with-hint-error",
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with error message and hint as strings": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: "Select 1 option",
      errorMessage: "Select how you want to be contacted",
      idPrefix: "with-hint-error",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants
  },
  "with error message, without heading": {
    context: {
      fieldset: {
        legend: {
          text: "How do you want to be contacted about this?",
          size: null
        }
      },
      errorMessage: {
        text: "Select how you want to be contacted"
      },
      idPrefix: "with-error-message",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants
  },
  "with error message and hint, without heading": {
    context: {
      fieldset: {
        legend: {
          text: "How do you want to be contacted about this?",
          size: null
        }
      },
      hint: {
        text: "Select 1 option"
      },
      errorMessage: {
        text: "Select how you want to be contacted"
      },
      idPrefix: "with-hint-error",
      name: "example",
      items: [{
        value: "email",
        text: "Email"
      }, {
        value: "phone",
        text: "Phone"
      }, {
        value: "text",
        text: "Text message"
      }]
    },
    variants
  },
  "with long text": {
    context: {
      fieldset: {
        legend: {
          heading: "Venenatis Condimentum",
          size: "l"
        }
      },
      idPrefix: "with-long-text",
      name: "example",
      items: [{
        value: "nullam",
        text: outdent.outdent`
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
            at eget metus.
          `
      }, {
        value: "aenean",
        text: outdent.outdent`
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Cras mattis consectetur purus sit amet
            fermentum.
          `
      }, {
        value: "fusce",
        text: outdent.outdent`
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Etiam porta sem malesuada magna
            mollis euismod. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. Sed posuere consectetur est at lobortis.
          `
      }]
    },
    variants
  },
  "with conditional content": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "conditional",
      name: "example",
      items: getItems()
    },
    variants
  },
  "with conditional content, special characters": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "user.profile[contact-prefs]",
      name: "example",
      items: getItems()
    },
    options: {
      hidden: true
    },
    variants
  },
  "with conditional content, error message": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      errorMessage: {
        text: "Select how you want to be contacted"
      },
      idPrefix: "conditional",
      name: "example",
      items: getItems()
    },
    variants
  },
  "with conditional content, error message (nested)": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "conditional",
      name: "example",
      value: "phone",
      items: getItems({
        invalid: true
      })
    },
    variants,
    screenshot: {
      states: ["focus"],
      selector: "#conditional-2",
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with nested conditional radios": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 option"
      },
      idPrefix: "conditional-nested",
      name: "example-outer",
      items: [{
        value: "no-conditional",
        text: "No conditional"
      }, {
        value: "nested",
        text: "Nested conditional",
        conditional: {
          html: _lib.components.render("radios", {
            context: {
              fieldset: {
                legend: {
                  text: "How do you want to be contacted about this?",
                  size: "s"
                }
              },
              hint: {
                text: "Select 1 option"
              },
              name: "example-inner",
              items: getItems()
            }
          })
        }
      }]
    }
  }
};

/**
 * Get example items by variant
 *
 * @param {{ variant?: unknown, invalid?: boolean }} [options]
 * @returns {object[]}
 */
function getItems(options = {}) {
  let input1 = fixtures$1.examples["example email address"];
  let input2 = fixtures$1.examples["example phone number"];
  let input3 = fixtures$1.examples["example mobile phone number"];

  // Include error message example (optional)
  if (options.invalid) {
    input2 = fixtures$1.examples["example phone number with error message"];
  }
  return [{
    value: "email",
    text: "Email",
    conditional: {
      html: _lib.components.render("input", input1)
    }
  }, {
    value: "phone",
    text: "Phone",
    conditional: {
      html: _lib.components.render("input", input2)
    }
  }, {
    value: "text",
    text: "Text message",
    conditional: {
      html: _lib.components.render("input", input3)
    }
  }];
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

exports.examples = examples;
exports.variants = variants;
//# sourceMappingURL=fixtures.js.map
