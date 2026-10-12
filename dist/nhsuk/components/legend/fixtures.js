'use strict';

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  description: "with size S",
  context: {
    size: "s"
  }
}, {
  description: "with size M",
  context: {
    size: "m"
  }
}, {
  description: "with size L",
  context: {
    size: "l"
  }
}, {
  description: "with size XL",
  context: {
    size: "xl"
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
      heading: "What is your address?",
      size: "l"
    },
    screenshot: true
  },
  "text": {
    context: {
      heading: "What is your address?",
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "text and caption": {
    context: {
      text: "What is your home address?",
      caption: "About you",
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  'text and caption "after" as a paragraph': {
    context: {
      text: "What is your home address?",
      caption: {
        text: "About you",
        placement: "after",
        element: "p"
      },
      size: "l"
    },
    variants,
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "size class": {
    context: {
      heading: "What is your address?",
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  "size class overriding size option": {
    context: {
      heading: "What is your address?",
      classes: "nhsuk-fieldset__legend--l",
      size: "s"
    }
  },
  "with HTML": {
    context: {
      html: "What is your address?",
      heading: true,
      size: "l"
    }
  },
  "with HTML via call block": {
    context: {
      heading: true,
      size: "l"
    },
    callBlock: "What is your address?"
  },
  "with HTML via call block, without heading": {
    context: {
      size: "l"
    },
    callBlock: "What is your address?"
  },
  "with heading level 1": {
    context: {
      text: "What is your address?",
      size: "l",
      heading: {
        level: 1
      }
    }
  },
  "with heading level 2": {
    context: {
      text: "What is your address?",
      size: "m",
      heading: {
        level: 2
      }
    }
  },
  "with heading level 3": {
    context: {
      text: "What is your address?",
      size: "s",
      heading: {
        level: 3
      }
    }
  },
  "with heading options only": {
    context: {
      heading: {
        text: "What is your address?",
        level: 3,
        size: "s"
      }
    }
  },
  "without heading": {
    context: {
      text: "What is your address?"
    }
  },
  "with deprecated page heading": {
    context: {
      text: "What is your address?",
      size: "m",
      isPageHeading: true
    }
  },
  "with deprecated page heading overriding heading": {
    context: {
      heading: {
        text: "What is your address?",
        level: 3,
        size: "s"
      },
      isPageHeading: false
    }
  },
  "with id attribute": {
    context: {
      id: "custom-id",
      heading: "What is your address?",
      size: "l"
    }
  },
  "with id attribute on heading": {
    context: {
      heading: {
        text: "What is your address?",
        id: "custom-id"
      },
      size: "l"
    }
  }
};

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
//# sourceMappingURL=fixtures.js.map
