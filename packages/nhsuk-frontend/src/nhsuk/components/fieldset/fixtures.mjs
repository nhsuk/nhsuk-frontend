import { outdent } from "outdent"

import { components } from "#lib"

import { examples as inputExamples } from "../input/fixtures.mjs"

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
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      }
    },
    screenshot: true
  },
  "with HTML": {
    context: {
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      },
      html: getContent()
    },
    variants: variants.map(customVariant()),
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with HTML via call block": {
    context: {
      legend: {
        text: "What is your address?",
        size: "l",
        isPageHeading: true
      }
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
  const input1 = structuredClone(inputExamples["example address line 1"])
  const input2 = structuredClone(inputExamples["example address line 2"])
  const input3 = structuredClone(inputExamples["example address town or city"])
  const input4 = structuredClone(inputExamples["example address postcode"])

  if (options.variant === "reverse") {
    input1.context ??= {}
    input1.context.variant = "reverse"

    input2.context ??= {}
    input2.context.variant = "reverse"

    input3.context ??= {}
    input3.context.variant = "reverse"

    input4.context ??= {}
    input4.context.variant = "reverse"
  }

  return outdent`
    ${components.render("input", input1)}
    ${components.render("input", input2)}
    ${components.render("input", input3)}
    ${components.render("input", input4)}
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
