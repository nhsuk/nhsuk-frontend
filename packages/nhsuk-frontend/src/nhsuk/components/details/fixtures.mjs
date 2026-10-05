import { outdent } from "outdent"

import { components } from "#lib"

import { examples as tablesExamples } from "../tables/fixtures.mjs"

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: "reverse",
    context: {
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you."
    },
    variants
  },
  "open": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: true
    }
  },
  "closed explicitly": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: false
    }
  },
  "with HTML": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      html: outdent`
        <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
        <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
      `
    },
    variants,
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "with HTML via call block": {
    context: {
      summary: {
        text: "How to find your NHS number"
      }
    },
    callBlock: outdent`
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
    `,
    variants
  },
  "with summary HTML": {
    context: {
      summary: {
        html: "How to find your <span>NHS number</span>"
      },
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    },
    variants
  },
  "with summary as string": {
    context: {
      summary: "How to find your NHS number",
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    }
  },
  "expander": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander"
    },
    variants
  },
  "expander open": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: true
    }
  },
  "expander closed explicitly": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: false
    }
  },
  "expander with HTML": {
    context: {
      summary: {
        text: "Opening times"
      },
      html: getContent(),
      classes: "nhsuk-expander"
    },
    variants: variants.map(customVariant()),
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "expander with HTML via call block": {
    context: {
      summary: {
        text: "Opening times"
      },
      classes: "nhsuk-expander"
    },
    callBlock: getContent(),
    variants: variants.map(customVariant())
  }
}

/**
 * Get example call block by variant
 *
 * @param {{ variant?: unknown }} [options]
 */
function getContent(options = {}) {
  const table = structuredClone(tablesExamples["with first cell as header"])

  if (options.variant === "reverse") {
    table.context ??= {}
    table.context.variant = "reverse"
  }

  return outdent`
    ${components.render("tables", table)}
  `
}

/**
 * Replace call block for each variant
 *
 * @returns {(variant: MacroExample) => MacroExample}
 */
function customVariant() {
  return (example) => {
    example = structuredClone(example)
    example.context ??= {}

    const { variant } = example.context
    example.callBlock = getContent({ variant })

    return example
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
