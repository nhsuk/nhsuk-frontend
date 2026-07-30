import { outdent } from 'outdent';

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
const fixtures = {
  "default": {
    context: {
      text: "Find your nearest A&E",
      href: "#"
    },
    variants,
    screenshot: {
      states: ["focus", "hover", "active"],
      selector: ".nhsuk-action-link"
    }
  },
  "as a button": {
    context: {
      text: "Find your nearest A&E",
      element: "button"
    },
    variants,
    screenshot: {
      states: ["focus", "hover", "active"],
      selector: ".nhsuk-action-link"
    }
  },
  "with HTML": {
    context: {
      html: outdent`
        Start session<br>
        <span class="nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
      `
    }
  },
  "with HTML via call block": {
    callBlock: outdent`
      Start session<br>
      <span class="nhsuk-u-font-weight-normal nhsuk-u-font-size-19">(11 cases)</span>
    `
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

export { examples, variants };
//# sourceMappingURL=fixtures.mjs.map
