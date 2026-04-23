'use strict';

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  context: {
    text: 'Active'
  }
}, {
  description: 'white',
  context: {
    text: 'In progress',
    colour: 'white'
  }
}, {
  description: 'grey',
  context: {
    text: 'Inactive',
    colour: 'grey'
  }
}, {
  description: 'green',
  context: {
    text: 'New',
    colour: 'green'
  }
}, {
  description: 'aqua-green',
  context: {
    text: 'Active',
    colour: 'aqua-green'
  }
}, {
  description: 'blue',
  context: {
    text: 'Pending',
    colour: 'blue'
  }
}, {
  description: 'purple',
  context: {
    text: 'Received',
    colour: 'purple'
  }
}, {
  description: 'pink',
  context: {
    text: 'Sent',
    colour: 'pink'
  }
}, {
  description: 'red',
  context: {
    text: 'Rejected',
    colour: 'red'
  }
}, {
  description: 'orange',
  context: {
    text: 'Declined',
    colour: 'orange'
  }
}, {
  description: 'yellow',
  context: {
    text: 'Delayed',
    colour: 'yellow'
  }
}];

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    variants,
    screenshot: {
      viewports: ['mobile']
    }
  },
  'colour class': {
    context: {
      text: 'Green',
      classes: 'nhsuk-tag--green'
    }
  },
  'colour class overriding colour param': {
    context: {
      text: 'Not green',
      colour: 'green',
      classes: 'nhsuk-tag--red'
    }
  },
  'without border': {
    context: {
      border: false
    },
    variants,
    options: {
      layout: 'background-blue'
    },
    screenshot: {
      viewports: ['mobile']
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
exports.variants = variants;
//# sourceMappingURL=fixtures.js.map
