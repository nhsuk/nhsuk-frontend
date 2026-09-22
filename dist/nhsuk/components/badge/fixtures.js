'use strict';

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  // Regular variant
}, {
  description: "reverse",
  context: {
    variant: "reverse"
  },
  options: {
    layout: "background-blue"
  }
}];

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const examples = {
  "default": {
    context: {
      text: "2",
      visuallyHiddenText: "Count"
    },
    variants,
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "count": {
    context: {
      text: "2",
      visuallyHiddenText: "Count"
    },
    variants: [{
      description: "with zero",
      context: {
        text: "0"
      }
    }, {
      description: "with single digit",
      context: {
        text: "1"
      }
    }, {
      description: "with double digit",
      context: {
        text: "12"
      }
    }, {
      description: "with triple digit",
      context: {
        text: "123"
      }
    }],
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "with text": {
    context: {
      text: "New"
    },
    variants,
    screenshot: {
      viewports: ["mobile"]
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E"
    }
  },
  "with HTML via call block": {
    callBlock: "A&amp;E"
  }
};

/**
 * @import { MacroExample } from '#lib'
 */

exports.examples = examples;
exports.variants = variants;
//# sourceMappingURL=fixtures.js.map
