import { outdent } from "outdent"

import { components } from "#lib"

import { examples as inputExamples } from "../input/fixtures.mjs"

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
      html: getContent()
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with HTML and values": {
    context: {
      legend: {
        caption: "About you",
        heading: "What is your address?",
        size: "l"
      },
      html: getContent({
        values: ["10 South Colonnade", "Poplar", "London", "E14 4PU"]
      })
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
    callBlock: getContent()
  },
  "without legend heading": {
    context: {
      legend: "What is your address?"
    }
  }
}

/**
 * Get example content
 *
 * @param {object} [options]
 * @param {string[]} [options.values]
 */
function getContent(options = {}) {
  const { values = [] } = options

  const inputs = [
    structuredClone(inputExamples["example address line 1"]),
    structuredClone(inputExamples["example address line 2"]),
    structuredClone(inputExamples["example address town or city"]),
    structuredClone(inputExamples["example address postcode"])
  ]

  for (const input of inputs) {
    const index = inputs.indexOf(input)

    input.context ??= {}
    input.context.value = values[index]
  }

  return outdent`
    ${components.render("input", inputs[0])}
    ${components.render("input", inputs[1])}
    ${components.render("input", inputs[2])}
    ${components.render("input", inputs[3])}
  `
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
