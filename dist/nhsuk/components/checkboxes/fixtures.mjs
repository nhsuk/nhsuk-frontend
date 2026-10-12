import { outdent } from 'outdent';
import { components } from '#lib';
import { examples as examples$1 } from '../input/fixtures.mjs';

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
      hint: {
        text: "Select all options that are relevant to you"
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
      hint: {
        text: "Select all options that are relevant to you"
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
    screenshot: true
  },
  "disabled input": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select all options that are relevant to you"
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
      hint: {
        text: "Select all options that are relevant to you"
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
          heading: "What medical conditions do you have?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 or more"
      },
      idPrefix: "with-hint",
      name: "example",
      items: [{
        value: "alzheimers",
        text: "Alzheimer's disease or dementia"
      }, {
        value: "asthma",
        text: "Asthma"
      }, {
        value: "cancer",
        text: "Cancer"
      }, {
        value: "diabetes",
        text: "Diabetes"
      }]
    },
    variants
  },
  "inline": {
    context: {
      fieldset: {
        legend: {
          heading: "Which nipple has changed?",
          size: "l"
        }
      },
      idPrefix: "inline",
      name: "example",
      inline: true,
      items: [{
        value: "right",
        text: "Right nipple"
      }, {
        value: "left",
        text: "Left nipple"
      }]
    },
    variants,
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with pre-checked values": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select all options that are relevant to you"
      },
      idPrefix: "conditional",
      name: "contact",
      values: ["email", "text"],
      items: getItems()
    },
    variants
  },
  "with hints on items": {
    context: {
      fieldset: {
        legend: {
          heading: "What medical conditions do you have?",
          size: "l"
        }
      },
      hint: {
        text: "Select 1 or more"
      },
      idPrefix: "with-hint-item",
      name: "example",
      items: [{
        value: "alzheimers",
        text: "Alzheimer's disease or dementia"
      }, {
        value: "asthma",
        text: "Asthma"
      }, {
        value: "cancer",
        text: "Cancer"
      }, {
        value: "diabetes",
        text: "Diabetes",
        hint: {
          text: "including type 1, type 2, and gestational diabetes"
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
    variants
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
        value: "text message",
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
        value: "text message",
        text: "Text message"
      }]
    },
    variants,
    screenshot: {
      states: ["focus"],
      selector: "#with-error-message",
      viewports: ["mobile", "tablet", "desktop"]
    }
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
        text: "Select all options that are relevant to you"
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
        value: "text message",
        text: "Text message"
      }]
    },
    variants
  },
  "with error message and hint as strings": {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: "Select all options that are relevant to you",
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
        value: "text message",
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
        value: "text message",
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
        text: "Select all options that are relevant to you"
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
        value: "text message",
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
        text: outdent`
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida
            at eget metus.
          `
      }, {
        value: "aenean",
        text: outdent`
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
        text: outdent`
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
  "legend": {
    context: {
      fieldset: {
        legend: {
          text: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      hint: {
        text: "Select all options that are relevant to you"
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
        value: "text message",
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
        value: "text message",
        text: "Text message"
      }]
    }
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
        text: "Select all options that are relevant to you"
      },
      idPrefix: "conditional",
      name: "contact",
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
        text: "Select all options that are relevant to you"
      },
      idPrefix: "user.profile[contact-prefs]",
      name: "contact",
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
        text: "Select all options that are relevant to you"
      },
      errorMessage: {
        text: "Select how you like to be contacted"
      },
      idPrefix: "conditional",
      name: "contact",
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
        text: "Select all options that are relevant to you"
      },
      idPrefix: "conditional",
      name: "example",
      values: ["phone"],
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
  'with "all" option': {
    context: {
      fieldset: {
        legend: {
          heading: "Which vaccines would you like to include?",
          size: "l"
        }
      },
      idPrefix: "all",
      name: "example",
      items: [{
        value: "all",
        text: "All 9 vaccines",
        behaviour: "inclusive"
      }, {
        divider: "or",
        behaviour: "inclusive"
      }, {
        value: "4in1",
        text: "4-in-1 pre-school booster"
      }, {
        value: "6in1",
        text: "6-in-1"
      }, {
        value: "hpv",
        text: "HPV"
      }, {
        value: "menb",
        text: "MenB"
      }, {
        value: "menacwy",
        text: "MenACWY"
      }, {
        value: "mmrv",
        text: "MMRV"
      }, {
        value: "rotavirus",
        text: "Rotavirus"
      }, {
        value: "pneumococcal",
        text: "Pneumococcal"
      }, {
        value: "tdipv",
        text: "Td/IPV"
      }]
    },
    variants
  },
  'with "all" option (named group)': {
    context: {
      fieldset: {
        legend: {
          heading: "Which vaccines would you like to include?",
          size: "l"
        }
      },
      idPrefix: "all",
      name: "example",
      items: [{
        value: "all",
        text: "All 9 vaccines",
        behaviour: "inclusive",
        behaviourGroup: "vaccines-included"
      }, {
        divider: "or",
        behaviour: "inclusive"
      }, {
        value: "4in1",
        text: "4-in-1 pre-school booster",
        behaviourGroup: "vaccines-included"
      }, {
        value: "6in1",
        text: "6-in-1",
        behaviourGroup: "vaccines-included"
      }, {
        value: "hpv",
        text: "HPV",
        behaviourGroup: "vaccines-included"
      }, {
        value: "menb",
        text: "MenB",
        behaviourGroup: "vaccines-included"
      }, {
        value: "menacwy",
        text: "MenACWY",
        behaviourGroup: "vaccines-included"
      }, {
        value: "mmrv",
        text: "MMRV",
        behaviourGroup: "vaccines-included"
      }, {
        value: "rotavirus",
        text: "Rotavirus",
        behaviourGroup: "vaccines-included"
      }, {
        value: "pneumococcal",
        text: "Pneumococcal",
        behaviourGroup: "vaccines-included"
      }, {
        value: "tdipv",
        text: "Td/IPV",
        behaviourGroup: "vaccines-included"
      }]
    },
    options: {
      hidden: true
    }
  },
  'with "all" option (named group, unique)': {
    context: {
      fieldset: {
        legend: {
          heading: "Which vaccines would you like to include?",
          size: "l"
        }
      },
      idPrefix: "all",
      items: [{
        name: "vaccines-all",
        value: "all",
        text: "All 9 vaccines",
        behaviour: "inclusive",
        behaviourGroup: "vaccines-included"
      }, {
        divider: "or",
        behaviour: "inclusive"
      }, {
        name: "vaccines-4in1",
        value: "4in1",
        text: "4-in-1 pre-school booster",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-6in1",
        value: "6in1",
        text: "6-in-1",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-hpv",
        value: "hpv",
        text: "HPV",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-menb",
        value: "menb",
        text: "MenB",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-menacwy",
        value: "menacwy",
        text: "MenACWY",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-mmrv",
        value: "mmrv",
        text: "MMRV",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-rotavirus",
        value: "rotavirus",
        text: "Rotavirus",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-pneumococcal",
        value: "pneumococcal",
        text: "Pneumococcal",
        behaviourGroup: "vaccines-included"
      }, {
        name: "vaccines-tdipv",
        value: "tdipv",
        text: "Td/IPV",
        behaviourGroup: "vaccines-included"
      }]
    },
    options: {
      hidden: true
    }
  },
  'with "none" option': {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "none",
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
      }, {
        divider: "or"
      }, {
        value: "none",
        text: "I do not want to be contacted",
        behaviour: "exclusive"
      }]
    },
    variants
  },
  'with "none" option, deprecated': {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "none",
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
      }, {
        divider: "or"
      }, {
        value: "none",
        text: "I do not want to be contacted",
        exclusive: true
      }]
    }
  },
  'with "none" option, conditional content': {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "none",
      name: "example",
      items: getItems().concat([{
        divider: "or"
      }, {
        value: "none",
        text: "I do not want to be contacted",
        behaviour: "exclusive"
      }])
    },
    variants
  },
  'with "none" option (named group)': {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "none",
      name: "example",
      items: [{
        value: "email",
        text: "Email",
        exclusiveGroup: "communication-preferences"
      }, {
        value: "phone",
        text: "Phone",
        exclusiveGroup: "communication-preferences"
      }, {
        value: "text",
        text: "Text message",
        exclusiveGroup: "communication-preferences"
      }, {
        divider: "or"
      }, {
        value: "none",
        text: "I do not want to be contacted",
        behaviour: "exclusive",
        exclusiveGroup: "communication-preferences"
      }]
    },
    options: {
      hidden: true
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  'with "none" option (named group, unique)': {
    context: {
      fieldset: {
        legend: {
          heading: "How do you want to be contacted about this?",
          size: "l"
        }
      },
      idPrefix: "none",
      name: "example",
      items: [{
        name: "preference-email",
        value: "yes",
        text: "Email",
        exclusiveGroup: "communication-preferences"
      }, {
        name: "preference-phone",
        value: "yes",
        text: "Phone",
        exclusiveGroup: "communication-preferences"
      }, {
        name: "preference-text",
        value: "yes",
        text: "Text message",
        exclusiveGroup: "communication-preferences"
      }, {
        divider: "or"
      }, {
        name: "preference-none",
        value: "yes",
        text: "I do not want to be contacted",
        behaviour: "exclusive",
        exclusiveGroup: "communication-preferences"
      }]
    },
    options: {
      hidden: true
    }
  }
};

/**
 * Get example items by variant
 *
 * @param {{ invalid?: boolean }} [options]
 * @returns {object[]}
 */
function getItems(options = {}) {
  let input1 = examples$1["example email address"];
  let input2 = examples$1["example phone number"];
  let input3 = examples$1["example mobile phone number"];

  // Include error message example (optional)
  if (options.invalid) {
    input2 = examples$1["example phone number with error message"];
  }
  return [{
    value: "email",
    text: "Email",
    conditional: {
      html: components.render("input", input1)
    }
  }, {
    value: "phone",
    text: "Phone",
    conditional: {
      html: components.render("input", input2)
    }
  }, {
    value: "text",
    text: "Text message",
    conditional: {
      html: components.render("input", input3)
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

export { examples, variants };
//# sourceMappingURL=fixtures.mjs.map
