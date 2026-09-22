'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      heading: {
        text: "Important"
      },
      text: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with HTML": {
    context: {
      heading: {
        text: "Important"
      },
      html: '<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>'
    }
  },
  "with HTML via call block": {
    context: {
      heading: {
        text: "Important"
      }
    },
    callBlock: '<p class="nhsuk-card__description">Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>'
  },
  "with custom heading": {
    context: {
      heading: {
        text: "School, nursery or work"
      },
      text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with custom heading as string": {
    context: {
      heading: "School, nursery or work",
      text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
    }
  },
  "without heading": {
    context: {
      text: "Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
    },
    options: {
      hidden: true
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
