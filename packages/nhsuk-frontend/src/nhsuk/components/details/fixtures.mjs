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
      summaryText: "How to find your NHS number"
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
    variants,
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "open": {
    context: {
      summaryText: "How to find your NHS number",
      open: true
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
  "expander": {
    context: {
      summaryText: "Opening times",
      classes: "nhsuk-expander"
    },
    callBlock: getCallBlock(),
    variants: variants.map(customVariant()),
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "expander open": {
    context: {
      summaryText: "Opening times",
      classes: "nhsuk-expander",
      open: true
    },
    callBlock: getCallBlock(),
    variants: variants.map(customVariant())
  }
}

/**
 * Get example call block by variant
 *
 * @param {{ variant?: unknown }} [options]
 */
function getCallBlock(options = {}) {
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
    example.callBlock = getCallBlock({ variant })

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
