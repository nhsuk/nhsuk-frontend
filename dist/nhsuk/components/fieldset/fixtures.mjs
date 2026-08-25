import { outdent } from 'outdent';
import { components } from '#lib';
import { examples as examples$1 } from '../input/fixtures.mjs';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      legend: {
        heading: "What is your address?",
        size: "l"
      }
    },
    screenshot: true
  },
  "with HTML": {
    context: {
      legend: {
        caption: "About you",
        heading: "What is your address?",
        size: "l"
      },
      html: outdent`
        ${components.render("input", examples$1["example address line 1"])}
        ${components.render("input", examples$1["example address line 2"])}
        ${components.render("input", examples$1["example address town or city"])}
        ${components.render("input", examples$1["example address postcode"])}
      `
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with HTML via call block": {
    context: {
      legend: {
        caption: "About you",
        heading: "What is your address?",
        size: "l"
      }
    },
    callBlock: outdent`
      ${components.render("input", examples$1["example address line 1"])}
      ${components.render("input", examples$1["example address line 2"])}
      ${components.render("input", examples$1["example address town or city"])}
      ${components.render("input", examples$1["example address postcode"])}
    `
  },
  "without legend heading": {
    context: {
      legend: "What is your address?"
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

export { examples };
//# sourceMappingURL=fixtures.mjs.map
