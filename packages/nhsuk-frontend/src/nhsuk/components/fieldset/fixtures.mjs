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
      html: outdent`
        ${components.render("input", inputExamples["example address line 1"])}
        ${components.render("input", inputExamples["example address line 2"])}
        ${components.render("input", inputExamples["example address town or city"])}
        ${components.render("input", inputExamples["example address postcode"])}
      `
    },
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
    callBlock: outdent`
      ${components.render("input", inputExamples["example address line 1"])}
      ${components.render("input", inputExamples["example address line 2"])}
      ${components.render("input", inputExamples["example address town or city"])}
      ${components.render("input", inputExamples["example address postcode"])}
    `
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
